"use client";

export default function ClientLogos() {
  const logos = [
    { name: "AXIOM SPACE" },
    { name: "FOX SPORTS" },
    { name: "SINGULAR GENOMICS" },
    { name: "KTGY" },
    { name: "NIKE" },
    { name: "LUX MACHINA" },
  ];

  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex h-20 items-center justify-center text-center opacity-70 transition-opacity hover:opacity-100"
            >
              <span className="text-sm font-bold text-white lg:text-base">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
