import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "İş İstasyonları",
    description:
      "Medya ve eğlence sektöründen AI'ye, imalat ürün tasarımı ve AECO'ya kadar, BOXX İş İstasyonları performans talep eden profesyoneller için tasarlanmıştır.",
    image: "https://boxx.com/Files/Images/Solutions/S-APEXX%20s3-02.png",
    link: "/urunler/apexx",
  },
  {
    title: "Creator PC'ler",
    description:
      "3D modelleme, CAD tasarımı, dijital içerik oluşturma ve hızlandırma için, BOXX Creator PC'leri profesyonellerin ihtiyaç duyduğu hız ve istikrarı sunar. Ödün vermeden yaratın.",
    image: "https://boxx.com/Files/Images/Products/HELIXX/4U8G_%20hero_570-02.png",
    link: "/urunler/creativ",
  },
  {
    title: "Sunucular & Veri Merkezi",
    description:
      "HELIXX sunucular ile yoğun render ve AI iş yüklerini hızlandırın. FLEXX modüler sistemler ile veri merkezinizde yüksek yoğunluklu iş istasyonu altyapısı kurun.",
    image: "https://boxx.com/Files/Images/Products/HELIXX/2U4G_top_570-02.png",
    link: "/urunler/helixx",
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
          Organizasyonunuz İçin Çözümler
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-primary">
                  {solution.title}
                </h3>
                <p className="mb-4 text-gray-600">{solution.description}</p>
                <Link
                  href={solution.link}
                  className="inline-flex items-center font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  {solution.title.replace("ler", "leri")} Keşfet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
