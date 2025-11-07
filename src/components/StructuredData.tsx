export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BOXX Türkiye",
    url: "https://boxx-turkiye.netlify.app",
    logo: "https://boxx-turkiye.netlify.app/logos/BOXX_Logo_BLUE.svg",
    description: "Yüksek performanslı iş istasyonları ve creator PC'leri",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Prof. Dr. Ahmet Taner Kışlalı Mahallesi 2/7/5. Sokak 9/C",
        addressLocality: "Çankaya",
        addressRegion: "ANKARA",
        addressCountry: "TR",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Çubuklu Mahallesi Engürübağı Caddesi No: 29/2 Beykoz",
        addressLocality: "Beykoz",
        addressRegion: "İSTANBUL",
        addressCountry: "TR",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-850-303-26-99",
      contactType: "Müşteri Hizmetleri",
      availableLanguage: ["tr", "en"],
    },
    sameAs: [
      "https://facebook.com/boxxturkiye",
      "https://twitter.com/boxxturkiye",
      "https://instagram.com/boxxturkiye",
      "https://linkedin.com/company/boxxturkiye",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BOXX Türkiye",
    url: "https://boxx-turkiye.netlify.app",
    description: "BOXX Türkiye - Yüksek Performanslı İş İstasyonları",
    publisher: {
      "@type": "Organization",
      name: "BOXX Türkiye",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://boxx-turkiye.netlify.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
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
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
