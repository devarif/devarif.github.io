document.addEventListener('DOMContentLoaded', function () {
  var app = document.getElementById('app');
  if (!app) return;

  function readStored(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function writeStored(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  var lang = readStored('lang');
  if (lang !== 'id' && lang !== 'en') {
    lang = (navigator.language || '').toLowerCase().indexOf('id') === 0 ? 'id' : 'en';
  }

  function current() {
    return { p: profile[lang], ex: experiences[lang], sk: skills[lang], t: translations[lang] };
  }

  // Particle Network
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var particleJobs = [];

  function initParticles() {
    particleJobs.forEach(function (job) {
      if (job.io) job.io.disconnect();
      window.removeEventListener('resize', job.resize);
    });
    particleJobs = [];

    document.querySelectorAll('.particle-canvas').forEach(function (canvas) {
      var ctx = canvas.getContext('2d');
      var section = canvas.parentElement;
      var width, height, particles, animId, running = false;
      var html = document.documentElement;

      function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        var count = Math.min(50, Math.floor((width * height) / 15000));
        particles = Array.from({ length: count }, function () { return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        };});
      }

      function draw() {
        ctx.clearRect(0, 0, width, height);
        var dotColor = html.classList.contains('dark') ? 'rgba(251,146,60,0.8)' : 'rgba(249,115,22,0.7)';
        for (var i = 0; i < particles.length; i++) {
          var p = particles[i];
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;
          ctx.fill();
        }
        for (var i = 0; i < particles.length; i++) {
          for (var j = i + 1; j < particles.length; j++) {
            var dx = particles[i].x - particles[j].x;
            var dy = particles[i].y - particles[j].y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              ctx.strokeStyle = 'rgba(249,115,22,' + (0.15 * (1 - dist / 130)).toFixed(2) + ')';
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
        if (running) animId = requestAnimationFrame(draw);
      }

      function stop() {
        running = false;
        if (animId) cancelAnimationFrame(animId);
      }

      function start() {
        if (running || reduceMotion) return;
        running = true;
        draw();
      }

      resize();
      requestAnimationFrame(resize);
      window.addEventListener('resize', resize);

      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) start(); else stop();
        });
      }, { threshold: 0.02 });
      io.observe(section);
      particleJobs.push({ io: io, resize: resize });
    });
  }

  function render() {
    var d = current();
    document.documentElement.lang = lang === 'id' ? 'id' : 'en';
    document.title = d.p.seo.title;

    app.innerHTML =
      renderNavbar(d.t) +
      renderHero(d.p) +
      renderAbout(d.p, d.t) +
      renderExperience(d.ex, d.t) +
      renderSkills(d.sk, d.t) +
      renderContact(d.p, d.t) +
      renderFooter(d.t);

    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var html = document.documentElement;
        html.classList.toggle('dark');
        writeStored('theme', html.classList.contains('dark') ? 'dark' : 'light');
      });
    }

    var langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', function () {
        lang = lang === 'id' ? 'en' : 'id';
        writeStored('lang', lang);
        render();
      });
    }

    initParticles();
  }

  render();

  var scrollToTopBtn = document.getElementById('scroll-to-top');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        scrollToTopBtn.classList.add('opacity-100', 'visible');
      } else {
        scrollToTopBtn.classList.add('opacity-0', 'invisible');
        scrollToTopBtn.classList.remove('opacity-100', 'visible');
      }
    });
    scrollToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});