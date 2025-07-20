export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flotila Praha",
    "url": "http://flotila-praha.eu",
    "logo": "http://flotila-praha.eu/logo.png",
    "description": "Největší taxi flotila v Praze. Spolupracujeme s Bolt a Uber. Moderní vozidla, flexibilní pracovní doba.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Praha",
      "addressCountry": "CZ"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "flotila.praha1@gmail.com",
      "contactType": "customer service",
      "availableLanguage": ["Czech", "Slovak", "English"]
    },
    "sameAs": [
      "http://flotila-praha.eu"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flotila Praha",
    "image": "http://flotila-praha.eu/logo.png",
    "description": "Profesionální taxi služby v Praze. Připojte se k naší flotile a začněte vydělávat jako řidič.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Praha",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.0755,
      "longitude": 14.4378
    },
    "url": "http://flotila-praha.eu",
    "telephone": "+420774982052",
    "email": "flotila.praha1@gmail.com",
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "City",
      "name": "Praha"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Taxi služby Praha",
    "description": "Profesionální taxi služby v Praze prostřednictvím aplikací Bolt a Uber",
    "provider": {
      "@type": "Organization",
      "name": "Flotila Praha"
    },
    "areaServed": {
      "@type": "City",
      "name": "Praha"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Taxi služby",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bolt taxi služby"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Uber taxi služby"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}