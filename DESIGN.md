# DESIGN — Web Porto

Status: arah notebook menggantikan desain komik; implementasi pertama tersedia untuk review. Diperbarui: 15 Oktober 2026.

## 1. Acuan aktif

Referensi terbaru: [hero-notebook-reference.png](references/hero-notebook-reference.png), dikirim pemilik setelah menilai desain awal kurang sesuai. [Referensi komik lama](references/hero-reference.png) disimpan sebagai riwayat; bukan acuan untuk pengembangan selanjutnya.

Penggantian arah visual terkonfirmasi dari instruksi pemilik. Token, font, dan adaptasi responsif berikut adalah pilihan implementasi agent yang masih dapat direvisi berdasarkan review pemilik.

## 2. Observasi gambar

| Elemen | Yang terlihat |
| --- | --- |
| Latar luar | Abu-abu dengan grid putih tipis |
| Bidang utama | Kertas putih hangat, garis horizontal seperti notebook |
| Navigasi | Bar tipis, label kapital kecil, tab Home kuning, kontak ber-outline |
| Nama | Huruf besar bergaya piksel dalam bingkai oranye seperti digambar tangan |
| Hero | Komposisi terpusat, label tulisan tangan, chip pastel, headline hitam |
| Dekorasi | Bunga/stiker, lingkaran kecil, catatan tempel, garis melengkung |
| Bagian tentang | Tulisan tangan dan foto bergaya polaroid dengan selotip |
| Karya | Panel gelap/kuning, bentuk tab folder, judul besar, visual di kanan |

Robin, Product Designer, Chicago, status tersedia untuk kerja, foto, akun sosial, nama proyek, dan tanggal pada gambar bukan data Iqbal. Elemen tersebut tidak disalin ke portofolio.

## 3. Adaptasi untuk Iqbal

- Satu lembar notebook di atas latar grid, dengan navigasi Home / About / Projects dan Contact.
- Nama `Iqbal` menjadi fokus utama memakai font piksel lokal; outline oranye tipis menggantikan ledakan dan outline tebal desain lama.
- Bio ditampilkan persis: **Undergraduate Computer Science student at University of Indonesia**.
- About kini mengarah ke section `#profil`: ringkasan singkat dalam catatan kertas dan daftar Education/Experience. Bio hero tetap persis dan tidak diulang. Jika data tambahan dihapus, navigasi kembali ke bio hero. Foto pribadi tetap menunggu aset pemilik.
- CTA Explore my work mengarah ke karya; Contact menuju bagian tautan GitHub yang benar-benar tersedia.
- Tiga proyek awal: Sporta Kuler, MinaToko, Neo Tube Automator. Alasan dan sumbernya ada di [project-selection.md](references/project-selection.md).
- Panel proyek memakai tab folder dekoratif dan lembar monogram berselotip. Monogram adalah dekorasi tipografis, bukan screenshot aplikasi. Tidak ada kontrol tab palsu.
- Tidak ada tombol CV/demo, ikon sosial, skill sticker, statistik, atau klaim ketersediaan kerja tanpa datanya.
- Bahasa UI awal mengikuti bio dan referensi: Inggris. Ini pilihan implementasi, bukan keputusan bahasa final pemilik.

## 4. Token implementasi

| Token | Nilai | Peran |
| --- | --- | --- |
| Background | `#969894` | Latar grid luar |
| Paper | `#F8F7F3` | Lembar notebook |
| Rule | `#DEDED8` | Garis horizontal kertas |
| Ink | `#191714` | Teks, panel gelap, CTA |
| Yellow | `#F5CA48` | Home, catatan, panel proyek kedua |
| Green | `#ADDBC6` | Label pastel |
| Blue | `#3054CD` | Aksen panah dan panel proyek ketiga |
| Pink | `#E7508D` | Dekorasi kecil |
| Orange | `#D97B52` | Bingkai nama |
| Page width | Maksimum `1160px` | Lembar notebook |
| Ruled spacing | `32px` | Jarak garis kertas |
| Outer grid | `48px`, mobile `32px` | Pola latar |

Nilai di atas dipakai di `src/styles.css`; bukan klaim hasil sampling tepat dari referensi. Warna pastel dipasangkan dengan teks gelap; panel biru/gelap memakai teks terang. Kontras aktual masih perlu diperiksa bersama QA browser.

## 5. Tipografi dan aset

- Nama dan monogram: Pixelify Sans, Latin, weight 700, disimpan di `public/fonts/`. Ini pilihan adaptasi, bukan identifikasi pasti font referensi.
- Font berasal dari paket Fontsource `@fontsource/pixelify-sans` 5.3.0. Lisensi OFL-1.1 disertakan sebagai `public/fonts/OFL-Pixelify-Sans.txt`.
- Body: Arial/Helvetica/sans-serif. Label teknis: Courier New/monospace. Tulisan tangan: stack sistem Segoe Print/Bradley Hand/Comic Sans MS/cursive.
- Font piksel di-preload, memakai `font-display: swap`, dan dimuat dari origin sendiri. Tidak ada font API eksternal.
- Nama, bio, judul, dan CTA tetap teks HTML yang dapat dipilih. Dekorasi memakai CSS/SVG dan `aria-hidden`.
- Referensi disimpan di folder `references/`, tidak disajikan sebagai UI atau gambar portofolio.

## 6. Responsivitas dan interaksi

Desktop menampilkan hero terpusat, lalu panel proyek dua kolom: deskripsi di kiri dan lembar monogram di kanan. Di bawah 850 px jarak dipadatkan; di bawah 650 px panel proyek menjadi satu kolom. Navigasi dapat membungkus pada lebar sangat kecil. Chip/dekorasi diringkas agar tidak menutupi bio.

Tidak ada intro wajib klik, filter, carousel, atau animasi dekoratif berulang. Tautan anchor bekerja tanpa JavaScript browser. Hover CTA hanya bergerak singkat; reduced motion menonaktifkannya. Focus outline oranye dan skip link disediakan. Area interaksi umumnya minimal 44 px; target navigasi desktop yang lebih ringkas perlu diverifikasi saat QA.

Section profil memakai dua kolom pada desktop (catatan ringkasan dan latar belakang), lalu satu kolom di bawah 650 px. Tidak ada foto, garis waktu, metrik, atau logo organisasi rekaan.

## 7. Verifikasi

- Pemeriksaan sintaks, tes renderer/metadata, dan build produksi dilakukan melalui `npm run check`.
- Tes memeriksa bio persis, proyek nyata, bagian opsional, tujuan tautan, teks aman, serta HTML yang tidak membutuhkan JavaScript browser.
- QA visual belum dilakukan: 360/768/1440 px, zoom 200%, font lokal, teks panjang, kontras, dan navigasi keyboard masih harus diperiksa di browser.
- Foto pribadi, screenshot proyek, dan CV belum tersedia. Jangan menggantikannya dengan aset orang lain atau mockup yang seolah hasil aplikasi sebenarnya.
