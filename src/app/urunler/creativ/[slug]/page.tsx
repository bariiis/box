import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const creativProducts = [
  {
    id: "creativ-core-ultra",
    name: "Creativ | Core Ultra",
    title: "Intel Core Ultra (Series 2) Creator PC",
    description:
      "Dijital içerik oluşturucular için CPU frekansı, çekirdek ve sıvı soğutmalı performans konusunda mükemmel dengeli sistem.",
    image: "https://ext.same-assets.com/3886351630/3755945662.png",
    processor: "Intel Core™ Ultra (Series 2)",
    cores: "24'e kadar çekirdek",
    memory: "192GB'a kadar DDR5",
    graphics: "1 GPU'ya kadar",
    storage: "NVMe PCIe 4.0 SSD",
    cooling: "Sıvı Soğutma Sistemi",
    formFactor: "Mid Tower",
    startingPrice: "Başlangıç: $3,053",
    features: ["4K/8K Video Düzenleme", "3D Modelleme", "Grafik Tasarım", "Fotoğraf Düzenleme"],
    detailedSpecs: {
      processor: {
        type: "Intel® Core™ Ultra 9 285K (Series 2)",
        cores: "24 Cores (8P + 16E)",
        threads: "24 Threads",
        cache: "36MB Intel Smart Cache",
        frequency: "5.7 GHz Turbo",
      },
      memory: {
        type: "DDR5 UDIMM",
        capacity: "192GB'a kadar (4x 48GB)",
        speed: "6400 MHz",
        channels: "Dual-Channel",
      },
      graphics: {
        slots: "1x PCIe 5.0 x16",
        options: "NVIDIA RTX 5000 Ada, RTX 4500 Ada, RTX 4000 Ada",
        integratedGpu: "Intel Arc Graphics",
      },
      storage: {
        nvme: "2x M.2 NVMe PCIe 4.0",
        capacity: "4TB'a kadar (2x 2TB)",
        raid: "Software RAID 0/1",
      },
      cooling: {
        type: "All-in-One Liquid Cooling",
        radiator: "280mm Radiator",
        fans: "High-Performance RGB Fans",
      },
      connectivity: {
        network: "2.5GbE + WiFi 6E",
        usb: "8x USB 3.2, 2x USB-C, 2x Thunderbolt 4",
        audio: "High-Definition Audio",
      },
    },
    useCases: [
      "4K/8K video düzenleme ve renklendirme",
      "Adobe Premiere Pro, DaVinci Resolve workflows",
      "3D modelleme ve animasyon (Blender, Cinema 4D)",
      "Grafik tasarım ve dijital illustrasyon",
      "Fotoğraf düzenleme ve batch processing",
      "Canlı yayın ve streaming prodüksiyonu",
    ],
  },
  {
    id: "creativ-plus-core-ultra",
    name: "Creativ Plus | Core Ultra",
    title: "Intel Core Ultra (Series 2) Plus Creator PC",
    description:
      "Gelişmiş içerik oluşturma için daha fazla bellek ve GPU desteği ile güçlendirilmiş performans.",
    image: "https://ext.same-assets.com/3886351630/3755945662.png",
    processor: "Intel Core™ Ultra (Series 2)",
    cores: "24'e kadar çekirdek",
    memory: "192GB'a kadar DDR5",
    graphics: "1 GPU",
    storage: "Multi-NVMe SSD",
    cooling: "Advanced Liquid Cooling",
    formFactor: "Full Tower",
    startingPrice: "Başlangıç: $4,539",
    features: ["Gerçek Zamanlı Rendering", "Multi-tasking", "Canlı Yayın", "Video Düzenleme"],
    detailedSpecs: {
      processor: {
        type: "Intel® Core™ Ultra 9 285K (Series 2)",
        cores: "24 Cores (8P + 16E)",
        threads: "24 Threads",
        cache: "36MB Intel Smart Cache",
        frequency: "5.7 GHz Turbo",
      },
      memory: {
        type: "DDR5 UDIMM",
        capacity: "192GB (4x 48GB)",
        speed: "6400 MHz",
        channels: "Dual-Channel",
      },
      graphics: {
        slots: "1x PCIe 5.0 x16",
        options: "NVIDIA RTX 6000 Ada, RTX 5000 Ada",
        vram: "48GB GDDR6'ya kadar",
      },
      storage: {
        nvme: "3x M.2 NVMe PCIe 5.0",
        capacity: "6TB'a kadar (3x 2TB)",
        raid: "Hardware RAID 0/1/5",
      },
      cooling: {
        type: "Custom Loop Liquid Cooling",
        radiator: "360mm + 280mm Dual Radiators",
        fans: "Premium RGB Fans with PWM",
      },
      connectivity: {
        network: "10GbE + WiFi 7",
        usb: "12x USB 3.2, 4x USB-C, 4x Thunderbolt 4",
        audio: "Professional Audio DAC",
      },
    },
    useCases: [
      "Real-time 3D rendering ve viewport performance",
      "Multi-camera 8K video editing",
      "VFX ve compositing workflows",
      "Game development ve Unreal Engine",
      "Professional livestreaming setups",
      "Multi-application workflows (Adobe Suite + 3D software)",
    ],
  },
  {
    id: "creativ-plus-ryzen",
    name: "Creativ Plus | Ryzen",
    title: "AMD Ryzen 9000 Series Creator PC",
    description:
      "AMD Ryzen 9000 serisi ile yüksek çekirdek performansı ve uygun fiyatlı içerik oluşturma gücü.",
    image: "https://ext.same-assets.com/3886351630/3755945662.png",
    processor: "AMD Ryzen™ 9000 Series",
    cores: "16'ya kadar çekirdek",
    memory: "192GB'a kadar DDR5",
    graphics: "1 GPU",
    storage: "Multi-NVMe SSD",
    cooling: "Advanced Air/Liquid Cooling",
    formFactor: "Full Tower",
    startingPrice: "Başlangıç: $4,219",
    features: ["3D Rendering", "Video Production", "Adobe Creative Cloud", "Streaming"],
    detailedSpecs: {
      processor: {
        type: "AMD Ryzen™ 9 9950X",
        cores: "16 Cores",
        threads: "32 Threads",
        cache: "80MB Total Cache",
        frequency: "5.7 GHz Boost",
      },
      memory: {
        type: "DDR5 UDIMM",
        capacity: "192GB (4x 48GB)",
        speed: "6000 MHz",
        channels: "Dual-Channel",
      },
      graphics: {
        slots: "1x PCIe 5.0 x16",
        options: "NVIDIA RTX 6000 Ada, RTX 5000 Ada, RTX 4500 Ada",
        vram: "48GB GDDR6'ya kadar",
      },
      storage: {
        nvme: "3x M.2 NVMe PCIe 5.0",
        capacity: "6TB'a kadar",
        raid: "Software RAID 0/1",
      },
      cooling: {
        type: "High-Performance Tower Cooler or AIO",
        radiator: "360mm AIO (optional)",
        fans: "Premium case fans with RGB",
      },
      connectivity: {
        network: "2.5GbE + WiFi 6E",
        usb: "10x USB 3.2, 2x USB-C, 2x USB4",
        audio: "High-Definition Audio",
      },
    },
    useCases: [
      "CPU-intensive rendering workflows",
      "Multi-threaded video encoding",
      "3D modeling ve animation",
      "Adobe Creative Cloud optimization",
      "Content creation ve streaming",
      "Photo batch processing",
    ],
  },
];

export default async function CreativProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = creativProducts.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <Link href="/urunler/creativ" className="text-sm text-gray-300 hover:text-white">
                ← Creativ Serisi
              </Link>
            </div>
            <h1 className="text-4xl font-bold lg:text-5xl">{product.name}</h1>
            <p className="mt-4 text-xl text-gray-300">{product.title}</p>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>

              {/* Details */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Creator PC Özellikleri</h2>
                <p className="mb-6 text-lg text-gray-600">{product.description}</p>

                {/* Quick Specs */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="text-sm font-semibold text-gray-500">İŞLEMCİ</div>
                    <div className="mt-1 font-semibold text-gray-900">{product.processor}</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="text-sm font-semibold text-gray-500">ÇEKİRDEK</div>
                    <div className="mt-1 font-semibold text-gray-900">{product.cores}</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="text-sm font-semibold text-gray-500">BELLEK</div>
                    <div className="mt-1 font-semibold text-gray-900">{product.memory}</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="text-sm font-semibold text-gray-500">GPU</div>
                    <div className="mt-1 font-semibold text-gray-900">{product.graphics}</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="text-sm font-semibold text-gray-500">DEPOLAMA</div>
                    <div className="mt-1 font-semibold text-gray-900">{product.storage}</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="text-sm font-semibold text-gray-500">SOĞUTMA</div>
                    <div className="mt-1 font-semibold text-gray-900">{product.cooling}</div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="rounded-lg border-2 border-purple-600/20 bg-purple-600/5 p-6">
                  <div className="mb-4 text-2xl font-bold text-purple-600">{product.startingPrice}</div>
                  <div className="flex gap-3">
                    <Button asChild className="flex-1 bg-purple-600 hover:bg-purple-700" size="lg">
                      <Link href="/iletisim">Teklif İste</Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1" size="lg">
                      <Link href="/iletisim">Uzmanla Görüş</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Temel Özellikler</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature, idx) => (
                <div key={idx} className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600/10 text-purple-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Specs */}
        {product.detailedSpecs && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Teknik Özellikler</h2>
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Processor */}
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">İşlemci</h3>
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Model</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.processor.type}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Çekirdek</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.processor.cores}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Thread</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.processor.threads}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Cache</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.processor.cache}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Frekans</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.processor.frequency}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Memory */}
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Bellek</h3>
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Tip</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.memory.type}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Kapasite</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.memory.capacity}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Hız</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.memory.speed}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Channels</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.memory.channels}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Graphics */}
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Grafik</h3>
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Slot</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.graphics.slots}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Seçenekler</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.graphics.options}</td>
                      </tr>
                      {product.detailedSpecs.graphics.integratedGpu && (
                        <tr>
                          <td className="py-3 text-sm font-semibold text-gray-700">Entegre GPU</td>
                          <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.graphics.integratedGpu}</td>
                        </tr>
                      )}
                      {product.detailedSpecs.graphics.vram && (
                        <tr>
                          <td className="py-3 text-sm font-semibold text-gray-700">VRAM</td>
                          <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.graphics.vram}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Storage */}
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Depolama</h3>
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">NVMe</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.storage.nvme}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Kapasite</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.storage.capacity}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">RAID</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.storage.raid}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Cooling */}
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Soğutma Sistemi</h3>
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Tip</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.cooling.type}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Radyatör</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.cooling.radiator}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Fanlar</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.cooling.fans}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Connectivity */}
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Bağlantı</h3>
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Network</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.connectivity.network}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">USB</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.connectivity.usb}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Audio</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.connectivity.audio}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Use Cases */}
        {product.useCases && product.useCases.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Kullanım Alanları</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {product.useCases.map((useCase, idx) => (
                  <div key={idx} className="flex gap-4 rounded-lg bg-white p-6 shadow-sm">
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <p className="text-gray-700">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Creator Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Creator PC Özellikleri</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">🎨</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Creative Workflow</h3>
                <p className="text-gray-600">
                  Adobe Creative Cloud, DaVinci Resolve ve diğer profesyonel uygulamalar için optimize edilmiş.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">⚡</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Yüksek Performans</h3>
                <p className="text-gray-600">
                  En son Intel Core Ultra veya AMD Ryzen işlemciler ile maksimum üretkenlik.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">❄️</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Gelişmiş Soğutma</h3>
                <p className="text-gray-600">
                  Sıvı soğutma sistemi ile sessiz ve güvenilir çalışma.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">🎬</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Video Editing</h3>
                <p className="text-gray-600">
                  4K/8K video düzenleme ve real-time önizleme için optimize edilmiş donanım.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">🔌</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Genişletilebilir</h3>
                <p className="text-gray-600">
                  Thunderbolt 4 ve çoklu USB portları ile kolay genişleme.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">🎮</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Content Streaming</h3>
                <p className="text-gray-600">
                  Canlı yayın ve streaming için donanım encoder desteği.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">{product.name} ile İçerik Üretiminizi Hızlandırın</h2>
            <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
              Creator PC ihtiyaçlarınız için özel yapılandırma ve uzman desteği alın.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                <Link href="/iletisim">İletişime Geçin</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-purple-900">
                <Link href="/urunler/creativ">Diğer Creativ Modelleri</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
