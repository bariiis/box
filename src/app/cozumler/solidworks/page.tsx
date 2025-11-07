import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Cpu, Zap, HardDrive } from "lucide-react";

export default function SOLIDWORKSPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMGFjZTIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoMTR2MTRIMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex items-center justify-center">
                <Image
                  src="https://ext.same-assets.com/3886351630/1645285354.png"
                  alt="SOLIDWORKS"
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                SOLIDWORKS için Profesyonel İş İstasyonları
              </h1>
              <p className="mb-8 text-xl text-gray-200">
                Part modeling, karmaşık assembly çalışması ve photorealistic rendering için BOXX iş istasyonları ile mükemmel performans
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="#products">Önerilen Sistemler</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
                  <Link href="/iletisim">Uzmanla Görüş</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
                SOLIDWORKS Performans Sorunlarını Aşın
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  SOLIDWORKS, mekanik tasarım ve ürün geliştirmede endüstri lideri olsa da, büyük assembly'ler, karmaşık yüzeyler ve detaylı rendering işlemleri ciddi donanım gereksinimleri getirir. Yavaş model yenileme, donma sorunları ve uzun rendering süreleri verimliliğinizi olumsuz etkiler.
                </p>
                <p>
                  BOXX iş istasyonları, SOLIDWORKS sertifikalı ve optimize edilmiş sistemlerdir. Yüksek clock hızlı işlemciler part modeling'i hızlandırırken, güçlü GPU'lar RealView grafikleri ve rendering performansını artırır. Bol RAM ve hızlı SSD'ler büyük assembly açılış sürelerini minimize eder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              BOXX ile SOLIDWORKS Avantajları
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Optimized Clock Speed
                </h3>
                <p className="text-gray-600">
                  SOLIDWORKS single-thread performanstan faydalanır. BOXX overclocked işlemciler, sketch, feature oluşturma ve model rebuild sürelerini minimize eder.
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Sertifikalı Professional GPU
                </h3>
                <p className="text-gray-600">
                  NVIDIA RTX Professional GPU'lar SOLIDWORKS sertifikalıdır. RealView grafikleri, büyük assembly performansı ve SOLIDWORKS Visualize rendering'i hızlandırır.
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <HardDrive className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Yüksek Kapasiteli RAM
                </h3>
                <p className="text-gray-600">
                  Büyük assembly'ler için 64GB+ RAM kritiktir. BOXX sistemler, binlerce parça içeren assembly'leri sorunsuzca yükler ve çalıştırır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section id="products" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              SOLIDWORKS için Önerilen BOXX Sistemleri
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="rounded-lg border-2 border-gray-200 bg-white p-8 transition-all hover:border-primary hover:shadow-xl">
                <div className="mb-4">
                  <Image
                    src="https://ext.same-assets.com/3886351630/3519237665.png"
                    alt="APEXX S3"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                </div>
                <h3 className="mb-2 text-center text-2xl font-bold text-gray-900">
                  APEXX S3
                </h3>
                <p className="mb-4 text-center text-sm text-gray-600">
                  Part modeling ve orta boy assembly'ler için
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Intel Core Ultra işlemci (yüksek clock hızı)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>NVIDIA RTX Professional GPU</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>32-64GB DDR5 RAM</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>NVMe PCIe SSD</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/urunler/apexx">Detayları İncele</Link>
                </Button>
              </div>

              <div className="rounded-lg border-2 border-primary bg-gradient-to-b from-primary/5 to-white p-8 shadow-xl">
                <div className="mb-2 text-center">
                  <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                    ÖNERİLEN
                  </span>
                </div>
                <div className="mb-4">
                  <Image
                    src="https://ext.same-assets.com/3886351630/192729848.png"
                    alt="APEXX S4"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                </div>
                <h3 className="mb-2 text-center text-2xl font-bold text-gray-900">
                  APEXX S4
                </h3>
                <p className="mb-4 text-center text-sm text-gray-600">
                  Büyük assembly ve rendering için
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Overclocked işlemci (maksimum CAD performansı)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>NVIDIA RTX 4000+ Ada GPU</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>64-128GB DDR5 RAM</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Multi-drive NVMe RAID</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/urunler/apexx">Detayları İncele</Link>
                </Button>
              </div>

              <div className="rounded-lg border-2 border-gray-200 bg-white p-8 transition-all hover:border-primary hover:shadow-xl">
                <div className="mb-4">
                  <Image
                    src="https://ext.same-assets.com/3886351630/3944618175.png"
                    alt="CREATIV"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                </div>
                <h3 className="mb-2 text-center text-2xl font-bold text-gray-900">
                  CREATIV
                </h3>
                <p className="mb-4 text-center text-sm text-gray-600">
                  Giriş seviye CAD çalışması için
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Intel Core veya AMD Ryzen işlemci</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>NVIDIA GeForce RTX</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>32GB DDR5 RAM</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Uygun fiyat/performans</span>
                  </li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/urunler/creativ">Detayları İncele</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Optimization */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold lg:text-4xl">
              SOLIDWORKS İş Akışı Optimizasyonu
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    Part & Assembly
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Hızlı sketch ve feature oluşturma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Anında model rebuild</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Büyük assembly sorunsuz çalışma</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    Rendering & Visualization
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>RealView graphics performansı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>PhotoView 360 hızlı rendering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Visualize GPU ray tracing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
              SOLIDWORKS Performansınızı Artırın
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              BOXX uzmanlarımız, ihtiyaçlarınıza özel en uygun sistemi yapılandırmanıza yardımcı olur
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/iletisim">Ücretsiz Danışma</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
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
  title: "SOLIDWORKS İş İstasyonları | BOXX Türkiye",
  description:
    "SOLIDWORKS CAD ve simülasyon için profesyonel iş istasyonları. Yüksek performanslı işlemciler ve sertifikalı GPU'lar ile part modeling ve assembly çalışması.",
  keywords: "solidworks, iş istasyonu, cad, 3d modeling, assembly, rendering, boxx, workstation",
};
