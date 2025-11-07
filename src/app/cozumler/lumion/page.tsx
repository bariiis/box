import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Cpu, Zap, HardDrive } from "lucide-react";

export default function LumionPage() {
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
                  src="https://ext.same-assets.com/3886351630/754447050.png"
                  alt="Lumion"
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                Lumion Architectural Visualization için GPU Güçlü Sistemler
              </h1>
              <p className="mb-8 text-xl text-gray-200">
                Real-time rendering ve photorealistic görselleştirme için NVIDIA RTX donanımlı BOXX iş istasyonları ile anında sonuçlar
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
                Lumion'da Gerçek Zamanlı Rendering Gücünü Yakalayın
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Lumion, mimari görselleştirmede real-time rendering'in öncüsüdür. Ancak büyük sahneler, yüksek kaliteli efektler ve 4K video rendering için güçlü bir GPU şarttır. Yetersiz donanım, viewport gecikmesine, düşük FPS'e ve uzun render sürelerine yol açar.
                </p>
                <p>
                  BOXX iş istasyonları, Lumion için optimize edilmiş NVIDIA RTX GPU'lar ile donatılmıştır. Yüksek CUDA core sayısı ve büyük VRAM, karmaşık sahneleri real-time'da işler. Güçlü CPU ve bol RAM, model yükleme ve genel performansı destekler.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              BOXX ile Lumion Avantajları
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Güçlü RTX GPU
                </h3>
                <p className="text-gray-600">
                  Lumion GPU-intensive bir uygulamadır. NVIDIA RTX 4080 veya RTX 6000 Ada ile real-time ray tracing, yüksek FPS ve hızlı video rendering.
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Hızlı İşlemci
                </h3>
                <p className="text-gray-600">
                  Model import, sahne oluşturma ve efekt hesaplamaları için yüksek clock hızlı CPU gerekir. BOXX overclocked işlemciler workflow hızını artırır.
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <HardDrive className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Yüksek Kapasiteli RAM & SSD
                </h3>
                <p className="text-gray-600">
                  Büyük modeller ve yüksek çözünürlüklü texture'lar için 64GB+ RAM ve hızlı NVMe SSD'ler sahne yükleme sürelerini minimize eder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section id="products" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Lumion için Önerilen BOXX Sistemleri
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
                  Küçük-orta ölçekli projeler için
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Intel Core Ultra işlemci</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>NVIDIA RTX 4070 Ti - RTX 4080</span>
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
                  Büyük projeler ve 4K rendering için
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Overclocked işlemci</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>NVIDIA RTX 4090 veya RTX 6000 Ada</span>
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
                  Giriş seviye visualization için
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
              Lumion İş Akışı Optimizasyonu
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    Real-Time Viewport
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>60+ FPS viewport performansı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Real-time ray tracing preview</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Karmaşık efektler gecikme olmadan</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    Rendering & Export
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Hızlı image rendering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>4K video export performansı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>360° panorama hızlı oluşturma</span>
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
              Lumion Rendering Performansınızı Artırın
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
  title: "Lumion Rendering İş İstasyonları | BOXX Türkiye",
  description:
    "Lumion architectural visualization için GPU güçlü sistemler. Real-time rendering ve photorealistic görselleştirme için NVIDIA RTX donanımlı BOXX iş istasyonları.",
  keywords: "lumion, rendering, architectural visualization, real-time, gpu workstation, rtx, boxx",
};
