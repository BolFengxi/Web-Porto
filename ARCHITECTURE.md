# ARCHITECTURE — Web Portofolio

Status: usulan awal, framework belum dipilih · Diperbarui: 15 Oktober 2026

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

Package manager, versi runtime, perintah install/dev/build, direktori output, penyedia hosting, domain, dan strategi deployment: **TBD**. Isi `README.md` setelah konfigurasi benar-benar dibuat. Belum ada deployment dalam tahap ini.

## 8. Catatan keputusan

| ID | Keputusan atau usulan | Status | Dasar |
| --- | --- | --- | --- |
| A-01 | Data hardcoded | Terkonfirmasi | Instruksi pemilik |
| A-02 | Tanpa pengambilan data API eksternal | Terkonfirmasi untuk kebutuhan saat ini | Instruksi pemilik |
| A-03 | Website statis tanpa backend/database | Usulan | Konten lokal dan kebutuhan saat ini |
| A-04 | Satu halaman | Usulan | Scope MVP yang sederhana |
| A-05 | Framework, styling, dan hosting | TBD | Belum dipilih |

Bila scope berubah, perbarui kebutuhan di `PRD.md`, kontrak konten di `DATA.md`, batas integrasi di `API.md`, dan tugas implementasinya.
