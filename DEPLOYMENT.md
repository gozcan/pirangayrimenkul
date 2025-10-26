# Deployment Guide - Vercel

## Hızlı Deployment

### 1. GitHub'a Push
```bash
git init
git add .
git commit -m "Initial commit: Piran Gayrimenkul website"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Vercel'e Deploy

#### Option A: Vercel Dashboard (Tavsiye Edilen)
1. [Vercel Dashboard](https://vercel.com/dashboard)'a gidin
2. "New Project" butonuna tıklayın
3. GitHub repository'nizi seçin
4. Framework Preset: **Vite** (otomatik algılanacak)
5. Build Command: `npm run build` (otomatik)
6. Output Directory: `dist` (otomatik)
7. "Deploy" butonuna tıklayın

#### Option B: Vercel CLI
```bash
# Vercel CLI'yi kurun
npm i -g vercel

# Deploy edin
vercel

# Production deploy
vercel --prod
```

### 3. Environment Variables (Opsiyonel)
Eğer ileride API anahtarları eklerseniz:
1. Vercel Dashboard > Project Settings > Environment Variables
2. Değişkenleri ekleyin
3. Redeploy yapın

## Otomatik Deployment
Vercel, GitHub'a her push yaptığınızda otomatik olarak deploy eder:
- `main` branch → Production
- Diğer branch'ler → Preview deployment

## Custom Domain (Opsiyonel)
1. Vercel Dashboard > Project Settings > Domains
2. Domain adınızı ekleyin (örn: pirangayrimenkul.com)
3. DNS ayarlarınızı güncelleyin
4. SSL sertifikası otomatik oluşturulacak

## Production Checklist
- [x] Build başarılı (`npm run build`)
- [x] Tailwind CSS çalışıyor
- [x] i18n (TR/EN) aktif
- [x] Responsive tasarım test edildi
- [x] Tüm componentler render oluyor
- [x] Contact form validasyonu çalışıyor
- [x] vercel.json konfigürasyonu hazır

## Performans Optimizasyonları
Vercel otomatik olarak sağlar:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image Optimization
- ✅ Edge Caching
- ✅ Compression (Gzip/Brotli)

## Deployment Sonrası
Deploy tamamlandıktan sonra:
1. Vercel size bir URL verecek (örn: pirangayrimenkul.vercel.app)
2. Site'yi test edin
3. Custom domain ekleyin (opsiyonel)
4. Analytics'i aktifleştirin (Vercel > Analytics)

## Troubleshooting

### Build Hatası
```bash
# Local'de test edin
npm run build
npm run preview
```

### Tailwind CSS Çalışmıyor
- `postcss.config.cjs` dosyasının mevcut olduğundan emin olun
- `@tailwindcss/postcss` ve `@tailwindcss/vite` kurulu olmalı

### i18n Çalışmıyor
- `public/locales/` klasörünün build'e dahil olduğunu kontrol edin
- Translation dosyalarının doğru path'te olduğunu kontrol edin

## Güncelleme Yapma
```bash
# Değişikliklerinizi yapın
git add .
git commit -m "Update: description"
git push

# Vercel otomatik deploy edecek
```

---

🎉 Tebrikler! Siteniz artık canlıda!
