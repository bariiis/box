import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const apexxProducts = [
  {
    id: "t4-pro-x",
    name: "APEXX T4 PRO-X",
    title: "En Yüksek Performans",
    description:
      "AMD Ryzen™ Threadripper™ PRO 7000WX Serisi ile gelişmiş AI, rendering ve simülasyon iş yükleri için ultimate performans.",
    image: "https://boxx.com/Files/Images/Blog/TPRO-X_01.jpg",
    processor: "AMD Ryzen Threadripper PRO 7000WX",
    cores: "96'ya kadar çekirdek",
    memory: "2TB'a kadar DDR5 ECC",
    graphics: "4'e kadar NVIDIA RTX",
    storage: "Multi-NVMe PCIe 4.0 SSD",
    powerSupply: "2050W Premium",
    formFactor: "Tower Workstation",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["AI Model Eğitimi", "GPU Rendering", "8K Video Düzenleme", "CFD Simülasyonu"],
    class: "t-pro",
    detailedSpecs: {
      processor: {
        type: "AMD Ryzen™ Threadripper™ PRO 7000WX Series",
        cores: "16 / 24 / 32 / 64 / 96 Cores",
        threads: "192 Threads'e kadar",
        cache: "384MB L3 Cache'e kadar",
        frequency: "5.1 GHz Boost'a kadar",
      },
      memory: {
        type: "DDR5 ECC RDIMM",
        capacity: "2TB'a kadar (8x 256GB)",
        speed: "5200 MHz",
        channels: "8-Channel",
      },
      graphics: {
        slots: "4x Double-Wide GPU",
        options: "NVIDIA RTX 6000 Ada, RTX 5000 Ada, RTX 4500 Ada",
        sli: "NVLink Desteği",
      },
      storage: {
        nvme: "4x M.2 NVMe PCIe 4.0",
        sata: "4x SATA 6Gb/s",
        raid: "Hardware RAID 0/1/5/10",
      },
      expansion: {
        pcie: "7x PCIe 5.0 / 4.0 Slots",
        usb: "10x USB 3.2, 2x USB-C Thunderbolt 4",
        network: "2.5GbE + 10GbE seçeneği",
      },
    },
    useCases: [
      "Büyük ölçekli AI model eğitimi ve inferencing",
      "Multi-GPU rendering ve simülasyon",
      "8K/12K video düzenleme ve renklendirme",
      "CFD ve FEA simülasyonları",
      "Bilimsel hesaplama ve veri analizi",
    ],
  },
  {
    id: "t4-pro",
    name: "APEXX T4 PRO",
    title: "Profesyonel Performans",
    description:
      "AMD Ryzen™ Threadripper™ PRO ile yüksek performanslı içerik oluşturma ve profesyonel uygulamalar için ideal.",
    image: "https://www.awn.com/sites/default/files/styles/original/public/image/attached/1061151-boxx-1280.jpg",
    processor: "AMD Ryzen Threadripper PRO 5000WX",
    cores: "64'e kadar çekirdek",
    memory: "512GB'a kadar DDR4 ECC",
    graphics: "3'e kadar NVIDIA RTX",
    storage: "Multi-NVMe PCIe 4.0 SSD",
    powerSupply: "1600W Premium",
    formFactor: "Tower Workstation",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["3D Modelleme", "Video Rendering", "CAD/CAM", "Veri Analizi"],
    class: "t-pro",
    detailedSpecs: {
      processor: {
        type: "AMD Ryzen™ Threadripper™ PRO 5000WX Series",
        cores: "12 / 16 / 24 / 32 / 64 Cores",
        threads: "128 Threads'e kadar",
        cache: "256MB L3 Cache'e kadar",
        frequency: "4.5 GHz Boost'a kadar",
      },
      memory: {
        type: "DDR4 ECC RDIMM",
        capacity: "512GB'a kadar (8x 64GB)",
        speed: "3200 MHz",
        channels: "8-Channel",
      },
      graphics: {
        slots: "3x Double-Wide GPU",
        options: "NVIDIA RTX A6000, RTX A5500, RTX A4500",
        sli: "NVLink Desteği",
      },
      storage: {
        nvme: "4x M.2 NVMe PCIe 4.0",
        sata: "4x SATA 6Gb/s",
        raid: "Hardware RAID 0/1/5/10",
      },
      expansion: {
        pcie: "7x PCIe 4.0 Slots",
        usb: "10x USB 3.2, 2x USB-C",
        network: "2.5GbE + 10GbE seçeneği",
      },
    },
    useCases: [
      "Profesyonel 3D modelleme ve animasyon",
      "GPU accelerated rendering",
      "CAD/CAM ve mühendislik simülasyonları",
      "Video prodüksiyon ve post-production",
      "Veri analizi ve bilimsel hesaplama",
    ],
  },
  {
    id: "t4",
    name: "APEXX T4",
    title: "Çok Çekirdekli Güç",
    description:
      "AMD Ryzen™ Threadripper™ ile hızlı 3D içerik oluşturma ve motion media projeleriniz için optimize edilmiş.",
    image: "https://ml.globenewswire.com/Resource/Download/712db5b9-8fe5-49ea-8153-ad27a0f26036",
    processor: "AMD Ryzen Threadripper 7000",
    cores: "64'e kadar çekirdek",
    memory: "256GB'a kadar DDR5",
    graphics: "3'e kadar NVIDIA RTX",
    storage: "Multi-NVMe PCIe 4.0 SSD",
    powerSupply: "1200W",
    formFactor: "Tower Workstation",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["3D Animasyon", "Video İşleme", "Paralel Rendering", "Simülasyon"],
    class: "t",
    detailedSpecs: {
      processor: {
        type: "AMD Ryzen™ Threadripper™ 7000 Series",
        cores: "24 / 32 / 64 Cores",
        threads: "128 Threads'e kadar",
        cache: "256MB L3 Cache'e kadar",
        frequency: "5.3 GHz Boost'a kadar",
      },
      memory: {
        type: "DDR5 UDIMM",
        capacity: "256GB'a kadar (4x 64GB)",
        speed: "5200 MHz",
        channels: "4-Channel",
      },
      graphics: {
        slots: "3x Double-Wide GPU",
        options: "NVIDIA RTX 6000 Ada, RTX 5000 Ada, RTX 4500 Ada",
        sli: "NVLink Desteği",
      },
      storage: {
        nvme: "3x M.2 NVMe PCIe 4.0",
        sata: "4x SATA 6Gb/s",
        raid: "Software RAID 0/1",
      },
      expansion: {
        pcie: "5x PCIe 4.0 Slots",
        usb: "8x USB 3.2, 2x USB-C",
        network: "2.5GbE",
      },
    },
    useCases: [
      "3D animasyon ve motion graphics",
      "Paralel video rendering",
      "Content creation workflows",
      "Multi-threaded simülasyonlar",
      "Adobe Creative Suite optimizasyonu",
    ],
  },
  {
    id: "t3",
    name: "APEXX T3",
    title: "Kompakt Performans",
    description:
      "Küçük form faktöründe AMD Ryzen™ Threadripper™ gücü ile içerik oluşturma işleriniz için ideal çözüm.",
    image: "https://boxx.com/Files/Images/Products/Apexx%204%20front%20hero_700.png",
    processor: "AMD Ryzen Threadripper 7000",
    cores: "32'ye kadar çekirdek",
    memory: "128GB'a kadar DDR5",
    graphics: "2'ye kadar NVIDIA RTX",
    storage: "NVMe PCIe 4.0 SSD",
    powerSupply: "850W",
    formFactor: "Compact Tower",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["Video Düzenleme", "3D Modelleme", "Rendering", "Motion Graphics"],
    class: "t",
    detailedSpecs: {
      processor: {
        type: "AMD Ryzen™ Threadripper™ 7000 Series",
        cores: "24 / 32 Cores",
        threads: "64 Threads'e kadar",
        cache: "128MB L3 Cache'e kadar",
        frequency: "5.3 GHz Boost'a kadar",
      },
      memory: {
        type: "DDR5 UDIMM",
        capacity: "128GB'a kadar (4x 32GB)",
        speed: "5200 MHz",
        channels: "4-Channel",
      },
      graphics: {
        slots: "2x Double-Wide GPU",
        options: "NVIDIA RTX 5000 Ada, RTX 4500 Ada, RTX 4000 Ada",
        sli: "Desteklenmez",
      },
      storage: {
        nvme: "2x M.2 NVMe PCIe 4.0",
        sata: "2x SATA 6Gb/s",
        raid: "Software RAID 0/1",
      },
      expansion: {
        pcie: "3x PCIe 4.0 Slots",
        usb: "6x USB 3.2, 1x USB-C",
        network: "1GbE",
      },
    },
    useCases: [
      "4K video düzenleme ve color grading",
      "3D modelleme ve texture work",
      "Motion graphics ve compositing",
      "Kompakt workstation ihtiyaçları",
      "Home studio ve freelance işleri",
    ],
  },
  {
    id: "w4",
    name: "APEXX W4",
    title: "Xeon Gücü",
    description:
      "Intel® Xeon® işlemci ile rendering, simülasyon ve masaüstü AI için 4'e kadar GPU desteği.",
    image: "https://www.awn.com/sites/default/files/styles/original/public/image/attached/1059241-apexx-w4hero-2.jpg",
    processor: "Intel Xeon W-3400",
    cores: "56'ya kadar çekirdek",
    memory: "2TB'a kadar DDR5 ECC",
    graphics: "4'e kadar NVIDIA RTX",
    storage: "Multi-NVMe PCIe 5.0 SSD",
    powerSupply: "2000W Premium",
    formFactor: "Tower Workstation",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["GPU Rendering", "AI İş Yükleri", "Simülasyon", "Veri İşleme"],
    class: "w",
    detailedSpecs: {
      processor: {
        type: "Intel® Xeon® W-3400 Series",
        cores: "12 / 16 / 24 / 32 / 48 / 56 Cores",
        threads: "112 Threads'e kadar",
        cache: "105MB Cache'e kadar",
        frequency: "4.8 GHz Turbo'ya kadar",
      },
      memory: {
        type: "DDR5 ECC RDIMM",
        capacity: "2TB'a kadar (8x 256GB)",
        speed: "4800 MHz",
        channels: "8-Channel",
      },
      graphics: {
        slots: "4x Double-Wide GPU",
        options: "NVIDIA RTX 6000 Ada, RTX 5000 Ada, RTX A6000",
        sli: "NVLink Desteği",
      },
      storage: {
        nvme: "4x M.2 NVMe PCIe 5.0",
        sata: "4x SATA 6Gb/s",
        raid: "Hardware RAID 0/1/5/10",
      },
      expansion: {
        pcie: "7x PCIe 5.0 Slots",
        usb: "10x USB 3.2, 2x USB-C Thunderbolt 4",
        network: "10GbE",
      },
    },
    useCases: [
      "Multi-GPU rendering farms",
      "AI ve machine learning workflows",
      "Enterprise simülasyon çalışmaları",
      "Büyük ölçekli veri işleme",
      "Mission-critical production",
    ],
  },
  {
    id: "w3",
    name: "APEXX W3",
    title: "Kompakt Xeon",
    description:
      "Küçük form faktöründe Intel® Xeon® güvenilirliği ve performansı ile profesyonel projeleriniz için.",
    image: "https://boxx.com/Files/Images/Products/Apexx%204%20front%20hero_700.png",
    processor: "Intel Xeon W-2400",
    cores: "24'e kadar çekirdek",
    memory: "512GB'a kadar DDR5 ECC",
    graphics: "2'ye kadar NVIDIA RTX",
    storage: "Multi-NVMe PCIe 5.0 SSD",
    powerSupply: "1000W",
    formFactor: "Compact Tower",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["CAD/CAM", "3D Rendering", "Video Prodüksiyon", "Bilimsel Hesaplama"],
    class: "w",
    detailedSpecs: {
      processor: {
        type: "Intel® Xeon® W-2400 Series",
        cores: "6 / 8 / 12 / 16 / 24 Cores",
        threads: "48 Threads'e kadar",
        cache: "45MB Cache'e kadar",
        frequency: "5.0 GHz Turbo'ya kadar",
      },
      memory: {
        type: "DDR5 ECC UDIMM",
        capacity: "512GB'a kadar (4x 128GB)",
        speed: "4800 MHz",
        channels: "4-Channel",
      },
      graphics: {
        slots: "2x Double-Wide GPU",
        options: "NVIDIA RTX 5000 Ada, RTX 4500 Ada, RTX A5000",
        sli: "Desteklenmez",
      },
      storage: {
        nvme: "2x M.2 NVMe PCIe 5.0",
        sata: "2x SATA 6Gb/s",
        raid: "Software RAID 0/1",
      },
      expansion: {
        pcie: "4x PCIe 5.0 Slots",
        usb: "8x USB 3.2, 2x USB-C",
        network: "2.5GbE",
      },
    },
    useCases: [
      "Profesyonel CAD/CAM iş yükleri",
      "3D rendering ve görselleştirme",
      "Video prodüksiyon ve encoding",
      "Bilimsel modelleme",
      "Enterprise güvenilirlik gereksinimleri",
    ],
  },
  {
    id: "s4",
    name: "APEXX S4",
    title: "Performance Tuned",
    description:
      "Intel® Core™ Ultra işlemci ile optimize edilmiş hızlı CAD, 3D ve motion media performansı.",
    image: "https://aecmag.com/wp-content/uploads/2023/01/BOXX-APEXX4.jpg",
    processor: "Intel Core Ultra 9",
    cores: "24'e kadar çekirdek",
    memory: "192GB'a kadar DDR5",
    graphics: "2'ye kadar NVIDIA RTX",
    storage: "NVMe PCIe 4.0 SSD",
    powerSupply: "850W",
    formFactor: "Tower Workstation",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["CAD", "3D Modelleme", "Video Düzenleme", "Real-time Rendering"],
    class: "s",
    detailedSpecs: {
      processor: {
        type: "Intel® Core™ Ultra 9 Processor",
        cores: "24 Cores (8P + 16E)",
        threads: "32 Threads",
        cache: "36MB Intel Smart Cache",
        frequency: "5.7 GHz Turbo'ya kadar",
      },
      memory: {
        type: "DDR5 UDIMM",
        capacity: "192GB'a kadar (4x 48GB)",
        speed: "5600 MHz",
        channels: "2-Channel",
      },
      graphics: {
        slots: "2x Double-Wide GPU",
        options: "NVIDIA RTX 5000 Ada, RTX 4500 Ada, RTX 4000 Ada",
        sli: "Desteklenmez",
      },
      storage: {
        nvme: "2x M.2 NVMe PCIe 4.0",
        sata: "4x SATA 6Gb/s",
        raid: "Software RAID 0/1",
      },
      expansion: {
        pcie: "4x PCIe 4.0 Slots",
        usb: "8x USB 3.2, 2x USB-C Thunderbolt 4",
        network: "2.5GbE",
      },
    },
    useCases: [
      "CAD ve teknik tasarım",
      "Real-time 3D modelleme",
      "4K video düzenleme",
      "Motion graphics ve compositing",
      "Adobe Creative Cloud workflows",
    ],
  },
  {
    id: "s3",
    name: "APEXX S3",
    title: "Kompakt S-Class",
    description:
      "Küçük form faktöründe Intel® Core™ Ultra ile profesyonel içerik oluşturma gücü.",
    image: "https://boxx.com/Files/Images/Products/Apexx%204%20front%20hero_700.png",
    processor: "Intel Core Ultra 7",
    cores: "20'ye kadar çekirdek",
    memory: "96GB'a kadar DDR5",
    graphics: "NVIDIA RTX",
    storage: "NVMe PCIe 4.0 SSD",
    powerSupply: "650W",
    formFactor: "Compact Tower",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["CAD", "Video Prodüksiyon", "3D Grafik", "Adobe Creative Cloud"],
    class: "s",
    detailedSpecs: {
      processor: {
        type: "Intel® Core™ Ultra 7 Processor",
        cores: "20 Cores (6P + 8E + 6LPE)",
        threads: "20 Threads",
        cache: "24MB Intel Smart Cache",
        frequency: "5.0 GHz Turbo'ya kadar",
      },
      memory: {
        type: "DDR5 UDIMM",
        capacity: "96GB'a kadar (2x 48GB)",
        speed: "5600 MHz",
        channels: "2-Channel",
      },
      graphics: {
        slots: "1x Double-Wide GPU",
        options: "NVIDIA RTX 4500 Ada, RTX 4000 Ada, RTX A4000",
        sli: "Desteklenmez",
      },
      storage: {
        nvme: "2x M.2 NVMe PCIe 4.0",
        sata: "2x SATA 6Gb/s",
        raid: "Software RAID 0/1",
      },
      expansion: {
        pcie: "3x PCIe 4.0 Slots",
        usb: "6x USB 3.2, 1x USB-C Thunderbolt 4",
        network: "1GbE",
      },
    },
    useCases: [
      "Kompakt CAD workstation",
      "Video prodüksiyon ve editing",
      "3D grafik tasarım",
      "Adobe Creative Suite kullanımı",
      "Small office / home office",
    ],
  },
  {
    id: "e3",
    name: "APEXX E3",
    title: "Entry Level Professional",
    description:
      "Intel® Core™ Ultra ile entry level CAD, 3D ve motion media uygulamaları için uygun maliyetli çözüm.",
    image: "https://boxx.com/Files/Images/Products/Apexx%204%20front%20hero_700.png",
    processor: "Intel Core Ultra 5",
    cores: "14'e kadar çekirdek",
    memory: "64GB'a kadar DDR5",
    graphics: "NVIDIA RTX",
    storage: "NVMe PCIe 4.0 SSD",
    powerSupply: "550W",
    formFactor: "Compact Tower",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["CAD", "Video Düzenleme", "Grafik Tasarım", "3D Modelleme"],
    class: "e",
    detailedSpecs: {
      processor: {
        type: "Intel® Core™ Ultra 5 Processor",
        cores: "14 Cores (4P + 8E + 2LPE)",
        threads: "18 Threads",
        cache: "18MB Intel Smart Cache",
        frequency: "4.5 GHz Turbo'ya kadar",
      },
      memory: {
        type: "DDR5 UDIMM",
        capacity: "64GB'a kadar (2x 32GB)",
        speed: "5200 MHz",
        channels: "2-Channel",
      },
      graphics: {
        slots: "1x Double-Wide GPU",
        options: "NVIDIA RTX 4000 Ada, RTX A4000, RTX A2000",
        sli: "Desteklenmez",
      },
      storage: {
        nvme: "1x M.2 NVMe PCIe 4.0",
        sata: "2x SATA 6Gb/s",
        raid: "Desteklenmez",
      },
      expansion: {
        pcie: "2x PCIe 4.0 Slots",
        usb: "6x USB 3.2, 1x USB-C",
        network: "1GbE",
      },
    },
    useCases: [
      "Entry-level CAD çalışmaları",
      "Video düzenleme ve encoding",
      "Grafik tasarım ve DTP",
      "Temel 3D modelleme",
      "Küçük işletme ihtiyaçları",
    ],
  },
  {
    id: "a4",
    name: "APEXX A4",
    title: "Ryzen 9000 Gücü",
    description:
      "AMD Ryzen™ 9000 Serisi ile hızlı 3D içerik oluşturma, render ve simülasyon için yüksek performans.",
    image: "https://ml.globenewswire.com/Resource/Download/712db5b9-8fe5-49ea-8153-ad27a0f26036",
    processor: "AMD Ryzen 9 9950X",
    cores: "16 çekirdek",
    memory: "192GB'a kadar DDR5",
    graphics: "2'ye kadar NVIDIA RTX",
    storage: "NVMe PCIe 5.0 SSD",
    powerSupply: "850W",
    formFactor: "Tower Workstation",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["3D Rendering", "Video Prodüksiyon", "Simülasyon", "Motion Graphics"],
    class: "a",
    detailedSpecs: {
      processor: {
        type: "AMD Ryzen™ 9 9950X",
        cores: "16 Cores",
        threads: "32 Threads",
        cache: "80MB Total Cache",
        frequency: "5.7 GHz Boost'a kadar",
      },
      memory: {
        type: "DDR5 UDIMM",
        capacity: "192GB'a kadar (4x 48GB)",
        speed: "5600 MHz",
        channels: "2-Channel",
      },
      graphics: {
        slots: "2x Double-Wide GPU",
        options: "NVIDIA RTX 5000 Ada, RTX 4500 Ada, RTX 4000 Ada",
        sli: "Desteklenmez",
      },
      storage: {
        nvme: "2x M.2 NVMe PCIe 5.0",
        sata: "4x SATA 6Gb/s",
        raid: "Software RAID 0/1",
      },
      expansion: {
        pcie: "4x PCIe 5.0 Slots",
        usb: "8x USB 3.2, 2x USB-C",
        network: "2.5GbE",
      },
    },
    useCases: [
      "3D rendering ve animasyon",
      "Video prodüksiyon workflows",
      "CPU-intensive simülasyonlar",
      "Content creation ve streaming",
      "Gaming ve entertainment production",
    ],
  },
  {
    id: "a3",
    name: "APEXX A3",
    title: "Kompakt Ryzen",
    description:
      "Küçük form faktöründe AMD Ryzen™ 9000 Serisi ile içerik oluşturma ve rendering gücü.",
    image: "https://boxx.com/Files/Images/Products/Apexx%204%20front%20hero_700.png",
    processor: "AMD Ryzen 9 9900X",
    cores: "12 çekirdek",
    memory: "128GB'a kadar DDR5",
    graphics: "NVIDIA RTX",
    storage: "NVMe PCIe 5.0 SSD",
    powerSupply: "650W",
    formFactor: "Compact Tower",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["Video Düzenleme", "3D Grafik", "Rendering", "Grafik Tasarım"],
    class: "a",
    detailedSpecs: {
      processor: {
        type: "AMD Ryzen™ 9 9900X",
        cores: "12 Cores",
        threads: "24 Threads",
        cache: "76MB Total Cache",
        frequency: "5.4 GHz Boost'a kadar",
      },
      memory: {
        type: "DDR5 UDIMM",
        capacity: "128GB'a kadar (4x 32GB)",
        speed: "5600 MHz",
        channels: "2-Channel",
      },
      graphics: {
        slots: "1x Double-Wide GPU",
        options: "NVIDIA RTX 4500 Ada, RTX 4000 Ada, RTX A4000",
        sli: "Desteklenmez",
      },
      storage: {
        nvme: "2x M.2 NVMe PCIe 5.0",
        sata: "2x SATA 6Gb/s",
        raid: "Software RAID 0/1",
      },
      expansion: {
        pcie: "3x PCIe 5.0 Slots",
        usb: "6x USB 3.2, 1x USB-C",
        network: "1GbE",
      },
    },
    useCases: [
      "Kompakt video editing station",
      "3D grafik ve modelleme",
      "CPU rendering workflows",
      "Grafik tasarım ve illustrasyon",
      "Freelance content creation",
    ],
  },
];

export default async function ApexxProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = apexxProducts.find((p) => p.id === slug);

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
              <Link href="/urunler/apexx" className="text-sm text-gray-300 hover:text-white">
                ← APEXX Serisi
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
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>

              {/* Details */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Ürün Özellikleri</h2>
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
                    <div className="text-sm font-semibold text-gray-500">GRAFİK</div>
                    <div className="mt-1 font-semibold text-gray-900">{product.graphics}</div>
                  </div>
                  {product.storage && (
                    <div className="rounded-lg bg-gray-50 p-4">
                      <div className="text-sm font-semibold text-gray-500">DEPOLAMA</div>
                      <div className="mt-1 font-semibold text-gray-900">{product.storage}</div>
                    </div>
                  )}
                  {product.powerSupply && (
                    <div className="rounded-lg bg-gray-50 p-4">
                      <div className="text-sm font-semibold text-gray-500">GÜÇ KAYNAĞI</div>
                      <div className="mt-1 font-semibold text-gray-900">{product.powerSupply}</div>
                    </div>
                  )}
                </div>

                {/* Price & CTA */}
                <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
                  <div className="mb-4 text-2xl font-bold text-primary">{product.startingPrice}</div>
                  <div className="flex gap-3">
                    <Button asChild className="flex-1" size="lg">
                      <Link href="/iletisim">Teklif Al</Link>
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
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Multi-GPU</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.graphics.sli}</td>
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
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Genişleme & Bağlantı</h3>
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">PCIe Slotları</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.expansion.pcie}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">USB Portları</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.expansion.usb}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm font-semibold text-gray-700">Network</td>
                        <td className="py-3 text-sm text-gray-900">{product.detailedSpecs.expansion.network}</td>
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
              <div className="grid gap-6 md:grid-cols-2">
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

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">{product.name} Hakkında Daha Fazla Bilgi?</h2>
            <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
              Ürün hakkında detaylı bilgi almak, teknik özellikler hakkında konuşmak veya
              ihtiyaçlarınıza özel yapılandırma için uzmanlarımızla görüşün.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/iletisim">İletişime Geçin</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10">
                <Link href="/urunler/apexx">Diğer APEXX Modelleri</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
