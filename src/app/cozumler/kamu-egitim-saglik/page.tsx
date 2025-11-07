import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Building, Users } from "lucide-react";

const recommendedProducts = [
  {
    name: "APEXX W4",
    description: "Akademik araştırma ve bilimsel hesaplama için güvenilir sistem",
    specs: "56 çekirdek, 1TB ECC bellek, 4x RTX PRO",
    link: "/urunler/apexx",
  },
  {
    name: "APEXX T4 PRO",
    description: "Tıbbi görüntüleme ve veri analizi için yüksek performans",
    specs: "64 çekirdek, 512GB bellek, 2x GPU",
    link: "/urunler/apexx",
  },
  {
    name: "HELIXX 2U4G",
    description: "Araştırma laboratuvarları için merkezi hesaplama sunucusu",
    specs: "128 çekirdek, 1TB bellek, 4x RTX PRO",
    link: "/urunler/helixx",
  },
];

const useCases = [
  {
    icon: GraduationCap,
    title: "Akademik Araştırma",
    description: "Bilimsel simülasyon, veri analizi ve makine öğrenmesi araştırmaları",
  },
  {
    icon: Heart,
    title: "Tıbbi Görüntüleme",
    description: "CT, MRI, PET tarama analizi ve 3D medikal görselleştirme",
  },
  {
    icon: Building,
    title: "Kamu Projeleri",
    description: "Şehir planlaması, GIS analizi ve altyapı tasarımı",
  },
  {
    icon: Users,
    title: "Eğitim Labları",
    description: "Mühendislik, mimarlık ve tasarım eğitimi için bilgisayar labları",
  },
];

const software = [
  "MATLAB",
  "Mathematica",
  "RStudio",
  "SPSS",
  "SAS",
  "3D Slicer",
  "OsiriX",
  "Amira",
  "ImageJ",
  "ANSYS",
  "COMSOL",
  "ArcGIS",
  "QGIS",
  "AutoCAD",
  "Python",
  "TensorFlow",
];

export default function KamuEgitimSaglikPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-teal-900 to-green-900 py-20 text-white">
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur">
                <GraduationCap className="h-8 w-8" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Kamu, Eğitim ve Sağlık
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                Toplum İçin Teknoloji Çözümleri
              </h1>
              <p className="mb-8 text-xl text-gray-200">
                Araştırma, eğitim, tıbbi görüntüleme ve kamu projeleri için güvenilir, yüksek performanslı iş istasyonları
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="#products">Önerilen Ürünler</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
                  <Link href="/iletisim">Kurumsal Satış</Link>
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
                Güvenilir Teknoloji, Toplumsal Fayda
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Kamu kurumları, eğitim kurumları ve sağlık kuruluşları, kritik veriler ve önemli araştırmalar için
                  maksimum güvenilirlik ve performans gerektiren sistemlere ihtiyaç duyar. BOXX iş istasyonları,
                  akademik araştırma, tıbbi görüntüleme, bilimsel simülasyon ve GIS analizi için optimize edilmiştir.
                </p>
                <p>
                  ECC bellek ile veri bütünlüğü, ISV sertifikaları ile yazılım uyumluluğu,
                  uzun ömürlü tasarım ve kurumsal destek seçenekleri ile kritik uygulamalar için ideal çözüm.
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
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <Icon className="h-8 w-8 text-green-600" />
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

        {/* Benefits for Institutions */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Kurumlar İçin Avantajlar
            </h2>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-gradient-to-br from-green-50 to-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Uzun Ömürlü Tasarım</h3>
                <p className="text-gray-600">
                  5 yıla kadar garanti seçenekleri ve uzun vadeli komponent desteği ile yatırımınızı koruyun
                </p>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-green-50 to-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Toplu Satış İndirimleri</h3>
                <p className="text-gray-600">
                  Laboratuvar ve sınıf kurulumları için özel toplu satış fiyatları ve ödeme seçenekleri
                </p>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-green-50 to-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Kurumsal Destek</h3>
                <p className="text-gray-600">
                  Öncelikli teknik destek, yerinde servis ve IT yönetim araçları
                </p>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-green-50 to-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Akademik İndirimler</h3>
                <p className="text-gray-600">
                  Üniversiteler ve araştırma kurumları için özel eğitim fiyatlandırması
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section id="products" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Kurumlar için Önerilen BOXX Sistemleri
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {recommendedProducts.map((product, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="mb-4">
                    <div className="text-sm font-bold uppercase tracking-wider text-green-600">
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
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href={product.link}>Detayları İncele</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Software */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Desteklenen Yazılımlar
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {software.map((app, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center text-sm font-semibold text-gray-700 transition-all hover:border-green-600 hover:bg-green-50"
                  >
                    {app}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-green-900 via-teal-900 to-green-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Kurumunuz İçin En Uygun Çözümü Bulalım
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Toplu satış, akademik indirimler ve özel ödeme seçenekleri için iletişime geçin
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/iletisim">Kurumsal Teklif Al</Link>
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
  title: "Kamu, Eğitim ve Sağlık İş İstasyonları | BOXX Türkiye",
  description:
    "Akademik araştırma, tıbbi görüntüleme ve kamu projeleri için BOXX iş istasyonları. Güvenilir, yüksek performanslı sistemler ve kurumsal destek seçenekleri.",
  keywords: "akademik, araştırma, tıbbi görüntüleme, eğitim, kamu, üniversite, hastane, iş istasyonu",
};
