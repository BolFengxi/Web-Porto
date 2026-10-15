# CHANGELOG

Catatan perubahan berarti pada project. Entri mencatat pekerjaan yang sudah dilakukan; rencana tetap berada di `TASKS.md`.

## [Unreleased]

### Implemented — 15 Oktober 2026

- Fondasi HTML/CSS/JavaScript modules + Vite 8.3.4, npm, dan lockfile; tanpa dependency runtime atau API eksternal.
- Hero komik dengan burst, halftone, outline ungu, panel proyek cyan, dan penutup magenta; dekorasi asli CSS/SVG.
- Data konten terpisah, kartu Web Porto, serta profil GitHub terverifikasi. Section bio/CV dan aksi tanpa URL disembunyikan.
- Navigasi anchor, skip link, focus indicator, breakpoint responsif, dan reduced motion.
- Enam tes DOM/URL untuk konten kosong, tujuan tautan, teks aman, ID duplikat, rerendering, dan navigasi.
- `npm run check` berhasil di Node.js 24.19.0: sintaks, 6/6 tes, dan build Vite. Output awal sekitar 5.8 kB HTML, 14.6 kB CSS, dan 3.7 kB JavaScript sebelum gzip.
- Dokumentasi diperbarui berdasarkan implementasi aktual. Setup GitHub telah diselesaikan pemilik secara manual.
- QA visual/browser belum dijalankan karena kontrol browser yang didukung tidak tersedia; belum ada deployment. Desain dan konten akhir masih menunggu review.
- Push branch belum berhasil: shell tidak memiliki autentikasi GitHub dan API integrasi menolak akses tulis (403). PR belum dibuat; patch commit disiapkan untuk diterapkan pemilik dari laptop.


### Added — 15 Oktober 2026

- Paket setup Windows untuk menyalin proyek ke Documents/Project/Web-Porto, membuat commit awal, dan membuat repository private GitHub melalui script yang dijalankan di laptop; eksekusi lokal dan pembuatan repository belum dilakukan dalam sesi cloud.
- `.gitignore` untuk secret lokal, dependency, output build, dan file editor/OS.

- Dokumentasi awal: `AGENTS.md`, `PRD.md`, `DESIGN.md`, `ARCHITECTURE.md`, `DATA.md`, `API.md`, `TASKS.md`, `CHANGELOG.md`, dan `README.md`.
- Pencatatan data hardcoded dan belum adanya kebutuhan API eksternal.
- Usulan MVP, struktur konten, arsitektur statis, kriteria penerimaan, dan urutan implementasi.
- Analisis referensi hero yang dilampirkan: panel komik, halftone, border hitam tebal, dan aksen neon; salinan gambar disertakan dalam paket.
- Token serta adaptasi visual awal berstatus usulan; stack, hosting, konten, font, dan aset final masih TBD.

Entri dokumentasi awal di atas mendahului implementasi. Status terkini: implementasi draft serta tes/build tersedia; belum ada deployment atau versi rilis.
