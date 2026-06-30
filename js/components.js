function renderSectionLabel(label) {
  return `<p class="text-orange-500 font-medium text-sm tracking-widest uppercase mb-2">${label}</p>`;
}

function iconByName(name) {
  const icons = {
    'monitor': `<svg class="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    'device-mobile': `<svg class="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`,
    'code': `<svg class="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
    'database': `<svg class="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>`,
    'cog': `<svg class="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    'clipboard-list': `<svg class="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m0 4h6m-6 4h8m-8 4h6"/></svg>`
  };
  return icons[name] || icons.monitor;
}

function renderCheckIcon() {
  return `<svg class="w-4 h-4 text-orange-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;
}

function renderNavbar() {
  return `
<nav class="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 dark:bg-dark-base/70 border-b border-gray-200/60 dark:border-dark-border/60">
  <div class="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
    <a href="#top" class="text-lg font-bold tracking-tight">Arif<span class="text-orange-500 font-bold text-2xl">.</span></a>
    <div class="flex items-center gap-6 text-sm font-medium">
      <a href="#tentang" class="hover:text-orange-500 transition-colors hidden sm:inline">Tentang</a>
      <a href="#pengalaman" class="hover:text-orange-500 transition-colors hidden sm:inline">Pengalaman</a>
      <a href="#skill" class="hover:text-orange-500 transition-colors hidden sm:inline">Skill</a>
      <a href="#kontak" class="hover:text-orange-500 transition-colors hidden sm:inline">Kontak</a>
      <button id="theme-toggle" class="ml-2 p-2 rounded-xl bg-gray-100 dark:bg-dark-hover hover:bg-gray-200 dark:hover:bg-dark-card transition-colors" aria-label="Toggle theme">
        <svg class="w-5 h-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
        <svg class="w-5 h-5 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      </button>
    </div>
  </div>
</nav>`;
}

function renderHero(p) {
  const statCards = p.stats.map(s => `
    <div class="p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border">
      <div class="text-xl sm:text-2xl font-bold text-orange-400">${s.value}</div>
      <div class="text-xs sm:text-sm text-gray-500 dark:text-dark-muted mt-1">${s.label}</div>
    </div>`).join('');

  const ctaButtons = p.heroCta.map(btn => {
    if (btn.primary) {
      return `<a href="${btn.href}" class="px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">${btn.label}</a>`;
    }
    return `<a href="${btn.href}" class="px-6 py-3 rounded-xl border border-gray-300 dark:border-dark-border font-semibold text-sm hover:bg-gray-100 dark:hover:bg-dark-card transition-colors">${btn.label}</a>`;
  }).join('');

  return `
<section id="top" class="min-h-screen flex items-center pt-16 relative overflow-hidden bg-dot">
  <div class="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-rose-50/20 dark:from-orange-500/5 dark:via-transparent dark:to-rose-500/5 pointer-events-none"></div>
  <div class="absolute top-1/4 right-0 w-96 h-96 bg-orange-400/5 dark:bg-orange-400/5 rounded-full blur-[120px] pointer-events-none"></div>
  <div class="absolute bottom-1/4 left-0 w-72 h-72 bg-rose-500/5 dark:bg-rose-500/5 rounded-full blur-[100px] pointer-events-none"></div>
  <div class="max-w-5xl mx-auto px-5 py-20 w-full relative z-10">
    <div class="max-w-3xl animate-fade-in" style="animation-delay: 0.1s;">
      <p class="text-orange-500 font-medium text-sm tracking-widest uppercase mb-4">${p.heroLabel}</p>
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
        ${p.heroNameLine1}<br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-600">${p.heroNameLine2}</span>
      </h1>
      <p class="text-lg sm:text-xl text-gray-600 dark:text-dark-muted leading-relaxed mb-8 max-w-2xl">${p.heroDescription}</p>
      <div class="flex flex-wrap gap-4">${ctaButtons}</div>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-16 sm:mt-24 animate-slide-up" style="animation-delay: 0.3s;">${statCards}</div>
  </div>
</section>`;
}

function renderAbout(p) {
  const paragraphs = p.aboutParagraphs.map(text =>
    `<p>${text}</p>`
  ).join('\n          ');

  const cards = p.aboutCards.map(c => `
          <div class="p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border">
            <div class="font-semibold text-sm text-gray-500 dark:text-dark-muted uppercase tracking-wider">${c.label}</div>
            <div class="mt-1">${c.text}</div>
          </div>`).join('');

  return `
<section id="tentang" class="py-20 sm:py-28">
  <div class="max-w-5xl mx-auto px-5">
    ${renderSectionLabel('Tentang')}
    <h2 class="text-3xl sm:text-4xl font-bold mb-8">${p.aboutTitle}<span class="text-orange-500">.</span></h2>
    <div class="grid sm:grid-cols-2 gap-10">
      <div class="space-y-5 text-gray-600 dark:text-dark-muted leading-relaxed">${paragraphs}</div>
      <div class="space-y-5">${cards}</div>
    </div>
  </div>
</section>`;
}

function renderExperience(experiences) {
  const items = experiences.map((exp, i) => {
    const pointsList = exp.points.length
      ? `<ul class="space-y-2 text-sm text-gray-600 dark:text-dark-muted">${exp.points.map(p =>
          `<li class="flex items-start gap-2">${renderCheckIcon()}${p}</li>`
        ).join('')}</ul>`
      : '';

    const padding = i === experiences.length - 1 ? 'pl-8 sm:pl-14' : 'pl-8 sm:pl-14 pb-8';

    return `
      <div class="relative">
        <div class="absolute left-[13px] sm:left-[15px] top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-dark-border"></div>
        <div class="absolute left-[9px] sm:left-[11px] top-7 w-[10px] h-[10px] rounded-full bg-orange-500 ring-4 ring-white dark:ring-dark-base z-10"></div>
        <div class="${padding}">
          <div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border dark:shadow-[0_0_30px_-10px_rgba(249,115,22,0.08)]">
            <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
              <div>
                <h3 class="text-xl font-bold">${exp.role}</h3>
                <p class="text-orange-500 font-medium">${exp.company}</p>
              </div>
              <span class="text-sm text-gray-400 dark:text-dark-muted bg-gray-100 dark:bg-dark-hover px-3 py-1 rounded-full">${exp.period}</span>
            </div>
            <p class="text-gray-600 dark:text-dark-muted${exp.points.length ? ' mb-3' : ''}">${exp.description}</p>
            ${pointsList}
          </div>
        </div>
      </div>`;
  }).join('');

  return `
<section id="pengalaman" class="py-20 sm:py-28 bg-gray-50/50 dark:bg-[#090e1d]/80 bg-dot">
  <div class="max-w-5xl mx-auto px-5">
    ${renderSectionLabel('Pengalaman')}
    <h2 class="text-3xl sm:text-4xl font-bold mb-12">Perjalanan Karir</h2>
    <div class="relative">
      <div class="flex flex-col">${items}</div>
    </div>
  </div>
</section>`;
}

function renderSkills(skills) {
  const cards = skills.map(s => `
      <div class="p-6 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border dark:hover:border-orange-500/30 dark:hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.12)] transition-all duration-300">
        <div class="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center mb-4">${iconByName(s.icon)}</div>
        <h3 class="font-bold text-lg mb-1">${s.title}</h3>
        <p class="text-sm text-gray-500 dark:text-dark-muted">${s.items}</p>
      </div>`).join('');

  return `
<section id="skill" class="py-20 sm:py-28">
  <div class="max-w-5xl mx-auto px-5">
    ${renderSectionLabel('Skill')}
    <h2 class="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
    <p class="text-gray-600 dark:text-dark-muted mb-12 max-w-xl">Stack yang dikuasai — dari frontend web, mobile, backend, hingga tools pendukung.</p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">${cards}</div>
  </div>
</section>`;
}

function renderContact(p) {
  return `
<section id="kontak" class="py-20 sm:py-28 bg-gray-50/50 dark:bg-[#090e1d]/80 bg-dot">
  <div class="max-w-5xl mx-auto px-5 text-center">
    ${renderSectionLabel('Kontak')}
    <h2 class="text-3xl sm:text-4xl font-bold mb-4">${p.contactTitle}</h2>
    <p class="text-gray-600 dark:text-dark-muted max-w-xl mx-auto mb-10">${p.contactDescription}</p>
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <a href="${p.linkedin}" target="_blank" class="px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LinkedIn
      </a>
      <a href="mailto:${p.email}" class="px-6 py-3 rounded-xl border border-gray-300 dark:border-dark-border font-semibold text-sm hover:bg-gray-100 dark:hover:bg-dark-card transition-colors inline-flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        Email
      </a>
    </div>
    <div class="inline-flex items-center gap-2 text-sm text-dark-muted">
      <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
      ${p.contactStatus}
    </div>
  </div>
</section>`;
}

function renderFooter() {
  return `
<footer class="py-8 border-t border-gray-200 dark:border-dark-border">
  <div class="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-dark-muted">
    <div>&copy; 2026 Ahmad Hasan Al Arif Billah.</div>
    <div class="flex gap-6">
      <a href="#tentang" class="hover:text-gray-600 dark:hover:text-dark-text transition-colors">Tentang</a>
      <a href="#pengalaman" class="hover:text-gray-600 dark:hover:text-dark-text transition-colors">Pengalaman</a>
      <a href="#skill" class="hover:text-gray-600 dark:hover:text-dark-text transition-colors">Skill</a>
      <a href="#kontak" class="hover:text-gray-600 dark:hover:text-dark-text transition-colors">Kontak</a>
    </div>
  </div>
</footer>`;
}
