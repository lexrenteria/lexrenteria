import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";
import portrait from "@/assets/portrait-lex.png";
import FadeImage from "@/components/FadeImage";

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

const AboutSection = () => {
  const { lang, t } = useI18n();

  return (
    <section id="about" className="relative py-28 px-6" aria-label={t.about.title[lang]}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-sm border border-border">
            <img
              src={portrait}
              alt="Lex Rentería portrait"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-10 text-center italic">
            {t.about.title[lang]}
          </h2>
          <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
            <p>{t.about.bio1[lang]}</p>
            <p>{renderBioWithLinks(t.about.bio2[lang])}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
