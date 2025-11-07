"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SoftwarePartners() {
  const partners = [
    { name: "3ds Max" },
    { name: "Adobe Creative Cloud" },
    { name: "Ansys" },
    { name: "ArchiCAD" },
    { name: "Cinema 4D" },
    { name: "DaVinci Resolve" },
    { name: "Maya" },
    { name: "Revit" },
    { name: "SolidWorks" },
  ];

  return (
    <section className="bg-[#2D4263] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Yazılımınız İçin Özel Çözümler
            </h2>
            <p className="mb-6 text-lg text-gray-300">
              BOXX'ta sadece donanımımızı bilmiyoruz, yazılımınızı da biliyoruz. 400'den fazla uygulamaya destek ile, eğer sizinki burada listelenmemişse, bir danışma talep edin veya özel yapılandırma için bir performans uzmanını 0850 303 26 99 numaralı telefondan arayın.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/iletisim">Danışma Talebi</Link>
            </Button>
          </div>

          {/* Right - Software Logos Grid */}
          <div className="grid grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg bg-white/10 p-6 backdrop-blur transition-all hover:bg-white/20 hover:scale-105"
              >
                <span className="text-center text-sm font-semibold text-white">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
