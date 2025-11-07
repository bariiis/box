import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Ruler, Layers, Package } from "lucide-react";

const recommendedProducts = [
  {
    name: "APEXX W4",
    description: "Intel Xeon ile ISV sertifikalı CAD ve BIM uygulamaları için",
    specs: "56 çekirdek, 1TB ECC bellek, 4x RTX PRO",
    link: "/urunler/apexx",
  },
  {
    name: "APEXX T4",
    description: "Büyük projeler ve rendering için yüksek çekirdek gücü",
    specs: "64 çekirdek, 256GB bellek, 2x GPU",
    link: "/urunler/apexx",
  },
  {
    name: "CREATIV Plus",
    description: "Mimari görselleştirme ve prezentasyon",
    specs: "24 çekirdek, 192GB bellek, RTX GPU",
    link: "/urunler/creativ",
  },
];

const useCases = [
  {
    icon: Building2,
    title: "BIM Modelleme",
    description: "Revit, ArchiCAD ve diğer BIM yazılımları ile büyük ölçekli projelerde sorunsuz çalışma",
  },
  {
    icon: Ruler,
    title: "CAD Tasarım",
    description: "AutoCAD, Civil 3D ve MicroStation ile 2D/3D teknik çizim ve tasarım",
  },
  {
    icon: Layers,
    title: "Yapısal Analiz",
    description: "SAP2000, ETABS, Tekla ve diğer analiz yazılımları için yüksek hesaplama gücü",
  },
  {
    icon: Package,
    title: "3D Görselleştirme",
    description: "Lumion, Enscape, V-Ray ile fotorealistik rendering ve animasyon",
  },
];

const software = [
  "Autodesk Revit",
  "AutoCAD",
  "Civil 3D",
  "ArchiCAD",
  "Rhino",
  "SketchUp Pro",
  "Lumion",
  "Enscape",
  "V-Ray",
  "3ds Max",
  "Tekla Structures",
  "Bentley MicroStation",
  "SAP2000",
  "ETABS",
  "SAFE",
  "Navisworks",
];

export default function MimarlikMuhendislikPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20 text-white">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://ext.same-assets.com/3886351630/1946562967.png"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur">
                <Building2 className="h-8 w-8" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Mimarlık, Mühendislik & İnşaat
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                AEC Profesyonelleri İçin İş İstasyonları
              </h1>
              <p className="mb-8 text-xl text-gray-200">
                BIM modelleme, CAD tasarım, yapısal analiz ve mimari görselleştirme için ISV sertifikalı yüksek performanslı sistemler
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="#products">Önerilen Ürünler</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
                  <Link href="/iletisim">AEC Uzmanıyla Görüş</Link>
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
                Sertifikalı Güvenilirlik, Optimize Performans
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Mimarlık, mühendislik ve inşaat (AEC) sektöründe çalışan profesyoneller, karmaşık BIM modelleri,
                  büyük CAD dosyaları ve detaylı rendering projeleri ile uğraşırlar. BOXX iş istasyonları,
                  Autodesk, Bentley, Graphisoft ve diğer önde gelen AEC yazılım üreticileri tarafından sertifikalıdır.
                </p>
                <p>
                  Intel Xeon ve AMD Threadripper PRO işlemciler ile ECC bellek desteği, kritik projelerde
                  maksimum güvenilirlik sağlar. NVIDIA RTX PRO GPU'lar ile gerçek zamanlı görselleştirme ve
                  hızlı rendering yapabilirsiniz.
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
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <Icon className="h-8 w-8 text-primary" />
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

        {/* ISV Certification */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                ISV Sertifikalı Sistemler
              </h2>
              <p className="mb-12 text-xl text-gray-600">
                BOXX iş istasyonları, önde gelen AEC yazılım üreticileri tarafından test edilmiş ve onaylanmıştır
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-lg border-2 border-primary/20 p-8">
                  <div className="mb-4 text-5xl">✓</div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Autodesk</h3>
                  <p className="text-gray-600">
                    Revit, AutoCAD, Civil 3D, 3ds Max için sertifikalı
                  </p>
                </div>
                <div className="rounded-lg border-2 border-primary/20 p-8">
                  <div className="mb-4 text-5xl">✓</div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Graphisoft</h3>
                  <p className="text-gray-600">
                    ArchiCAD için optimize edilmiş performans
                  </p>
                </div>
                <div className="rounded-lg border-2 border-primary/20 p-8">
                  <div className="mb-4 text-5xl">✓</div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Bentley</h3>
                  <p className="text-gray-600">
                    MicroStation, STAAD.Pro için test edilmiş
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section id="products" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              AEC için Önerilen BOXX Sistemleri
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {recommendedProducts.map((product, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="mb-4">
                    <div className="text-sm font-bold uppercase tracking-wider text-primary">
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
                  <Button asChild className="w-full">
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
              Desteklenen AEC Yazılımları
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {software.map((app, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center text-sm font-semibold text-gray-700 transition-all hover:border-primary hover:bg-primary/5"
                  >
                    {app}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why BOXX for AEC */}
        <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              AEC Profesyonelleri Neden BOXX Tercih Ediyor?
            </h2>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">ECC Bellek Desteği</h3>
                <p className="text-gray-600">
                  Error-Correcting Code (ECC) bellek ile kritik projelerde veri bütünlüğü ve sistem kararlılığı garanti altında
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">ISV Sertifikaları</h3>
                <p className="text-gray-600">
                  Autodesk, Bentley, Graphisoft gibi önde gelen yazılım üreticilerinin sertifikalı donanım partneri
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Büyük Proje Desteği</h3>
                <p className="text-gray-600">
                  Yüzlerce MB'lık BIM modelleri ve milyonlarca poligon içeren 3D sahneler için yeterli performans
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Rendering Gücü</h3>
                <p className="text-gray-600">
                  NVIDIA RTX PRO GPU'lar ile V-Ray, Lumion ve Enscape'te gerçek zamanlı ray tracing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              AEC Projeniz İçin En Uygun Sistemi Bulalım
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Mimarlık ve mühendislik iş akışlarınız için özel yapılandırma önerileri
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
  title: "Mimarlık, Mühendislik ve İnşaat (AEC) İş İstasyonları | BOXX Türkiye",
  description:
    "BIM, CAD, yapısal analiz ve mimari görselleştirme için ISV sertifikalı BOXX iş istasyonları. Revit, AutoCAD, ArchiCAD ve tüm AEC yazılımları için optimize edilmiş sistemler.",
  keywords: "BIM, CAD, mimarlık, mühendislik, inşaat, Revit, AutoCAD, ArchiCAD, Civil 3D, iş istasyonu",
};
