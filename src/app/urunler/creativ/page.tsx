import Image from "next/image";
import Link from "next/link";
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
    image: "https://ugc.same-assets.com/y39pCBmsD04e5TX-3zOxAkZGy6600vvy.png",
    processor: "Intel Core™ Ultra (Series 2)",
    cores: "24'e kadar çekirdek",
    memory: "192GB'a kadar DDR5",
    graphics: "1 GPU'ya kadar",
    startingPrice: "Başlangıç: $3,053",
    features: ["4K/8K Video Düzenleme", "3D Modelleme", "Grafik Tasarım", "Fotoğraf Düzenleme"],
  },
  {
    id: "creativ-plus-core-ultra",
    name: "Creativ Plus | Core Ultra",
    title: "Intel Core Ultra (Series 2) Plus Creator PC",
    description:
      "Gelişmiş içerik oluşturma için daha fazla bellek ve GPU desteği ile güçlendirilmiş performans.",
    image: "https://ugc.same-assets.com/y39pCBmsD04e5TX-3zOxAkZGy6600vvy.png",
    processor: "Intel Core™ Ultra (Series 2)",
    cores: "24'e kadar çekirdek",
    memory: "192GB'a kadar DDR5",
    graphics: "1 GPU",
    startingPrice: "Başlangıç: $4,539",
    features: ["Gerçek Zamanlı Rendering", "Multi-tasking", "Canlı Yayın", "Video Düzenleme"],
  },
  {
    id: "creativ-plus-ryzen",
    name: "Creativ Plus | Ryzen",
    title: "AMD Ryzen 9000 Series Creator PC",
    description:
      "AMD Ryzen 9000 serisi ile yüksek çekirdek performansı ve uygun fiyatlı içerik oluşturma gücü.",
    image: "https://ugc.same-assets.com/y39pCBmsD04e5TX-3zOxAkZGy6600vvy.png",
    processor: "AMD Ryzen™ 9000 Series",
    cores: "16'ya kadar çekirdek",
    memory: "192GB'a kadar DDR5",
    graphics: "1 GPU",
    startingPrice: "Başlangıç: $4,219",
    features: ["3D Rendering", "Video Production", "Adobe Creative Cloud", "Streaming"],
  },
  {
    id: "creativ-plus-threadripper",
    name: "Creativ Plus | Ryzen Threadripper",
    title: "AMD Ryzen Threadripper 9000 Creator PC",
    description:
      "Yüksek çekirdek sayısı ve bellek kapasitesi ile en zorlu içerik oluşturma görevleri için tasarlanmış sistem.",
    image: "https://ugc.same-assets.com/y39pCBmsD04e5TX-3zOxAkZGy6600vvy.png",
    processor: "AMD Ryzen™ Threadripper™ 9000",
    cores: "64'e kadar çekirdek",
    memory: "1TB'a kadar DDR5",
    graphics: "2 GPU'ya kadar",
    startingPrice: "Başlangıç: $7,204",
    features: ["8K Video Düzenleme", "Karmaşık 3D Projeler", "AI Rendering", "Paralel İşleme"],
  },
];

export default function CreativSeriesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-blue-500 to-teal-500 py-20 text-white">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-5xl font-bold lg:text-7xl">
                CREATIV
              </h1>
              <p className="mb-4 text-2xl font-semibold">
                8K düzenleme, gerçek zamanlı görselleştirme, 3D modelleme hızlandırın
              </p>
              <p className="mb-8 text-xl text-gray-100">
                BOXX'ın yeni Creator PC'leri ile tüm Adobe uygulamalarınızı hızlandırın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="#products">Ürünleri İncele</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
                  <Link href="/iletisim">Performans Uzmanıyla Konuş</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                Creator PC'ler: Yaratıcı Potansiyelinizi Ortaya Çıkarın
              </h2>
              <p className="mb-4 text-lg text-gray-700">
                Creativ PC ile İşinizi Güçlendirin. Elit Performans, Eşsiz Değer.
              </p>
              <p className="text-gray-600">
                NVIDIA® GeForce RTX™ veya RTX PRO™ GPU'lar ve BOXX güvenilirliği ile oluşturulmuş nihai PC'yi keşfedin. Yaratıcı çalışmalarınızı vizyonunuza uygun bir fiyatla destekleyin.
              </p>
            </div>
          </div>
        </section>

        {/* Specifications Overview */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-6 inline-flex items-center gap-4 rounded-lg bg-orange-500 p-4 text-white">
                  <div>
                    <div className="text-sm font-semibold">Intel CORE ULTRA</div>
                    <div className="text-3xl font-bold">AMD RYZEN</div>
                  </div>
                </div>
                <p className="mb-4 text-lg text-gray-700">
                  CPU frekansı, çekirdek ve sıvı soğutmalı performans konusunda dijital içerik oluşturucular için mükemmel dengeli.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <div className="mb-2 text-4xl font-bold text-primary">64</div>
                  <div className="text-sm font-semibold text-gray-700">Çekirdeklere Kadar</div>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <div className="mb-2 text-4xl font-bold text-primary">16,384</div>
                  <div className="text-sm font-semibold text-gray-700">Cuda Cores</div>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <div className="mb-2 text-4xl font-bold text-primary">8k HDR</div>
                  <div className="text-sm font-semibold text-gray-700">Video Desteği</div>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <div className="mb-2 text-4xl font-bold text-primary">1TB</div>
                  <div className="text-sm font-semibold text-gray-700">Bellek</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Creativ PC Modelleri
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {creativProducts.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all hover:shadow-2xl"
                >
                  {/* Product Image */}
                  <div className="relative h-80 bg-gradient-to-br from-orange-100 via-blue-100 to-teal-100 p-8">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform hover:scale-105 2xl:py-[20px]"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="mb-2 text-2xl font-bold italic text-gray-900">
                      {product.name}
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-gray-700">
                      {product.title}
                    </h3>
                    <p className="mb-4 text-gray-600">{product.description}</p>

                    {/* Specs */}
                    <div className="mb-4 grid grid-cols-2 gap-3 border-t border-gray-200 pt-4">
                      <div className="text-sm">
                        <div className="font-semibold">FREKANs:</div>
                        <div className="text-gray-600">5.7 GHz'e kadar</div>
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

                    {/* Features */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="rounded bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="mb-4 text-lg font-bold text-primary">
                        {product.startingPrice}
                      </div>
                      <div className="flex gap-2">
                        <Button asChild className="flex-1" variant="outline">
                          <Link href={`/urunler/creativ/${product.id}`}>
                            Daha Fazla Bilgi
                          </Link>
                        </Button>
                        <Button asChild className="flex-1 bg-orange-500 hover:bg-orange-600">
                          <Link href="/iletisim">
                            Özelleştir & Satın Al
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

        {/* Comparison Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Creativ PC vs. APEXX İş İstasyonları: Size Uygun Olanı Bulun
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Creativ */}
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-orange-500">Creativ PC Seçin:</h3>
                <p className="mb-4 text-gray-700">
                  Solo içerik oluşturucu veya küçük bir stüdyoysanız ve aşağıdakilere ihtiyacınız varsa:
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span className="text-gray-700"><strong>İdeal Kullanımlar:</strong> 3D Modelleme & Rendering, Video Düzenleme, Fotoğraf, Grafik Tasarım, Yayıncılık ve Mimari Görselleştirme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span className="text-gray-700"><strong>GPU:</strong> NVIDIA® GeForce RTX™ veya RTX PRO™</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span className="text-gray-700"><strong>Bellek:</strong> Hızlı ve uygun fiyatlı</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span className="text-gray-700"><strong>Tasarım:</strong> Mid-tower meraklı kasası (rackmount değil)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span className="text-gray-700"><strong>Garanti:</strong> 3 yıla kadar</span>
                  </li>
                </ul>
              </div>

              {/* APEXX */}
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-primary">APEXX Seçin:</h3>
                <p className="mb-4 text-gray-700">
                  Sertifikalı güvenilirlik, maksimum çalışma süresi, kurumsal entegrasyon veya kritik iş çözümleri gerekiyorsa:
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-700"><strong>İdeal Kullanımlar:</strong> CAD, Simülasyon, Mimarlık, İmalat ve Ürün Tasarımı</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-700"><strong>GPU:</strong> NVIDIA RTX PRO™ (ISV-sertifikalı)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-700"><strong>CPU:</strong> Intel® Core™ Ultra, AMD Ryzen™, Intel Xeon, AMD Ryzen™ Threadripper™ PRO</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-700"><strong>Bellek:</strong> Yüksek Hızlı, Yüksek Kapasiteli ve ECC Seçenekleri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-700"><strong>Genişletilebilirlik:</strong> Ağır simülasyon/tasarım iş yüklerini destekler</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-700"><strong>Tasarım:</strong> Rackmount seçenekleri ile özel kasa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-700"><strong>Garanti:</strong> 5 yıla kadar, kurumsal düzeyde destek</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-orange-500 via-blue-500 to-teal-500 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Performans Uzmanıyla Sisteminizi Özelleştirin
            </h2>
            <p className="mb-8 text-xl">
              Uzman ekibimiz size en uygun yapılandırmayı önermeye hazır
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/iletisim">Danışma Talebi</Link>
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
  title: "CREATIV Creator PC Serisi | BOXX Türkiye",
  description:
    "8K video düzenleme, 3D modelleme ve içerik oluşturma için NVIDIA GeForce RTX ve Intel/AMD işlemcili CREATIV PC'ler. Yaratıcı profesyoneller için optimize edilmiş sistemler.",
};
