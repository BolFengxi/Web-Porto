# CHANGELOG

Catatan perubahan berarti pada project. Entri mencatat pekerjaan yang sudah dilakukan; rencana tetap berada di `TASKS.md`.

## [Unreleased]

### Content — 15 Oktober 2026

- Source disamakan dengan produksi `main` setelah merge PR #1 (`a004d99`). Pemilik menyatakan deployment Vercel telah selesai.
- About ditambahkan sebagai catatan notebook dengan nama lengkap, ringkasan, Education, dan Experience. Bio hero tetap persis sesuai instruksi pemilik.
- Pengalaman mengacu pada cuplikan publik LinkedIn: Teaching Assistant di Fasilkom UI, kelas Introduction to Computer Organization, serta pengalaman bendahara organisasi mahasiswa. Informasi yang tidak terbaca tidak diisi; batas sumber ada di `references/linkedin-content.md`.
- Tautan LinkedIn ditambahkan di samping GitHub. Tidak ada API/sinkronisasi LinkedIn pada website.
- Empat tes tambahan memeriksa konten statis, pengosongan section/anchor, data opsional, dan teks aman. `npm run check` berhasil: 14 tes, build, serta pemeriksaan HTML/anchor/aset.
- Hasil disiapkan sebagai patch untuk `main`; perubahan ini belum di-push atau dideploy ulang dari sesi cloud. QA browser/Windows belum dilakukan.


### Redesigned — 15 Oktober 2026

- Referensi notebook baru menggantikan arah komik. DESIGN.md ditulis ulang; gambar baru disimpan di `references/hero-notebook-reference.png`, gambar lama dipertahankan sebagai riwayat.
- Hero kertas bergaris, grid abu-abu, nama piksel ber-outline oranye tipis, catatan pastel, dan panel proyek seperti folder. Visual proyek berupa monogram dekoratif, bukan screenshot rekaan.
- Bio publik dipakai persis: Undergraduate Computer Science student at University of Indonesia. About mengarah ke bio dalam hero agar tidak ada duplikasi kalimat.
- Tiga proyek dipilih dari README/source public: Sporta Kuler (Django), MinaToko (Flutter), Neo Tube Automator (Python/Selenium). Alasan dan sumber ada di `references/project-selection.md`; tidak ada klaim impact atau demo live.
- Font Pixelify Sans Latin 700 disimpan lokal bersama lisensi OFL-1.1. Font ini merupakan pilihan adaptasi, bukan identifikasi pasti font referensi.
- Bahasa UI draft Inggris mengikuti bio/referensi; metadata memakai bio yang sama. Tidak ada JavaScript browser baru.
- `npm run check` berhasil: 10 tes, build, dan verifikasi HTML/anchor/aset. Output sekitar 8.4 kB HTML dan 11.9 kB CSS sebelum gzip, ditambah font lokal. QA visual/browser/Windows tetap belum dilakukan.
- Paket handoff memuat patch HTML statis dan patch notebook, dengan pemeriksaan baseline sebelum penerapan; akses tulis GitHub integrasi tetap belum tersedia.


### Improved — 15 Oktober 2026

- Branch pertama yang di-push pemilik telah diverifikasi pada remote `feat/comic-portfolio` (commit `b1adaaf`). Iterasi kedua dibuat di atas commit tersebut.
- Karya, kontak, serta navigasi dirender ke HTML saat development/build. CSS ditautkan langsung; JavaScript aplikasi tidak dikirim ke browser produksi.
- Metadata title/description/Open Graph mengikuti data profil dengan override opsional. Canonical dan `og:url` hanya muncul setelah URL HTTPS valid disediakan.
- Template kartu dihapus dari HTML akhir. Skip link memiliki target main yang dapat menerima fokus; teks panjang mendapat aturan wrap.
- `npm run check` berhasil dengan 10 tes, build Vite, serta pemeriksaan HTML produksi, anchor, dan aset lokal. Output sekitar 6.4 kB HTML dan 14.5 kB CSS sebelum gzip; tidak ada file JavaScript browser.
- Patch handoff lokal dikecualikan dari Git agar tidak ikut ter-commit.
- API pembuatan PR juga ditolak integrasi (403); PR belum dibuat. Iterasi kedua disiapkan sebagai patch. QA browser, Windows, konten final, dan deployment belum dilakukan.


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
