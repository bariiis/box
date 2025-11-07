"use client";

import Script from "next/script";

export default function Analytics() {
  // Plausible Analytics (Privacy-friendly)
  return (
    <>
      <Script
        defer
        data-domain="boxx-turkiye.netlify.app"
        src="https://plausible.io/js/script.js"
      />

      {/* Google Analytics 4 - Uncomment to enable */}
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script> */}
    </>
  );
}
