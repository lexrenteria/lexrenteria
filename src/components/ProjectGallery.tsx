import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import FadeImage from "@/components/FadeImage";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  const { lang } = useI18n();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  };

  return (
    <div className="mb-12">
      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
        {lang === "es" ? "Galería Visual" : "Visual Gallery"}
      </h2>

      {/* Masonry-style responsive grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => openLightbox(i)}
          >
            <div className="overflow-hidden rounded-sm border border-border">
              <img
                src={src}
                alt={`${title} - ${i + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-label="Image lightbox"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={images[lightboxIndex]}
              alt={`${title} - ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-body">
              {lightboxIndex + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery;
