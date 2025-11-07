import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "APEXX S3 iş istasyonunda hangi donanım özellikleri bulunuyor?",
    answer:
      "APEXX S3, Intel Core Ultra işlemciler, NVIDIA RTX profesyonel GPU'lar, yüksek hızlı bellek ve ultra hızlı NVMe SSD'ler ile donatılmıştır. Sistem özel olarak CAD, 3D modelleme ve içerik oluşturma iş yükleri için optimize edilmiştir.",
  },
  {
    question: "BOXX yüksek performanslı iş istasyonu seçmenin temel avantajları nelerdir?",
    answer:
      "BOXX iş istasyonları, profesyonel yazılımlar için optimize edilmiş donanım, üstün güvenilirlik, uzun ömürlülük ve özel teknik destek sunar. Her sistem, işinize özel olarak yapılandırılır ve zorlu iş yüklerini sorunsuz bir şekilde yönetmek üzere test edilir.",
  },
  {
    question: "BOXX, donanımlarının belirli yazılım ihtiyaçlarıma uygun olduğundan nasıl emin oluyor?",
    answer:
      "BOXX, 400'den fazla profesyonel uygulamayı destekler ve her sistem yazılımınızın gereksinimlerine göre yapılandırılır. Uzman ekibimiz, optimal performans için donanım ve yazılım uyumluluğunu sağlar.",
  },
  {
    question: "BOXX dizüstü bilgisayar sunuyor mu?",
    answer:
      "BOXX, masaüstü iş istasyonları, rackmount sistemler ve sunucularda uzmanlaşmıştır. Dizüstü bilgisayar sunmuyoruz, ancak taşınabilir güç gerektiren profesyoneller için önerilerimiz bulunmaktadır.",
  },
  {
    question: "İş istasyonu bilgisayarı ile normal bilgisayar arasındaki fark nedir?",
    answer:
      "İş istasyonları, profesyonel CAD, 3D rendering, video düzenleme ve bilimsel simülasyon gibi zorlu iş yükleri için tasarlanmıştır. Tüketici bilgisayarlarına göre daha güçlü işlemciler, profesyonel GPU'lar, ECC bellek ve endüstri sertifikaları ile donatılmıştır.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
          Sıkça Sorulan Sorular
        </h2>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
