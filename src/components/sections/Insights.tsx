import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    title: "Yeni APEXX T4 PRO-X İş İstasyonu: AMD Ryzen Threadripper PRO, NVIDIA RTX Blackwell GPU'larla Buluşuyor",
    description:
      "Modern profesyonel iş yüklerinin talepleri artmaya devam ediyor ve geleneksel sınırların ötesine geçebilecek donanım gerektiriyor. AI eğitimi, rendering, simülasyon ve tasarım iş akışları sistemleri sınırlarına zorluyor.",
    image: "https://ext.same-assets.com/3886351630/3519237665.png",
    tags: ["AMD RYZEN THREADRIPPER", "NVIDIA RTX", "AMD RYZEN 9000"],
    link: "/blog/apexx-t4-pro-x-lansman",
  },
  {
    title: "Windows 10 Desteği Sona Eriyor: Neden Şimdi Profesyonel İş İstasyonlarını Yükseltme Zamanı",
    description:
      "Microsoft, Windows 10 desteğini 14 Ekim 2025'te sonlandıracak, güvenlik güncellemelerini, yamaları ve teknik desteği durduracak. Profesyonel kullanıcılar için bu acil bir risk oluşturuyor.",
    image: "https://ext.same-assets.com/3886351630/2956239980.jpeg",
    tags: ["GÜNCELLEMELER", "DESTEK"],
    link: "/blog/windows-10-destek-sonu",
  },
  {
    title: "AMD Ryzen Threadripper 9000 Serisi: Tam Özellikler, Kıyaslamalar ve Kullanım Alanları",
    description:
      "En yeni AMD Ryzen™ Threadripper™ 9000 ve Threadripper™ PRO 9000WX işlemcileri, BOXX ürün yelpazesinde mevcut, performans sınırlarını bir kez daha yükseltiyor.",
    image: "https://ext.same-assets.com/3886351630/192729848.png",
    tags: ["CPU", "AMD RYZEN THREADRIPPER"],
    link: "/blog/amd-threadripper-9000-inceleme",
  },
  {
    title: "BOXX Creativ ve NVIDIA GeForce RTX 50 ile Yeni Nesil İçerik Oluşturma",
    description:
      "İçerik oluşturucular tutarlı zorluklarla karşılaşıyor: 8K görüntü düzenlerken kare düşüşleri, yavaş renderlar, kesintili canlı yayınlar. Bu engeller yaratıcı akışı yavaşlatır ve hayal kırıklığına neden olur.",
    image: "https://ext.same-assets.com/3886351630/3944618175.png",
    tags: ["GPU", "AMD RYZEN THREADRIPPER", "NVIDIA GEFORCE"],
    link: "/blog/creativ-nvidia-geforce-rtx-50",
  },
];

export default function Insights() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
          Bilgi ve Uzmanlık mı Arıyorsunuz?
        </h2>
        <p className="mb-12 text-center text-lg text-gray-600">
          Çeşitli sektörlerden yaratıcı profesyonellerin BOXX gücü ve performansına nasıl güvendiğine dair ilginç ve aydınlatıcı gerçek hayat deneyimlerini keşfedin.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {insights.map((insight, index) => (
            <Link
              key={index}
              href={insight.link}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 line-clamp-3 text-lg font-bold text-gray-900">
                  {insight.title}
                </h3>
                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                  {insight.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {insight.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded bg-gray-200 px-2 py-1 text-xs font-semibold uppercase text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center font-semibold text-primary transition-colors group-hover:text-primary/80">
                  Devamını Oku
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">Blogumuzu Görüntüle</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
