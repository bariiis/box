# 🚀 Vercel Deployment Rehberi

## Hızlı Başlangıç

### 1. Vercel'e Giriş
1. https://vercel.com adresine gidin
2. **"Sign Up"** veya **"Login"** yapın (GitHub hesabınızla)

### 2. Projeyi Import Edin
1. **"New Project"** butonuna tıklayın
2. **"Import Git Repository"** seçin
3. GitHub hesabınızı bağlayın
4. **`boxx-turkiye`** repository'sini seçin
5. **"Import"** tıklayın

### 3. Proje Ayarları
Vercel otomatik olarak Next.js tespit edecek. Ayarları doğrulayın:

```
Framework Preset: Next.js
Build Command: bun run build  (veya npm run build)
Output Directory: .next  (otomatik)
Install Command: bun install  (veya npm install)
```

### 4. Environment Variables Ekleyin
**"Environment Variables"** bölümünde şunları ekleyin:

#### RESEND_API_KEY (Zorunlu - Email için)
```
Name: RESEND_API_KEY
Value: re_xxxxxxxxxxxxxxxxxx
```

**Resend API Key nasıl alınır:**
1. https://resend.com adresine gidin
2. Ücretsiz hesap oluşturun
3. **"API Keys"** → **"Create API Key"**
4. Name: "BOXX Turkiye"
5. Permission: "Sending access"
6. Key'i kopyalayın

#### Opsiyonel Variables
```
Name: NEXT_TELEMETRY_DISABLED
Value: 1
```

### 5. Deploy!
1. **"Deploy"** butonuna tıklayın
2. 2-3 dakika bekleyin
3. ✅ Site canlı!

## 📊 Özellikler

### ✅ Çalışan Özellikler
- Ana sayfa ve tüm sayfalar
- Blog (10 makale)
- Ürün sayfaları (APEXX, CREATIV, RAXX, HELIXX, FLEXX)
- Çözüm sayfaları (AutoCAD, SOLIDWORKS, Revit, vb.)
- Ürün karşılaştırma sayfaları
- İletişim formu (email gönderir)
- Newsletter aboneliği (email gönderir)
- SEO (sitemap, robots.txt, metadata)
- Analytics (Plausible)
- Responsive tasarım

### 🔧 Yapılandırma Sonrası
**RESEND_API_KEY eklenmediyse:**
- Formlar çalışır ama email göndermez
- Console'da uyarı görürsünüz
- "Demo mode" mesajı alırsınız

## 🌐 Domain Bağlama

### Custom Domain Ekleme
1. Vercel Dashboard → Projeniz → **"Settings"**
2. **"Domains"** tab
3. Domain adınızı girin (örn: `boxxturkiye.com`)
4. DNS kayıtlarını ekleyin:
   ```
   Type: CNAME
   Name: @  (veya www)
   Value: cname.vercel-dns.com
   ```
5. SSL otomatik aktif olur

## 🔄 Otomatik Deployments

Her GitHub push'ta:
- Vercel otomatik build başlatır
- Preview URL oluşturur
- Production'a deploy eder (main branch)

## 📧 Email Ayarları

### Resend Domain Doğrulama (Opsiyonel ama Önerilen)
1. Resend Dashboard → **"Domains"**
2. Domain ekleyin: `boxxturkiye.com`
3. DNS kayıtlarını ekleyin (SPF, DKIM, DMARC)
4. Doğrulama tamamlanınca email'ler artık `noreply@boxxturkiye.com` adresinden gider

### Email Gönderim Limitleri
- **Ücretsiz Plan**: 3,000 email/ay
- **Pro Plan**: 50,000+ email/ay

## 🐛 Sorun Giderme

### Build Hatası: "Module not found"
- Tüm dosyaların GitHub'a push edildiğinden emin olun
- `bun install` local'de çalışıyor mu kontrol edin

### Email Gönderilmiyor
- `RESEND_API_KEY` environment variable eklenmiş mi?
- Resend dashboard'da API key aktif mi?
- Console'da hata var mı?

### 404 Hatası
- Build başarılı mı kontrol edin
- Vercel logs'u inceleyin

## 📊 Performans

### Lighthouse Score Hedefleri
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Optimizasyonlar
- Next.js Image optimization
- Automatic code splitting
- Edge caching
- Incremental Static Regeneration

## 🎯 Sonraki Adımlar

1. ✅ Vercel'e deploy edin
2. ✅ Resend API key ekleyin
3. ✅ Custom domain bağlayın
4. ✅ Google Search Console'a ekleyin
5. ✅ Analytics'i kontrol edin

## 🆘 Yardım

Sorun yaşarsanız:
- Vercel docs: https://vercel.com/docs
- Resend docs: https://resend.com/docs
- Next.js docs: https://nextjs.org/docs

---

**Deployment URL:** `https://boxx-turkiye.vercel.app`

Başarılar! 🚀
