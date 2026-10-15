# Web Porto

Portofolio Iqbal dengan arah visual komik: bingkai hitam, halftone, ledakan kuning-oranye, dan tipografi ungu. Implementasi awal memakai HTML, CSS, JavaScript modules, dan Vite. Data hardcoded; tidak ada backend, database, API eksternal, atau environment variable aplikasi.

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
| `npm run check` | Pemeriksaan sintaks, seluruh tes, dan build produksi |

## Mengubah konten

Edit `src/data/portfolio.js` untuk nama, intro, bio, CV, project, teknologi, dan kontak. `null` atau array kosong menyembunyikan konten opsional beserta navigasinya. Tidak ada tombol demo/CV ketika tujuannya belum tersedia. Teks dimasukkan sebagai teks biasa, bukan HTML.

Saat ini hanya nama Iqbal, repository Web Porto, dan profil GitHub `BolFengxi` yang digunakan. Web Porto ditampilkan sebagai project nyata yang sedang dikembangkan. Bio, CV, pengalaman, skill personal, kontak lain, dan project lain menunggu konten pemilik. Copy pengantar dan struktur halaman merupakan draft implementasi untuk ditinjau.

Untuk menambahkan CV lokal, letakkan file di `public/` lalu isi `profile.resume`, misalnya `/cv.pdf`. Jangan mengisi path sebelum berkasnya tersedia. Judul dan deskripsi metadata awal ada di `index.html`; sesuaikan juga bila identitas atau tujuan halaman berubah.

## Struktur

```text
index.html                 Halaman semantik dan template kartu
src/main.js                Entry point
src/ui.js                  Render konten dan aturan URL
src/data/portfolio.js       Konten hardcoded
src/styles.css             Token, komponen, dan responsivitas
public/favicon.svg         Aset dekoratif asli
test/portfolio.test.js      Tes rendering dengan DOM ringan
references/                Referensi desain; tidak disajikan sebagai UI
```

Font memakai stack sistem sehingga tidak ada permintaan font eksternal. Ilustrasi dekoratif dibangun memakai CSS; karakter dan gambar referensi tidak disalin ke halaman. `dist/` dan `node_modules/` tidak di-commit.

## Status dan verifikasi

Implementasi awal tersedia pada branch lokal `feat/comic-portfolio`. Pengiriman ke GitHub belum berhasil karena akses tulis integrasi ditolak (403); PR belum dibuat. Patch disediakan sebagai handoff agar pemilik bisa menerapkan commit lalu push dari laptop. `npm run check` berhasil: pemeriksaan sintaks, enam tes, dan build produksi. Tes DOM tidak memverifikasi layout, kontras, atau interaksi browser. Pemeriksaan visual di 360, 768, dan 1440 px, keyboard, zoom 200%, serta reduced motion masih perlu dilakukan di browser.

Belum ada deployment. Target hosting/domain, konten publik final, dan persetujuan desain tetap terbuka. Folder di laptop tidak berubah otomatis ketika branch cloud diperbarui.

## Dokumentasi

Mulai dari [AGENTS.md](AGENTS.md), [PRD.md](PRD.md), dan [TASKS.md](TASKS.md). Detail lainnya: [DESIGN.md](DESIGN.md), [ARCHITECTURE.md](ARCHITECTURE.md), [DATA.md](DATA.md), [API.md](API.md), dan [CHANGELOG.md](CHANGELOG.md).
