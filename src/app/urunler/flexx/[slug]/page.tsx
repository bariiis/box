import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const flexxProducts = [
  {
    id: "flexx-s1g",
    name: "FLEXX S1G",
    title: "Intel Core Ultra (Series 2) - 1G Modül",
    description:
      "Kompakt 1vu form faktöründe tam iş istasyonu performansı. Intel Core Ultra işlemciler ile veri merkezi optimizasyonu.",
    image: "https://ext.same-assets.com/3886351630/2135830062.png",
    processor: "Intel Core™ Ultra (Series 2)",
    cores: "24'e kadar çekirdek",
    frequency: "5.7 GHz'e kadar",
    memory: "192GB'a kadar DDR5",
    graphics: "1 GPU'ya kadar",
    storage: "NVMe PCIe 5.0 SSD",
    formFactor: "1vu FLEXX Modül",
    powerConsumption: "350W TDP",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["Veri Merkezi Optimizasyonu", "Uzaktan Erişim", "Modüler Tasarım", "Düşük Güç Tüketimi"],
    detailedSpecs: {
      processor: {
        type: "Intel® Core™ Ultra 9 285K (Series 2)",
        cores: "24 Cores (8P + 16E)",
        threads: "24 Threads",
        cache: "36MB Intel Smart Cache",
        frequency: "5.7 GHz Turbo",
      },
      memory: {
        type: "DDR5 ECC UDIMM",
        capacity: "192GB'a kadar (2x 96GB)",
        speed: "5600 MHz",
        channels: "Dual-Channel",
      },
      graphics: {
        slots: "1x PCIe 5.0 x16 (Single-Wide)",
        options: "NVIDIA RTX 5000 Ada, RTX 4500 Ada, RTX A4000",
        maxPower: "150W GPU TDP",
      },
      storage: {
        nvme: "2x M.2 NVMe PCIe 5.0",
        capacity: "4TB'a kadar (2x 2TB)",
        raid: "Software RAID 0/1",
      },
      networking: {
        ethernet: "Dual 10GbE RJ45",
        management: "IPMI 2.0, BMC, Remote KVM",
        optional: "100GbE, InfiniBand",
      },
      power: {
        input: "100-240V AC, 50-60Hz",
        tdp: "350W Maximum",
        efficiency: "80 PLUS Platinum",
      },
      physical: {
        formFactor: "1vu (1 Vertical Unit) FLEXX Module",
        dimensions: "175mm (H) x 442mm (D)",
        weight: "~8 kg",
        cooling: "High-Efficiency Blower Fans",
      },
    },
    useCases: [
      "Veri merkezi workstation deployment",
      "Remote desktop infrastructure (VDI)",
      "CAD/CAM cloud workstations",
      "Rendering farm nodes",
      "Virtual production environments",
      "High-density compute clusters",
    ],
  },
  {
    id: "flexx-s2g",
    name: "FLEXX S2G",
    title: "Intel Core 14th Gen - 2G Modül",
    description:
      "2vu form faktöründe gelişmiş GPU desteği ve genişletilmiş yapılandırma seçenekleri ile profesyonel iş yükleri için ideal.",
    image: "https://ext.same-assets.com/3886351630/2567622057.png",
    processor: "Intel Core™ 14th Gen",
    cores: "24'e kadar çekirdek",
    frequency: "6.0 GHz'e kadar",
    memory: "192GB'a kadar DDR5",
    graphics: "2 GPU'ya kadar",
    storage: "Multi-NVMe PCIe 5.0",
    formFactor: "2vu FLEXX Modül",
    powerConsumption: "650W TDP",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["Çift GPU Desteği", "Gelişmiş Soğutma", "Uzaktan Yönetim", "Yüksek Yoğunluk"],
    detailedSpecs: {
      processor: {
        type: "Intel® Core™ i9-14900K",
        cores: "24 Cores (8P + 16E)",
        threads: "32 Threads",
        cache: "36MB Intel Smart Cache",
        frequency: "6.0 GHz Turbo",
      },
      memory: {
        type: "DDR5 ECC UDIMM",
        capacity: "192GB (4x 48GB)",
        speed: "5600 MHz",
        channels: "Dual-Channel",
      },
      graphics: {
        slots: "2x PCIe 5.0 x16 (Double-Wide)",
        options: "NVIDIA RTX 6000 Ada, RTX 5000 Ada, RTX A6000",
        maxPower: "300W per GPU (600W total)",
      },
      storage: {
        nvme: "4x M.2 NVMe PCIe 5.0",
        capacity: "8TB'a kadar (4x 2TB)",
        raid: "Hardware RAID 0/1/5/10",
      },
      networking: {
        ethernet: "Dual 25GbE SFP28",
        management: "IPMI 2.0, Redfish API, Remote KVM, BMC",
        optional: "100GbE, InfiniBand HDR",
      },
      power: {
        input: "200-240V AC, 50-60Hz",
        tdp: "650W Maximum",
        efficiency: "80 PLUS Titanium",
      },
      physical: {
        formFactor: "2vu (2 Vertical Units) FLEXX Module",
        dimensions: "350mm (H) x 442mm (D)",
        weight: "~14 kg",
        cooling: "Advanced Dual-Zone Cooling",
      },
    },
    useCases: [
      "Multi-GPU rendering workstations",
      "AI/ML inference servers",
      "High-performance VDI environments",
      "Engineering simulation nodes",
      "Visual effects production",
      "Remote creative workstations",
      "Data center consolidation",
    ],
  },
];

export default async function FlexxProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = flexxProducts.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <Link href="/urunler/flexx" className="text-sm text-gray-300 hover:text-white">
                ← FLEXX Serisi
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
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>

              {/* Details */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">FLEXX Modül Özellikleri</h2>
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
                    <div className="text-sm font-semibold text-gray-500">FORM FAKTÖR</div>
                    <div className="mt-1 font-semibold text-gray-900">{product.formFactor}</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="text-sm font-semibold text-gray-500">GÜÇ</div>
                    <div className="mt-1 font-semibold text-gray-900">{product.powerConsumption}</div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="rounded-lg border-2 border-blue-600/20 bg-blue-600/5 p-6">
                  <div className="mb-4 text-2xl font-bold text-blue-600">{product.startingPrice}</div>
                  <div className="flex gap-3">
                    <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700" size="lg">
                      <Link href="/iletisim">Teklif İste</Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1" size="lg">
                      <Link href="/iletisim">Veri Merkezi Danışmanlığı</Link>
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
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
                        <td className="py-3 text-sm font-semibold text-gray-700">Max Power</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.graphics.maxPower}</td>
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

                {/* Networking */}
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Ağ ve Yönetim</h3>
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Ethernet</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.networking.ethernet}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Yönetim</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.networking.management}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Opsiyonel</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.networking.optional}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Power */}
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Güç Tüketimi</h3>
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Giriş</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.power.input}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">TDP</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.power.tdp}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Verimlilik</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.power.efficiency}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Physical */}
                <div className="rounded-lg border border-gray-200 p-6 lg:col-span-2">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Fiziksel Özellikler</h3>
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Form Faktör</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.physical.formFactor}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Boyutlar</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.physical.dimensions}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Ağırlık</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.physical.weight}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Soğutma</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.physical.cooling}</td>
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
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
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

        {/* Data Center Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Veri Merkezi Özellikleri</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">🏢</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Yüksek Yoğunluk</h3>
                <p className="text-gray-600">
                  Kompakt form faktör ile maksimum hesaplama gücü ve verimli alan kullanımı.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">🔌</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Enerji Verimliliği</h3>
                <p className="text-gray-600">
                  80 PLUS Platinum/Titanium sertifikalı güç kaynağı ile düşük işletme maliyeti.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">🖥️</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Remote Management</h3>
                <p className="text-gray-600">
                  IPMI, BMC ve Remote KVM ile tam uzaktan yönetim ve monitoring.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">❄️</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Optimize Soğutma</h3>
                <p className="text-gray-600">
                  Yüksek verimli blower fan tasarımı ile sessiz ve etkili soğutma.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">🔐</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Enterprise Security</h3>
                <p className="text-gray-600">
                  TPM 2.0, Secure Boot ve hardware encryption ile kurumsal güvenlik.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">🔧</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Hot-Swap Support</h3>
                <p className="text-gray-600">
                  Modüler tasarım ile kolay bakım ve minimum downtime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">{product.name} ile Veri Merkezinizi Modernleştirin</h2>
            <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
              Modüler FLEXX çözümleri için veri merkezi danışmanlığı ve özel yapılandırma desteği alın.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="/iletisim">Veri Merkezi Danışmanlığı</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-blue-900">
                <Link href="/urunler/flexx">Diğer FLEXX Modelleri</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
