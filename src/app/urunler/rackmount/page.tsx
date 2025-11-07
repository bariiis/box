"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Server, MonitorPlay, Radio, Cpu, Sparkles, Zap, GitCompare } from "lucide-react";

const useCases = [
  {
    title: "VDI",
    description: "Uzaktan erişim, uzaktan iş birliği ve veri merkezileştirmesini desteklerken güçlü kullanıcılar için üretkenliği koruyun.",
    image: "https://ext.same-assets.com/3886351630/831360051.jpeg",
    icon: <Server className="h-8 w-8" />,
  },
  {
    title: "MULTI-DISPLAY",
    description: "Özel olarak tasarlanmış, saha testlerinden geçmiş RAXX sistemi ile video duvarlarını, eğitim simülatörlerini ve daha fazlasını kolayca ve güvenilir bir şekilde çalıştırın.",
    image: "https://ext.same-assets.com/3886351630/521358616.png",
    icon: <MonitorPlay className="h-8 w-8" />,
  },
  {
    title: "PRODUCTION/BROADCAST",
    description: "Canlı prodüksiyonunuz ve çok kanallı on-air grafikleriniz için doğru yapılandırıldığında, güvenilir, yüksek performanslı RAXX sistemlerine güvenin.",
    image: "https://ext.same-assets.com/3886351630/818602345.png",
    icon: <Radio className="h-8 w-8" />,
  },
  {
    title: "RACKMOUNT WORKSTATIONS",
    description: "Bağımsız bir iş istasyonu veya sunucu odası/mobil rack bileşeni olarak BOXX rackmount iş istasyonları, yaratıcı profesyoneller için sistem merkezileştirmesi ve son teknoloji performansı sağlar.",
    image: "https://ext.same-assets.com/3886351630/1646494708.png",
    icon: <Cpu className="h-8 w-8" />,
  },
  {
    title: "RAXX AI WORKSTATIONS",
    description: "NVIDIA sertifikalı RAXX AI platformları ile AI modelleri eğitimi ve inferencing performansını optimize edin veya veri merkezi ve bulut kaynaklarını artırın.",
    image: "https://ext.same-assets.com/3886351630/115658716.png",
    icon: <Sparkles className="h-8 w-8" />,
  },
  {
    title: "GPU RENDERING",
    description: "Karmaşık GPU rendering'inizi NVIDIA profesyonel grafik kartlarının çoklusu ile donatılmış bir RAXX sistemine yükleyerek iş akışınızı önemli ölçüde hızlandırın.",
    image: "https://ext.same-assets.com/3886351630/644509575.png",
    icon: <Zap className="h-8 w-8" />,
  },
];

const raxxClasses = [
  {
    name: "W-Class",
    processor: "Single Intel® Xeon®",
    color: "blue",
  },
  {
    name: "T PRO-Class",
    processor: "AMD Threadripper™ Pro",
    subtext: "Also Available In: RAXX AI",
    color: "cyan",
  },
  {
    name: "S-Class",
    processor: "Intel® Core™",
    color: "blue",
  },
];

const rackmount1U = {
  id: "raxx-s1g",
  name: "RAXX S1G",
  title: "Intel® Core™ 14th Generation",
  subtitle: "1U System & Up to Two 2 Slot GPUs",
  image: "https://ext.same-assets.com/3886351630/1290763253.png",
  specs: {
    frequency: "Up to 6.0 GHz",
    cores: "Up to 24",
    memory: "Up to 192GBDDR5-5600MHz",
    graphics: "Up to 2 GPU",
  },
};

const rackmount3U = [
  {
    id: "raxx-t3pro",
    name: "RAXX T3PRO",
    title: "AMD Ryzen™ Threadripper™ PRO 9000 Series",
    subtitle: "Up to Four NVIDIA® RTX PRO™ Blackwell GPUs",
    image: "https://ext.same-assets.com/3886351630/2522747496.png",
    specs: {
      frequency: "Up to 5.1 GHz",
      cores: "Up to 96",
      memory: "Up to 2TBDDR5-6400MHz",
      graphics: "Up to 4 GPU",
    },
  },
  {
    id: "raxx-w3",
    name: "RAXX W3",
    title: "Intel® Xeon® W-3500 Processors",
    subtitle: "3U System & Four GPUs",
    image: "https://ext.same-assets.com/3886351630/114075023.png",
    specs: {
      frequency: "Up to 4.8 GHz",
      cores: "Up to 60",
      memory: "Up to 1TBDDR5-4800MHz",
      graphics: "Up to 4 GPU",
    },
  },
];

export default function RackmountPage() {
  const [compareList, setCompareList] = useState<string[]>([]);
  const allProducts = [rackmount1U, ...rackmount3U];

  const toggleCompare = (id: string) => {
    setCompareList((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMGFjZTIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoMTR2MTRIMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="container relative z-10 mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h1 className="mb-6 text-5xl font-bold lg:text-6xl">
                  Rackmount İş İstasyonları
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Kurumsal işletmeler için özel olarak tasarlanmış BOXX RAXX rackmount iş istasyonları,
                  geniş bir profesyonel uygulama ve iş akışı yelpazesi için çığır açan performans,
                  güvenilirlik ve esneklik sunar.
                </p>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="https://ext.same-assets.com/3886351630/1582931037.png"
                  alt="RAXX Rackmount"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="text-primary">{useCase.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                    </div>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RAXX Classes Explained */}
        <section className="bg-gray-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold lg:text-4xl">
              RAXX Sınıfları Açıklaması
            </h2>
            <p className="mb-12 text-center text-lg text-gray-300">
              BOXX, hesaplama, rendering ve diğer profesyonel iş akışları için özel olarak tasarlanmış
              geniş bir rackmount sistem yelpazesi sunar.
            </p>

            {/* RAXX Logo Diagram */}
            <div className="mb-12 text-center">
              <div className="relative mx-auto inline-block">
                <Image
                  src="https://ext.same-assets.com/3886351630/878219822.jpeg"
                  alt="RAXX Naming Convention"
                  width={800}
                  height={300}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Classes Grid */}
            <div className="grid gap-6 md:grid-cols-3">
              {raxxClasses.map((raxxClass, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border-2 border-gray-700 bg-gray-900 p-8 text-center transition-all hover:border-primary"
                >
                  <h3 className="mb-4 text-2xl font-bold text-primary">{raxxClass.name}</h3>
                  <p className="text-lg text-gray-300">{raxxClass.processor}</p>
                  {raxxClass.subtext && (
                    <p className="mt-2 text-sm text-cyan-400">{raxxClass.subtext}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1U Rackmounts */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-3xl font-bold text-gray-900 lg:text-4xl">
              1U RACKMOUNTS
            </h2>

            <div className="mx-auto max-w-3xl">
              <div className="overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-xl">
                <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 p-12">
                  <Image
                    src={rackmount1U.image}
                    alt={rackmount1U.name}
                    fill
                    className="object-contain"
                  />
                  {/* Compare Checkbox */}
                  <div className="absolute top-4 right-4">
                    <label className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-md cursor-pointer hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={compareList.includes(rackmount1U.id)}
                        onChange={() => toggleCompare(rackmount1U.id)}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm font-medium">Karşılaştır</span>
                    </label>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-2 text-3xl font-bold text-primary">
                    {rackmount1U.name}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {rackmount1U.title}
                  </h3>
                  <p className="mb-6 text-gray-600">{rackmount1U.subtitle}</p>

                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="border-t border-gray-200 pt-3">
                      <div className="text-sm font-semibold text-gray-700">MAX FREQUENCY:</div>
                      <div className="text-lg font-bold text-gray-900">{rackmount1U.specs.frequency}</div>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="text-sm font-semibold text-gray-700">CORES:</div>
                      <div className="text-lg font-bold text-gray-900">{rackmount1U.specs.cores}</div>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="text-sm font-semibold text-gray-700">MEMORY:</div>
                      <div className="text-lg font-bold text-gray-900">{rackmount1U.specs.memory}</div>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="text-sm font-semibold text-gray-700">GRAPHICS:</div>
                      <div className="text-lg font-bold text-gray-900">{rackmount1U.specs.graphics}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button asChild variant="outline" className="flex-1">
                      <Link href={`/urunler/rackmount/${rackmount1U.id}`}>DAHA FAZLA BİLGİ</Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href="/iletisim">FİYAT İÇİN BİZİMLE İLETİŞİME GEÇİN</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3U Rackmounts */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-3xl font-bold text-gray-900 lg:text-4xl">
              3U RACKMOUNTS
            </h2>

            <div className="grid gap-8 lg:grid-cols-2">
              {rackmount3U.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-xl"
                >
                  <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 p-8">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                    {/* Compare Checkbox */}
                    <div className="absolute top-4 right-4">
                      <label className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-md cursor-pointer hover:bg-gray-50">
                        <input
                          type="checkbox"
                          checked={compareList.includes(product.id)}
                          onChange={() => toggleCompare(product.id)}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm font-medium">Karşılaştır</span>
                      </label>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-2 text-3xl font-bold text-primary">
                      {product.name}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {product.title}
                    </h3>
                    <p className="mb-6 text-gray-600">{product.subtitle}</p>

                    <div className="mb-6 grid grid-cols-2 gap-4">
                      <div className="border-t border-gray-200 pt-3">
                        <div className="text-sm font-semibold text-gray-700">MAX FREQUENCY:</div>
                        <div className="text-lg font-bold text-gray-900">{product.specs.frequency}</div>
                      </div>
                      <div className="border-t border-gray-200 pt-3">
                        <div className="text-sm font-semibold text-gray-700">CORES:</div>
                        <div className="text-lg font-bold text-gray-900">{product.specs.cores}</div>
                      </div>
                      <div className="border-t border-gray-200 pt-3">
                        <div className="text-sm font-semibold text-gray-700">MEMORY:</div>
                        <div className="text-lg font-bold text-gray-900">{product.specs.memory}</div>
                      </div>
                      <div className="border-t border-gray-200 pt-3">
                        <div className="text-sm font-semibold text-gray-700">GRAPHICS:</div>
                        <div className="text-lg font-bold text-gray-900">{product.specs.graphics}</div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button asChild variant="outline" className="flex-1">
                        <Link href={`/urunler/rackmount/${product.id}`}>DAHA FAZLA BİLGİ</Link>
                      </Button>
                      <Button asChild className="flex-1">
                        <Link href="/iletisim">FİYAT İÇİN BİZİMLE İLETİŞİME GEÇİN</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Rackmount Çözümlerimiz Hakkında Daha Fazla Bilgi mi İstiyorsunuz?
            </h2>
            <p className="mb-8 text-xl text-gray-100">
              Uzman ekibimiz size en uygun RAXX yapılandırmasını önermeye hazır
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/iletisim">Uzmanla Görüş</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-primary">
                <Link href="tel:08503032699">0850 303 26 99</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Comparison Floating Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white shadow-2xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <GitCompare className="h-5 w-5 text-primary" />
                <span className="font-semibold">
                  Karşılaştırma: {compareList.length}/3 ürün seçildi
                </span>
                <div className="flex gap-2">
                  {allProducts
                    .filter((p) => compareList.includes(p.id))
                    .map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm"
                      >
                        <span>{p.name}</span>
                        <button
                          onClick={() => toggleCompare(p.id)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setCompareList([])}>
                  Temizle
                </Button>
                <Button asChild disabled={compareList.length < 2}>
                  <Link href={`/urunler/rackmount/karsilastir?ids=${compareList.join(",")}`}>
                    Karşılaştır ({compareList.length})
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
