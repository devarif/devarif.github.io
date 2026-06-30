# AGENTS.md — Panduan AI untuk Proyek Ini

## Proyek

Landing page portofolio Ahmad Hasan Al Arif Billah — pure HTML/CSS/JS tanpa build tool.

## Arsitektur

- **index.html** — shell minimal. Hanya berisi `<head>` (meta tags SEO, JSON-LD, Tailwind config via CDN, Google Fonts, CSS utilities, dark mode inline script) dan `<div id="app">` + 5 script tag.
- **data/** — konstanta global (`profile`, `experiences`, `skills`) berisi semua konten teks. Ganti konten di sini, tanpa sentuh HTML.
- **js/components.js** — fungsi `render*()` masing-masing menerima data sebagai parameter dan return string HTML. Pisah murni: layout di sini, konten di data/.
- **js/app.js** — orchestration: render semua section ke `#app` + pasang event listener theme toggle.

## Aturan Penting

1. **Zero build tool** — semua via CDN. Tidak boleh ada npm, webpack, vite, dsb.
2. **Tailwind via CDN** — konfigurasi inline di `<script>` dalam `index.html`. Jangan tambahkan package.json atau config file.
3. **Bahasa Indonesia** — semua konten dalam Bahasa Indonesia, tone profesional.
4. **Dark mode** — class `dark` di `<html>`, persist localStorage. Theme toggle di navbar.
5. **Palette** — midnight navy (`#070b18`, `#0d1326`, `#18203a`), primary orange-500, aksen rose.
6. **Background** — `bg-grid` (grid 64px) + `bg-dot` (dot 20px) via CSS pseudo-pattern.

## Konvensi File

- Data file menggunakan `const` (global variable) — dimuat via `<script src>` urutan: data → components → app.
- `profile.js`: objek `profile` — pribadi, stats, about, kontak, SEO.
- `experience.js`: array `experiences` — 6 perusahaan, properti: `role, company, period, description, points[]`.
- `skills.js`: array `skills` — 6 skill, properti: `icon, title, items`.
- `js/components.js`: fungsi global `renderNavbar/ renderHero/ renderAbout/ renderExperience/ renderSkills/ renderContact/ renderFooter`.
- `js/app.js`: satu event listener `DOMContentLoaded`.

## Data Penting untuk Konteks AI

- **Nama**: Ahmad Hasan Al Arif Billah (panggilan: Arif)
- **Title**: Frontend & Mobile Developer
- **Tahun aktif**: 2015–sekarang (11+ tahun)
- **6 Perusahaan**: PT Surya Anugrah Mulya → MIFX → dxtr Asia → Pinopi → Halo Jasa → TNC Digital Media
- **Tools**: React.js, Next.js, React Native, TypeScript, Laravel, Golang, Node.js, Tailwind
- **Pendidikan**: S.Kom — Universitas AMIKOM Yogyakarta (2011–2015)
- **Lokasi**: Surabaya, Jawa Timur
- **Bahasa**: Indonesia & Inggris
- **Domain**: `devarif.github.io/ahmadhasanalarifbillah`
- **LinkedIn**: `https://www.linkedin.com/in/ahmadhasanalarifbillah/`
- **Email**: `arifmatika@gmail.com`
