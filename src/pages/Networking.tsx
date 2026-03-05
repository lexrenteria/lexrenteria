import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";

/* Gather every candidate image from projects (stills + gallery) */
const allProjectImages: string[] = [];
projects.forEach((p) => {
  allProjectImages.push(p.still);
  if (p.gallery) allProjectImages.push(...p.gallery);
});

/* Shuffle an array (Fisher-Yates) */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Fallback stills */
const fallbackStills = shuffle(projects.map((p) => p.still));

/** Return a small version of the URL for fast dimension probing */
function getProbeUrl(url: string): string {
  if (url.includes("image.tmdb.org")) return url.replace("/original/", "/w300/");
  return url;
}

const INTERVAL = 6000;

const VCARD = `BEGIN:VCARD
VERSION:3.0
N:Rentería;Lex;;;
FN:Lex Rentería
TITLE:Cineasta
TEL;TYPE=CELL:+523316725534
EMAIL:avrenteria@gmail.com
URL:https://lexrenteria.com
URL:https://instagram.com/lexrenteria
END:VCARD`;

const Networking = () => {
  const [idx, setIdx] = useState(0);
  const [images, setImages] = useState<string[]>(fallbackStills);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => { meta.remove(); };
  }, []);

  /* Detect horizontal images from all project images */
  useEffect(() => {
    let cancelled = false;
    const detect = async () => {
      const results = await Promise.allSettled(
        allProjectImages.map(
          (src) =>
            new Promise<string>((resolve, reject) => {
              const img = new Image();
              img.onload = () =>
                img.naturalWidth > img.naturalHeight ? resolve(src) : reject();
              img.onerror = () => reject();
              img.src = getProbeUrl(src);
            }),
        ),
      );
      if (cancelled) return;
      const horizontal = results
        .filter(
          (r): r is PromiseFulfilledResult<string> => r.status === "fulfilled",
        )
        .map((r) => r.value);
      if (horizontal.length > 0) {
        setIdx(0);
        setImages(shuffle(horizontal));
      }
    };
    detect();
    return () => { cancelled = true; };
  }, []);

  /* Auto-rotate through images */
  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(
      () => setIdx((prev) => (prev + 1) % images.length),
      INTERVAL,
    );
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
      {/* Rotating background stills — top third only */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-x-0 top-0 h-1/3 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images[idx]})` }}
        />
      </AnimatePresence>

      {/* Overlays — top third */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-background/30" />
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background/40 via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="font-heading text-2xl sm:text-3xl font-bold italic text-foreground mb-2">
          Lex Rentería
        </h1>
        <p className="font-body text-sm text-muted-foreground tracking-widest uppercase mb-10">
          Cineasta
        </p>

        <div className="bg-white p-5 rounded-lg shadow-lg">
          <QRCodeSVG
            value={VCARD}
            size={260}
            level="M"
            bgColor="#ffffff"
            fgColor="#000000"
          />
        </div>

        <p className="font-body text-xs text-muted-foreground mt-8 text-center max-w-xs">
          Escanea para guardar el contacto
        </p>
      </div>
    </div>
  );
};

export default Networking;
