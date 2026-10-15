# AGENTS.md

Panduan kerja untuk kontributor dan coding agent pada project Web Portofolio.

## Konteks dan cakupan

- Pemilik project: Iqbal.
- Tahap saat ini: persiapan dokumentasi; implementasi website belum dimulai.
- Data website hardcoded. Belum ada kebutuhan mengambil data dari API eksternal.
- Referensi hero section sudah diterima; lihat `DESIGN.md` dan `references/hero-reference.png`.
- Aturan ini berlaku untuk seluruh repository setelah file ini ditempatkan di root.

## Urutan kerja

1. Baca `README.md`, lalu dokumen yang berkaitan dengan tugas.
2. Gunakan `PRD.md` untuk kebutuhan, `DESIGN.md` untuk visual, `ARCHITECTURE.md` untuk struktur, `DATA.md` untuk konten, dan `API.md` untuk batas integrasi.
3. Kerjakan item di `TASKS.md` sesuai dependensinya. Catat hasil yang benar-benar selesai.
4. Perbarui dokumentasi yang terdampak dan `CHANGELOG.md` jika ada perubahan berarti.

Instruksi terbaru dari pemilik project menjadi acuan utama. Jika dua dokumen bertentangan, periksa status keputusannya; jangan mengubah usulan menjadi keputusan tanpa dasar.

## Status keputusan

- **Terkonfirmasi**: dinyatakan oleh pemilik project.
- **Usulan**: pilihan awal yang masih dapat diganti.
- **TBD**: informasi atau keputusan belum tersedia.

Pertahankan penanda ini saat mengedit. Ajukan pertanyaan hanya untuk informasi yang memengaruhi hasil; lanjutkan pekerjaan independen yang sudah jelas.

## Aturan implementasi

- Ikuti stack dan pola repository setelah tersedia. Jangan menambah framework atau dependency hanya untuk fitur kecil.
- Pisahkan konten portofolio dari komponen tampilan.
- Gunakan komponen berulang untuk pola yang memang berulang; hindari abstraksi dini.
- Gunakan HTML semantik, label yang jelas, navigasi keyboard, dan focus indicator.
- Pastikan layout berfungsi di mobile dan desktop, termasuk saat teks lebih panjang.
- Gunakan analisis referensi di `DESIGN.md`; warna dan font yang masih berupa usulan tidak boleh dianggap hasil identifikasi pasti.
- Jangan membuat backend, database, autentikasi, CMS, analytics, atau integrasi tanpa kebutuhan yang disepakati.
- Jangan mencantumkan secret di source. Konten hardcoded yang masuk bundle harus dianggap publik.

## Integritas konten

- Jangan mengarang pengalaman, skill, statistik, testimoni, pencapaian, atau project.
- Gunakan data yang diberikan pemilik project. Tandai konten sementara dan jangan tampilkan sebagai fakta pada versi publik.
- Hindari tombol tanpa aksi, link `#` sebagai pengganti URL, dan formulir yang seolah mengirim pesan padahal tidak ada layanan pengiriman.
- Tampilkan link project, CV, dan kontak hanya jika tujuannya sudah tersedia dan valid.
- Gunakan aset yang diberikan atau yang sumber dan hak penggunaannya jelas.

## Verifikasi dan pelaporan

- Jalankan pemeriksaan yang tersedia dan relevan setelah stack dipilih: build, lint, atau typecheck sesuai konfigurasi aktual.
- Periksa navigasi, link, keyboard, tampilan responsif, serta kondisi konten opsional kosong.
- Tambahkan tes otomatis bila ada logika atau risiko regresi yang berarti; tidak perlu tes yang hanya menyalin markup.
- Jangan mengklaim pengujian atau deployment berhasil jika belum dijalankan.
- Laporkan perubahan, verifikasi yang dilakukan, dan keterbatasan yang masih ada.
- Jangan commit kredensial atau menimpa perubahan pengguna yang tidak terkait.
