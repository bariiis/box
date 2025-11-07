import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const raxxProducts = [
  {
    id: "raxx-s1g",
    name: "RAXX S1G",
    title: "Intel® Core™ 14th Generation - 1U Rackmount",
    description:
      "Kompakt 1U form faktöründe Intel Core 14th Gen işlemciler ile tam iş istasyonu performansı. VDI, multi-display ve veri merkezi uygulamaları için ideal.",
    image: "https://ext.same-assets.com/3886351630/1290763253.png",
    processor: "Intel Core™ 14th Gen",
    cores: "24'e kadar çekirdek",
    frequency: "6.0 GHz'e kadar",
    memory: "192GB'a kadar DDR5",
    graphics: "2'ye kadar GPU",
    storage: "NVMe PCIe 5.0 SSD",
    formFactor: "1U Rackmount",
    powerSupply: "Redundant 1000W",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["VDI Optimized", "Dual GPU Support", "Enterprise Management", "Compact 1U Design"],
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
        capacity: "192GB'a kadar (4x 48GB)",
        speed: "5600 MHz",
        channels: "Dual-Channel",
      },
      graphics: {
        slots: "2x PCIe 5.0 x16 (Single-Wide)",
        options: "NVIDIA RTX 5000 Ada, RTX 4500 Ada, RTX A4000",
        maxPower: "150W per GPU",
      },
      storage: {
        nvme: "2x M.2 NVMe PCIe 5.0",
        sata: "2x 2.5\" SATA",
        capacity: "4TB'a kadar NVMe",
        raid: "Software RAID 0/1",
      },
      networking: {
        ethernet: "Dual 10GbE RJ45",
        management: "IPMI 2.0, BMC, Remote KVM",
        optional: "25GbE, 100GbE",
      },
      power: {
        input: "100-240V AC, 50-60Hz",
        supply: "Redundant 1000W 80 PLUS Platinum",
        efficiency: "80 PLUS Platinum",
      },
      physical: {
        formFactor: "1U Rackmount",
        dimensions: "44mm (H) x 482mm (W) x 650mm (D)",
        weight: "~18 kg",
        cooling: "High-Efficiency Front-to-Back Airflow",
      },
    },
    useCases: [
      "VDI (Virtual Desktop Infrastructure) deployments",
      "Multi-monitor video wall controllers",
      "Broadcast graphics workstations",
      "Remote workstation infrastructure",
      "Data center consolidation",
      "High-density compute environments",
    ],
  },
  {
    id: "raxx-t3pro",
    name: "RAXX T3PRO",
    title: "AMD Ryzen™ Threadripper™ PRO 9000 Series - 3U Rackmount",
    description:
      "3U form faktöründe AMD Threadripper PRO ile maksimum performans. 4'e kadar NVIDIA RTX PRO GPU desteği ile AI, rendering ve simülasyon iş yükleri için ultimate güç.",
    image: "https://ext.same-assets.com/3886351630/2522747496.png",
    processor: "AMD Ryzen™ Threadripper™ PRO 9000",
    cores: "96'ya kadar çekirdek",
    frequency: "5.1 GHz'e kadar",
    memory: "2TB'a kadar DDR5 ECC",
    graphics: "4'e kadar NVIDIA RTX PRO",
    storage: "Multi-NVMe PCIe 5.0",
    formFactor: "3U Rackmount",
    powerSupply: "Redundant 2000W",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["4x RTX PRO GPUs", "96-Core Performance", "AI Training Ready", "Enterprise Reliability"],
    detailedSpecs: {
      processor: {
        type: "AMD Ryzen™ Threadripper™ PRO 9000 Series",
        cores: "16 / 32 / 64 / 96 Cores",
        threads: "192 Threads'e kadar",
        cache: "384MB L3 Cache'e kadar",
        frequency: "5.1 GHz Boost",
      },
      memory: {
        type: "DDR5 ECC RDIMM",
        capacity: "2TB'a kadar (8x 256GB)",
        speed: "6400 MHz",
        channels: "8-Channel",
      },
      graphics: {
        slots: "4x PCIe 5.0 x16 (Double-Wide)",
        options: "NVIDIA RTX 6000 Ada, RTX 5000 Ada, RTX A6000",
        interconnect: "NVLink Support",
      },
      storage: {
        nvme: "8x M.2 NVMe PCIe 5.0",
        sata: "4x 3.5\" SATA",
        capacity: "16TB'a kadar NVMe",
        raid: "Hardware RAID 0/1/5/10",
      },
      networking: {
        ethernet: "Dual 25GbE SFP28",
        management: "IPMI 2.0, Redfish API, BMC, Remote KVM",
        optional: "100GbE, InfiniBand HDR",
      },
      power: {
        input: "200-240V AC, 50-60Hz",
        supply: "Redundant 2000W 80 PLUS Titanium",
        efficiency: "80 PLUS Titanium",
      },
      physical: {
        formFactor: "3U Rackmount",
        dimensions: "133mm (H) x 482mm (W) x 750mm (D)",
        weight: "~35 kg",
        cooling: "Advanced Multi-Zone Cooling",
      },
    },
    useCases: [
      "AI model training ve deep learning",
      "Multi-GPU rendering farms",
      "High-performance simulations",
      "Scientific computing ve research",
      "Video production ve post-production",
      "Big data analytics",
      "Enterprise workload consolidation",
    ],
  },
  {
    id: "raxx-w3",
    name: "RAXX W3",
    title: "Intel® Xeon® W-3500 Processors - 3U Rackmount",
    description:
      "Intel Xeon W-3500 işlemciler ile enterprise-grade güvenilirlik. 4 GPU desteği ve ECC bellek ile mission-critical iş yükleri için tasarlanmış.",
    image: "https://ext.same-assets.com/3886351630/114075023.png",
    processor: "Intel Xeon W-3500",
    cores: "60'a kadar çekirdek",
    frequency: "4.8 GHz'e kadar",
    memory: "1TB'a kadar DDR5 ECC",
    graphics: "4'e kadar NVIDIA RTX",
    storage: "Multi-NVMe PCIe 5.0",
    formFactor: "3U Rackmount",
    powerSupply: "Redundant 2000W",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["Xeon Reliability", "4x GPU Support", "ECC Memory", "ISV Certified"],
    detailedSpecs: {
      processor: {
        type: "Intel® Xeon® W-3500 Series",
        cores: "12 / 24 / 32 / 48 / 60 Cores",
        threads: "120 Threads'e kadar",
        cache: "112.5MB Cache'e kadar",
        frequency: "4.8 GHz Turbo",
      },
      memory: {
        type: "DDR5 ECC RDIMM",
        capacity: "1TB'a kadar (8x 128GB)",
        speed: "4800 MHz",
        channels: "8-Channel",
      },
      graphics: {
        slots: "4x PCIe 5.0 x16 (Double-Wide)",
        options: "NVIDIA RTX 6000 Ada, RTX 5000 Ada, RTX A6000",
        interconnect: "NVLink Support",
      },
      storage: {
        nvme: "6x M.2 NVMe PCIe 5.0",
        sata: "4x 3.5\" SATA",
        capacity: "12TB'a kadar NVMe",
        raid: "Hardware RAID 0/1/5/10",
      },
      networking: {
        ethernet: "Dual 10GbE RJ45",
        management: "IPMI 2.0, Redfish API, BMC, Remote KVM",
        optional: "25GbE, 100GbE",
      },
      power: {
        input: "200-240V AC, 50-60Hz",
        supply: "Redundant 2000W 80 PLUS Platinum",
        efficiency: "80 PLUS Platinum",
      },
      physical: {
        formFactor: "3U Rackmount",
        dimensions: "133mm (H) x 482mm (W) x 750mm (D)",
        weight: "~33 kg",
        cooling: "Dual-Zone Precision Cooling",
      },
    },
    useCases: [
      "CAD/CAM ve engineering simulations",
      "Professional rendering workloads",
      "Broadcast ve media production",
      "Scientific ve medical imaging",
      "Financial modeling ve analytics",
      "Enterprise VDI environments",
      "ISV-certified professional applications",
    ],
  },
];

export default async function RaxxProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = raxxProducts.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <Link href="/urunler/rackmount" className="text-sm text-gray-300 hover:text-white">
                ← RAXX Rackmount Serisi
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
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>

              {/* Details */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Rackmount Özellikleri</h2>
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
                    <div className="text-sm font-semibold text-gray-500">GÜÇ KAYNAĞI</div>
                    <div className="mt-1 font-semibold text-gray-900">{product.powerSupply}</div>
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

        {/* Detailed Specs - same structure as other product detail pages */}
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
                      {product.detailedSpecs.graphics.interconnect && (
                        <tr>
                          <td className="py-3 text-sm font-semibold text-gray-700">Interconnect</td>
                          <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.graphics.interconnect}</td>
                        </tr>
                      )}
                      {product.detailedSpecs.graphics.maxPower && (
                        <tr>
                          <td className="py-3 text-sm font-semibold text-gray-700">Max Power</td>
                          <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.graphics.maxPower}</td>
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
                        <td className="py-3 text-sm font-semibold text-gray-700">SATA</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.storage.sata}</td>
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
                        <td className="py-3 text-sm font-semibold text-gray-700">Güç Kaynağı</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.power.supply}</td>
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
                  Multi-zone soğutma sistemi ile maksimum performans ve sessiz çalışma.
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
                <h3 className="mb-2 text-xl font-bold text-gray-900">Hot-Swap Support</h3>
                <p className="text-gray-600">
                  Hot-swap bileşenler ile kolay bakım ve minimum downtime.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">📡</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Yüksek Hızlı Ağ</h3>
                <p className="text-gray-600">
                  10GbE/25GbE ve seçeneksel 100GbE ile ultra-hızlı veri transferi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">{product.name} ile Altyapınızı Güçlendirin</h2>
            <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
              Rackmount çözümü için özel yapılandırma ve kurumsal destek seçeneklerimiz hakkında
              uzmanlarımızla görüşün.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="/iletisim">Danışma Talebi Oluştur</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-blue-900">
                <Link href="/urunler/rackmount">Diğer RAXX Modelleri</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
