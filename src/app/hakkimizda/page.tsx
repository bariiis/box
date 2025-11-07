import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Users, Globe, Award, Heart, MapPin } from "lucide-react";

export default function HakkimizdaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="https://ext.same-assets.com/3886351630/2710799661.png"
              alt="BOXX Office"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <h1 className="mb-6 text-5xl font-bold lg:text-6xl">BOXX Hakkında</h1>
          </div>
        </section>

        {/* Company History */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/3886351630/4210222732.png"
                  alt="BOXX Headquarters"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                  Şirket Tarihçesi
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    1996 yılında Phoenix, AZ'de Digital Emulsion, Inc. olarak kurulan BOXX Technologies,
                    1998'de Austin, Texas'a taşınarak mühendislik, ürün tasarımı, mimarlık, VFX, animasyon,
                    veri bilimi ve daha fazlası için yüksek performanslı bilgisayar iş istasyonları,
                    rendering sistemleri ve sunucuların önde gelen yenilikçisi haline geldi.
                  </p>
                  <p>
                    24 yıldır BOXX, rekor kıran performansı, hızı ve güvenilirliği eşsiz sektör bilgisiyle
                    birleştirerek dünya çapında yaratıcı profesyonellerin güvenilir tercihi olmayı başardı.
                  </p>
                  <p>
                    40 uluslararası bayiye sahip küresel bir şirket olsak da, BOXX ürünlerini Austin'daki
                    şirket merkezinden ve bağlı şirketler aracılığıyla tasarlıyor, üretiyor ve
                    destekliyor; son teknoloji derin öğrenme çözümleri, veri depolama ve BT hizmetleri
                    sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold">28+</div>
                <div className="text-xl text-gray-100">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold">40+</div>
                <div className="text-xl text-gray-100">Uluslararası Bayi</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold">100%</div>
                <div className="text-xl text-gray-100">Austin, Texas'ta Üretim</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold">24/7</div>
                <div className="text-xl text-gray-100">Teknik Destek</div>
              </div>
            </div>
          </div>
        </section>

        {/* BOXX Cares */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="https://ext.same-assets.com/3886351630/3398587874.png"
                    alt="Austin, Texas"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-4 flex items-center gap-3">
                  <Heart className="h-10 w-10 text-primary" />
                  <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">BOXX Cares</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Merkez şehrimiz Austin, Texas, uluslararası düzeyde yüksek teknoloji inovasyonu,
                    eğitim ve yaratıcılığın merkezi olarak tanınmaktadır.
                  </p>
                  <p>
                    Bu toplumun gururlu bir üyesi olarak, BOXX hayırseverlik faaliyetlerini şehrimizin
                    en değerli kaynağı olan yeni nesil sanatçılar, yenilikçiler ve liderlerin
                    yetiştirilmesine odaklıyor.
                  </p>
                  <p>
                    Austin toplumuna verdiğimiz destek ve katkılarımız hakkında daha fazla bilgi
                    edinmek için BOXX Cares sayfamızı ziyaret edin.
                  </p>
                  <Button asChild variant="outline" className="mt-4">
                    <Link href="/hakkimizda/boxx-cares">Daha Fazla Bilgi</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Değerlerimiz
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-8 shadow-md">
                <Building2 className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">Yenilikçilik</h3>
                <p className="text-gray-600">
                  28 yıldır yüksek performanslı bilgisayar sistemlerinde öncü teknolojiler geliştiriyoruz.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-md">
                <Users className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">Müşteri Odaklılık</h3>
                <p className="text-gray-600">
                  Her müşterimizin benzersiz ihtiyaçlarını anlayarak özel çözümler sunuyoruz.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-md">
                <Award className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">Kalite</h3>
                <p className="text-gray-600">
                  Sadece premium, enterprise-sınıfı bileşenler kullanarak en yüksek kaliteyi garanti ediyoruz.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-md">
                <Globe className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">Küresel Erişim</h3>
                <p className="text-gray-600">
                  40+ uluslararası bayi ile dünya çapında profesyonellere hizmet veriyoruz.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-md">
                <Heart className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">Toplumsal Sorumluluk</h3>
                <p className="text-gray-600">
                  BOXX Cares ile yerel topluluğumuza ve eğitime destek sağlıyoruz.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-md">
                <MapPin className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">Yerel Üretim</h3>
                <p className="text-gray-600">
                  Austin, Texas'ta tasarlıyor, üretiyor ve "ABD'de Üretilmiştir" ile gururlanıyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Türkiye Office */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              BOXX Türkiye Ofislerimiz
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border-2 border-primary/20 bg-white p-8 shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-gray-900">Ankara Merkez Ofis</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="font-semibold">Prof. Dr. Ahmet Taner Kışlalı Mahallesi</p>
                  <p>27/76, Sokak 9/C</p>
                  <p>Çankaya / ANKARA</p>
                  <p className="mt-4">
                    <strong>Telefon:</strong>{" "}
                    <a href="tel:08503032699" className="text-primary hover:underline">
                      0850 303 26 99
                    </a>
                  </p>
                </div>
              </div>

              <div className="rounded-lg border-2 border-primary/20 bg-white p-8 shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-gray-900">İstanbul Ofis</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="font-semibold">Çubuklu Mahallesi</p>
                  <p>Engürübağ Caddesi No: 29/2</p>
                  <p>Beykoz / İSTANBUL</p>
                  <p className="mt-4">
                    <strong>Telefon:</strong>{" "}
                    <a href="tel:08503032699" className="text-primary hover:underline">
                      0850 303 26 99
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              BOXX Ailesi ile Tanışın
            </h2>
            <p className="mb-8 text-xl text-gray-100">
              Profesyonel iş istasyonu ihtiyaçlarınız için uzmanlarımızla görüşün
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/iletisim">İletişime Geçin</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-primary"
              >
                <Link href="/neden-boxx">Neden BOXX?</Link>
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
  title: "Hakkımızda",
  description:
    "1996'dan beri yüksek performanslı iş istasyonları konusunda öncü. Austin, Texas merkezli BOXX Technologies'in Türkiye ofisleri hakkında bilgi edinin.",
  keywords: ["boxx hakkında", "boxx türkiye", "austin texas", "iş istasyonu üreticisi", "boxx cares", "boxx technologies"],
  openGraph: {
    title: "Hakkımızda | BOXX Türkiye",
    description: "1996'dan beri yüksek performanslı iş istasyonları konusunda öncü. Austin, Texas merkezli BOXX Technologies'in Türkiye ofisleri.",
    type: "website",
    images: [
      {
        url: "https://ext.same-assets.com/3886351630/2710799661.png",
        width: 1200,
        height: 630,
        alt: "BOXX Türkiye Hakkında",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımızda | BOXX Türkiye",
    description: "1996'dan beri yüksek performanslı iş istasyonları konusunda öncü.",
  },
};
