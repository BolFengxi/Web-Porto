# API — Batas Integrasi

Status: tidak ada kebutuhan API saat ini · Diperbarui: 16 Oktober 2026

Implementasi awal menggunakan konten lokal dari `src/data/portfolio.js`. Link GitHub hanya navigasi keluar; tidak ada fetch API GitHub atau API data lainnya. Vite hanya menyediakan layanan development/build, bukan backend aplikasi.

Konten kini dirender ke HTML pada development/build; browser memuat HTML, CSS, aset lokal, dan satu modul entrance opsional. Entrance hanya memakai flag sessionStorage lokal untuk sesi tab; tidak ada API, analytics, atau sinkronisasi data. Metadata dibuat dari data lokal yang sama. Ini tetap website statis tanpa API, SSR server produksi, atau database.

LinkedIn dipakai sebagai sumber editorial pada sesi pengembangan dan sebagai tautan kontak publik. Website tidak melakukan fetch profil LinkedIn, menggunakan API key, atau menyinkronkan data otomatis.

## 1. Keputusan saat ini

Data website hardcoded. Project tidak membutuhkan pengambilan data dari API eksternal. Arsitektur statis tanpa endpoint aplikasi merupakan usulan awal di `ARCHITECTURE.md`.

Dokumen ini tetap disediakan agar ketiadaan API menjadi keputusan yang jelas, bukan bagian yang terlupakan.

## 2. Inventaris

| Area | Status |
| --- | --- |
| Endpoint backend milik aplikasi | Tidak direncanakan saat ini |
| Pengambilan konten dari API eksternal | Tidak diperlukan |
| Database dan autentikasi | Tidak termasuk kebutuhan saat ini |
| API key dan secret aplikasi | Tidak diperlukan untuk scope saat ini |
| Formulir pengiriman pesan | Belum masuk scope |
| Kontrak request/response dan error API | Tidak berlaku selama tidak ada endpoint |

Permintaan browser untuk file halaman, gambar, font, atau aset statis tetap dapat terjadi. Hal tersebut berbeda dari integrasi API data aplikasi.

## 3. Kontak dan tautan keluar

Usulan kontak MVP menggunakan tautan yang disediakan pemilik, misalnya alamat email melalui `mailto:` atau profil publik. Link demo atau repository membawa pengunjung ke tujuan tersebut; website tidak perlu mengambil data dari layanannya.

Jangan menyediakan tombol “Kirim” yang mengesankan pesan tersimpan atau terkirim tanpa mekanisme pengiriman nyata.

## 4. Jika kebutuhan berubah

Sebelum menambahkan integrasi, catat tujuan pengguna, penyedia atau endpoint, field request/response, penanganan gagal dan loading, kebutuhan secret, biaya atau batas pemakaian yang relevan, serta dampak terhadap privasi. Perbarui `PRD.md`, `ARCHITECTURE.md`, `DATA.md`, dan `TASKS.md` sesuai perubahan nyata.

Tidak ada spesifikasi endpoint fiktif atau konfigurasi API yang perlu dibuat pada tahap ini.
