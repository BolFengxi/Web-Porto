# TASKS — Web Portofolio

Status: redesign notebook, bio pemilik, dan tiga proyek terverifikasi tersedia; 14 tes/build berhasil; QA browser belum dilakukan.

Legenda: `[x]` selesai, `[ ]` belum selesai. Usulan scope belum berarti persetujuan final.

## Fase 0 — Fondasi

- [x] DOC-01 — Membuat sembilan dokumen awal yang saling merujuk.
- [x] DOC-02 — Mencatat data hardcoded dan tidak adanya kebutuhan API eksternal.
- [x] DOC-03 — Memisahkan keputusan terkonfirmasi, usulan, dan TBD.
- [ ] PLAN-01 — Menentukan target pengunjung, bahasa, section final, dan CTA utama.
- [ ] PLAN-02 — Memilih stack, package manager, dan target hosting.
- [ ] CONTENT-01 — Mengumpulkan identitas publik, headline, bio, project, aset, dan tautan kontak.
- [x] DESIGN-01 — Menerima dan memeriksa referensi hero section.
- [x] DESIGN-02 — Mendokumentasikan pola visual, token usulan, komposisi, dan responsivitas di `DESIGN.md`.
- [x] DESIGN-04 — Menerima referensi notebook baru, mengganti DESIGN.md, dan menyimpan referensi komik sebagai riwayat.
- [x] CONTENT-02 — Memakai bio persis dari pemilik serta memilih tiga proyek berdasarkan repo/source public; bukti dicatat di `references/project-selection.md`.
- [x] CONTENT-03 — Menambahkan About, pendidikan, pengalaman terverifikasi dari cuplikan LinkedIn, dan tautan LinkedIn; batas sumber dicatat.
- [ ] DESIGN-03 — Memfinalkan adaptasi portofolio, font, warna, dan aset berdasarkan referensi serta konten pemilik.

## Fase 1 — Setup

- [x] REPO-01 — Menyiapkan paket dokumentasi, `.gitignore`, serta script penempatan lokal dan pembuatan repository private GitHub.
- [x] REPO-02 — Repository `BolFengxi/Web-Porto` dan commit awal pada `main` tersedia; pemilik menyelesaikan setup secara manual.

- [x] SETUP-01 — Menyiapkan HTML/CSS/JavaScript + Vite dan npm sebagai pilihan implementasi awal. Hosting tetap TBD.
- [x] SETUP-02 — Mencatat perintah install, dev, build, serta pemeriksaan aktual di `README.md`.
- [x] DATA-01 — Membuat sumber data lokal mengikuti konten yang tersedia dan kontrak `DATA.md`.
- [x] STYLE-01 — Mengganti styles/token menjadi notebook/grid/pixel sesuai referensi terbaru; review visual tetap terbuka.

## Fase 2 — Implementasi

- [x] UI-01 — Mengganti hero dengan notebook, font piksel lokal, dan bio persis dari pemilik; review visual tetap terbuka.
- [x] UI-02 — Mengimplementasikan navigasi anchor untuk section yang memiliki konten pada scope draft.
- [x] UI-03 — Mengimplementasikan daftar project dengan aksi berdasarkan ketersediaan URL.
- [ ] UI-04 — Menambahkan kontak dan CV bila asetnya tersedia.
- [x] UI-05 — Menulis breakpoint mobile/tablet/desktop dan reduced motion; verifikasi visual masih QA-02/QA-04.
- [x] META-01 — Membuat title/description/Open Graph dari profil; canonical hanya untuk URL HTTPS yang diberikan pemilik.
- [x] STATIC-01 — Menyajikan karya, kontak, navigasi, dan stylesheet tanpa JavaScript browser.
- [x] BUILD-01 — Memeriksa anchor dan keberadaan aset lokal hasil build.

UI-01 bergantung pada DESIGN-03, DATA-01, dan setup. UI-02 sampai UI-04 bergantung pada PLAN-01 dan konten masing-masing. Pengumpulan konten serta pemilihan stack dapat berjalan sambil memfinalkan adaptasi visual.

UI-04 masih menunggu kontak tambahan/CV; tautan GitHub terverifikasi sudah tersedia. Bio tidak lagi kosong. Foto dan screenshot proyek belum diberikan, sehingga tidak dipasang. PLAN-01/PLAN-02/DESIGN-03 tetap terbuka untuk finalisasi, meskipun pilihan implementasi awal sudah dipakai.

## Fase 3 — Verifikasi

- [ ] QA-01 — Membandingkan hero dengan referensi pada viewport yang sesuai.
- [ ] QA-02 — Memeriksa 360, 768, dan 1440 px, teks panjang, serta zoom 200%.
- [ ] QA-03 — Memeriksa seluruh link, navigasi, menu mobile jika ada, dan CTA.
- [ ] QA-04 — Memeriksa keyboard, focus, heading, alt text, dan kontras.
- [ ] QA-05 — Memastikan tidak ada placeholder publik, fakta rekaan, aset hilang, atau secret.
- [x] QA-06 — `npm run check` berhasil: pemeriksaan sintaks, 14 tes DOM/metadata/URL/latar belakang, build Vite, dan pemeriksaan HTML/aset produksi.

Tes otomatis membuktikan perilaku data kosong, link, ID duplikat, dan teks aman; tes ini tidak menggantikan QA visual/browser. QA browser dilewati karena kontrol browser yang didukung tidak tersedia pada lingkungan ini.

## Fase 4 — Rilis

- [x] REPO-03 — Branch `feat/comic-portfolio` sudah di-push pemilik dan diverifikasi di remote.
- [x] REPO-04 — PR #1 telah digabung pemilik ke `main`, diverifikasi pada commit `a004d99`.
- [x] REPO-05 — HTML statis dan notebook telah masuk `main`.
- [ ] REPO-07 — Menerapkan patch konten LinkedIn ke main dan memeriksa deployment ulang Vercel.

- [ ] RELEASE-01 — Menyiapkan hasil yang dapat ditinjau pemilik dan menindaklanjuti revisi.
- [x] RELEASE-02 — Pemilik menyatakan deployment Vercel sudah berhasil; URL/hasil live masih perlu diperiksa pada RELEASE-03.
- [ ] RELEASE-03 — Memeriksa versi yang terdeploy dan mencatat URL serta hasil verifikasi.
- [ ] RELEASE-04 — Memperbarui README, changelog, dan status tugas berdasarkan hasil nyata.

## Definisi selesai

Suatu item selesai bila hasilnya tersedia, dependensinya terpenuhi, pemeriksaan relevannya sudah dilakukan, dan dokumentasi yang terdampak diperbarui. Status rilis tidak boleh ditandai selesai hanya karena implementasi lokal selesai.
