# BOXX Türkiye Setup Guide

Bu doküman, BOXX Türkiye web sitesinin blog sistemi ve iletişim formu backend'inin nasıl kurulacağını açıklar.

## 📋 İçindekiler

- [Blog Sistemi](#blog-sistemi)
- [İletişim Formu Backend](#iletişim-formu-backend)
- [Geliştirme](#geliştirme)
- [Deployment](#deployment)

---

## 📝 Blog Sistemi

Blog sistemi, Markdown dosyaları kullanarak çalışır. Yeni blog yazıları eklemek çok kolaydır!

### Blog Yazısı Ekleme

1. `content/blog/` klasöründe yeni bir `.md` dosyası oluşturun
2. Dosya adı URL slug olarak kullanılacaktır (örn: `yeni-urun.md` → `/blog/yeni-urun`)
3. Frontmatter (meta veriler) ve içerik ekleyin

### Blog Yazısı Formatı

```markdown
---
title: "Blog Yazısı Başlığı"
slug: "blog-yazisi-basligi"
excerpt: "Kısa açıklama (blog listesinde görünür)"
image: "https://example.com/image.jpg"
date: "2024-11-15"
author: "BOXX Türkiye"
category: "hardware" # hardware, ai, software, trends, news
tags: ["Tag1", "Tag2", "Tag3"]
featured: true # Ana sayfada öne çıkarılmak için
---

## İçerik Başlığı

Blog yazınızın içeriği buraya gelir. Markdown formatını kullanabilirsiniz:

- Listeler
- **Kalın metin**
- *İtalik metin*
- [Linkler](https://example.com)
- Kod blokları
- Tablolar

### Alt Başlık

Daha fazla içerik...
```

### Kategoriler

Mevcut kategoriler:
- `hardware` - Donanım haberleri
- `ai` - Yapay Zeka
- `software` - Yazılım
- `trends` - Trendler
- `news` - BOXX Haberleri

### Örnek Blog Yazısı

`content/blog/` klasöründe şu örnek yazılar mevcuttur:
- `apexx-t4-pro-x-lansman.md`
- `amd-threadripper-9000-inceleme.md`
- `nvidia-rtx-5090-vs-5080.md`
- `windows-10-destek-sonu.md`

Bu dosyaları referans alarak yeni yazılar oluşturabilirsiniz.

### Blog Fonksiyonları

Blog utility (`src/lib/blog.ts`) şu fonksiyonları sağlar:

```typescript
// Tüm blog yazılarını getir
const posts = getAllPosts();

// Slug'a göre yazı getir
const post = getPostBySlug("apexx-t4-pro-x-lansman");

// Kategoriye göre filtrele
const hardwarePosts = getPostsByCategory("hardware");

// Öne çıkan yazılar
const featured = getFeaturedPosts();

// İlgili yazılar (aynı kategori)
const related = getRelatedPosts("slug", 3);
```

---

## 📧 İletişim Formu Backend

İletişim formu, [Resend](https://resend.com) email servisi kullanır.

### 1. Resend Hesabı Oluşturma

1. [resend.com](https://resend.com) adresine gidin
2. Ücretsiz hesap oluşturun (ayda 3,000 email ücretsiz)
3. Email domain'inizi doğrulayın (opsiyonel, test için `onboarding@resend.dev` kullanılabilir)

### 2. API Key Alma

1. Resend dashboard'da [API Keys](https://resend.com/api-keys) bölümüne gidin
2. "Create API Key" butonuna tıklayın
3. Key'i kopyalayın

### 3. Environment Variables Ayarlama

`.env.example` dosyasını `.env.local` olarak kopyalayın:

```bash
cp .env.example .env.local
```

`.env.local` dosyasına API key'inizi ekleyin:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### 4. Email Alıcı Adresini Değiştirme

`src/app/api/contact/route.ts` dosyasında alıcı email adresini değiştirin:

```typescript
// 21. satır
to: ['info@boxxturkiye.com'], // Kendi email adresinizi yazın
```

### 5. Domain Doğrulama (Production için önerilen)

Resend'de kendi domain'inizi doğrulamak için:

1. Resend dashboard → [Domains](https://resend.com/domains)
2. "Add Domain" → Domain adınızı girin (örn: `boxxturkiye.com`)
3. DNS kayıtlarını domain sağlayıcınıza ekleyin
4. Doğrulama bekleyin (genellikle birkaç dakika)

Domain doğrulandıktan sonra `route.ts` dosyasında `from` adresini güncelleyin:

```typescript
from: 'BOXX Türkiye İletişim <noreply@boxxturkiye.com>',
```

### Email Template

Email şablonu HTML formatında ve şunları içerir:
- BOXX branding (gradient header)
- Tüm form alanları
- Responsive tasarım
- Güzel formatlanmış mesaj içeriği

Template'i özelleştirmek için `src/app/api/contact/route.ts` dosyasındaki HTML kısmını düzenleyin.

### Test Etme

1. Dev server'ı başlatın: `bun run dev`
2. `/iletisim` sayfasına gidin
3. Formu doldurup gönderin
4. Email'inizde mesajı kontrol edin

---

## 🚀 Geliştirme

### Bağımlılıkları Yükleme

```bash
bun install
```

### Dev Server Başlatma

```bash
bun run dev
```

Site `http://localhost:3000` adresinde çalışacaktır.

### Yeni Blog Yazısı Ekleme

```bash
# Yeni markdown dosyası oluştur
touch content/blog/yeni-yazim.md

# Editörle aç ve frontmatter + içerik ekle
code content/blog/yeni-yazim.md
```

Dev server çalışırken, değişiklikler otomatik olarak yansır.

### Blog Kategorisi Ekleme

1. `src/app/blog/BlogListing.tsx` → `categories` array'ine yeni kategori ekle
2. Blog yazılarında yeni kategoriyi kullan

---

## 📦 Deployment

### Environment Variables (Production)

Netlify/Vercel gibi platformlarda:

1. Dashboard → Settings → Environment Variables
2. `RESEND_API_KEY` ekle
3. Değeri production API key'iniz olarak ayarlayın

### Build

```bash
bun run build
```

### Netlify Deployment

```bash
netlify deploy --prod
```

### Email Gönderim Limitleri

**Resend Free Tier:**
- 3,000 email/ay
- 100 email/gün
- Test için yeterli

**Resend Pro:**
- $20/ay
- 50,000 email/ay
- Custom domain
- Dedicated IP

---

## 🔧 Troubleshooting

### Blog Yazısı Görünmüyor

1. Markdown dosyasının `content/blog/` klasöründe olduğundan emin olun
2. Frontmatter formatının doğru olduğunu kontrol edin
3. Dev server'ı yeniden başlatın

### Email Gönderilmiyor

1. `.env.local` dosyasının olduğunu kontrol edin
2. `RESEND_API_KEY` değerinin doğru olduğundan emin olun
3. Resend dashboard'da API key'in active olduğunu kontrol edin
4. Browser console'da hata mesajlarını kontrol edin

### TypeScript Hataları

```bash
# Type check
bun run type-check

# Linter çalıştır
bun run lint
```

---

## 📚 Kaynaklar

- [Resend Dokümantasyon](https://resend.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [Gray Matter (Frontmatter Parser)](https://github.com/jonschlinkert/gray-matter)
- [Marked (Markdown Parser)](https://marked.js.org/)

---

## 💡 İpuçları

### Blog SEO İçin
- Her yazıda `featured: true` kullanmayın (sadece 2-3 tane)
- `excerpt` alanını dikkatlice yazın (Google'da görünür)
- `tags` kullanın, ancak aşırıya kaçmayın (3-5 tag ideal)
- Düzenli içerik ekleyin

### Email İçin
- Domain doğrulama yapmak email delivery rate'i artırır
- `replyTo` adresi olarak kullanıcının email'ini kullanıyoruz
- HTML template'i test edin (farklı email client'lar)
- SPAM filtrelerinden kaçınmak için profesyonel içerik

### Performance
- Markdown dosyaları build time'da parse edilir
- Blog listesi static olarak generate edilir
- Production'da hızlı yükleme için ISR kullanılabilir

---

**Sorularınız için:** info@boxxturkiye.com
