import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const BASE_URL = "https://lexrenteria.com";

/**
 * SEOHead — Meta tags component for the portfolio.
 * Handles title, description, Open Graph, Twitter cards, and canonical URL.
 */
const SEOHead = ({
  title = "Lex Rentería — Filmmaker",
  description = "Filmmaker Queer. Explorando identidad y memoria. Director y guionista en Guadalajara.",
  url,
  image = "https://image.tmdb.org/t/p/original/qQ1Ds95SE3aeeywPNznETDwTfhR.jpg",
}: SEOHeadProps) => {
  const location = useLocation();
  const canonicalUrl = url || `${BASE_URL}${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
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
