# Web Portofolio

Dokumentasi awal untuk website portofolio pribadi Iqbal. Tahap saat ini adalah persiapan kebutuhan dan desain; kode aplikasi belum dibuat.

## Keputusan saat ini

- Data website hardcoded.
- Tidak ada kebutuhan mengambil data dari API eksternal.
- Referensi hero section sudah diterima dan dianalisis di `DESIGN.md`: panel komik, halftone, dan warna neon.
- Stack, hosting, bahasa website, section final, dan konten publik belum ditentukan.

Website statis satu halaman tanpa backend/database merupakan **usulan awal**, bukan stack atau scope final yang sudah disetujui.

## Peta dokumen

| Dokumen | Fungsi |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Aturan kerja untuk kontributor dan coding agent |
| [PRD.md](PRD.md) | Tujuan, kebutuhan, scope usulan, dan kriteria penerimaan |
| [DESIGN.md](DESIGN.md) | Referensi visual, token, komponen, dan responsivitas |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Struktur teknis dan catatan keputusan |
| [DATA.md](DATA.md) | Kontrak serta pengelolaan konten hardcoded |
| [API.md](API.md) | Batas integrasi dan pencatatan bahwa API belum dibutuhkan |
| [TASKS.md](TASKS.md) | Tugas, dependensi, dan progres aktual |
| [CHANGELOG.md](CHANGELOG.md) | Riwayat perubahan yang sudah dilakukan |

## Memakai paket ini

Lokasi pengembangan yang diminta: folder `Project\Web-Porto` di dalam Documents laptop. Paket setup menyediakan script untuk menempatkan dokumen di sana dan membuat repository private `BolFengxi/Web-Porto` melalui GitHub CLI. Folder lokal dan repository baru tersedia setelah script berhasil dijalankan; keduanya belum dibuat dari sesi cloud penyusunan paket ini.

Tempatkan sembilan file Markdown di root repository Web Portofolio. Mulai dari `AGENTS.md` dan `PRD.md`, lalu lanjutkan pekerjaan di `TASKS.md`. Semua penanda **TBD** berarti keputusan atau informasi belum tersedia; jangan memperlakukannya sebagai nilai final.

Langkah berikutnya adalah menentukan adaptasi hero, konten publik, target pengunjung, bahasa, dan stack. Salinan referensi ada di `references/hero-reference.png` dalam paket ZIP. Gambar merupakan acuan visual; teks dan karakter di dalamnya bukan data portofolio.

## Menjalankan project

Belum tersedia karena aplikasi dan konfigurasinya belum dibuat. Setelah setup, isi bagian ini berdasarkan file konfigurasi aktual:

| Informasi | Status |
| --- | --- |
| Stack dan versi runtime | TBD |
| Package manager dan lockfile | TBD |
| Perintah instalasi | TBD |
| Perintah development | TBD |
| Perintah build dan output | TBD |
| Perintah lint/typecheck/test yang tersedia | TBD |
| Environment variables | Belum ada kebutuhan aplikasi yang teridentifikasi |
| Hosting, domain, dan URL deployment | TBD |

Jangan menjalankan atau mendokumentasikan script seolah sudah tersedia sebelum konfigurasinya dibuat.

## Memperbarui konten dan dokumentasi

Setelah implementasi tersedia, edit sumber konten lokal yang ditetapkan di `DATA.md`, periksa hasil tampilan dan tautannya, lalu build/deploy sesuai konfigurasi aktual. Saat kebutuhan berubah, perbarui dokumen sumbernya, tugas terkait, dan changelog. Jangan memasukkan kredensial atau informasi privat ke konten publik.

## Status verifikasi

Paket ini hanya berisi dokumentasi awal. Belum ada build aplikasi, pengujian browser, atau deployment yang dilakukan. Lisensi source serta izin publikasi aset belum ditentukan.
