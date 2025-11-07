# BOXX Türkiye Web Sitesi

BOXX Türkiye için modern, responsive ve yüksek performanslı web sitesi. Next.js 15, TypeScript, Tailwind CSS ve shadcn/ui ile geliştirilmiştir.

## 🚀 Özellikler

### Ana Sayfa Bölümleri
- **Header & Navigation**: Tam responsive header menü (desktop ve mobil hamburger menü)
- **Hero Carousel**: 3 slaytlı otomatik carousel
- **Sektör Çözümleri**: 6 farklı sektör için çözümler (AI, İmalat, Mimarlık, Medya, Kamu, Bulut)
- **Ürün Showcase**: Ürün tanıtım carousel
- **Çözümler**: İş istasyonları, Creator PC'ler ve Sunucular
- **Müşteri Logoları**: Güvenilen markalar
- **Yazılım Ortakları**: 400+ desteklenen uygulama
- **Blog/Insights**: Son haberler ve makaleler
- **SSS (FAQ)**: Accordion ile sık sorulan sorular
- **Footer**: Ankara ve İstanbul ofis bilgileri, sosyal medya bağlantıları

### Teknik Özellikler
- ⚡ **Next.js 15** (App Router)
- 🎨 **Tailwind CSS** ile özel tasarım
- 🎯 **TypeScript** tip güvenliği
- 📱 **Tam Responsive** (mobile, tablet, desktop)
- ♿ **WCAG 2.1** erişilebilirlik standartları
- 🎭 **shadcn/ui** bileşenleri
- 🌐 **SEO optimize** (meta tags, semantic HTML)

### Marka Kimliği
- **Renkler**:
  - BOXX Blue (#1e71c5)
  - Cloud Blue (#729bbf)
  - Product Blue (#20ace2)
- **Fontlar**:
  - Poppins (body text)
  - Urbanist (alternative)
  - Roboto Slab (headings)

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
bun install

# Geliştirme sunucusunu başlat
bun run dev

# Production build
bun run build

# Production başlat
bun start
```

## 🏢 Şirket Bilgileri

**BOXX Bilgisayar Sistemleri San. Tic. Ltd. Şti.**

**Ankara Merkez Ofis:**
- Prof. Dr. Ahmet Taner Kışlalı Mahallesi
- 2776. Sokak 9/C
- Çankaya / ANKARA

**İstanbul Ofis:**
- Çubuklu Mahallesi
- Engürübağı Caddesi No: 29/2
- Beykoz / İSTANBUL

**Telefon:** 0850 303 26 99
**Web:** boxx.com.tr

## 📝 Proje Yapısı

```
boxx-turkiye/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Ana sayfa
│   │   └── globals.css         # Global stiller
│   ├── components/
│   │   ├── layout/             # Layout bileşenleri
│   │   │   ├── Header.tsx      # Site header
│   │   │   └── Footer.tsx      # Site footer
│   │   ├── sections/           # Sayfa bölümleri
│   │   │   ├── HeroSection.tsx
│   │   │   ├── IndustrySolutions.tsx
│   │   │   ├── ProductShowcase.tsx
│   │   │   ├── SolutionsSection.tsx
│   │   │   ├── ClientLogos.tsx
│   │   │   ├── SoftwarePartners.tsx
│   │   │   ├── Insights.tsx
│   │   │   └── FAQ.tsx
│   │   └── ui/                 # shadcn/ui bileşenleri
│   └── lib/
│       └── utils.ts            # Yardımcı fonksiyonlar
├── public/
│   └── logos/                  # BOXX logoları
└── tailwind.config.ts          # Tailwind yapılandırması
```

## 🎨 Kullanılan Teknolojiler

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Tip güvenliği
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI bileşenleri
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Lucide Icons](https://lucide.dev/) - İkonlar
- [Bun](https://bun.sh/) - JavaScript runtime

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔜 Gelecek Geliştirmeler

- [ ] İç sayfalar (Ürünler, Çözümler, Hakkımızda)
- [ ] İletişim formu
- [ ] Ürün detay sayfaları
- [ ] Blog sistemi
- [ ] Çoklu dil desteği
- [ ] Netlify deployment
- [ ] Analytics entegrasyonu

## 📄 Lisans

© 2025 BOXX Bilgisayar Sistemleri San. Tic. Ltd. Şti. Tüm hakları saklıdır.
