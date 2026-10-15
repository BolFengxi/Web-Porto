# DESIGN — Web Portofolio

Status: referensi diterima; adaptasi implementasi masih draft · Diperbarui: 15 Oktober 2026

## 1. Referensi dan status keputusan

Sumber: lampiran pemilik `image.png`, tersedia sebagai [hero-reference.png](references/hero-reference.png) dalam paket dokumentasi.

Gambar memuat tiga panel contoh yang disusun vertikal. Catatan ini membedakan **observasi** dari gambar dengan **usulan adaptasi** untuk portofolio. Pemilihan panel utama, font, aset, copy, serta komposisi final masih **TBD**. Gambar tidak memberi spesifikasi desktop atau mobile yang lengkap.

## 2. Observasi visual

| Elemen | Yang terlihat pada referensi |
| --- | --- |
| Background luar | Abu-abu arang dengan bidang diagonal gelap, huruf besar samar, dan tekstur titik |
| Bingkai | Border hitam sangat tebal; panel gambar dipisahkan gutter gelap |
| Komposisi | Kolase panel komik, garis diagonal, potongan gambar, dan elemen yang saling menimpa |
| Panel pertama | Ledakan kuning/oranye-merah, judul ungu bersudut dengan depth hitam, CTA kecil magenta |
| Panel kedua | Bidang kuning/cyan/ungu, karakter bergerak di tengah, label CTA miring, strip thumbnail bawah |
| Panel ketiga | Magenta/ungu dan hijau neon, karakter besar di kanan, kumpulan tile gelap di kiri |
| Tekstur | Halftone, garis gerak, pola cetak, dan potongan panel hitam-putih |
| Tipografi | Display tebal ekspresif; label pendek, kapital, dan sebagian dimiringkan |

Karakter komik, logo, judul, thumbnail, dan teks di gambar adalah bagian referensi. Itu bukan identitas, karya, atau aset yang otomatis digunakan pada portofolio.

## 3. Arah adaptasi hero — usulan

Gunakan panel pertama sebagai titik awal hero: bingkai hitam, bidang ledakan berwarna, headline besar, dan CTA singkat. Panel kedua memberi referensi untuk showcase project; panel ketiga memberi ide variasi layout. Tidak perlu menyalin tiga panel menjadi tiga layar pembuka.

- Headline memakai nama atau fokus pemilik setelah teksnya diberikan.
- Satu ringkasan singkat menjelaskan fokus portofolio dan tetap terbaca di atas latar yang tenang.
- CTA utama menuju project; CTA kontak menjadi aksi sekunder jika sesuai kebutuhan.
- Foto/ilustrasi pribadi bersifat opsional dan harus memakai aset yang tersedia.
- Dekorasi komik dapat dibangun dengan CSS/SVG sederhana; jangan bergantung pada tangkapan layar utuh sebagai UI.
- Gunakan beberapa elemen khas secara konsisten, dengan area isi yang cukup tenang untuk membaca deskripsi project.

Copy serta urutan CTA tersebut merupakan usulan. Jangan menyalin label game seperti “Tap to start” tanpa tujuan interaksi yang jelas.

## 4. Token awal — usulan, bukan hasil sampling pasti

| Token | Nilai awal | Peran |
| --- | --- | --- |
| `color.background` | `#202020` | Latar luar arang |
| `color.ink` | `#080808` | Border, teks di bidang terang, dan bayangan solid |
| `color.paper` | `#F5F2E9` | Bidang baca terang dan teks di panel gelap |
| `color.yellow` | `#FFE600` | Bidang sorotan utama |
| `color.purple` | `#7026F5` | Display dan aksen |
| `color.magenta` | `#EF19DF` | Aksen sekunder |
| `color.lime` | `#A4FF20` | Sorotan tambahan |
| `color.orange` | `#FF5426` | Ledakan hangat bila diperlukan |
| `layout.maxWidth` | `1200px` | Batas lebar isi awal |
| `layout.gutter` | `clamp(16px, 4vw, 48px)` | Ruang sisi responsif |
| `border.panel` | `6–12px solid color.ink` | Bingkai mengikuti viewport |
| `radius.panel` | `0–4px` | Bentuk cenderung tajam |
| `motion.duration` | `120–200ms` | Transisi singkat jika dibutuhkan |

Pilih warna dominan per panel; tidak semua aksen perlu dipakai sekaligus. Periksa kontras pada pasangan warna aktual. Nama token implementasi mengikuti stack terpilih.

## 5. Tipografi dan hierarki

- Display: font tebal/condensed dengan karakter ekspresif; keluarga font final **TBD**. Pilih font dengan karakter dan izin penggunaan yang sesuai.
- Body: sans-serif yang mudah dibaca; hindari efek distorsi untuk deskripsi panjang.
- Label singkat dapat kapital dan miring. Body menggunakan kapitalisasi biasa.
- Headline berupa teks HTML yang dapat dipilih, bukan teks tertanam dalam gambar.
- Outline atau bayangan solid mengikuti kebutuhan keterbacaan; jangan menumpuk efek pada seluruh teks.
- Ukuran headline responsif awal: `clamp(3rem, 8vw, 7rem)`; uji ulang setelah nama dan copy tersedia.

## 6. Layout responsif

### Desktop — usulan

Navigasi berada di atas panel atau area luar yang jelas. Hero dapat memakai headline dominan di tengah mengikuti panel pertama, dengan dekorasi di pinggir. Jangan memakai koordinat screenshot sebagai layout tetap. Susunan teks dan gambar dua kolom, jika dipilih, merupakan adaptasi baru.

### Mobile — usulan

- Ringkas kolase pinggir dan kurangi lapisan dekorasi yang berpotensi menutupi teks.
- Headline, ringkasan, dan CTA mengalir vertikal; tidak terpotong tinggi hero tetap.
- Bingkai dan aksen diagonal tetap dapat digunakan, tetapi teks serta fokus kontrol tidak boleh terkena clipping.
- CTA dapat ditumpuk dengan area tekan sekitar 44 × 44 px atau lebih.
- Strip thumbnail tidak wajib diadaptasi. Jika digunakan, pastikan interaksinya berfungsi dan dapat diakses keyboard.

## 7. Komponen dan interaksi

| Komponen | Arah visual | Perilaku |
| --- | --- | --- |
| Navigasi | Label singkat, kontras jelas | Menu mobile jika dibutuhkan; tombol memiliki label dan state yang benar |
| CTA | Panel/label komik, border dan bayangan hitam | Hover singkat, fokus terlihat, tujuan nyata |
| Kartu project | Bingkai hitam dan gambar opsional | Judul mudah dibaca; link tampil bila tersedia |
| Tag teknologi | Label kecil konsisten | Tidak menyerupai tombol jika bukan kontrol |
| Kontak | Label langsung dan ringkas | Membuka tujuan yang diberikan pemilik |

Hindari intro wajib klik sebelum mengakses isi. Tidak ada kebutuhan autoplay audio atau animasi berkedip. Gerakan dekoratif memiliki fallback reduced motion.

## 8. Aksesibilitas dan aset

Target awal: kontras teks biasa minimal 4,5:1 dan teks besar 3:1, fokus keyboard jelas, heading runtut, serta dukungan zoom 200%. Ini merupakan target desain, belum klaim kepatuhan yang diuji.

Tekstur titik dan potongan dekoratif tidak membawa informasi penting; sembunyikan dari pembaca layar dan pastikan tidak menangkap klik. Gambar bermakna memiliki alt text. Elemen miring tidak boleh membuat area klik atau fokus terpotong.

Gunakan gambar pribadi, karya sendiri, atau aset dengan izin jelas. Bila izin karakter/ilustrasi referensi belum diketahui, terapkan gaya komik melalui bentuk, warna, dan tekstur dengan aset yang sesuai.

## 9. Verifikasi dan keputusan tersisa

- Finalkan headline, font, komposisi, dan aset sebelum implementasi final hero.
- Bandingkan hero dengan pola referensi pada ukuran sebanding; dokumentasikan adaptasi yang disengaja.
- Uji 360, 768, dan 1440 px, teks panjang, keyboard, zoom 200%, serta reduced motion bila ada animasi.
- Periksa CTA, border, overlay, dan teks agar tidak saling menutupi.
- Perbarui token berdasarkan hasil implementasi, bukan perkiraan screenshot semata.

Rencana lanjutan ada di `TASKS.md`; scope produk mengikuti `PRD.md`.
