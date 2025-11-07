import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Cpu, Zap, HardDrive } from "lucide-react";

export default function ANSYSPage() {
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
                  src="https://ext.same-assets.com/3886351630/3456793784.png"
                  alt="ANSYS"
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                ANSYS Simülasyon ve Analiz için Çok Çekirdekli İş İstasyonları
              </h1>
              <p className="mb-8 text-xl text-gray-200">
                FEA, CFD ve multi-physics simülasyonları için BOXX iş istasyonları ile hesaplama gücünü maksimize edin
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
                ANSYS Simülasyon Sürelerini Dramatik Şekilde Azaltın
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  ANSYS Mechanical, Fluent, CFX ve Discovery gibi simülasyon araçları yoğun hesaplama gücü gerektirir. Büyük FEA analizleri, karmaşık CFD simülasyonları ve multi-physics çalışmaları saatlerce sürebilir. Yetersiz donanım, iterasyon sürelerini uzatır ve proje teslimatını geciktirir.
                </p>
                <p>
                  BOXX iş istasyonları, ANSYS simülasyonları için optimize edilmiştir. Yüksek core sayılı Intel Xeon veya AMD Threadripper işlemciler paralel hesaplamaları hızlandırır. 128-512GB ECC RAM büyük mesh'leri sorunsuzca işler. NVIDIA RTX Professional GPU'lar GPU-accelerated solver'ları destekler.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              BOXX ile ANSYS Avantajları
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
                  ANSYS solver'ları yüksek core sayısından maksimum fayda sağlar. 24-64 core işlemciler ile simülasyon sürelerini %80'e kadar azaltın.
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <HardDrive className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Yüksek Kapasiteli ECC RAM
                </h3>
                <p className="text-gray-600">
                  Büyük modeller ve yüksek element sayılı mesh'ler için 128-512GB ECC RAM. Veri bütünlüğü ve stabilite kritik simülasyonlar için şarttır.
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  GPU Acceleration
                </h3>
                <p className="text-gray-600">
                  ANSYS Discovery, Mechanical ve Fluent GPU solver'ları için NVIDIA RTX Professional GPU'lar. Bazı analizlerde 10x hız artışı.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section id="products" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              ANSYS için Önerilen BOXX Sistemleri
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="rounded-lg border-2 border-gray-200 bg-white p-8 transition-all hover:border-primary hover:shadow-xl">
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
                  Orta ölçekli simülasyonlar için
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>24-32 core Intel Xeon işlemci</span>
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
                    alt="APEXX T4 Pro"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                </div>
                <h3 className="mb-2 text-center text-2xl font-bold text-gray-900">
                  APEXX T4 Pro
                </h3>
                <p className="mb-4 text-center text-sm text-gray-600">
                  Büyük simülasyonlar ve CFD için
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>48-64 core dual Xeon veya Threadripper</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>NVIDIA RTX 6000 Ada</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>256-512GB DDR5 ECC RAM</span>
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
                  Pre/post processing ve küçük simülasyonlar için
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Overclocked işlemci (hızlı GUI)</span>
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
                    <span>Post-processing GPU performansı</span>
                  </li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/urunler/apexx">Detayları İncele</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Optimization */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold lg:text-4xl">
              ANSYS İş Akışı Optimizasyonu
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    FEA & Structural
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Hızlı mesh oluşturma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Mechanical solver performansı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Nonlinear analiz hızı</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    CFD & Multi-Physics
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Fluent/CFX paralel hesaplama</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Discovery GPU-accelerated solve</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Multi-physics coupled simülasyon</span>
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
              ANSYS Simülasyon Performansınızı Artırın
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
  title: "ANSYS Simülasyon İş İstasyonları | BOXX Türkiye",
  description:
    "ANSYS simülasyon ve analiz için çok çekirdekli iş istasyonları. FEA, CFD ve multi-physics için optimize edilmiş yüksek performanslı sistemler.",
  keywords: "ansys, simulation, fea, cfd, multi-physics, iş istasyonu, workstation, boxx",
};
