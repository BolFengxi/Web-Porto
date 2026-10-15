# PRD — Web Portofolio

Status: draft awal · Diperbarui: 15 Oktober 2026

## Perkembangan implementasi

Pemilik menginstruksikan development dilanjutkan setelah repository GitHub dibuat. Draft pertama mengimplementasikan satu halaman berbahasa Indonesia: hero, karya, dan tautan GitHub; bagian tentang/CV hanya muncul bila datanya tersedia. Stack awal HTML/CSS/JavaScript + Vite dipilih agent, tanpa backend atau integrasi API. Repository serta konten awal tersedia; penentuan target pengunjung, bio, karya tambahan, desain final, dan hosting tetap terbuka.

## 1. Tujuan

Membangun website portofolio pribadi Iqbal untuk memperkenalkan profil, menunjukkan karya, dan menyediakan cara menghubungi pemilik. Rumusan tujuan ini merupakan usulan awal dan akan disesuaikan dengan target portofolio.

## 2. Kebutuhan terkonfirmasi

- Dokumentasi disiapkan sebelum implementasi.
- Data website hardcoded.
- Tidak ada kebutuhan mengambil data dari API eksternal saat ini.
- Referensi visual hero sudah diterima: panel komik, halftone, border hitam tebal, dan warna neon; analisis ada di `DESIGN.md`.

## 3. Pengguna dan kebutuhan — usulan

| Pengunjung | Kebutuhan |
| --- | --- |
| Rekruter atau calon kolaborator | Memahami fokus pemilik dan melihat contoh karya yang relevan |
| Teman atau pengunjung umum | Mengenal profil dan menemukan tautan kontak |
| Pemilik portofolio | Memperbarui konten melalui source tanpa backend |

Target utama dan bahasa website: **TBD**.

## 4. Ruang lingkup MVP — usulan

| Area | Perilaku yang diharapkan |
| --- | --- |
| Navigasi | Mengarahkan pengunjung ke bagian halaman dengan label jelas |
| Hero | Menampilkan identitas, ringkasan fokus, dan CTA yang relevan sesuai referensi |
| Tentang | Memuat perkenalan singkat berdasarkan konten pemilik |
| Project | Menampilkan judul, ringkasan, teknologi, gambar opsional, dan link valid yang tersedia |
| Kontak | Menyediakan tautan kontak yang diberikan pemilik |
| Footer | Memuat identitas dan tautan seperlunya |

Skill, pengalaman, pendidikan, CV, halaman detail project, filter, dark mode, dan animasi tambahan bersifat opsional. Masukkan hanya jika kebutuhan dan kontennya sudah jelas. Struktur satu halaman menjadi usulan awal, bukan keputusan final.

## 5. Di luar kebutuhan saat ini

Backend, database, autentikasi, dashboard admin, CMS, pengiriman formulir, sinkronisasi profil otomatis, dan integrasi API eksternal belum dibutuhkan. Perubahan kebutuhan dicatat terlebih dahulu di dokumen terkait.

## 6. Kriteria penerimaan MVP — usulan

- Pengunjung dapat mengenali pemilik, melihat karya, dan menemukan kontak.
- Hero mengikuti referensi yang sudah ditinjau bersama pemilik.
- Tidak ada data rekaan, placeholder publik, link kosong, atau kontrol tanpa fungsi.
- Seluruh navigasi dan CTA yang ditampilkan berfungsi sesuai labelnya.
- Layout tidak memiliki horizontal overflow pada lebar 360, 768, dan 1440 px.
- Elemen interaktif dapat diakses dengan keyboard dan memiliki fokus yang terlihat.
- Gambar bermakna memiliki alt text; gambar dekoratif tidak mengganggu pembaca layar.
- Animasi menghormati preferensi reduced motion bila animasi digunakan.
- Konten dapat diubah dari sumber data lokal tanpa mengedit layout.
- Build produksi dan pemeriksaan yang dikonfigurasi berhasil sebelum rilis.

## 7. Ukuran keberhasilan

Verifikasi awal memakai skenario pengunjung: menemukan project, membuka tautan project yang tersedia, dan mengakses kontak. Tidak ada target traffic atau konversi numerik sebelum tujuan bisnis ditentukan. Analytics belum menjadi bagian MVP.

## 8. Hal yang perlu dilengkapi

| Informasi | Status | Dampak |
| --- | --- | --- |
| Referensi hero section | Diterima dan dianalisis; adaptasi akhir TBD | Komposisi dan sistem visual |
| Stack dan target hosting | HTML/CSS/JavaScript + Vite sebagai implementasi awal; hosting TBD | Setup, struktur, dan langkah menjalankan project |
| Bahasa dan target pengunjung | TBD | Copy serta penekanan konten |
| Identitas yang ingin ditampilkan | TBD | Nama publik, headline, foto, dan bio |
| Project unggulan beserta aset/link | TBD | Isi bagian karya |
| Kontak publik dan CV opsional | TBD | CTA serta tautan |

Detail teknis: `ARCHITECTURE.md`. Detail visual: `DESIGN.md`. Rencana kerja: `TASKS.md`.
