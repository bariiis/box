import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, FileText, Package, Shield, Headphones, Download } from "lucide-react";

export default function DestekPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-5xl font-bold lg:text-6xl">Destek Merkezi</h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-100">
              BOXX Türkiye teknik destek ekibi, 7/5 donanımınız ve yazılımınızla ilgili
              sorularınızda yardımcı olmak için hazır
            </p>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-center justify-center gap-4 rounded-lg bg-primary/10 p-6">
                <Phone className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-gray-600">Telefon Desteği</div>
                  <a href="tel:08503032699" className="text-xl font-bold text-primary hover:underline">
                    0850 303 26 99
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 rounded-lg bg-primary/10 p-6">
                <Mail className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-gray-600">E-posta Desteği</div>
                  <a href="mailto:destek@boxxturkiye.com" className="text-lg font-bold text-primary hover:underline">
                    destek@boxxturkiye.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 rounded-lg bg-primary/10 p-6">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-gray-600">Çalışma Saatleri</div>
                  <div className="font-bold text-gray-900">Pzt-Cum: 09:00 - 18:00</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Destek Seçenekleri
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <Headphones className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">Teknik Destek</h3>
                <p className="mb-4 text-gray-600">
                  Donanım ve yazılım sorunlarınızda uzman teknik destek ekibimiz size yardımcı olur.
                  SOLIDWORKS, Revit, Maya, C4D, V-Ray ve diğer profesyonel uygulamalarda uzmanlık.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="tel:08503032699">Hemen Ara</Link>
                </Button>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg">
                <Shield className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">Garanti Hizmeti</h3>
                <p className="mb-4 text-gray-600">
                  3 yıla kadar standart garanti, 5 yıla kadar genişletilmiş garanti seçenekleri.
                  Yerinde servis ve yedek parça garantisi ile gönül rahatlığı.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/destek/garanti">Garanti Detayları</Link>
                </Button>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg">
                <Package className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">unBOXXing</h3>
                <p className="mb-4 text-gray-600">
                  Yeni BOXX sisteminizi kurmak için adım adım rehber. Donanım kurulumu, sürücü
                  yüklemeleri ve ilk yapılandırma konusunda yardım.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/destek/unboxxing">Kurulum Rehberi</Link>
                </Button>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg">
                <FileText className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">Dokümantasyon</h3>
                <p className="mb-4 text-gray-600">
                  Kullanım kılavuzları, teknik özellikler, sürücü indirmeleri ve ürün datasheet'leri.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/destek/dokumanlar">Dökümanlar</Link>
                </Button>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg">
                <Download className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">Sürücü İndirmeleri</h3>
                <p className="mb-4 text-gray-600">
                  En son BIOS güncellemeleri, chipset sürücüleri ve firmware indirmeleri.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/destek/suruculer">Sürücüleri İndir</Link>
                </Button>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg">
                <Mail className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">RMA Talebi</h3>
                <p className="mb-4 text-gray-600">
                  Garanti kapsamında onarım veya değişim talebi oluşturun. Hızlı RMA süreci.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/destek/rma">RMA Talebi Oluştur</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty Info */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              BOXX Garanti Programı
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 rounded-lg border-2 border-primary/20 bg-primary/5 p-8">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Standart Garanti</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>3 yıl parça ve işçilik garantisi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Ömür boyu telefon desteği (Pazartesi-Cuma, 09:00-18:00)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Yerinde servis seçeneği (büyük şehirler için)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Hızlı RMA süreci - 48 saat içinde değerlendirme</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-gray-50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Genişletilmiş Garanti Seçenekleri</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border-2 border-gray-200 bg-white p-6">
                    <h4 className="mb-2 text-lg font-bold text-primary">4 Yıl Garanti</h4>
                    <p className="text-gray-600">
                      Standart garantiye ek 1 yıl kapsama, öncelikli destek
                    </p>
                  </div>
                  <div className="rounded-lg border-2 border-gray-200 bg-white p-6">
                    <h4 className="mb-2 text-lg font-bold text-primary">5 Yıl Garanti</h4>
                    <p className="text-gray-600">
                      Maksimum koruma, ömür boyu premium destek, yerinde servis garantisi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Sık Sorulan Sorular
            </h2>
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 font-bold text-gray-900">
                  Teknik destek nasıl alırım?
                </h3>
                <p className="text-gray-600">
                  0850 303 26 99 numaralı telefonu arayabilir veya destek@boxxturkiye.com
                  adresine e-posta gönderebilirsiniz. Çalışma saatlerimiz Pazartesi-Cuma
                  09:00-18:00 arasıdır.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 font-bold text-gray-900">
                  Garanti kapsamı nedir?
                </h3>
                <p className="text-gray-600">
                  Standart garantimiz 3 yıl parça ve işçilik kapsamaktadır. Üretim hataları
                  ve arızalar garanti kapsamındadır. Fiziksel hasar, su teması veya kullanıcı
                  hataları garanti kapsamı dışındadır.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 font-bold text-gray-900">
                  RMA süreci ne kadar sürer?
                </h3>
                <p className="text-gray-600">
                  RMA talebiniz 48 saat içinde değerlendirilir. Onaylandıktan sonra, onarım
                  veya değişim işlemi genellikle 5-10 iş günü sürer. Kritik sistemler için
                  hızlandırılmış servis seçeneği mevcuttur.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 font-bold text-gray-900">
                  Yerinde servis mevcut mu?
                </h3>
                <p className="text-gray-600">
                  Evet, İstanbul ve Ankara'da yerinde servis seçeneği mevcuttur. Diğer
                  şehirler için sisteminizi servis merkezimize gönderebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Hala Sorunuz mu Var?
            </h2>
            <p className="mb-8 text-xl text-gray-100">
              Teknik destek ekibimizle hemen iletişime geçin
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="tel:08503032699">Hemen Ara: 0850 303 26 99</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-primary"
              >
                <Link href="/iletisim">E-posta Gönder</Link>
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
  title: "Destek Merkezi | BOXX Türkiye",
  description:
    "BOXX Türkiye teknik destek, garanti hizmeti, unBOXXing rehberi ve RMA süreçleri. 7/5 profesyonel destek ekibimizle iletişime geçin.",
  keywords: "boxx destek, teknik destek, garanti, rma, unboxxing, sürücü indirme",
};
