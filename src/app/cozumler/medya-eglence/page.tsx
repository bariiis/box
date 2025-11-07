import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Film, Video, Palette, Music } from "lucide-react";

const recommendedProducts = [
  {
    name: "CREATIV Plus Threadripper",
    description: "8K video düzenleme ve karmaşık 3D projeler için",
    specs: "64 çekirdek, 1TB bellek, 2x GPU",
    link: "/urunler/creativ",
  },
  {
    name: "APEXX T4",
    description: "VFX, animasyon ve rendering için yüksek GPU gücü",
    specs: "64 çekirdek, 256GB bellek, 2x RTX GPU",
    link: "/urunler/apexx",
  },
  {
    name: "HELIXX 2U4G",
    description: "Rendering farm ve distributed rendering",
    specs: "128 çekirdek, 1TB bellek, 4x RTX PRO",
    link: "/urunler/helixx",
  },
];

const useCases = [
  {
    icon: Video,
    title: "Video Düzenleme",
    description: "Adobe Premiere Pro, DaVinci Resolve ile 4K/8K video düzenleme ve color grading",
  },
  {
    icon: Film,
    title: "3D Animasyon & VFX",
    description: "Maya, 3ds Max, Cinema 4D, Houdini ile profesyonel animasyon ve efektler",
  },
  {
    icon: Palette,
    title: "Motion Graphics",
    description: "After Effects, Blender ile broadcast grafikler ve motion design",
  },
  {
    icon: Music,
    title: "Ses Prodüksiyonu",
    description: "Pro Tools, Logic Pro, Ableton Live ile audio post-production",
  },
];

const software = [
  "Adobe Premiere Pro",
  "DaVinci Resolve",
  "After Effects",
  "Autodesk Maya",
  "3ds Max",
  "Cinema 4D",
  "Houdini",
  "Blender",
  "Nuke",
  "V-Ray",
  "Arnold",
  "Redshift",
  "Octane Render",
  "Unreal Engine",
  "Unity",
  "Pro Tools",
];

export default function MedyaEglencePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 py-20 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDE0djE0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur">
                <Film className="h-8 w-8" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Medya ve Eğlence
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                Yaratıcı Profesyoneller İçin Güçlü Sistemler
              </h1>
              <p className="mb-8 text-xl text-gray-200">
                Video düzenleme, 3D animasyon, VFX, motion graphics ve ses prodüksiyonu için optimize edilmiş creator PC ve iş istasyonları
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="#products">Önerilen Ürünler</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
                  <Link href="/iletisim">Medya Uzmanıyla Görüş</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Yaratıcı İş Akışlarınızı Hızlandırın
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Medya ve eğlence sektöründe çalışan profesyoneller, 4K/8K video düzenleme, karmaşık 3D animasyonlar,
                  VFX compositing ve rendering gibi yoğun işlemlerle uğraşırlar. BOXX Creator PC'ler ve iş istasyonları,
                  Adobe Creative Cloud, Autodesk Maya, Cinema 4D, DaVinci Resolve ve tüm popüler medya yazılımları için optimize edilmiştir.
                </p>
                <p>
                  NVIDIA GeForce RTX ve RTX PRO GPU'lar ile gerçek zamanlı playback, GPU hızlandırmalı efektler ve
                  hızlı rendering. Yüksek çekirdek sayılı işlemciler ile çoklu görev ve paralel işleme gücü.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Kullanım Alanları
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                  >
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                      <Icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Performance Benefits */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Performans Avantajları
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="rounded-lg border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white p-8">
                <div className="mb-4 text-4xl font-bold text-purple-600">10x</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Daha Hızlı Rendering</h3>
                <p className="text-gray-600">
                  GPU hızlandırmalı rendering ile saatleri dakikalara indirin
                </p>
              </div>
              <div className="rounded-lg border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white p-8">
                <div className="mb-4 text-4xl font-bold text-purple-600">8K</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Video Desteği</h3>
                <p className="text-gray-600">
                  8K RAW video'yu gerçek zamanlı düzenleyin, lag yok
                </p>
              </div>
              <div className="rounded-lg border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white p-8">
                <div className="mb-4 text-4xl font-bold text-purple-600">64</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Çekirdek Gücü</h3>
                <p className="text-gray-600">
                  Paralel işleme ile çoklu görevlerde maksimum verim
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section id="products" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Medya için Önerilen BOXX Sistemleri
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {recommendedProducts.map((product, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="mb-4">
                    <div className="text-sm font-bold uppercase tracking-wider text-purple-600">
                      Önerilen
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-600">{product.description}</p>
                  <div className="mb-6 rounded bg-gray-50 p-4 text-sm text-gray-700">
                    {product.specs}
                  </div>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link href={product.link}>Detayları İncele</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Software */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Desteklenen Yazılımlar
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {software.map((app, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center text-sm font-semibold text-gray-700 transition-all hover:border-purple-600 hover:bg-purple-50"
                  >
                    {app}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Yaratıcı Projeniz İçin En Uygun Sistemi Bulalım
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Video, 3D, VFX ve ses prodüksiyonu iş akışlarınız için özel yapılandırma
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/iletisim">Ücretsiz Danışma</Link>
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
  title: "Medya ve Eğlence İş İstasyonları | BOXX Türkiye",
  description:
    "Video düzenleme, 3D animasyon, VFX ve ses prodüksiyonu için BOXX creator PC ve iş istasyonları. Adobe, Autodesk ve tüm medya yazılımları için optimize edilmiş sistemler.",
  keywords: "video düzenleme, 3D animasyon, VFX, rendering, Adobe Premiere, Maya, Cinema 4D, DaVinci Resolve",
};
