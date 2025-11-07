import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Server, Layers, Zap, HardDrive } from "lucide-react";

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
    memory: "192GB'a kadar DDR5-5600MHz",
    graphics: "1 GPU'ya kadar",
    formFactor: "1vu FLEXX Modül",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["Veri Merkezi Optimizasyonu", "Uzaktan Erişim", "Modüler Tasarım", "Düşük Güç Tüketimi"],
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
    memory: "192GB'a kadar DDR5-5600MHz",
    graphics: "2 GPU'ya kadar",
    formFactor: "2vu FLEXX Modül",
    startingPrice: "Fiyat için iletişime geçin",
    features: ["Çift GPU Desteği", "Gelişmiş Soğutma", "Uzaktan Yönetim", "Yüksek Yoğunluk"],
  },
];

export default function FlexxSeriesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 py-20 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMGFjZTIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoMTR2MTRIMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="https://ext.same-assets.com/3886351630/1992044343.png"
                  alt="FLEXX"
                  width={300}
                  height={100}
                  className="brightness-0 invert"
                />
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                Yüksek Yoğunluklu Veri Merkezi İş İstasyonları
              </h1>
              <p className="mb-4 text-2xl font-semibold">
                Kompakt Ama Güçlü
              </p>
              <p className="mb-8 text-xl text-gray-200">
                Masaüstü iş istasyonu performansını rack-mounted, yüksek yoğunluklu, çok düğümlü bir sunucu sistemi modüllerinde sunan FLEXX, veri merkezi için hazır ve 10 yüksek yoğunluklu veri merkezi iş istasyonunu standart 5 birimlik rack kasasında aynı anda destekleyebilir.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="#products">Modülleri İncele</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
                  <Link href="/iletisim">Uzaktan İş İstasyonu Raporu</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              FLEXX'in Geleceği
            </h2>
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <p className="text-lg text-gray-700">
                İki boyutta ve herhangi bir bağlı cihazdan erişilebilen, her FLEXX yüksek yoğunluklu veri merkezi iş istasyonu,
                daha önce sadece masaüstü iş istasyonlarında bulunan performansı sunar. FLEXX şasisi 10 adet 1G modülü,
                5 adet 2G modülü veya aralarındaki tüm yapılandırmaları destekler. FLEXX modülleri, komşu modüllerde gücü
                kesintiye uğratmadan çıkarılabilir veya yerleştirilebilir ve mevcut blade sunucu sistemlerinin aksine,
                ağ ile ortak bir backplane paylaşan FLEXX şasi backplane'i sadece modüller arasında gücü paylaşır.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  <Server className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Yüksek Yoğunluk</h3>
                <p className="text-gray-600">
                  5U kasada 10 iş istasyonu kapasitesi
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  <Layers className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Modüler Tasarım</h3>
                <p className="text-gray-600">
                  Hot-swap modüller, kesintisiz çalışma
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  <Zap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Uzaktan Erişim</h3>
                <p className="text-gray-600">
                  Her cihazdan tam iş istasyonu gücü
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  <HardDrive className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">SOLIDWORKS Sertifikalı</h3>
                <p className="text-gray-600">
                  ISV onaylı profesyonel performans
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <Image
                src="https://ugc.same-assets.com/HLflnSKwwdv1zLWtzjAwiNvbjwlxeqVK.png"
                alt="FLEXX Sistem"
                width={1200}
                height={600}
                className="rounded-lg shadow-2xl object-contain 2xl:px-[100px] 2xl:py-[0px]"
              />
            </div>
          </div>
        </section>

        {/* CPU Options */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Intel İşlemci Seçenekleri
            </h2>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <div className="rounded-lg border-2 border-primary/20 p-8 text-center">
                <Image
                  src="https://ext.same-assets.com/3886351630/988593855.png"
                  alt="Intel Core i7"
                  width={150}
                  height={150}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">Intel Core Ultra (Series 2)</h3>
                <p className="text-gray-600">24'e kadar çekirdek, 5.7 GHz'e kadar frekans</p>
              </div>
              <div className="rounded-lg border-2 border-primary/20 p-8 text-center">
                <Image
                  src="https://ext.same-assets.com/3886351630/988593855.png"
                  alt="Intel Core i9"
                  width={150}
                  height={150}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">Intel Core 14th Gen</h3>
                <p className="text-gray-600">24'e kadar çekirdek, 6.0 GHz'e kadar frekans</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              FLEXX Modül Seçenekleri
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {flexxProducts.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-lg bg-white shadow-xl transition-all hover:shadow-2xl"
                >
                  {/* Product Image */}
                  <div className="relative h-96 bg-gradient-to-br from-blue-50 to-gray-50 p-12">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-8">
                    <div className="mb-2 text-2xl font-bold text-primary">
                      {product.name}
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                      {product.title}
                    </h3>
                    <p className="mb-6 text-gray-600">{product.description}</p>

                    {/* Specs Grid */}
                    <div className="mb-6 grid grid-cols-2 gap-4 border-t border-gray-200 pt-6">
                      <div>
                        <div className="mb-1 text-xs font-semibold uppercase text-gray-500">Frekans</div>
                        <div className="text-sm font-medium text-gray-900">{product.frequency}</div>
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
                        <div className="mb-1 text-xs font-semibold uppercase text-gray-500">Grafik</div>
                        <div className="text-sm font-medium text-gray-900">{product.graphics}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="mb-1 text-xs font-semibold uppercase text-gray-500">Form Faktör</div>
                        <div className="text-sm font-medium text-gray-900">{product.formFactor}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-primary"
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
                          <Link href={`/urunler/flexx/${product.id}`}>
                            Daha Fazla Bilgi
                          </Link>
                        </Button>
                        <Button asChild className="flex-1">
                          <Link href="/iletisim">
                            Fiyat İste
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
              FLEXX Kullanım Alanları
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 text-3xl">🏢</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Kurumsal Ofisler</h3>
                <p className="text-gray-600">
                  Merkezi veri merkezinden tüm kullanıcılara güçlü iş istasyonu erişimi
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 text-3xl">🎓</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Eğitim Kurumları</h3>
                <p className="text-gray-600">
                  Bilgisayar laboratuvarları için merkezi yönetim ve bakım kolaylığı
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 text-3xl">🎬</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Render Farm</h3>
                <p className="text-gray-600">
                  Yüksek yoğunluklu rendering ve medya prodüksiyon altyapısı
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 text-3xl">🏗️</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">AEC Firmaları</h3>
                <p className="text-gray-600">
                  CAD ve BIM yazılımları için merkezi iş istasyonu gücü
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 text-3xl">🔬</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Araştırma Labları</h3>
                <p className="text-gray-600">
                  Bilimsel hesaplama ve simülasyon için paylaşımlı kaynaklar
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 text-3xl">☁️</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Bulut Hizmet Sağlayıcıları</h3>
                <p className="text-gray-600">
                  DaaS (Desktop as a Service) ve VDI çözümleri için ideal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              FLEXX Avantajları
            </h2>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Alan Tasarrufu</h3>
                <p className="text-gray-600">
                  Geleneksel masaüstü iş istasyonlarına göre %90'a varan yer tasarrufu sağlayın
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Enerji Verimliliği</h3>
                <p className="text-gray-600">
                  Merkezi soğutma ve güç yönetimi ile elektrik maliyetlerini düşürün
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Kolay Yönetim</h3>
                <p className="text-gray-600">
                  Merkezi IT yönetimi, güncellemeler ve bakım işlemleri için tek nokta
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Ölçeklenebilirlik</h3>
                <p className="text-gray-600">
                  İhtiyaca göre modül ekleyin veya çıkarın, hızlı genişleme imkanı
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Güvenlik</h3>
                <p className="text-gray-600">
                  Tüm veriler merkezi veri merkezinde, fiziksel güvenlik ve yedekleme
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Uzaktan Çalışma</h3>
                <p className="text-gray-600">
                  Her yerden, her cihazdan tam iş istasyonu performansına erişim
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Veri Merkeziniz İçin FLEXX Çözümünü Keşfedin
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Yüksek yoğunluklu iş istasyonu altyapısı için uzmanlarımızla görüşün
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/iletisim">Uzaktan İş İstasyonu Raporu İndirin</Link>
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
  title: "FLEXX Yüksek Yoğunluklu Veri Merkezi İş İstasyonları | BOXX Türkiye",
  description:
    "FLEXX modüler veri merkezi iş istasyonları. 5U kasada 10 iş istasyonu kapasitesi, uzaktan erişim ve SOLIDWORKS sertifikalı. Kurumsal ofisler, eğitim kurumları ve render farm'lar için ideal.",
  keywords: "FLEXX, veri merkezi, rackmount, modüler iş istasyonu, uzaktan erişim, VDI, DaaS, yüksek yoğunluk",
};
