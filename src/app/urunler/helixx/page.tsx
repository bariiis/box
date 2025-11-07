import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const helixxProducts = [
  {
    id: "helixx-2u4g",
    name: "HELIXX 2U4G | XEON 6700",
    title: "2U 4-GPU RTX PRO Sunucu",
    description:
      "Kompakt 2U form faktöründe 4 NVIDIA RTX PRO GPU ile yüksek yoğunluklu AI eğitimi ve rendering gücü.",
    image: "https://ext.same-assets.com/3886351630/4081028276.png",
    processor: "Intel Xeon 6700 Series",
    cores: "128'e kadar çekirdek",
    memory: "1TB'a kadar DDR5",
    graphics: "4x NVIDIA RTX PRO GPU",
    storage: "NVMe SSD, yüksek hızlı depolama",
    formFactor: "2U Rackmount",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["AI Model Eğitimi", "GPU Rendering", "Veri Analizi", "Simülasyon"],
  },
  {
    id: "helixx-4u8g",
    name: "HELIXX 4U8G | XEON 6700",
    title: "4U 8-GPU RTX PRO Sunucu",
    description:
      "Maksimum GPU yoğunluğu ile 8 NVIDIA RTX PRO GPU destekleyen, yüksek performanslı AI ve rendering sunucusu.",
    image: "https://ext.same-assets.com/3886351630/4081028276.png",
    processor: "Intel Xeon 6700 Series",
    cores: "128'e kadar çekirdek",
    memory: "2TB'a kadar DDR5",
    graphics: "8x NVIDIA RTX PRO GPU",
    storage: "Multi-NVMe yapılandırma",
    formFactor: "4U Rackmount",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["Büyük Ölçekli AI", "Paralel Rendering", "Derin Öğrenme", "Yüksek Performanslı Hesaplama"],
  },
];

export default function HelixxSeriesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMGFjZTIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoMTR2MTRIMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-5xl font-bold lg:text-7xl">
                HELIXX RTX PRO Sunucular
              </h1>
              <p className="mb-4 text-2xl font-semibold text-primary">
                Yüksek Yoğunluklu Çok-GPU Sunucular
              </p>
              <p className="mb-8 text-xl text-gray-300">
                Yoğun rendering, simülasyon, depolama veya AI iş yüklerini yüksek performanslı MGX çok-GPU BOXX Sunucularına boşaltın ve pipeline'ınızı hızlandırın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                  <Link href="#products">Sunucu Modellerini İncele</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
                  <Link href="/iletisim">Uzmanla Görüş</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              HELIXX Sunucu Özellikleri
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-10 w-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Yüksek GPU Yoğunluğu</h3>
                <p className="text-gray-600">
                  Tek bir sunucuda 4-8 NVIDIA RTX PRO GPU
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-10 w-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Intel Xeon 6700</h3>
                <p className="text-gray-600">
                  128 çekirdeğe kadar enterprise-grade işlemci
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-10 w-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Büyük Bellek</h3>
                <p className="text-gray-600">
                  2TB'a kadar DDR5 sistem belleği
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-10 w-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Rackmount Tasarım</h3>
                <p className="text-gray-600">
                  Veri merkezi için optimize 2U/4U form faktör
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              HELIXX Sunucu Modelleri
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {helixxProducts.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-lg bg-white shadow-xl transition-all hover:shadow-2xl"
                >
                  {/* Product Image */}
                  <div className="relative h-96 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-8">
                    <div className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
                      {product.name}
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">
                      {product.title}
                    </h3>
                    <p className="mb-6 text-gray-600">{product.description}</p>

                    {/* Specs Grid */}
                    <div className="mb-6 grid grid-cols-2 gap-4 border-t border-gray-200 pt-6">
                      <div>
                        <div className="mb-1 text-xs font-semibold uppercase text-gray-500">İşlemci</div>
                        <div className="text-sm font-medium text-gray-900">{product.processor}</div>
                      </div>
                      <div>
                        <div className="mb-1 text-xs font-semibold uppercase text-gray-500">Çekirdek</div>
                        <div className="text-sm font-medium text-gray-900">{product.cores}</div>
                      </div>
                      <div>
                        <div className="mb-1 text-xs font-semibold uppercase text-gray-500">Bellek</div>
                        <div className="text-sm font-medium text-gray-900">{product.memory}</div>
                      </div>
                      <div>
                        <div className="mb-1 text-xs font-semibold uppercase text-gray-500">GPU'lar</div>
                        <div className="text-sm font-medium text-gray-900">{product.graphics}</div>
                      </div>
                      <div>
                        <div className="mb-1 text-xs font-semibold uppercase text-gray-500">Depolama</div>
                        <div className="text-sm font-medium text-gray-900">{product.storage}</div>
                      </div>
                      <div>
                        <div className="mb-1 text-xs font-semibold uppercase text-gray-500">Form Faktör</div>
                        <div className="text-sm font-medium text-gray-900">{product.formFactor}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="border-t border-gray-200 pt-6">
                      <div className="mb-4 text-sm text-gray-600">
                        {product.startingPrice}
                      </div>
                      <div className="flex gap-3">
                        <Button asChild className="flex-1" variant="outline">
                          <Link href={`/urunler/helixx/${product.id}`}>
                            Teknik Detaylar
                          </Link>
                        </Button>
                        <Button asChild className="flex-1">
                          <Link href="/iletisim">
                            Teklif İste
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              HELIXX Kullanım Alanları
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 text-3xl">🤖</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">AI ve Derin Öğrenme</h3>
                <p className="text-gray-600">
                  Büyük dil modelleri, neural network eğitimi ve AI araştırması için paralel GPU gücü.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 text-3xl">🎬</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Rendering Farm</h3>
                <p className="text-gray-600">
                  3D animasyon, VFX ve görsel efektler için merkezi rendering gücü.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 text-3xl">🔬</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Bilimsel Simülasyon</h3>
                <p className="text-gray-600">
                  CFD, FEA ve diğer hesaplama yoğun simülasyon çalışmaları.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 text-3xl">📊</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Veri Analizi</h3>
                <p className="text-gray-600">
                  Big data processing, machine learning ve veri görselleştirme.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 text-3xl">🎮</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Oyun Geliştirme</h3>
                <p className="text-gray-600">
                  Real-time rendering, asset creation ve oyun motoru testleri.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 text-3xl">🏗️</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Mimari Görselleştirme</h3>
                <p className="text-gray-600">
                  Büyük ölçekli mimari projeler için photorealistic rendering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Teknik Özellikler
            </h2>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-900">İşlemci</td>
                    <td className="px-6 py-4 text-gray-600">Intel Xeon 6700 Series, 128 çekirdeğe kadar</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-900">GPU</td>
                    <td className="px-6 py-4 text-gray-600">4-8x NVIDIA RTX PRO 6000/A6000/A5000</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-900">Sistem Belleği</td>
                    <td className="px-6 py-4 text-gray-600">2TB'a kadar DDR5 ECC Registered</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-900">Depolama</td>
                    <td className="px-6 py-4 text-gray-600">Multi-NVMe PCIe 5.0 SSD, RAID desteği</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-900">Ağ</td>
                    <td className="px-6 py-4 text-gray-600">Dual 10/25/100GbE, InfiniBand opsiyonel</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-900">Güç Kaynağı</td>
                    <td className="px-6 py-4 text-gray-600">Redundant hot-swap 2000-3000W</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-900">Yönetim</td>
                    <td className="px-6 py-4 text-gray-600">IPMI, Remote KVM, BMC</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-900">İşletim Sistemi</td>
                    <td className="px-6 py-4 text-gray-600">Windows Server, Linux (Ubuntu, CentOS, RHEL)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Veri Merkezi Çözümünüz İçin Uzmanlarımızla Konuşun
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              HELIXX sunucular özel yapılandırma ve kurumsal destek ile birlikte gelir
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                <Link href="/iletisim">Danışma Talebi Oluştur</Link>
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
  title: "HELIXX RTX PRO Sunucular | BOXX Türkiye",
  description:
    "4-8 GPU'lu yüksek yoğunluklu HELIXX sunucular. AI eğitimi, rendering farm, bilimsel simülasyon ve veri analizi için Intel Xeon 6700 ve NVIDIA RTX PRO GPU'lu rackmount sunucular.",
};
