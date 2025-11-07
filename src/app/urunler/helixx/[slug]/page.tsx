import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    powerSupply: "Redundant 2000W",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["AI Model Eğitimi", "GPU Rendering", "Veri Analizi", "Simülasyon"],
    detailedSpecs: {
      processor: {
        type: "Intel® Xeon® 6700 Series (Granite Rapids)",
        cores: "64 / 96 / 128 Cores",
        threads: "128 / 192 / 256 Threads",
        cache: "320MB Cache'e kadar",
        frequency: "3.8 GHz Base, 4.2 GHz Turbo",
      },
      memory: {
        type: "DDR5 ECC RDIMM",
        capacity: "1TB'a kadar (16x 64GB)",
        speed: "5600 MHz",
        channels: "8-Channel",
      },
      graphics: {
        slots: "4x Double-Wide GPU Slots",
        options: "NVIDIA RTX 6000 Ada, RTX A6000, RTX A5500",
        interconnect: "NVLink Bridge Support",
      },
      storage: {
        nvme: "8x NVMe U.2/U.3 Bays",
        sata: "Optional 4x SATA",
        raid: "Hardware RAID 0/1/5/6/10",
      },
      expansion: {
        pcie: "4x PCIe 5.0 x16 (GPU), 2x PCIe 5.0 x8",
        network: "Dual 25GbE, optional 100GbE",
        management: "IPMI 2.0, Redfish API, Remote KVM",
      },
    },
    useCases: [
      "Büyük ölçekli AI model eğitimi ve derin öğrenme",
      "Multi-GPU rendering farm altyapısı",
      "Bilimsel simülasyon ve hesaplama",
      "Veri analizi ve big data processing",
      "Real-time inference ve AI deployment",
      "Cloud gaming ve streaming infrastructure",
    ],
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
    powerSupply: "Redundant 3000W",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["Büyük Ölçekli AI", "Paralel Rendering", "Derin Öğrenme", "Yüksek Performanslı Hesaplama"],
    detailedSpecs: {
      processor: {
        type: "Intel® Xeon® 6700 Series (Granite Rapids)",
        cores: "64 / 96 / 128 Cores",
        threads: "128 / 192 / 256 Threads",
        cache: "320MB Cache'e kadar",
        frequency: "3.8 GHz Base, 4.2 GHz Turbo",
      },
      memory: {
        type: "DDR5 ECC RDIMM",
        capacity: "2TB'a kadar (16x 128GB)",
        speed: "5600 MHz",
        channels: "8-Channel",
      },
      graphics: {
        slots: "8x Double-Wide GPU Slots",
        options: "NVIDIA RTX 6000 Ada, RTX A6000, RTX A5500",
        interconnect: "Full NVLink Mesh Topology",
      },
      storage: {
        nvme: "12x NVMe U.2/U.3 Bays",
        sata: "Optional 8x SATA",
        raid: "Hardware RAID 0/1/5/6/10/50/60",
      },
      expansion: {
        pcie: "8x PCIe 5.0 x16 (GPU), 4x PCIe 5.0 x8",
        network: "Dual 100GbE, InfiniBand HDR200 optional",
        management: "IPMI 2.0, Redfish API, Remote KVM, BMC",
      },
    },
    useCases: [
      "Enterprise-grade AI model eğitimi ve araştırma",
      "Distributed deep learning ve neural network training",
      "Büyük ölçekli rendering farm merkezi",
      "High-performance computing (HPC) uygulamaları",
      "Bilimsel simülasyon ve modelleme",
      "Video analizi ve computer vision",
      "Cryptocurrency mining ve blockchain",
    ],
  },
];

export default async function HelixxProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = helixxProducts.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <Link href="/urunler/helixx" className="text-sm text-gray-300 hover:text-white">
                ← HELIXX Serisi
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
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>

              {/* Details */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Sunucu Özellikleri</h2>
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
                    <div className="text-sm font-semibold text-gray-500">GPU'LAR</div>
                    <div className="mt-1 font-semibold text-gray-900">{product.graphics}</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="text-sm font-semibold text-gray-500">DEPOLAMA</div>
                    <div className="mt-1 font-semibold text-gray-900">{product.storage}</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="text-sm font-semibold text-gray-500">FORM FAKTÖR</div>
                    <div className="mt-1 font-semibold text-gray-900">{product.formFactor}</div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
                  <div className="mb-4 text-2xl font-bold text-primary">{product.startingPrice}</div>
                  <div className="flex gap-3">
                    <Button asChild className="flex-1" size="lg">
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
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {product.features.map((feature, idx) => (
                <div key={idx} className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                        <td className="py-3 text-sm font-semibold text-gray-700">Tip</td>
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
                        <td className="py-3 text-sm font-semibold text-gray-700">Channel</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.memory.channels}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Graphics */}
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">GPU Yapılandırması</h3>
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
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Interconnect</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.graphics.interconnect}</td>
                      </tr>
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
                        <td className="py-3 text-sm font-semibold text-gray-700">SATA</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.storage.sata}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">RAID</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.storage.raid}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Expansion */}
                <div className="rounded-lg border border-gray-200 p-6 lg:col-span-2">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Genişleme & Yönetim</h3>
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">PCIe Slotları</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.expansion.pcie}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Network</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.expansion.network}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Yönetim</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.expansion.management}</td>
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
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
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

        {/* Enterprise Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Enterprise Özellikleri</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">🔒</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Güvenlik</h3>
                <p className="text-gray-600">
                  TPM 2.0, Secure Boot, hardware encryption desteği ile kurumsal güvenlik.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">⚡</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Redundant Power</h3>
                <p className="text-gray-600">
                  Hot-swap redundant güç kaynakları ile kesintisiz çalışma garantisi.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">🌡️</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Gelişmiş Soğutma</h3>
                <p className="text-gray-600">
                  Multi-zone soğutma sistemi ile maksimum GPU performansı ve sessiz çalışma.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">📊</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Remote Management</h3>
                <p className="text-gray-600">
                  IPMI, Redfish API ve remote KVM ile uzaktan tam sistem yönetimi.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">🛠️</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Tool-less Design</h3>
                <p className="text-gray-600">
                  Hot-swap bileşenler ve tool-less tasarım ile kolay bakım ve upgrade.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">📡</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Yüksek Hızlı Ağ</h3>
                <p className="text-gray-600">
                  100GbE ve InfiniBand seçenekleri ile ultra-hızlı veri transferi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">{product.name} ile Altyapınızı Güçlendirin</h2>
            <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
              Veri merkezi çözümü için özel yapılandırma ve kurumsal destek seçeneklerimiz hakkında
              uzmanlarımızla görüşün.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                <Link href="/iletisim">Danışma Talebi Oluştur</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
                <Link href="/urunler/helixx">Diğer HELIXX Modelleri</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
