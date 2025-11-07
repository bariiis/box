interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  brand?: string;
  category?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
}

export default function ProductSchema({
  name,
  description,
  image,
  brand = "BOXX Technologies",
  category = "Computer Workstation",
  offers,
}: ProductSchemaProps) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    category,
    manufacturer: {
      "@type": "Organization",
      name: "BOXX Technologies",
      url: "https://boxx-turkiye.netlify.app",
    },
    ...(offers && {
      offers: {
        "@type": "Offer",
        priceCurrency: offers.priceCurrency || "USD",
        ...(offers.price && { price: offers.price }),
        availability: offers.availability || "https://schema.org/InStock",
        url: "https://boxx-turkiye.netlify.app/iletisim",
        seller: {
          "@type": "Organization",
          name: "BOXX Türkiye",
        },
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productSchema),
      }}
    />
  );
}
