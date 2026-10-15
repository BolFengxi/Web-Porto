# ARCHITECTURE — Web Portofolio

Status: implementasi awal tersedia untuk review · Diperbarui: 15 Oktober 2026

## Implementasi saat ini

HTML, CSS, dan JavaScript modules memakai Vite sebagai dev server/bundler, npm serta `package-lock.json`. Pilihan teknis awal diambil agent untuk melanjutkan development; konfirmasi scope dan desain final tetap pada pemilik. Tidak ada framework UI atau dependency runtime. `linkedom` hanya dipakai untuk tes DOM dengan test runner Node.

`index.html` menyediakan landmark, navigasi, hero, dan template kartu. `src/data/portfolio.js` menyimpan konten; `src/ui.js` mengisi teks dan merender kartu/link, menyembunyikan konten opsional kosong, serta menolak tujuan URL yang tidak diizinkan. Plugin lokal dalam `vite.config.js` menjalankan `scripts/render-page.js` untuk menghasilkan HTML lengkap pada development dan build; template kartu dihapus dari hasil akhir. Stylesheet ditautkan langsung. Tidak ada JavaScript browser yang diperlukan atau dikirim pada build produksi. `src/styles.css` berisi token dan breakpoint 850/650/359 px. Tidak ada state library atau layanan server aplikasi.

Metadata title, description, dan Open Graph mengikuti profil dengan override opsional di `metadata`. Canonical/`og:url` hanya ditambahkan bila `metadata.siteUrl` berisi URL HTTPS valid. `scripts/check-build.js` memeriksa HTML produksi, anchor terlihat, dan keberadaan aset lokal menggunakan path lintas Windows/Linux. HMR bawaan Vite hanya berlaku pada development, bukan output produksi.

Build menghasilkan `dist/` untuk static hosting. Tidak ada konfigurasi hosting/deployment saat ini; pengembangan tetap melalui repository GitHub dan checkout lokal. Folder referensi tidak dimasukkan ke build produksi.

Arah tampilan aktif: notebook/grid/pixel sesuai `DESIGN.md`. Bio kini diberikan pemilik; renderer menampilkannya sekali dalam hero. About mengarah ke profil tambahan bila tersedia dan kembali ke hero bila data tambahan kosong. `public/fonts/` berisi font piksel lokal beserta lisensi. Tidak ada library UI atau JavaScript browser tambahan untuk redesign.

Renderer juga merender `about.education` dan `about.experience` dari data lokal. Section serta anchor About diselaraskan berdasarkan isi. Tidak ada pengambilan data LinkedIn dari browser atau server produksi.

## 1. Dasar keputusan

Data hardcoded dan belum ada kebutuhan API eksternal. Arsitektur awal yang diusulkan adalah website statis dengan konten lokal, tanpa backend atau database. Usulan ini perlu dicocokkan dengan stack dan hosting yang dipilih.

## 2. Pembagian tanggung jawab

| Lapisan | Tanggung jawab |
| --- | --- |
| Sumber konten lokal | Identitas, daftar project, tautan, dan informasi section |
| Section dan komponen | Merender konten, navigasi, dan interaksi tampilan |
| Styles dan token | Layout, tipografi, warna, serta responsivitas |
| Aset lokal | Gambar, icon, font bila diperlukan, dan CV opsional |
| Build dan hosting | Menghasilkan serta menyajikan website sesuai stack terpilih |

Aliran utama: konten lokal dibaca oleh halaman/komponen, lalu dirender menjadi website. Pengunjung tidak mengubah data sumber melalui UI. Pembaruan konten memerlukan perubahan source dan proses build/deploy yang sesuai.

## 3. Struktur konseptual — belum dibuat

| Lokasi usulan | Isi |
| --- | --- |
| Root repository | Sembilan dokumen Markdown dan konfigurasi project |
| Direktori halaman sesuai framework | Komposisi halaman dan metadata |
| `src/components/` | Elemen UI berulang |
| `src/sections/` | Hero, tentang, project, kontak sesuai scope final |
| `src/data/` | Konten portofolio lokal |
| `src/styles/` | Styles global dan token jika sesuai stack |
| Direktori aset publik sesuai framework | Aset yang perlu disajikan langsung |

Struktur aktual mengikuti konvensi stack. Jangan membuat folder kosong atau lapisan tambahan hanya untuk mengikuti tabel ini.

## 4. Halaman dan interaksi

- Satu halaman dengan navigasi anchor menjadi usulan MVP.
- Halaman detail project ditambahkan hanya jika kontennya memerlukan dan sudah masuk scope.
- State UI dibatasi pada kebutuhan nyata seperti menu mobile; tidak ada kebutuhan global state library saat ini.
- Filter project hanya ditambahkan bila jumlah konten dan kebutuhan pengunjung mendukungnya.
- Tanpa formulir pengiriman pesan selama belum ada mekanisme pengiriman yang disepakati.

## 5. Konten, aset, dan metadata

- Pisahkan data dan tampilan mengikuti `DATA.md`.
- Sajikan gambar dengan ukuran yang sesuai; tentukan dimensi agar layout stabil.
- Prioritaskan pemuatan aset hero yang diperlukan; gambar bagian bawah dapat dimuat belakangan.
- Isi judul halaman dan deskripsi berdasarkan konten pemilik.
- Canonical URL dan URL berbagi diisi setelah domain tersedia; jangan mengarang domain.

## 6. Batas keamanan dan privasi

Semua konten di source frontend atau aset publik dapat terlihat pengunjung. Jangan memasukkan token, kredensial, data privat, atau informasi kontak yang belum dimaksudkan untuk publik. Link keluar yang membuka tab baru perlu memakai perlindungan yang sesuai pada implementasinya.

## 7. Build dan deployment

Runtime: Node.js 22.12+ (seri 22) atau 24+. Package manager: npm. Perintah aktual: `npm ci`, `npm run dev`, `npm run build`, `npm run preview`, dan `npm run check`. Output: `dist/`. Penyedia hosting, domain, dan strategi deployment: **TBD**. Belum ada deployment.

## 8. Catatan keputusan

| ID | Keputusan atau usulan | Status | Dasar |
| --- | --- | --- | --- |
| A-01 | Data hardcoded | Terkonfirmasi | Instruksi pemilik |
| A-02 | Tanpa pengambilan data API eksternal | Terkonfirmasi untuk kebutuhan saat ini | Instruksi pemilik |
| A-03 | Website statis tanpa backend/database | Diimplementasikan sebagai draft | Konten lokal dan instruksi melanjutkan development |
| A-04 | Satu halaman | Diimplementasikan sebagai draft | Hero, karya, kontak; tentang bersifat opsional |
| A-05 | HTML/CSS/JavaScript + Vite, npm | Pilihan implementasi awal agent | Belum ada stack sebelumnya; kebutuhan UI statis |
| A-06 | Hosting dan domain | TBD | Belum ada instruksi deployment |

Bila scope berubah, perbarui kebutuhan di `PRD.md`, kontrak konten di `DATA.md`, batas integrasi di `API.md`, dan tugas implementasinya.
