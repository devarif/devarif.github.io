# Portfolio — Ahmad Hasan Al Arif Billah

Landing page portofolio pribadi untuk **Ahmad Hasan Al Arif Billah (Arif)** — Frontend & Mobile Developer dengan 11+ tahun pengalaman.

## Tech Stack

- Tailwind CSS (CDN)
- Vanilla JavaScript
- Google Fonts (Inter)
- Zero build step — pure HTML/CSS/JS

## Struktur Folder

```
├── index.html            # Shell minimal (head SEO + Tailwind + body skeleton)
├── data/
│   ├── profile.js        # Data pribadi, stats, teks about, kontak
│   ├── experience.js     # 6 entri pengalaman karir (2015–sekarang)
│   └── skills.js         # 6 skill cards (frontend, mobile, backend, etc.)
├── js/
│   ├── components.js     # Fungsi render HTML per section
│   └── app.js            # Init, theme toggle, komposisi halaman
├── README.md
└── AGENTS.md
```

## Cara Mengubah Konten

Semua konten dipisah dari layout. Cukup edit file di folder `data/`:

| Data | File |
|------|------|
| Nama, title, about, kontak | `data/profile.js` |
| Pengalaman kerja | `data/experience.js` |
| Skill cards | `data/skills.js` |

Tidak perlu menyentuh `index.html` atau `js/components.js` untuk perubahan teks.

## Cara Menjalankan

Tanpa build tool — langsung jalan:

1. **Buka langsung** — double-click `index.html` dan buka di browser. Tanpa server berkat CDN Tailwind.
2. **Dengan server lokal** (opsional, agar path/serve lebih akurat):
   ```bash
   cd /Users/user/code/arif
   python3 -m http.server 8000
   ```
   lalu buka `http://localhost:8000` di browser.

## Deployment

Deploy static folder ini ke:

- **[Vercel](https://vercel.com)** — `vercel --prod` atau hubungkan GitHub repo
- **Netlify** — drag-drop folder atau dari git
- **GitHub Pages** — push ke `gh-pages` branch
- **Cloudflare Pages** — connect git repo

Tidak ada build step — cukup upload folder.
