import Link from "next/link";
import { Brain, Building2, Factory, Film, GraduationCap, Cloud } from "lucide-react";

const industries = [
  {
    icon: Brain,
    title: "YAPAY ZEKA",
    subtitle: "VE DERİN ÖĞRENME",
    link: "/cozumler/yapay-zeka",
    color: "text-blue-400",
  },
  {
    icon: Factory,
    title: "İMALAT VE ÜRÜN",
    subtitle: "TASARIMI",
    link: "/cozumler/imalat-tasarim",
    color: "text-blue-400",
  },
  {
    icon: Building2,
    title: "MİMARLIK,",
    subtitle: "MÜHENDİSLİK VE İNŞAAT",
    link: "/cozumler/mimarlik-muhendislik",
    color: "text-blue-400",
  },
  {
    icon: Film,
    title: "MEDYA VE",
    subtitle: "EĞLENCE",
    link: "/cozumler/medya-eglence",
    color: "text-blue-400",
  },
  {
    icon: GraduationCap,
    title: "KAMU, EĞİTİM",
    subtitle: "VE SAĞLIK",
    link: "/cozumler/kamu-egitim-saglik",
    color: "text-blue-400",
  },
  {
    icon: Cloud,
    title: "VERİ MERKEZİ",
    subtitle: "ÇÖZÜMLER",
    link: "/urunler/flexx",
    color: "text-blue-400",
  },
];

export default function IndustrySolutions() {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold lg:text-4xl">
          Sektörünüz İçin Özel Çözümler
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Link
                key={index}
                href={industry.link}
                className="group flex flex-col items-center text-center transition-transform hover:scale-105"
              >
                <div className="mb-4 rounded-lg bg-white/10 p-6 transition-colors group-hover:bg-white/20">
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="text-sm font-bold uppercase leading-tight">
                  {industry.title}
                </h3>
                <p className="text-xs font-semibold uppercase opacity-90">
                  {industry.subtitle}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
