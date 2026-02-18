import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

/**
 * SEOHead — Meta tags component for the portfolio.
 * Handles title, description, Open Graph, and Twitter cards.
 */
const SEOHead = ({
  title = "Lex Rentería — Filmmaker",
  description = "Filmmaker Queer. Explorando identidad y memoria. Director, guionista y fundador de Kauyi Media Group en Guadalajara.",
  url = "https://lexrenteria.com",
  image = "https://lexrenteria.com/og-image.jpg",
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOHead;
