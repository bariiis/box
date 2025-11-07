import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, Database, Zap } from "lucide-react";

const recommendedProducts = [
  {
    name: "APEXX T4 PRO-X",
    description: "Çift veya dörtlü NVIDIA RTX PRO 6000 GPU'lar ile AI model eğitimi için ideal",
    specs: "96 çekirdeğe kadar, 1TB bellek, 4x GPU",
    link: "/urunler/apexx",
  },
  {
    name: "HELIXX 4U8G",
    description: "8 GPU ile büyük ölçekli derin öğrenme ve paralel eğitim",
    specs: "128 çekirdek, 2TB bellek, 8x RTX PRO GPU",
    link: "/urunler/helixx",
  },
  {
    name: "APEXX T4 PRO",
    description: "Dengeli AI geliştirme ve test ortamı",
    specs: "64 çekirdek, 512GB bellek, 2x GPU",
    link: "/urunler/apexx",
  },
];

const useCases = [
  {
    icon: Brain,
    title: "Derin Öğrenme Model Eğitimi",
    description: "Neural network'lerin eğitimi için yüksek GPU gücü ve paralel işleme kapasitesi",
  },
  {
    icon: Database,
    title: "Büyük Dil Modelleri (LLM)",
    description: "GPT, BERT ve diğer transformer modellerinin eğitimi ve fine-tuning",
  },
  {
    icon: Cpu,
    title: "Computer Vision",
    description: "Görüntü tanıma, nesne tespiti ve segmentasyon modelleri",
  },
  {
    icon: Zap,
    title: "AI Inferencing",
    description: "Eğitilmiş modellerin production ortamında hızlı çalıştırılması",
  },
];

const software = [
  "TensorFlow",
  "PyTorch",
  "CUDA Toolkit",
  "Keras",
  "scikit-learn",
  "OpenCV",
  "Jupyter Notebook",
  "RAPIDS",
  "NVIDIA NeMo",
  "Hugging Face",
  "MLflow",
  "Docker",
];

export default function YapayZekaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 py-20 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMGFjZTIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDE0djE0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur">
                <Brain className="h-8 w-8" />
                <span className="text-sm font-semibold uppercase tracking-wider">Yapay Zeka Çözümleri</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                Yapay Zeka ve Derin Öğrenme İş İstasyonları
              </h1>
              <p className="mb-8 text-xl text-gray-200">
                AI model eğitimi, derin öğrenme araştırması ve machine learning geliştirme için optimize edilmiş yüksek performanslı sistemler
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="#products">Önerilen Ürünler</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
                  <Link href="/iletisim">AI Uzmanıyla Görüş</Link>
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
                AI Geliştirme için Optimize Edilmiş Sistemler
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Yapay zeka ve derin öğrenme projeleri, yoğun hesaplama gücü, büyük bellek kapasitesi ve yüksek GPU performansı gerektirir.
                  BOXX AI iş istasyonları, TensorFlow, PyTorch ve diğer popüler frameworkler için optimize edilmiştir.
                </p>
                <p>
                  NVIDIA RTX PRO ve AMD Threadripper PRO işlemciler ile donatılmış sistemlerimiz, neural network eğitimi,
                  büyük dil modelleri (LLM) ve computer vision projeleri için ideal çözümler sunar.
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
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <Icon className="h-8 w-8 text-primary" />
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

        {/* Key Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              AI İş İstasyonları Neden Önemli?
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="rounded-lg border-2 border-primary/20 p-8">
                <div className="mb-4 text-4xl font-bold text-primary">10x</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Daha Hızlı Eğitim</h3>
                <p className="text-gray-600">
                  Çoklu GPU desteği ile model eğitim sürenizi günlerden saatlere indirin
                </p>
              </div>
              <div className="rounded-lg border-2 border-primary/20 p-8">
                <div className="mb-4 text-4xl font-bold text-primary">2TB</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Büyük Bellek</h3>
                <p className="text-gray-600">
                  Büyük veri setleri ve karmaşık modeller için yeterli sistem belleği
                </p>
              </div>
              <div className="rounded-lg border-2 border-primary/20 p-8">
                <div className="mb-4 text-4xl font-bold text-primary">24/7</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Kesintisiz Çalışma</h3>
                <p className="text-gray-600">
                  Profesyonel soğutma ve güç sistemleri ile sürekli eğitim desteği
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section id="products" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              AI için Önerilen BOXX Sistemleri
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {recommendedProducts.map((product, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="mb-4">
                    <div className="text-sm font-bold uppercase tracking-wider text-primary">
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
                  <Button asChild className="w-full">
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
              Desteklenen AI Yazılımları ve Framework'ler
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {software.map((app, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center text-sm font-semibold text-gray-700 transition-all hover:border-primary hover:bg-primary/5"
                  >
                    {app}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-gray-600">
                ... ve 400'den fazla AI ve ML uygulaması
              </p>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              AI İş İstasyonu Teknik Özellikleri
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="overflow-hidden rounded-lg bg-white shadow-xl">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-900">GPU</td>
                      <td className="px-6 py-4 text-gray-700">
                        1-8x NVIDIA RTX PRO 6000/A6000, yüksek VRAM kapasitesi
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-900">İşlemci</td>
                      <td className="px-6 py-4 text-gray-700">
                        AMD Threadripper PRO (96 çekirdek), Intel Xeon (128 çekirdek)
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-900">Bellek</td>
                      <td className="px-6 py-4 text-gray-700">
                        512GB - 2TB DDR5 ECC, yüksek bant genişliği
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-900">Depolama</td>
                      <td className="px-6 py-4 text-gray-700">
                        NVMe PCIe 5.0 SSD RAID, büyük veri setleri için yüksek hız
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-900">Soğutma</td>
                      <td className="px-6 py-4 text-gray-700">
                        Özel sıvı soğutma sistemi, 7/24 kesintisiz çalışma
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-900">İşletim Sistemi</td>
                      <td className="px-6 py-4 text-gray-700">
                        Ubuntu, CentOS, Windows 10/11 Pro, dual-boot desteği
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              AI Projeniz İçin En Uygun Sistemi Bulalım
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Uzman ekibimiz AI iş yükünüze özel yapılandırma önerileri sunmaya hazır
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
  title: "Yapay Zeka ve Derin Öğrenme İş İstasyonları | BOXX Türkiye",
  description:
    "AI model eğitimi, derin öğrenme, machine learning ve neural network geliştirme için NVIDIA RTX PRO GPU'lu BOXX iş istasyonları. TensorFlow, PyTorch ve tüm AI frameworkleri için optimize edilmiş sistemler.",
  keywords: "yapay zeka, AI, derin öğrenme, machine learning, neural network, TensorFlow, PyTorch, GPU workstation",
};
