"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "En Büyük Atılımlarınızı Güçlendirin",
    subtitle: "PRO-X ile Çift NVIDIA RTX PRO™ 6000 Blackwell veya Dörtlü 6000 Max-Q GPU'lar Sunuyoruz",
    description:
      "AMD Ryzen™ Threadripper™ PRO tarafından desteklenen ve 2050W güç sistemi ile ölçeklendirilebilen PRO-X, AI, render ve simülasyon iş yüklerini ödün vermeden işler.",
    image: "https://ext.same-assets.com/3886351630/2956239980.jpeg",
    cta: "T4 PRO-X'i Keşfet",
    link: "/urunler/apexx",
  },
  {
    title: "Creator PC'ler: Yaratıcı Potansiyelinizi Ortaya Çıkarın",
    subtitle: "8K düzenleme, gerçek zamanlı görselleştirme ve 3D modelleme için tasarlandı",
    description:
      "BOXX'ın yeni Creator PC'leri ile 8K düzenleme, gerçek zamanlı görselleştirme, 3D modelleme ve tüm Adobe uygulamalarınızı hızlandırın.",
    image: "https://ext.same-assets.com/3886351630/3472904763.jpeg",
    cta: "Daha Fazla Bilgi",
    link: "/urunler/creativ",
  },
  {
    title: "NVIDIA™ 6000 Max-Q Blackwell GPU'lar Şimdi Sevk Ediliyor!",
    subtitle: "Profesyonel iş yüklerinizi devrim niteliğinde AI ile güçlendirin",
    description:
      "BOXX iş istasyonlarında devrim niteliğinde AI, ray tracing ve neural rendering teknolojisi ile maksimum performans.",
    image: "https://ext.same-assets.com/3886351630/3472904763.jpeg",
    cta: "Daha Fazla Bilgi",
    link: "/urunler/apexx",
  },
    {
    title: "Blackwell GPU'lar Şimdi Sevk Ediliyor!",
    subtitle: "Profesyonel iş yüklerinizi devrim niteliğinde AI ile güçlendirin",
    description:
      "BOXX iş istasyonlarında devrim niteliğinde AI, ray tracing ve neural rendering teknolojisi ile yaratıcı, tasarım, mühendislik ve mimarlık iş akışlarınızı güçlendirin.",
    image: "https://ext.same-assets.com/3886351630/2956239980.jpeg",
    cta: "Daha Fazla Bilgi",
    link: "/urunler/apexx",
  },
    {
    title: "Şimdi Sevk Ediliyor!",
    subtitle: "Profesyonel iş yüklerinizi devrim niteliğinde AI ile güçlendirin",
    description:
      "BOXX iş istasyonlarında devrim niteliğinde AI, ray tracing ve neural rendering teknolojisi ile yaratıcı, tasarım, mühendislik ve mimarlık iş akışlarınızı güçlendirin.",
    image: "https://ext.same-assets.com/3886351630/2956239980.jpeg",
    cta: "Daha Fazla Bilgi",
    link: "/urunler/apexx",
  },
    {
    title: "RTX PRO™ 6000 ve 6000 Max-Q!",
    subtitle: "Profesyonel iş yüklerinizi devrim niteliğinde AI ile güçlendirin",
    description:
      "BOXX iş istasyonlarında devrim niteliğinde AI, ray tracing ve neural rendering teknolojisi ile yaratıcı, tasarım, mühendislik ve mimarlık iş akışlarınızı güçlendirin.",
    image: "https://ext.same-assets.com/3886351630/2956239980.jpeg",
    cta: "Daha Fazla Bilgi",
    link: "/urunler/apexx",
  },
    {
    title: "NVIDIA 6000 ve 6000 Max-Q Blackwell",
    subtitle: "Profesyonel iş yüklerinizi devrim niteliğinde AI ile güçlendirin",
    description:
      "BOXX iş istasyonlarında devrim niteliğinde AI, ray tracing ve neural rendering teknolojisi ile yaratıcı, tasarım, mühendislik ve mimarlık iş akışlarınızı güçlendirin.",
    image: "https://ext.same-assets.com/3886351630/2956239980.jpeg",
    cta: "Daha Fazla Bilgi",
    link: "/urunler/apexx",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-black lg:h-[700px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl space-y-6 text-white">
                <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="text-lg font-semibold text-primary lg:text-xl">
                  {slide.subtitle}
                </p>
                <p className="text-base text-gray-300 lg:text-lg">
                  {slide.description}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-4 bg-primary text-white hover:bg-primary/90"
                >
                  <Link href={slide.link}>{slide.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/80"
        aria-label="Önceki slayt"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/80"
        aria-label="Sonraki slayt"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`${index + 1}. slayta git`}
          />
        ))}
      </div>
    </section>
  );
}
