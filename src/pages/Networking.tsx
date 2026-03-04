import { useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

const VCARD = `BEGIN:VCARD
VERSION:3.0
N:Rentería;Lex;;;
FN:Lex Rentería
TITLE:Cineasta
TEL;TYPE=CELL:+523316725534
EMAIL:avrenteria@gmail.com
URL:https://lexrenteria.com
NOTE:Instagram: @lexrenteria
END:VCARD`;

const Networking = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      meta.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-16">
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
  );
};

export default Networking;
