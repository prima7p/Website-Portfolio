# Website Portofolio Pribadi - Primada Purnama

Website portofolio pribadi responsif dan interaktif yang dibangun menggunakan **HTML, CSS, dan JavaScript  (Vanilla JS)** tanpa menggunakan framework maupun library tambahan.

Proyek ini dibuat untuk memenuhi tugas pembuatan website portofolio dengan minimal 3 halaman yang saling terhubung dan menerapkan fitur interaktif berbasis JavaScript Event.

---

## 📁 Struktur Folder Repository

```text
portofolio-website/
│
├── index.html        # Halaman Beranda (Hero, Profil, Keahlian, Proyek Unggulan)
├── projects.html     # Halaman Galeri & Portofolio Proyek
├── contact.html      # Halaman Kontak Pribadi & Formulir Pesan
│
├── css/
│   └── style.css     # Berisi seluruh styling (Global, Navbar, Footer, Tema, Grid)
│
├── js/
│   └── script.js     # Berisi kode JavaScript untuk fitur interaktif (Dark Mode, Filter, Modal, Form)
│
├── profile.jpg       # Foto profil asli
└── README.md         # Dokumentasi proyek
```

---

## 🌐 Halaman Website

1. **Beranda (`index.html`)**
   - Menampilkan *Hero Section* dengan perkenalan diri dan foto profil asli.
   - Daftar keahlian teknis web development (HTML5, CSS3 Grid/Flexbox, JavaScript DOM).
   - Banner call-to-action (CTA) dan cuplikan proyek unggulan.

2. **Daftar Proyek (`projects.html`)**
   - Galeri karya web interaktif (Aplikasi To-Do List, Landing Page Kafe, Kalkulator Virtual, Portal BRONE).
   - Filter kategori proyek dinamis.
   - Pop-up modal untuk melihat detail setiap proyek.

3. **Kontak (`contact.html`)**
   - Informasi kontak pribadi (lokasi, email, ketersediaan magang/proyek, media sosial).
   - Formulir pesan interaktif dengan penghitung karakter pesan live dan validasi input.

---

## ⚡ Fitur Interaktif (JavaScript Event)

Website ini mengimplementasikan lebih dari 2 fitur interaktif menggunakan event listener JavaScript murni:

1. **Dark Mode / Light Mode Toggle (`click` event)**
   - Tombol pengubah tema di navigasi utama.
   - Preferensi tema disimpan di `localStorage` sehingga mode yang dipilih tetap aktif saat pengguna berpindah halaman.

2. **Filter Kategori Proyek (`click` event)**
   - Berada di halaman `projects.html`.
   - Mengelompokkan proyek berdasarkan kategori (*Semua*, *Web App*, *Landing Page*, *UI/UX Prototype*).

3. **Modal Pop-up Detail Proyek (`click` event)**
   - Berada di halaman `projects.html`.
   - Menampilkan jendela modal pop-up dengan ringkasan proyek ketika tombol *"Lihat Detail Proyek"* diklik.

4. **Validasi Formulir & Penghitung Karakter (`input` & `submit` event)**
   - Berada di halaman `contact.html`.
   - `input` event: Menghitung panjang karakter pesan secara *real-time* (maksimal 300 karakter).
   - `submit` event: Memvalidasi kelengkapan nama, format email, dan isi pesan sebelum menampilkan notifikasi sukses tanpa me-reload halaman.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantik yang rapi dan aksesibel.
- **CSS3**: Tata letak modern menggunakan CSS Grid, Flexbox, CSS Variables, dan efek transisi.
- **JavaScript (ES6+)**: Manipulasi DOM murni dan penanganan event.
- **Tanpa Framework / Library Eksternal**: 100% murni (*Vanilla code*).

---

## 🚀 Cara Menjalankan Website

1. Buka folder proyek di komputer Anda.
2. Klik dua kali pada file `index.html` untuk langsung membukanya di browser favorit Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, dll.).
3. Anda juga dapat menggunakan ekstensi **Live Server** di Visual Studio Code untuk pengalaman pengembangan yang optimal.

-----

&copy; 2026 **Primada Purnama**. Dibuat dengan dedikasi dan kreativitas.

