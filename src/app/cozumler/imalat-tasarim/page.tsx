import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Factory, Cog, Box, Zap } from "lucide-react";

const recommendedProducts = [
  {
    name: "APEXX W4",
    description: "SOLIDWORKS, Ansys ve diğer CAE uygulamaları için sertifikalı",
    specs: "56 çekirdek, 1TB ECC bellek, 4x RTX PRO",
    link: "/urunler/apexx",
  },
  {
    name: "APEXX T4 PRO",
    description: "Büyük montaj dosyaları ve simülasyon için yüksek performans",
    specs: "64 çekirdek, 512GB bellek, 2x GPU",
    link: "/urunler/apexx",
  },
  {
    name: "APEXX A4",
    description: "Genel amaçlı CAD ve küçük-orta ölçekli tasarım",
    specs: "16 çekirdek, 128GB bellek, 1-2 GPU",
    link: "/urunler/apexx",
  },
];

const useCases = [
  {
    icon: Cog,
    title: "CAD Modelleme",
    description: "SOLIDWORKS, Inventor, Creo ile karmaşık mekanik tasarım ve montajlar",
  },
  {
    icon: Factory,
    title: "CAE Simülasyon",
    description: "Ansys, COMSOL, SIMULIA ile yapısal analiz ve akış simülasyonları",
  },
  {
    icon: Box,
    title: "Ürün Görselleştirme",
    description: "KeyShot, V-Ray ile fotorealistik rendering ve ürün sunumları",
  },
  {
    icon: Zap,
    title: "Üretim Optimizasyonu",
    description: "CAM yazılımları ve üretim planlaması için hesaplama gücü",
  },
];

const software = [
  "SOLIDWORKS",
  "Autodesk Inventor",
  "PTC Creo",
  "Siemens NX",
  "CATIA",
  "Fusion 360",
  "Ansys Workbench",
  "COMSOL Multiphysics",
  "Altair HyperWorks",
  "SIMULIA Abaqus",
  "Mastercam",
  "KeyShot",
];

export default function ImalatTasarimPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 py-20 text-white">
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur">
                <Factory className="h-8 w-8" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  İmalat ve Ürün Tasarımı
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                Mühendislik ve Üretim Profesyonelleri İçin
              </h1>
              <p className="mb-8 text-xl text-gray-200">
                CAD modelleme, CAE simülasyon, ürün geliştirme ve üretim optimizasyonu için ISV sertifikalı iş istasyonları
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="#products">Önerilen Ürünler</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
                  <Link href="/iletisim">Uzmanla Görüş</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Mühendislik İş Yükleri İçin Optimize Edilmiş
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  İmalat sektöründe ürün tasarımı, mühendislik analizi ve üretim planlaması karmaşık ve hesaplama yoğun işlemler gerektirir.
                  SOLIDWORKS, Ansys, Creo ve diğer önde gelen CAD/CAE yazılımları için sertifikalı BOXX iş istasyonları,
                  büyük montaj dosyaları ve detaylı simülasyonları sorunsuz çalıştırır.
                </p>
                <p>
                  ECC bellek desteği ile kritik tasarımlarda veri bütünlüğü garantisi, yüksek çekirdek sayılı işlemciler
                  ile paralel simülasyonlar ve NVIDIA RTX PRO GPU'lar ile gerçek zamanlı görselleştirme imkanı sunar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Kullanım Alanları
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                  >
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section id="products" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              İmalat için Önerilen BOXX Sistemleri
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {recommendedProducts.map((product, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="mb-4">
                    <div className="text-sm font-bold uppercase tracking-wider text-orange-600">
                      Önerilen
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-600">{product.description}</p>
                  <div className="mb-6 rounded bg-gray-50 p-4 text-sm text-gray-700">
                    {product.specs}
                  </div>
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                    <Link href={product.link}>Detayları İncele</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Software */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Desteklenen Yazılımlar
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {software.map((app, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-white p-4 text-center text-sm font-semibold text-gray-700 transition-all hover:border-orange-600 hover:bg-orange-50"
                  >
                    {app}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Mühendislik Projeniz İçin En Uygun Sistemi Bulalım
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              CAD/CAE iş akışlarınız için özel yapılandırma önerileri
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/iletisim">Ücretsiz Danışma</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
                <Link href="tel:08503032699">0850 303 26 99</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: "İmalat ve Ürün Tasarımı İş İstasyonları | BOXX Türkiye",
  description:
    "CAD modelleme, CAE simülasyon ve ürün geliştirme için BOXX iş istasyonları. SOLIDWORKS, Ansys, Creo ve tüm mühendislik yazılımları için ISV sertifikalı sistemler.",
  keywords: "CAD, CAE, SOLIDWORKS, Ansys, ürün tasarımı, mühendislik, simülasyon, iş istasyonu",
};
