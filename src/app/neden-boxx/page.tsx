import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Award, Cpu, Shield, Users, Zap, Rocket } from "lucide-react";

export default function NedenBoxxPage() {
  const features = [
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Performans Ayarlı ve Sıvı Soğutmalı",
      description: "Optimize edilmiş performans ve güvenilirlik",
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Premium Bileşenler",
      description: "Sadece enterprise sınıfı parçalar",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Kasa Tasarımı",
      description: "ABD'de tasarlanmış ve üretilmiş",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Efsanevi Teknik Destek",
      description: "Ankara ve İstanbul merkezli uzman destek",
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "Performans Uzmanları",
      description: "Yazılımınızı bilen danışmanlar",
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      title: "Hemen Başlayın",
      description: "Kanıtlanmış yatırım getirisi",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
          <div className="absolute inset-0 bg-[url('https://ext.same-assets.com/3886351630/377825678.jpeg')] bg-cover bg-center opacity-30" />
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-5xl font-bold lg:text-6xl">
                BOXX'ta Ne Var?
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-gray-200">
                28 yılı aşkın süredir BOXX, film stüdyoları, televizyon ağları, önde gelen mimarlık
                ve mühendislik firmaları, üniversiteler ve diğer birçok kuruluş için bilgisayar
                çözümlerinde öncü yenilikçi olmuştur - çünkü onlar BOXX'ta ne olduğunu biliyorlar.
              </p>
            </div>
          </div>
        </section>

        {/* Customer Testimonial */}
        <section className="bg-primary py-12 text-white">
          <div className="container mx-auto px-4">
            <p className="mx-auto max-w-5xl text-center text-lg leading-relaxed">
              Müşterilerimiz arasında Disney, HBO, FOX, NASA, URS, KPF ve daha birçok isim bulunmaktadır.
              Bunun nedeni, özel olarak tasarlanmış sistemlerimiz, yalnızca kurumsal sınıf bileşenlerin
              yenilikçi entegrasyonu ve en son teknolojilerle pazara ilk çıkanlar olmamızdır. Ayrıca
              garanti, teknik destek ve BOXX'u bilgisayar donanımının altın standardı yapan diğer belirgin
              avantajlarımız vardır. Benjamin Franklin'in dediği gibi: <strong>"Düşük fiyatın tatlılığı,
              kalitesizliğin acılığından çok sonra unutulur."</strong> BOXX ile gerçekten ödediğinizin
              karşılığını alırsınız.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center rounded-lg border border-gray-200 p-8 text-center transition-all hover:border-primary hover:shadow-xl"
                >
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Tuned & Liquid Cooled */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-4xl font-bold text-gray-900">
                  Performans Ayarlı ve Sıvı Soğutmalı
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Uzun yıllar boyunca, bilgisayar tutkunları işlemci headroom'undan yararlandı ve
                    CPU'ların daha yüksek frekanslarda çalışmasını sağlamak için çok sayıda hile kullandı.
                    Başlangıçta, CPU üreticileri Intel ve AMD, multinational commodity oluşturuculara
                    mümkün olduğunca çok CPU satmaya odaklanarak gözlerini kapadılar.
                  </p>
                  <p>
                    Sonunda Intel, bu büyüyen pazarın önemini fark etti ve frekansı ayarlama seçeneği sundu.
                    Bu, BOXX'un işlemciyi daha yüksek bir frekansta nitelendirmesine, en son teknoloji
                    sıvı soğutma ile eşleştirmesine, gerekli kurumsal sınıf bileşenleri nitelendirmesine
                    ve üç yıllık garanti ve teknik destek tarafından desteklenen eşsiz performans ve
                    rock-solid güvenilirlik sunmasına olanak tanır.
                  </p>
                  <p>
                    BOXX, 2008'den beri performans ayarlı sistemler göndermektedir ve dünya genelinde
                    binlerce kullanımda olmasına rağmen, standart işlemci sistemlerinden farklı bir
                    arıza oranı yaşamadık. Bunun nedeni, güvenli ve profesyonel parametreler içinde
                    kalmamızı sağlamak için ortağımız Intel ile yakın çalışmamızdır.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="https://ext.same-assets.com/3886351630/2616537813.png"
                  alt="Liquid Cooling"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Premium Components */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
                  <Image
                    src="https://boxx.com/Files/Images/Products/Apexx%204%20front%20hero_700.png"
                    alt="BOXX Workstation"
                    fill
                    className="object-contain p-8"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="mb-6 text-4xl font-bold text-gray-900">Premium Bileşenler</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Bileşenler hakkında çok şey duyuyoruz - sanki tüm iş istasyonları yalnızca
                    bileşenlerine göre eşit yaratılmış gibi. Gerçek şu ki, bu şekilde çalışmıyor.
                    Sadece kurumsal sınıf bileşenlerin, sürücülerin ve özelleştirilmiş BIOS
                    ayarlarının yenilikçi entegrasyonumuz, bizi pazar genelinde tek ebat herkes için
                    uygun iş istasyonu üreticilerinden ayırmaktadır.
                  </p>
                  <p>
                    Benzersiz mühendislik konseptlerimiz (kolayca genişletilebilir, overclocking,
                    sıvı soğutma, özel ayarlı hava soğutması ve kasa tasarımı gibi), profesyonel bir
                    iş istasyonu ile standart bir iş istasyonu arasındaki farkı gösterir.
                  </p>
                  <p>
                    <strong>Bu sizin için ne anlama geliyor?</strong> En yüksek performansta çalışan
                    bir sistem, daha uzun ürün ömrü ve değiştirme maliyeti olmaması.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Chassis */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-4xl font-bold text-gray-900">Kasa Tasarımı</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Ünlü konsept tasarımcısı Daniel Simon <em>(Top Gun: Maverick, TRON: Legacy,
                    Captain America: The First Avenger, Oblivion)</em>, BOXX sistemlerini
                    "endüstriyel, gerçek bir makine parçası gibi - zarif, ağır hizmet makineleri"
                    olarak tanımlar. Başka bir deyişle, e-posta göndermek veya video oyunları
                    oynamak için bir BOXX almıyorsunuz. İşe gitmek için alıyorsunuz.
                  </p>
                  <p>
                    İşçilik ve malzemeden tasarruf etmek için, birinci kademe commodity donanım
                    üreticileri kasalarını denizaşırı ülkelerde ucuz plastik ve OEM bileşenlerle
                    inşa ederler. Ancak BOXX'ta kasalarımız tasarlanır ve <strong>"ABD'de
                    Üretilmiştir"</strong> - bu ilan bir slogandan daha fazlasıdır.
                  </p>
                  <p>
                    Kasalarımızı tasarlama sürecinde, uzman mühendislerimiz, birçok müşterimiz gibi,
                    Texas merkezli metal fabrikatörlerimize hassas 3D CAD modelleri sağlamak için
                    SOLIDWORKS'e güvenirler ve son teknoloji kasalarımızı tanımlayan sağlam alüminyum
                    parçalar ve çelik güçlendirme bileşenleri üretirler.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center text-white">
                    <div className="mb-4 text-6xl">🇺🇸</div>
                    <p className="text-2xl font-bold">ABD'de Üretilmiştir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legendary Tech Support */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary to-primary/80">
                  <div className="flex h-full items-center justify-center p-8">
                    <div className="text-center text-white">
                      <Users className="mx-auto mb-4 h-24 w-24" />
                      <p className="text-3xl font-bold">7/5 Teknik Destek</p>
                      <p className="mt-2 text-xl">Ankara ve İstanbul</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="mb-6 text-4xl font-bold text-gray-900">Efsanevi Teknik Destek</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Commodity üreticileri tarafından bilgisayar sorunlarınızı teşhis etmek için
                    kullanılan denizaşırı çağrı merkezi labirentinde hiç mahsur kaldınız mı?
                    Bir senaryoları vardır, ancak SOLIDWORKS, Revit, Maya, C4D, V-Ray veya diğer
                    profesyonel uygulamaları çalıştırmak için ne gerektiği konusunda hiçbir fikirleri
                    yoktur.
                  </p>
                  <p>
                    BOXX iş istasyonlarına ve rendering sistemlerine güvenirseniz, donanımınızı,
                    yazılımınızı bilen ve (çoğu durumda) sorununuzu telefonla çözebilen efsanevi
                    BOXX Teknik Desteğine doğrudan bir hattınız olduğu için asla bir proje son
                    tarihini kaçırmazsınız.
                  </p>
                  <p>
                    %100 ABD merkezli ve BOXX merkezi Austin, Texas'ta bulunan teknik desteğimiz,
                    sizi ve özel iş akışınızı desteklemek için gerekli araçlara ve kaynaklara
                    anında erişime sahiptir.
                  </p>
                  <p className="font-semibold">
                    Canlı, nefes alan, insan BOXX Teknik Destek uzmanıyla konuşmak için{" "}
                    <a href="tel:08503032699" className="text-primary hover:underline">
                      0850 303 26 99
                    </a>{" "}
                    numaralı telefonu arayın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Specialists */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-4xl font-bold text-gray-900">Performans Uzmanları</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Çok uluslu bilgisayar üreticilerinden birini arayın ve ray trace rendering veya
                    saniyede kaç üçgen itebileceğiniz veya Photoshop'ta 3ds Max rendering compositing
                    hakkında soru sorun - ama izleyen sessizliğe hazır olun. Basitçe ihtiyaç duyduğunuz
                    gerekli bilgi ve uzmanlıktan yoksundurlar.
                  </p>
                  <p>
                    BOXX'ta sadece iş istasyonları ve rendering sistemleri inşa etmiyoruz - problemleri
                    çözüyoruz. Web sitemizi ziyaret ederseniz veya Austin, Texas merkezli performans
                    uzmanlarımızdan birini ararsanız, bunun nedeni iş akışı sorunlarıyla karşı karşıya
                    olmanız ve bir çözüme ihtiyaç duymanızdır.
                  </p>
                  <p>
                    Uzmanlarımız (mühendislerimiz ve efsanevi teknik desteğimiz gibi) nihai çözüm
                    sağlayıcılarıdır, çünkü sadece BOXX donanımı hakkında her şeyi bilmekle kalmaz,
                    aynı zamanda güvendiğiniz profesyonel yazılım uygulamaları ve işiniz için en uygun
                    iş akışı konusunda uzman bilgiye sahiptirler.
                  </p>
                  <p>
                    <strong>Son ne zaman ücretsiz bir numarayı aradınız ve gerçek bir uzman telefonu açtı?</strong>
                  </p>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center">
                    <Cpu className="mx-auto mb-4 h-32 w-32 text-primary" />
                    <p className="text-2xl font-bold text-gray-900">Yazılımınızı Biliyoruz</p>
                    <p className="mt-2 text-lg text-gray-600">
                      SOLIDWORKS • Revit • Maya • C4D<br />
                      Adobe Suite • Rendering Uygulamaları
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started - ROI */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://ext.same-assets.com/3886351630/899796980.jpeg"
                    alt="BOXX User"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="mb-6 text-4xl font-bold text-gray-900">Hemen Başlayın</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Umarım bu açıklama, özel olarak inşa edilmiş bir BOXX çözümünün benzer şekilde
                    yapılandırılmış bir commodity iş istasyonundan neden üstün olduğuna dair net bir
                    anlayış sağlamıştır.
                  </p>
                  <p>
                    Ancak hala ikna olmanız gerekiyorsa, şunu düşünün: önde gelen bir Fortune 500
                    mühendislik firması tarafından yürütülen bir çalışma, bir BOXX iş istasyonunun
                    24 hafta gibi kısa bir sürede kendisini geri ödediğini ve beş yıl içinde çalışan
                    verimliliğinde 24.000 $ değerinde tasarruf sağlayacağını göstermiştir.
                  </p>
                  <p>
                    Daha da iyisi, BOXX kullanıcıları (veya onlara atıfta bulunduğumuz gibi BOXXers),
                    ortalama olarak, ilk sermaye harcamalarının on haftası içinde bir ROI bekleyebilir
                    ve zamanla bu miktarın on katı kadar yüksek bir ROI elde edebilir.
                  </p>
                  <p className="text-xl font-semibold text-gray-900">
                    Ve BOXX kullanıcıları (veya BOXXers dediğimiz gibi) fiyattan nadiren şikayet ederler.
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    BOXX'u deneyin ve kendiniz görün.
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
              Sorularınız mı Var?
            </h2>
            <p className="mb-8 text-xl">
              BİR BOXX PERFORMANS UZMANI İLE DANIŞIN
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/iletisim">Bize Ulaşın</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-primary">
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
  title: "Neden BOXX? | BOXX Türkiye",
  description:
    "28 yılı aşkın süredir film stüdyoları, TV ağları, önde gelen mimarlık ve mühendislik firmalarının tercih ettiği BOXX. Performans ayarlı sistemler, premium bileşenler ve efsanevi teknik destek.",
  keywords: "neden boxx, boxx avantajları, performans iş istasyonu, teknik destek, premium bileşenler, sıvı soğutma",
};
