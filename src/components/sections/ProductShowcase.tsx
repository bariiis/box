"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    title: "Creator PC'ler: Yaratıcı Potansiyelinizi Ortaya Çıkarın",
    description: "8K düzenleme, gerçek zamanlı görselleştirme, 3D modelleme için tasarlandı.",
    image: "https://ugc.same-assets.com/ymFmSK0PyZkSMDt30JgHCw16P2mmQywA.png", // Görsel yükleyin
    cta: "Keşfet",
    link: "/urunler/creativ",
    badge: "NVIDIA CREATIV",
  },
  {
    title: "NVIDIA RTX PRO™ Blackwell GPU'lar",
    description: "Devrim niteliğinde AI, ray tracing ve neural rendering teknolojisi.",
    image: "https://ugc.same-assets.com/YdKey7zdg7VpJdfy7Jp1VknkbXks8ugP.jpeg", // Görsel yükleyin
    cta: "İncele",
    link: "/urunler/apexx",
    badge: "NVIDIA RTX",
  },
  {
    title: "APEXX İş İstasyonları",
    description: "Profesyonel CAD, 3D modelleme ve rendering için ultimate performans.",
    image: "https://ext.same-assets.com/3886351630/3519237665.png",
    cta: "Detaylar",
    link: "/urunler/apexx",
    badge: "APEXX",
  },
  {
    title: "RAXX Rackmount Sistemler",
    description: "Veri merkezi için yüksek yoğunluklu iş istasyonu çözümleri.",
    image: "https://ext.same-assets.com/3886351630/192729848.png",
    cta: "Keşfet",
    link: "/urunler/rackmount",
    badge: "RAXX",
  },
  {
    title: "HELIXX GPU Sunucular",
    description: "8'e kadar NVIDIA RTX PRO GPU ile AI eğitimi ve rendering gücü.",
    image: "https://ext.same-assets.com/3886351630/3944618175.png",
    cta: "İncele",
    link: "/urunler/helixx",
    badge: "HELIXX",
  },
  {
    title: "FLEXX Veri Merkezi",
    description: "Kompakt form faktöründe tam iş istasyonu performansı.",
    image: "https://ext.same-assets.com/3886351630/192729848.png",
    cta: "Detaylar",
    link: "/urunler/flexx",
    badge: "FLEXX",
  },
  {
    title: "AMD Threadripper PRO Sistemler",
    description: "96 çekirdeğe kadar performans ile multi-threaded iş yükleri için.",
    image: "https://ext.same-assets.com/3886351630/3519237665.png",
    cta: "Keşfet",
    link: "/urunler/apexx",
    badge: "AMD",
  },
  {
    title: "Intel Xeon Workstations",
    description: "Enterprise güvenilirlik ve ISV sertifikaları ile profesyonel çözümler.",
    image: "https://ext.same-assets.com/3886351630/192729848.png",
    cta: "İncele",
    link: "/urunler/apexx",
    badge: "INTEL",
  },
];

// Ürünleri 2'şerli gruplara ayır (her slide'da 2 ürün)
const groupedProducts: typeof products[] = [];
for (let i = 0; i < products.length; i += 2) {
  groupedProducts.push(products.slice(i, i + 2));
}

export default function ProductShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % groupedProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + groupedProducts.length) % groupedProducts.length);
  };

  return (
    <section className="relative bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg bg-white shadow-xl">
          {/* Slides */}
          <div className="relative min-h-[400px]">
            {groupedProducts.map((productPair, slideIndex) => (
              <div
                key={slideIndex}
                className={`transition-opacity duration-500 ${
                  slideIndex === currentSlide ? "opacity-100" : "absolute inset-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="grid gap-6 p-8 md:grid-cols-2 lg:p-12">
                  {/* Product 1 */}
                  {productPair[0] && (
                    <div className="group flex flex-col">
                      <div className="relative mb-4 h-48 overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200">
                        <Image
                          src={productPair[0].image}
                          alt={productPair[0].title}
                          fill
                          className="p-4 transition-transform group-hover:scale-105 object-cover"
                        />
                        {productPair[0].badge && (
                          <div className="absolute top-4 right-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                            {productPair[0].badge}
                          </div>
                        )}
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900 line-clamp-2">
                        {productPair[0].title}
                      </h3>
                      <p className="mb-4 flex-grow text-sm text-gray-600 line-clamp-2">
                        {productPair[0].description}
                      </p>
                      <Button asChild size="sm" variant="outline" className="w-full">
                        <Link href={productPair[0].link}>{productPair[0].cta}</Link>
                      </Button>
                    </div>
                  )}

                  {/* Product 2 */}
                  {productPair[1] && (
                    <div className="group flex flex-col">
                      <div className="relative mb-4 h-48 overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200">
                        <Image
                          src={productPair[1].image}
                          alt={productPair[1].title}
                          fill
                          className="p-4 transition-transform group-hover:scale-105 object-cover"
                        />
                        {productPair[1].badge && (
                          <div className="absolute top-4 right-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                            {productPair[1].badge}
                          </div>
                        )}
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900 line-clamp-2">
                        {productPair[1].title}
                      </h3>
                      <p className="mb-4 flex-grow text-sm text-gray-600 line-clamp-2">
                        {productPair[1].description}
                      </p>
                      <Button asChild size="sm" variant="outline" className="w-full">
                        <Link href={productPair[1].link}>{productPair[1].cta}</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {groupedProducts.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/80 hover:scale-110"
                aria-label="Önceki"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/80 hover:scale-110"
                aria-label="Sonraki"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
                {groupedProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-8 bg-primary"
                        : "w-2 bg-gray-400 hover:bg-gray-600"
                    }`}
                    aria-label={`${index + 1}. sayfaya git`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
