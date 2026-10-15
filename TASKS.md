# TASKS — Web Portofolio

Status: dokumentasi awal tersedia; implementasi belum dimulai.

Legenda: `[x]` selesai, `[ ]` belum selesai. Usulan scope belum berarti persetujuan final.

## Fase 0 — Fondasi

- [x] DOC-01 — Membuat sembilan dokumen awal yang saling merujuk.
- [x] DOC-02 — Mencatat data hardcoded dan tidak adanya kebutuhan API eksternal.
- [x] DOC-03 — Memisahkan keputusan terkonfirmasi, usulan, dan TBD.
- [ ] PLAN-01 — Menentukan target pengunjung, bahasa, section final, dan CTA utama.
- [ ] PLAN-02 — Memilih stack, package manager, dan target hosting.
- [ ] CONTENT-01 — Mengumpulkan identitas publik, headline, bio, project, aset, dan tautan kontak.
- [x] DESIGN-01 — Menerima dan memeriksa referensi hero section.
- [x] DESIGN-02 — Mendokumentasikan pola visual, token usulan, komposisi, dan aturan responsif awal di `DESIGN.md`.
- [ ] DESIGN-03 — Memfinalkan adaptasi portofolio, font, warna, dan aset berdasarkan referensi serta konten pemilik.

## Fase 1 — Setup

- [x] REPO-01 — Menyiapkan paket dokumentasi, `.gitignore`, serta script penempatan lokal dan pembuatan repository private GitHub.
- [ ] REPO-02 — Menjalankan script pada laptop untuk membuat `Documents\Project\Web-Porto`, commit awal, repository `BolFengxi/Web-Porto`, dan push branch `main`.

- [ ] SETUP-01 — Menyiapkan project sesuai stack. Bergantung pada PLAN-02.
- [ ] SETUP-02 — Mencatat perintah install, dev, build, serta pemeriksaan aktual di `README.md`.
- [ ] DATA-01 — Membuat sumber data lokal mengikuti konten yang tersedia dan kontrak `DATA.md`.
- [ ] STYLE-01 — Membuat styles/token dasar. Bergantung pada DESIGN-03 dan SETUP-01.

## Fase 2 — Implementasi

- [ ] UI-01 — Mengimplementasikan hero sesuai referensi dan konten terverifikasi.
- [ ] UI-02 — Mengimplementasikan navigasi dan bagian lain sesuai scope final.
- [ ] UI-03 — Mengimplementasikan daftar project dengan aksi berdasarkan ketersediaan URL.
- [ ] UI-04 — Menambahkan kontak dan CV bila asetnya tersedia.
- [ ] UI-05 — Menyesuaikan mobile, tablet, desktop, dan reduced motion bila relevan.
- [ ] META-01 — Mengisi metadata halaman dari data terverifikasi; domain tetap kosong sampai tersedia.

UI-01 bergantung pada DESIGN-03, DATA-01, dan setup. UI-02 sampai UI-04 bergantung pada PLAN-01 dan konten masing-masing. Pengumpulan konten serta pemilihan stack dapat berjalan sambil memfinalkan adaptasi visual.

## Fase 3 — Verifikasi

- [ ] QA-01 — Membandingkan hero dengan referensi pada viewport yang sesuai.
- [ ] QA-02 — Memeriksa 360, 768, dan 1440 px, teks panjang, serta zoom 200%.
- [ ] QA-03 — Memeriksa seluruh link, navigasi, menu mobile jika ada, dan CTA.
- [ ] QA-04 — Memeriksa keyboard, focus, heading, alt text, dan kontras.
- [ ] QA-05 — Memastikan tidak ada placeholder publik, fakta rekaan, aset hilang, atau secret.
- [ ] QA-06 — Menjalankan build dan pemeriksaan yang memang tersedia; mencatat hasil aktual.

## Fase 4 — Rilis

- [ ] RELEASE-01 — Menyiapkan hasil yang dapat ditinjau pemilik dan menindaklanjuti revisi.
- [ ] RELEASE-02 — Melakukan deployment setelah target dan instruksi rilis jelas.
- [ ] RELEASE-03 — Memeriksa versi yang terdeploy dan mencatat URL serta hasil verifikasi.
- [ ] RELEASE-04 — Memperbarui README, changelog, dan status tugas berdasarkan hasil nyata.

## Definisi selesai

Suatu item selesai bila hasilnya tersedia, dependensinya terpenuhi, pemeriksaan relevannya sudah dilakukan, dan dokumentasi yang terdampak diperbarui. Status rilis tidak boleh ditandai selesai hanya karena implementasi lokal selesai.
