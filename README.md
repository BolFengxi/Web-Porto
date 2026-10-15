# Web Porto

Portofolio Iqbal dengan arah visual notebook: kertas bergaris, latar grid, nama piksel, dan panel proyek seperti folder. Implementasi awal memakai HTML, CSS, JavaScript modules, dan Vite. Data hardcoded dirender menjadi HTML saat development/build; tidak ada JavaScript aplikasi di browser, backend, database, API eksternal, atau environment variable aplikasi.

## Menjalankan di laptop

Gunakan Node.js 22.12+ pada seri 22, atau Node.js 24+. Jalankan dari folder `Documents\Project\Web-Porto`:

```powershell
npm ci
npm run dev
```

Buka URL lokal yang dicetak Vite (biasanya `http://127.0.0.1:5173`). Hentikan dengan `Ctrl+C`. Setelah mengambil branch implementasi dari GitHub, jalankan `npm ci` agar dependency sesuai `package-lock.json`.

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Development server lokal dengan hot reload |
| `npm test` | Tes rendering data, konten kosong, dan keamanan tautan |
| `npm run build` | Build produksi ke `dist/` |
| `npm run preview` | Memeriksa hasil build melalui server lokal |
| `npm run check` | Pemeriksaan sintaks, seluruh tes, build produksi, serta pemeriksaan HTML/aset hasil build |

## Mengubah konten

Edit `src/data/portfolio.js` untuk nama, bio, About, pendidikan, pengalaman, CV, project, teknologi, dan kontak. `null` atau array kosong menyembunyikan konten opsional beserta navigasinya. Tidak ada tombol demo/CV ketika tujuannya belum tersedia. Teks dimasukkan sebagai teks biasa, bukan HTML.

Bio memakai teks persis dari pemilik: “Undergraduate Computer Science student at University of Indonesia”. Kartu proyek dipilih dari repository public yang diverifikasi: Sporta Kuler, MinaToko, dan Neo Tube Automator. Bukti serta alasan pilihan ada di [project-selection.md](references/project-selection.md). Bagian About memuat nama lengkap, ringkasan, pendidikan, dan pengalaman yang terbaca dari LinkedIn. Kontak LinkedIn ditambahkan di samping GitHub. Bukti serta batas sumber ada di [linkedin-content.md](references/linkedin-content.md). Dua foto pribadi dari pemilik tampil sebagai kolase polaroid di About. Potret kampus memakai cutout berlatar transparan; foto futsal mempertahankan foto asli. Aset WebP berada di `public/photos/`, dengan alt text, ukuran intrinsik, dan lazy loading. CV, screenshot proyek, dan demo live belum tersedia. Bahasa UI awal Inggris mengikuti bio serta referensi baru.

Untuk menambahkan CV lokal, letakkan file di `public/` lalu isi `profile.resume`, misalnya `/cv.pdf`. Jangan mengisi path sebelum berkasnya tersedia. Judul, deskripsi, dan Open Graph mengikuti data profil. Gunakan `metadata.title`/`metadata.description` untuk override; biarkan `metadata.siteUrl` bernilai `null` sampai domain yang sebenarnya tersedia. Canonical tidak dibuat sebelum URL HTTPS valid diberikan.

## Struktur

```text
index.html                 Halaman semantik dan template kartu
vite.config.js             Plugin render HTML statis
scripts/render-page.js     Render konten dan metadata saat build
scripts/check-build.js     Verifikasi HTML/aset produksi
src/ui.js                  Render konten dan aturan URL
src/data/portfolio.js       Konten hardcoded
src/styles.css             Token, komponen, dan responsivitas
public/favicon.svg         Aset dekoratif asli
test/                      Tes renderer, metadata, dan HTML statis
references/                Referensi desain; tidak disajikan sebagai UI
```

Konten karya dan kontak sudah ada di HTML hasil build; tetap dapat digunakan saat JavaScript browser dinonaktifkan. CSS dimuat langsung melalui link stylesheet. Font nama memakai Pixelify Sans lokal berlisensi OFL-1.1; lisensi disertakan di `public/fonts/`. Font lain memakai stack sistem. Tidak ada permintaan font eksternal. Ilustrasi dekoratif dibangun memakai CSS; foto dan isi proyek pada referensi tidak disalin. Monogram pada kartu adalah dekorasi, bukan screenshot aplikasi. `dist/` dan `node_modules/` tidak di-commit.

## Status dan verifikasi

Konten LinkedIn telah digabung melalui PR #2 ke `main` (`1c0ec90`) dan diverifikasi pada website produksi https://web-porto-mu-eight.vercel.app/. Penambahan foto dikerjakan dari versi tersebut pada branch `feat/notebook-photos`; status rilis foto dicatat setelah verifikasi. Integrasi API GitHub sebelumnya menolak penulisan, sehingga unggahan dan merge dilakukan melalui browser yang diotorisasi pemilik.

`npm run check` berhasil: pemeriksaan sintaks, 16 tes, build produksi, serta pemeriksaan HTML, anchor, dan aset lokal. Build hanya menghasilkan HTML/CSS/favicon tanpa JavaScript browser. Tes DOM tidak memverifikasi layout, kontras, atau interaksi browser. Pemeriksaan visual di 360, 768, dan 1440 px, keyboard, zoom 200%, serta reduced motion masih perlu dilakukan di browser. Belum ada pengujian langsung pada Windows.

Deployment memakai koneksi Git Vercel dengan branch produksi `main`. Versi LinkedIn telah diperiksa langsung di produksi; penambahan foto perlu melewati preview sebelum digabung. Folder laptop tidak berubah otomatis ketika source cloud diperbarui.

## Dokumentasi

Mulai dari [AGENTS.md](AGENTS.md), [PRD.md](PRD.md), dan [TASKS.md](TASKS.md). Detail lainnya: [DESIGN.md](DESIGN.md), [ARCHITECTURE.md](ARCHITECTURE.md), [DATA.md](DATA.md), [API.md](API.md), dan [CHANGELOG.md](CHANGELOG.md).
