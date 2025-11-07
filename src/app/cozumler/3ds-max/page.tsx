import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Cpu, Zap, HardDrive } from "lucide-react";

export default function ThreeDSMaxPage() {
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
                  src="https://ext.same-assets.com/3886351630/1682642861.png"
                  alt="3ds Max"
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                3ds Max Rendering ve Animasyon için Profesyonel İş İstasyonları
              </h1>
              <p className="mb-8 text-xl text-gray-200">
                3D modelleme, animasyon ve photorealistic rendering için BOXX iş istasyonları ile maksimum performans
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
                3ds Max Performans Darboğazlarını Aşın
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  3ds Max, mimari görselleştirme, ürün tasarımı ve VFX'te endüstri standardıdır. Ancak karmaşık sahneler, yüksek polygon sayılı modeller ve Arnold/V-Ray rendering uzun süreçler gerektirir. Viewport performansı ve rendering hızı doğrudan donanımınıza bağlıdır.
                </p>
                <p>
                  BOXX iş istasyonları, viewport çalışması için yüksek clock hızlı CPU'lar, rendering için çok çekirdekli işlemciler ve güçlü GPU'lar sunar. Arnold GPU rendering, V-Ray GPU ve real-time viewport için NVIDIA RTX kartlar optimize edilmiştir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              BOXX ile 3ds Max Avantajları
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Çok Çekirdekli İşlemciler
                </h3>
                <p className="text-gray-600">
                  Arnold CPU ve V-Ray CPU rendering için yüksek core sayılı işlemciler render sürelerini dramatik şekilde azaltır. APEXX T4 ile 24+ core performansı.
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Güçlü RTX GPU
                </h3>
                <p className="text-gray-600">
                  GPU rendering (Arnold GPU, V-Ray GPU) ve viewport performansı için NVIDIA RTX 4090 veya RTX 6000 Ada. Real-time ray tracing desteği.
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
                  Karmaşık sahneler, yüksek çözünürlüklü texture'lar ve simülasyonlar için 64-256GB RAM. Büyük projeler sorunsuzca bellekte tutulur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section id="products" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              3ds Max için Önerilen BOXX Sistemleri
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="rounded-lg border-2 border-gray-200 bg-white p-8 transition-all hover:border-primary hover:shadow-xl">
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
                  Viewport çalışması ve GPU rendering için
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Overclocked işlemci (hızlı viewport)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>NVIDIA RTX 4080/4090 GPU</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>64-128GB DDR5 RAM</span>
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
                    src="https://ext.same-assets.com/3886351630/3519237665.png"
                    alt="APEXX T4"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                </div>
                <h3 className="mb-2 text-center text-2xl font-bold text-gray-900">
                  APEXX T4
                </h3>
                <p className="mb-4 text-center text-sm text-gray-600">
                  CPU rendering ve büyük projeler için
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>24+ core işlemci (Arnold/V-Ray CPU)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>NVIDIA RTX Professional GPU</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>128-256GB DDR5 ECC RAM</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Multi-GPU desteği</span>
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
                  Giriş seviye 3D çalışması için
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Intel Core veya AMD Ryzen işlemci</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>NVIDIA GeForce RTX 4070+</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>32-64GB DDR5 RAM</span>
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
              3ds Max İş Akışı Optimizasyonu
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    Modelleme & Animasyon
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Sorunsuz viewport performansı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Real-time subdivision preview</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Hızlı simülasyon hesaplamaları</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    Rendering
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Arnold CPU/GPU hızlı rendering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>V-Ray GPU real-time IPR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Multi-frame rendering performansı</span>
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
              3ds Max Performansınızı Artırın
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
  title: "3ds Max İş İstasyonları | BOXX Türkiye",
  description:
    "3ds Max rendering ve animasyon için profesyonel iş istasyonları. Arnold ve V-Ray için optimize edilmiş çok çekirdekli işlemciler ve güçlü GPU'lar.",
  keywords: "3ds max, rendering, animation, arnold, v-ray, iş istasyonu, gpu rendering, boxx, workstation",
};
