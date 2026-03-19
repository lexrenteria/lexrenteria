import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import portrait from "@/assets/portrait-lex.png";
import { Link } from "react-router-dom";
import FadeImage from "@/components/FadeImage";
import { usePreloadImage } from "@/hooks/use-preload-image";

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

/* Known-horizontal stills used as initial fallback (randomized) */
const stills = shuffle(projects.map((p) => p.still));

/** Return a small version of the URL for fast dimension probing */
function getProbeUrl(url: string): string {
  if (url.includes("image.tmdb.org")) return url.replace("/original/", "/w300/");
  return url;
}

const INTERVAL = 6000;

/** Replace {agaves}, {purpura}, {videoclub} tokens with <Link> elements */
const renderBioWithLinks = (text: string) => {
  const tokens: Record<string, { title: string; slug: string }> = {
    "{agaves}": { title: "Agaves al Alba", slug: "agaves-al-alba" },
    "{purpura}": { title: "Púrpura Neón", slug: "purpura-neon" },
    "{videoclub}": { title: "El último videoclub", slug: "el-ultimo-videoclub" },
  };

  const regex = /\{agaves\}|\{purpura\}|\{videoclub\}/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const token = tokens[match[0]];
    parts.push(
      <Link
        key={match.index}
        to={`/projects/${token.slug}`}
        className="text-primary hover:underline italic"
      >
        {token.title}
      </Link>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
};

const HeroSection = () => {
  const { lang, t } = useI18n();
  const [idx, setIdx] = useState(0);
  const [images, setImages] = useState<string[]>(stills);

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
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-20 pb-16"
      aria-label="Hero"
    >
      {/* Rotating background stills */}
      <AnimatePresence mode="popLayout">
        <HeroBg key={idx} src={images[idx]} />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-center">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2 flex justify-center"
        >
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_hsl(var(--primary)/0.15)]">
            <FadeImage
              src={portrait}
              alt="Lex Rentería"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div className="md:col-span-3 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground italic"
          >
            Lex Rentería
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 relative max-w-lg mx-auto md:mx-0"
          >
            <div className="absolute -inset-4 backdrop-blur-sm rounded-2xl [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
            <p className="relative text-lg sm:text-xl font-body text-white leading-relaxed">
              {t.about.bio1[lang]}
            </p>
          </motion.div>



          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="inline-block border border-primary/40 bg-primary/10 px-8 py-3 text-sm font-body tracking-widest uppercase text-primary hover:bg-primary/20 transition-all duration-300 rounded-sm"
            >
              {t.hero.cta[lang]}
            </a>
            <a
              href="#contact"
              className="inline-block border border-border px-8 py-3 text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300 rounded-sm"
            >
              {t.nav.contact[lang]}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-[1px] bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

/** Background still that preloads before fading in */
const HeroBg = ({ src }: { src: string }) => {
  const ready = usePreloadImage(src);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: ready ? 0.7 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${src})` }}
    />
  );
};

export default HeroSection;
