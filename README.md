# GardaWara AI Web & Install Page

Website landing page dan portal instalasi untuk aplikasi GardaWara AI. Website ini dibangun menggunakan **React + Vite** dan didesain dengan estetika premium berwarna hijau dan dark mode.

## Prasyarat
- Node.js terinstal di komputer.
- File `gardawara.apk` dan `teaser.png` sudah ada di folder `public` (sudah disiapkan).

## Menjalankan Secara Lokal
1. Buka terminal di folder ini.
2. Install dependencies (jika belum):
   ```bash
   npm install
   ```
3. Jalankan server development:
   ```bash
   npm run dev
   ```
4. Buka `http://localhost:5173` di browser.

## Cara Deploy ke GitHub Pages (Hosting Gratis)

Website ini sudah dilengkapi dengan konfigurasi **GitHub Actions** untuk deploy otomatis.

### Langkah 1: Buat Repository di GitHub
1. Buka [GitHub.com](https://github.com) dan buat repository baru (Public).
2. Jangan inisialisasi dengan README/gitignore (kosongkan).

### Langkah 2: Push Kode ke GitHub
Buka terminal di folder `gardawara-web` ini dan jalankan perintah berikut:

```bash
git init
git add .
git commit -m "Initial commit: GardaWara Website"
# Ganti URL_REPO_ANDA dengan link repository yang barusan dibuat
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### Langkah 3: Aktifkan GitHub Pages
1. Buka halaman repository di GitHub.
2. Masuk ke **Settings** > **Pages**.
3. Pada bagian **Build and deployment** > **Source**, pilih **GitHub Actions**.
4. GitHub akan otomatis mendeteksi workflow yang sudah saya buat (`.github/workflows/deploy.yml`) dan mulai proses deploy.
5. Tunggu beberapa menit, link website akan muncul di halaman tersebut.

## Struktur Project
- `src/App.jsx`: Halaman utama, edit konten di sini.
- `src/index.css`: Style global (font, warna).
- `public/`: Tempat file statis (`gardawara.apk`, `teaser.png`).

---
**GardaWara AI Team**
Lawan Judi Online dengan Cerdas!
