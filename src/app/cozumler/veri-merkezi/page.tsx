import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Server, Layers, Shield, Zap, Cloud, TrendingUp, Users, Lock } from "lucide-react";

export default function VeriMerkeziPage() {
  const solutions = [
    {
      title: "RAXX Rackmount İş İstasyonları",
      description: "1U ve 3U form faktörlerinde yüksek performanslı rackmount sistemler. VDI, multi-display ve broadcast uygulamaları için optimize edilmiş.",
      image: "https://ext.same-assets.com/3886351630/1290763253.png",
      link: "/urunler/rackmount",
      icon: <Server className="h-8 w-8" />,
      features: ["1U/3U Rackmount", "4'e kadar GPU", "VDI Optimized", "Remote Management"],
    },
    {
      title: "HELIXX GPU Sunucular",
      description: "2U ve 4U form faktörlerinde 8'e kadar NVIDIA RTX PRO GPU desteği. AI eğitimi ve rendering farm'lar için ideal.",
      image: "https://boxx.com/Files/Images/Products/HELIXX/4U8G_%20hero_570-02.png",
      link: "/urunler/helixx",
      icon: <Zap className="h-8 w-8" />,
      features: ["8'e kadar GPU", "AI Training", "Rendering Farm", "100GbE Network"],
    },
    {
      title: "FLEXX Yüksek Yoğunluklu Sistemler",
      description: "5U kasada 10 iş istasyonu kapasitesi. Modüler tasarım ile veri merkezi optimizasyonu ve maksimum yoğunluk.",
      image: "https://ext.same-assets.com/3886351630/2135830062.png",
      link: "/urunler/flexx",
      icon: <Layers className="h-8 w-8" />,
      features: ["10 in 5U", "Hot-Swap Modules", "High Density", "Centralized Management"],
    },
  ];

  const useCases = [
    {
      title: "Virtual Desktop Infrastructure (VDI)",
      description: "Merkezi veri merkezinden tüm kullanıcılara güçlü iş istasyonu performansı sunun.",
      icon: <Cloud className="h-12 w-12" />,
    },
    {
      title: "Rendering Farm Altyapısı",
      description: "Multi-GPU rackmount sistemler ile yüksek yoğunluklu rendering çiftlikleri kurun.",
      icon: <TrendingUp className="h-12 w-12" />,
    },
    {
      title: "AI ve HPC Kümeleri",
      description: "Büyük ölçekli AI eğitimi ve bilimsel hesaplama için GPU sunucu kümeleri.",
      icon: <Zap className="h-12 w-12" />,
    },
    {
      title: "Broadcast ve Medya",
      description: "Canlı yayın ve video prodüksiyon için güvenilir rackmount sistemler.",
      icon: <Server className="h-12 w-12" />,
    },
    {
      title: "Kurumsal Workstation Konsolidasyonu",
      description: "Masaüstü iş istasyonlarını merkezi veri merkezine taşıyın.",
      icon: <Users className="h-12 w-12" />,
    },
    {
      title: "Güvenli Veri İşleme",
      description: "Hassas verileri merkezi, güvenli veri merkezinde işleyin.",
      icon: <Lock className="h-12 w-12" />,
    },
  ];

  const benefits = [
    {
      title: "Alan Tasarrufu",
      description: "Geleneksel masaüstü sistemlere göre %90'a varan alan tasarrufu sağlayın.",
      stat: "90%",
    },
    {
      title: "Enerji Verimliliği",
      description: "Merkezi soğutma ve güç yönetimi ile elektrik maliyetlerini düşürün.",
      stat: "40%",
    },
    {
      title: "Kolay Yönetim",
      description: "Tek noktadan IT yönetimi, güncellemeler ve bakım işlemleri.",
      stat: "60%",
    },
    {
      title: "Yüksek Güvenlik",
      description: "Tüm veriler merkezi veri merkezinde, fiziksel ve network güvenliği.",
      stat: "100%",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMGFjZTIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoMTR2MTRIMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex justify-center">
                <Server className="h-16 w-16 text-primary" />
              </div>
              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                Veri Merkezi ve Enterprise Altyapı Çözümleri
              </h1>
              <p className="mb-8 text-xl text-gray-200">
                BOXX rackmount sistemleri ile yüksek performanslı, ölçeklenebilir ve
                güvenilir veri merkezi altyapısı kurun. VDI'dan AI eğitimine,
                rendering farm'lardan broadcast'e kadar tüm enterprise ihtiyaçlarınız için.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="#solutions">Çözümleri İncele</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
                  <Link href="/iletisim">Uzmanla Görüş</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="solutions" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                Veri Merkezi Ürün Portföyümüz
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Her ölçekteki veri merkezi ihtiyacı için optimize edilmiş sistemler
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {solutions.map((solution, idx) => (
                <div
                  key={idx}
                  className="group overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-lg transition-all hover:border-primary hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-contain p-8 transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="text-primary">{solution.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                    </div>
                    <p className="mb-4 text-gray-600">{solution.description}</p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {solution.features.map((feature, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="w-full">
                      <Link href={solution.link}>Detaylı İncele</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                Kullanım Alanları
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Veri merkezi çözümlerimizin kullanıldığı temel alanlar
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-xl"
                >
                  <div className="mb-4 text-primary">{useCase.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                Veri Merkezi Çözümlerimizin Avantajları
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-100">
                Geleneksel altyapılara göre önemli tasarruf ve verimlilik
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="rounded-lg bg-white/10 p-8 text-center backdrop-blur transition-all hover:bg-white/20"
                >
                  <div className="mb-4 text-5xl font-bold text-white">{benefit.stat}</div>
                  <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                  <p className="text-gray-100">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                Enterprise Özellikleri
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">🔒</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Güvenlik</h3>
                <p className="text-gray-600">
                  TPM 2.0, Secure Boot, hardware encryption ile kurumsal güvenlik standartları.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4 text-3xl">⚡</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Redundant Power</h3>
                <p className="text-gray-600">
                  Hot-swap redundant güç kaynakları ile %99.9 uptime garantisi.
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
                <h3 className="mb-2 text-xl font-bold text-gray-900">High-Speed Networking</h3>
                <p className="text-gray-600">
                  10GbE/25GbE/100GbE ve InfiniBand seçenekleri ile ultra-hızlı bağlantı.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Veri Merkezi Altyapınızı Modernleştirin
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Uzman ekibimiz size özel veri merkezi çözümü tasarlamaya hazır
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/iletisim">Ücretsiz Danışmanlık Alın</Link>
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
  title: "Veri Merkezi ve Enterprise Altyapı Çözümleri | BOXX Türkiye",
  description:
    "BOXX rackmount sistemleri ile yüksek performanslı veri merkezi altyapısı. RAXX, HELIXX, FLEXX sistemleri ile VDI, AI, rendering ve broadcast çözümleri.",
  keywords: "veri merkezi, enterprise, rackmount, VDI, AI sunucu, rendering farm, RAXX, HELIXX, FLEXX",
};
