# DATA — Konten Hardcoded

Status: kontrak awal diimplementasikan · Diperbarui: 15 Oktober 2026

## Sumber aktual

Konten ada di `src/data/portfolio.js`: `profile`, `projects`, dan `contacts`. Field profil aktual: `displayName`, `intro`, `bio`, `resume`. Project menggunakan `id`, `title`, `category`, `summary`, `technologies`, `repositoryUrl`, `demoUrl`. Kontak menggunakan `id`, `label`, `href`. Field lain dalam rancangan di bawah belum diimplementasikan.

Identitas awal hanya Iqbal dan tautan GitHub yang terverifikasi. Web Porto sendiri menjadi satu project nyata berstatus pengembangan. Intro merupakan copy draft, bukan klaim pengalaman. Bio dan CV bernilai `null`. Teknologi pada kartu menjelaskan implementasi project ini, bukan tingkat keahlian personal.

`src/ui.js` merender teks melalui `textContent`, menghilangkan ID project duplikat/konten wajib kosong, dan mengizinkan URL HTTPS atau mailto yang valid. Path absolut lokal hanya diizinkan untuk CV. Link kosong atau berbahaya tidak ditampilkan. Section dan navigasi terkait disembunyikan bersama jika tidak ada konten. Renderer dijalankan saat development/build oleh `scripts/render-page.js`, sehingga hasil HTML tetap lengkap tanpa JavaScript browser.

`metadata.title` dan `metadata.description` opsional; nilai `null` menggunakan nama serta intro profil. `metadata.siteUrl` tetap `null` sampai domain diberikan; canonical dan `og:url` hanya dibuat untuk URL HTTPS valid. Open Graph title/description mengikuti metadata yang sama. Jangan mengisi domain contoh pada data publik. Build memeriksa file lokal yang dirujuk HTML, termasuk CV bila sudah ditambahkan.

## 1. Mengapa dokumen ini ada

Tidak diperlukan database untuk kebutuhan saat ini. Dokumen ini menjaga nama field, isi konten, serta cara menangani data kosong tetap konsisten ketika konten hardcoded dipisahkan dari UI.

## 2. Sumber dan kepemilikan

- Pemilik project menyediakan fakta, narasi, aset, dan tautan yang boleh dipublikasikan.
- Data disimpan dalam `src/data/portfolio.js`.
- Konten awal tersedia; konten portofolio lengkap masih menunggu pemilik.
- Perubahan konten dilakukan melalui source, lalu build/deploy ulang sesuai arsitektur terpilih.
- Seluruh field berikut merupakan usulan dan dapat disederhanakan setelah konten diterima.

## 3. Kontrak konten — usulan

| Entitas | Field | Aturan |
| --- | --- | --- |
| Profil | `displayName`, `headline`, `bio` | Teks yang sudah diverifikasi pemilik |
| Profil | `avatar`, `resume` | Opsional; referensi aset yang benar-benar tersedia |
| Project | `id`, `title`, `summary` | Wajib untuk setiap project yang ditampilkan; `id` unik dan stabil |
| Project | `technologies` | Daftar teks; gunakan daftar kosong bila tidak ada |
| Project | `image` | Opsional; memiliki alt text sesuai konteks bila ditampilkan |
| Project | `demoUrl`, `repositoryUrl` | Opsional; hanya URL tujuan yang valid |
| Project | `featured`, `order` | Opsional untuk seleksi dan urutan tampilan |
| Kontak | `id`, `label`, `href` | Tujuan publik yang diberikan pemilik |
| Metadata situs | `title`, `description` | Diisi dari identitas dan tujuan portofolio |
| Metadata situs | `siteUrl`, `shareImage` | Opsional sampai domain/aset tersedia |

Informasi skill, pendidikan, atau pengalaman baru ditambahkan jika section tersebut masuk scope. Jangan menyalin data biografis dari konteks lain tanpa memastikan data itu memang ingin dipublikasikan.

## 4. Aturan data

- Gunakan urutan deterministik: nilai `order` bila dipakai, atau urutan array.
- Hindari field HTML mentah; teks biasa cukup untuk MVP.
- Konten belum tersedia memakai nilai kosong/null yang sesuai tipe, bukan fakta buatan.
- Jangan menggunakan `#`, `example.com`, atau URL rekaan sebagai link publik.
- Jangan menampilkan angka statistik, level skill, atau testimoni tanpa sumber dari pemilik.
- Simpan referensi aset dalam format konsisten setelah lokasi aset dipilih.

## 5. Perilaku UI ketika data kosong

| Kondisi | Perilaku yang diharapkan |
| --- | --- |
| Gambar project kosong | Gunakan layout tanpa gambar atau fallback visual yang disengaja |
| Link demo/repository kosong | Sembunyikan aksi terkait |
| CV belum tersedia | Sembunyikan tombol CV |
| Daftar project kosong | Tandai kebutuhan konten selama pengembangan; jangan tampilkan karya rekaan |
| Daftar kontak kosong | Sembunyikan CTA terkait dan catat sebagai kebutuhan sebelum rilis |
| Section opsional kosong | Hilangkan section beserta item navigasinya |

Identitas, karya, dan kontak yang dibutuhkan untuk MVP harus dilengkapi sebelum rilis; menyembunyikan bagian kosong bukan pengganti pemenuhan scope.

## 6. Validasi

Setelah stack dipilih, gunakan tipe atau struktur sederhana untuk menjaga konsistensi. Periksa ID unik, field wajib, tujuan tautan, keberadaan aset, dan kesesuaian antara navigasi dengan section. Tidak perlu database, migrasi, atau library validasi tambahan hanya untuk konten sederhana ini.
