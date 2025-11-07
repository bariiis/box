"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

const apexxProducts = [
  // T PRO-Class Products
  {
    id: "t4-pro-x",
    name: "APEXX T4 PRO-X",
    title: "En Yüksek Performans",
    description:
      "AMD Ryzen™ Threadripper™ PRO 7000WX Serisi ile gelişmiş AI, rendering ve simülasyon iş yükleri için ultimate performans.",
    image: "https://ugc.same-assets.com/KS3Xq65H2uf-jnKgh-diHtNoMO5bIf-6.png",
    processor: "AMD Ryzen Threadripper PRO 7000WX",
    cores: "96'ya kadar çekirdek",
    memory: "2TB'a kadar DDR5 ECC",
    graphics: "4'e kadar NVIDIA RTX",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["AI Model Eğitimi", "GPU Rendering", "8K Video Düzenleme", "CFD Simülasyonu"],
    class: "t-pro",
  },
  {
    id: "t4-pro",
    name: "APEXX T4 PRO",
    title: "Profesyonel Performans",
    description:
      "AMD Ryzen™ Threadripper™ PRO ile yüksek performanslı içerik oluşturma ve profesyonel uygulamalar için ideal.",
    image: "https://ugc.same-assets.com/LDnwMOoaKeVe8RsvNQVCAfD0pvgwOpzt.png",
    processor: "AMD Ryzen Threadripper PRO 5000WX",
    cores: "64'e kadar çekirdek",
    memory: "512GB'a kadar DDR4 ECC",
    graphics: "3'e kadar NVIDIA RTX",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["3D Modelleme", "Video Rendering", "CAD/CAM", "Veri Analizi"],
    class: "t-pro",
  },
  // T-Class Products
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
    startingPrice: "Fiyat için iletişime geçin",
    features: ["3D Animasyon", "Video İşleme", "Paralel Rendering", "Simülasyon"],
    class: "t",
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
    startingPrice: "Fiyat için iletişime geçin",
    features: ["Video Düzenleme", "3D Modelleme", "Rendering", "Motion Graphics"],
    class: "t",
  },
  // W-Class Products
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
    startingPrice: "Fiyat için iletişime geçin",
    features: ["GPU Rendering", "AI İş Yükleri", "Simülasyon", "Veri İşleme"],
    class: "w",
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
    startingPrice: "Fiyat için iletişime geçin",
    features: ["CAD/CAM", "3D Rendering", "Video Prodüksiyon", "Bilimsel Hesaplama"],
    class: "w",
  },
  // S-Class Products
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
    startingPrice: "Fiyat için iletişime geçin",
    features: ["CAD", "3D Modelleme", "Video Düzenleme", "Real-time Rendering"],
    class: "s",
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
    startingPrice: "Fiyat için iletişime geçin",
    features: ["CAD", "Video Prodüksiyon", "3D Grafik", "Adobe Creative Cloud"],
    class: "s",
  },
  // E-Class Products
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
    startingPrice: "Fiyat için iletişime geçin",
    features: ["CAD", "Video Düzenleme", "Grafik Tasarım", "3D Modelleme"],
    class: "e",
  },
  // A-Class Products
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
    startingPrice: "Fiyat için iletişime geçin",
    features: ["3D Rendering", "Video Prodüksiyon", "Simülasyon", "Motion Graphics"],
    class: "a",
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
    startingPrice: "Fiyat için iletişime geçin",
    features: ["Video Düzenleme", "3D Grafik", "Rendering", "Grafik Tasarım"],
    class: "a",
  },
];

export default function ApexxSeriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [compareList, setCompareList] = useState<string[]>([]);

  const filteredProducts = apexxProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.processor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesClass = !selectedClass || product.class === selectedClass;

    return matchesSearch && matchesClass;
  });

  const toggleCompare = (productId: string) => {
    setCompareList((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : prev.length < 3
        ? [...prev, productId]
        : prev
    );
  };

  const clearCompare = () => setCompareList([]);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMGFjZTIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoMTR2MTRIMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
          </div>
          <div className="container relative mx-auto px-4 text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-6xl">
              APEXX Serisi İş İstasyonları
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300">
              Yaratıcı profesyoneller için özel olarak tasarlanmış yüksek performanslı masaüstü iş istasyonları.
              Her sınıf, farklı işlemci teknolojileri ve performans seviyeleri için optimize edilmiştir.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                <Link href="#classes">Sınıfları Keşfet</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                <Link href="/iletisim">Teklif Al</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* APEXX Classes Explained */}
        <section id="classes" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              APEXX Sınıfları Açıklaması
            </h2>
            <p className="mb-12 text-center text-lg text-gray-600 max-w-4xl mx-auto">
              BOXX, yaratıcı uygulamalar için özel olarak tasarlanmış çok çeşitli masaüstü APEXX iş istasyonları sunar.
              İş istasyonu sınıf isimleri, her ürünün belirli Intel ve AMD işlemcisine göre belirlenir,
              sayı ise kasa boyutunu belirtir.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <h3 className="mb-2 text-xl font-bold text-primary">T PRO-Class</h3>
                <p className="mb-2 text-sm font-semibold">AMD Ryzen™ Threadripper™ PRO</p>
                <p className="text-sm text-gray-600">T4 PRO-X, T4 PRO</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <h3 className="mb-2 text-xl font-bold text-primary">T-Class</h3>
                <p className="mb-2 text-sm font-semibold">AMD Ryzen™ Threadripper™</p>
                <p className="text-sm text-gray-600">T4, T3</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <h3 className="mb-2 text-xl font-bold text-primary">W-Class</h3>
                <p className="mb-2 text-sm font-semibold">Intel® Xeon®</p>
                <p className="text-sm text-gray-600">W4, W3</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <h3 className="mb-2 text-xl font-bold text-primary">S-Class</h3>
                <p className="mb-2 text-sm font-semibold">Intel® Core™ Ultra, Performance Tuned</p>
                <p className="text-sm text-gray-600">S4, S3</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <h3 className="mb-2 text-xl font-bold text-primary">E-Class</h3>
                <p className="mb-2 text-sm font-semibold">Intel® Core™ Ultra</p>
                <p className="text-sm text-gray-600">E3</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <h3 className="mb-2 text-xl font-bold text-primary">A-Class</h3>
                <p className="mb-2 text-sm font-semibold">AMD Ryzen™ 9000 Series</p>
                <p className="text-sm text-gray-600">A4, A3</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Search Section */}
        <section className="bg-white py-8 border-b border-gray-200 sticky top-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Ürün, işlemci veya özellik ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Class Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedClass(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    selectedClass === null
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Tümü
                </button>
                {["t-pro", "t", "w", "s", "e", "a"].map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setSelectedClass(cls)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      selectedClass === cls
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cls === "t-pro" ? "T PRO" : cls.toUpperCase()}-Class
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
              {filteredProducts.length} ürün bulundu
              {searchTerm && ` - "${searchTerm}" araması için`}
            </div>
          </div>
        </section>

        {/* Compare Panel */}
        {compareList.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary shadow-2xl z-50 py-4">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-bold">
                    Karşılaştırma ({compareList.length}/3)
                  </h3>
                  <div className="flex gap-2">
                    {compareList.map((id) => {
                      const product = apexxProducts.find((p) => p.id === id);
                      return (
                        <div
                          key={id}
                          className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg"
                        >
                          <span className="text-sm font-semibold">{product?.name}</span>
                          <button
                            onClick={() => toggleCompare(id)}
                            className="text-gray-500 hover:text-red-600"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={clearCompare} variant="outline">
                    Temizle
                  </Button>
                  <Button asChild>
                    <Link href={`/urunler/apexx/karsilastir?ids=${compareList.join(",")}`}>
                      Karşılaştır
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filtered Products Grid */}
        {filteredProducts.length === 0 ? (
          <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
              <p className="text-xl text-gray-600">
                Aradığınız kriterlere uygun ürün bulunamadı.
              </p>
            </div>
          </section>
        ) : (
          <>
            {/* T PRO-Class */}
            {filteredProducts.some(p => p.class === "t-pro") && (
              <section id="t-pro-class" className="bg-white py-16">
                <div className="container mx-auto px-4">
                  <div className="mb-12">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">T PRO-Class</h2>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl font-bold text-primary">AMD RYZEN THREADRIPPER PRO</div>
                    </div>
                    <p className="text-lg text-gray-600">
                      En yüksek performans gerektiren iş yükleri için: T4 PRO-X, T4 PRO
                    </p>
                  </div>
                  <div className="grid gap-8 md:grid-cols-2">
                    {filteredProducts.filter(p => ['t4-pro-x', 't4-pro'].includes(p.id)).map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl border-2 border-gray-200"
                >
                  <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-sm font-bold text-primary">{product.name}</div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{product.title}</h3>
                    <p className="mb-4 text-gray-600">{product.description}</p>
                    <div className="mb-4 grid grid-cols-2 gap-3 border-t border-gray-200 pt-4">
                      <div className="text-sm">
                        <div className="font-semibold">İŞLEMCİ:</div>
                        <div className="text-gray-600">{product.processor}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">ÇEKİRDEK:</div>
                        <div className="text-gray-600">{product.cores}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">BELLEK:</div>
                        <div className="text-gray-600">{product.memory}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">GRAFİK:</div>
                        <div className="text-gray-600">{product.graphics}</div>
                      </div>
                    </div>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="rounded bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="mb-4 text-sm text-gray-600">{product.startingPrice}</div>
                      <div className="flex gap-2 mb-3">
                        <Button asChild className="flex-1" variant="outline">
                          <Link href={`/urunler/apexx/${product.id}`}>Detaylar</Link>
                        </Button>
                        <Button asChild className="flex-1">
                          <Link href="/iletisim">Teklif Al</Link>
                        </Button>
                      </div>
                      <Button
                        onClick={() => toggleCompare(product.id)}
                        variant={compareList.includes(product.id) ? "default" : "outline"}
                        className="w-full"
                        disabled={!compareList.includes(product.id) && compareList.length >= 3}
                      >
                        {compareList.includes(product.id) ? "Karşılaştırmadan Çıkar" : "Karşılaştırmaya Ekle"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
            )}

        {/* T-Class */}
        {filteredProducts.some(p => p.class === "t") && (
        <section id="t-class" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">T-Class</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold text-primary">AMD RYZEN THREADRIPPER</div>
              </div>
              <p className="text-lg text-gray-600">
                Hızlı 3D içerik oluşturma ve motion media için: T4, T3
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {filteredProducts.filter(p => ['t4', 't3'].includes(p.id)).map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl border-2 border-gray-200"
                >
                  <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-sm font-bold text-primary">{product.name}</div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{product.title}</h3>
                    <p className="mb-4 text-gray-600">{product.description}</p>
                    <div className="mb-4 grid grid-cols-2 gap-3 border-t border-gray-200 pt-4">
                      <div className="text-sm">
                        <div className="font-semibold">İŞLEMCİ:</div>
                        <div className="text-gray-600">{product.processor}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">ÇEKİRDEK:</div>
                        <div className="text-gray-600">{product.cores}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">BELLEK:</div>
                        <div className="text-gray-600">{product.memory}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">GRAFİK:</div>
                        <div className="text-gray-600">{product.graphics}</div>
                      </div>
                    </div>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="rounded bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="mb-4 text-sm text-gray-600">{product.startingPrice}</div>
                      <div className="flex gap-2 mb-3">
                        <Button asChild className="flex-1" variant="outline">
                          <Link href={`/urunler/apexx/${product.id}`}>Detaylar</Link>
                        </Button>
                        <Button asChild className="flex-1">
                          <Link href="/iletisim">Teklif Al</Link>
                        </Button>
                      </div>
                      <Button
                        onClick={() => toggleCompare(product.id)}
                        variant={compareList.includes(product.id) ? "default" : "outline"}
                        className="w-full"
                        disabled={!compareList.includes(product.id) && compareList.length >= 3}
                      >
                        {compareList.includes(product.id) ? "Karşılaştırmadan Çıkar" : "Karşılaştırmaya Ekle"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* W-Class */}
        {filteredProducts.some(p => p.class === "w") && (
        <section id="w-class" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">W-Class</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold text-primary">INTEL XEON</div>
              </div>
              <p className="text-lg text-gray-600">
                Rendering, simülasyon ve masaüstü AI için 4'e kadar GPU: W4, W3
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {filteredProducts.filter(p => ['w4', 'w3'].includes(p.id)).map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl border-2 border-gray-200"
                >
                  <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-sm font-bold text-primary">{product.name}</div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{product.title}</h3>
                    <p className="mb-4 text-gray-600">{product.description}</p>
                    <div className="mb-4 grid grid-cols-2 gap-3 border-t border-gray-200 pt-4">
                      <div className="text-sm">
                        <div className="font-semibold">İŞLEMCİ:</div>
                        <div className="text-gray-600">{product.processor}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">ÇEKİRDEK:</div>
                        <div className="text-gray-600">{product.cores}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">BELLEK:</div>
                        <div className="text-gray-600">{product.memory}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">GRAFİK:</div>
                        <div className="text-gray-600">{product.graphics}</div>
                      </div>
                    </div>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="rounded bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="mb-4 text-sm text-gray-600">{product.startingPrice}</div>
                      <div className="flex gap-2 mb-3">
                        <Button asChild className="flex-1" variant="outline">
                          <Link href={`/urunler/apexx/${product.id}`}>Detaylar</Link>
                        </Button>
                        <Button asChild className="flex-1">
                          <Link href="/iletisim">Teklif Al</Link>
                        </Button>
                      </div>
                      <Button
                        onClick={() => toggleCompare(product.id)}
                        variant={compareList.includes(product.id) ? "default" : "outline"}
                        className="w-full"
                        disabled={!compareList.includes(product.id) && compareList.length >= 3}
                      >
                        {compareList.includes(product.id) ? "Karşılaştırmadan Çıkar" : "Karşılaştırmaya Ekle"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* S-Class */}
        {filteredProducts.some(p => p.class === "s") && (
        <section id="s-class" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">S-Class</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold text-primary">INTEL CORE ULTRA</div>
              </div>
              <p className="text-lg text-gray-600">
                Hızlı CAD, 3D ve motion media performansı için: S4, S3
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {filteredProducts.filter(p => ['s4', 's3'].includes(p.id)).map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl border-2 border-gray-200"
                >
                  <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-sm font-bold text-primary">{product.name}</div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{product.title}</h3>
                    <p className="mb-4 text-gray-600">{product.description}</p>
                    <div className="mb-4 grid grid-cols-2 gap-3 border-t border-gray-200 pt-4">
                      <div className="text-sm">
                        <div className="font-semibold">İŞLEMCİ:</div>
                        <div className="text-gray-600">{product.processor}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">ÇEKİRDEK:</div>
                        <div className="text-gray-600">{product.cores}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">BELLEK:</div>
                        <div className="text-gray-600">{product.memory}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">GRAFİK:</div>
                        <div className="text-gray-600">{product.graphics}</div>
                      </div>
                    </div>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="rounded bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="mb-4 text-sm text-gray-600">{product.startingPrice}</div>
                      <div className="flex gap-2 mb-3">
                        <Button asChild className="flex-1" variant="outline">
                          <Link href={`/urunler/apexx/${product.id}`}>Detaylar</Link>
                        </Button>
                        <Button asChild className="flex-1">
                          <Link href="/iletisim">Teklif Al</Link>
                        </Button>
                      </div>
                      <Button
                        onClick={() => toggleCompare(product.id)}
                        variant={compareList.includes(product.id) ? "default" : "outline"}
                        className="w-full"
                        disabled={!compareList.includes(product.id) && compareList.length >= 3}
                      >
                        {compareList.includes(product.id) ? "Karşılaştırmadan Çıkar" : "Karşılaştırmaya Ekle"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* E-Class */}
        {filteredProducts.some(p => p.class === "e") && (
        <section id="e-class" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">E-Class</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold text-primary">INTEL CORE ULTRA</div>
              </div>
              <p className="text-lg text-gray-600">
                Entry level CAD, 3D ve motion media uygulamaları için: E3
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {filteredProducts.filter(p => ['e3'].includes(p.id)).map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl border-2 border-gray-200"
                >
                  <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-sm font-bold text-primary">{product.name}</div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{product.title}</h3>
                    <p className="mb-4 text-gray-600">{product.description}</p>
                    <div className="mb-4 grid grid-cols-2 gap-3 border-t border-gray-200 pt-4">
                      <div className="text-sm">
                        <div className="font-semibold">İŞLEMCİ:</div>
                        <div className="text-gray-600">{product.processor}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">ÇEKİRDEK:</div>
                        <div className="text-gray-600">{product.cores}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">BELLEK:</div>
                        <div className="text-gray-600">{product.memory}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">GRAFİK:</div>
                        <div className="text-gray-600">{product.graphics}</div>
                      </div>
                    </div>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="rounded bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="mb-4 text-sm text-gray-600">{product.startingPrice}</div>
                      <div className="flex gap-2 mb-3">
                        <Button asChild className="flex-1" variant="outline">
                          <Link href={`/urunler/apexx/${product.id}`}>Detaylar</Link>
                        </Button>
                        <Button asChild className="flex-1">
                          <Link href="/iletisim">Teklif Al</Link>
                        </Button>
                      </div>
                      <Button
                        onClick={() => toggleCompare(product.id)}
                        variant={compareList.includes(product.id) ? "default" : "outline"}
                        className="w-full"
                        disabled={!compareList.includes(product.id) && compareList.length >= 3}
                      >
                        {compareList.includes(product.id) ? "Karşılaştırmadan Çıkar" : "Karşılaştırmaya Ekle"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* A-Class */}
        {filteredProducts.some(p => p.class === "a") && (
        <section id="a-class" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">A-Class</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold text-primary">AMD RYZEN 9000 SERIES</div>
              </div>
              <p className="text-lg text-gray-600">
                Hızlı 3D içerik oluşturma, render ve simülasyon için: A4, A3
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {filteredProducts.filter(p => ['a4', 'a3'].includes(p.id)).map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl border-2 border-gray-200"
                >
                  <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-sm font-bold text-primary">{product.name}</div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{product.title}</h3>
                    <p className="mb-4 text-gray-600">{product.description}</p>
                    <div className="mb-4 grid grid-cols-2 gap-3 border-t border-gray-200 pt-4">
                      <div className="text-sm">
                        <div className="font-semibold">İŞLEMCİ:</div>
                        <div className="text-gray-600">{product.processor}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">ÇEKİRDEK:</div>
                        <div className="text-gray-600">{product.cores}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">BELLEK:</div>
                        <div className="text-gray-600">{product.memory}</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">GRAFİK:</div>
                        <div className="text-gray-600">{product.graphics}</div>
                      </div>
                    </div>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="rounded bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="mb-4 text-sm text-gray-600">{product.startingPrice}</div>
                      <div className="flex gap-2 mb-3">
                        <Button asChild className="flex-1" variant="outline">
                          <Link href={`/urunler/apexx/${product.id}`}>Detaylar</Link>
                        </Button>
                        <Button asChild className="flex-1">
                          <Link href="/iletisim">Teklif Al</Link>
                        </Button>
                      </div>
                      <Button
                        onClick={() => toggleCompare(product.id)}
                        variant={compareList.includes(product.id) ? "default" : "outline"}
                        className="w-full"
                        disabled={!compareList.includes(product.id) && compareList.length >= 3}
                      >
                        {compareList.includes(product.id) ? "Karşılaştırmadan Çıkar" : "Karşılaştırmaya Ekle"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}
          </>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Hangi APEXX Sizin İçin Uygun?</h2>
            <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
              Proje ihtiyaçlarınıza en uygun APEXX iş istasyonunu seçmenize yardımcı olalım.
              Uzman ekibimiz size özel çözüm önerilerinde bulunabilir.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/iletisim">Uzmanlarımızla Görüşün</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10">
                <Link href="/cozumler/yapay-zeka">Çözüm Önerilerimizi İnceleyin</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
