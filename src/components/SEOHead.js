import Head from 'next/head';

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = '/og-image.jpg',
  noindex = false 
}) {
  const fullTitle = title ? `${title} | Flotila Praha` : 'Flotila Praha - Největší taxi flotila v Praze';
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`http://flotila-praha.eu${ogImage}`} />
      <meta property="og:url" content={canonical || 'http://flotila-praha.eu'} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:site_name" content="Flotila Praha" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`http://flotila-praha.eu${ogImage}`} />
      
      {/* Additional SEO tags */}
      <meta name="author" content="Flotila Praha" />
      <meta name="language" content="Czech" />
      <meta name="geo.region" content="CZ-PR" />
      <meta name="geo.placename" content="Praha" />
      <meta name="geo.position" content="50.0755;14.4378" />
      <meta name="ICBM" content="50.0755, 14.4378" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}