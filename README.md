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

Buka `index.html` langsung di browser — jalan tanpa server berkat CDN Tailwind.

## Deployment

Deploy static folder ini ke:

- **[Vercel](https://vercel.com)** — `vercel --prod` atau hubungkan GitHub repo
- **Netlify** — drag-drop folder atau dari git
- **GitHub Pages** — push ke `gh-pages` branch
- **Cloudflare Pages** — connect git repo

Tidak ada build step — cukup upload folder.
