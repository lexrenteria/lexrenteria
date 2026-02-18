import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

/**
 * SchemaMarkup — Modular JSON-LD Schema Component
 * 
 * Use this component to inject your existing, verified JSON-LD schemas
 * into the page <head> without modifying any other code.
 *
 * USAGE:
 * ```tsx
 * <SchemaMarkup
 *   schemas={[
 *     { "@context": "https://schema.org", "@type": "Person", ... },
 *     { "@context": "https://schema.org", "@type": "Organization", ... },
 *   ]}
 * />
 * ```
 *
 * You can also pass raw JSON strings:
 * ```tsx
 * <SchemaMarkup rawJsonLd={['{"@context":"https://schema.org","@type":"Movie",...}']} />
 * ```
 */

interface SchemaMarkupProps {
  /** Array of schema objects — will be serialized to JSON-LD automatically */
  schemas?: Record<string, unknown>[];
  /** Array of raw JSON-LD strings — injected as-is (for pasting verified schemas) */
  rawJsonLd?: string[];
}

const SchemaMarkup = ({ schemas = [], rawJsonLd = [] }: SchemaMarkupProps) => {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={`schema-obj-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {rawJsonLd.map((json, i) => (
        <script
          key={`schema-raw-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: json }}
        />
      ))}
    </>
  );
};

export default SchemaMarkup;
