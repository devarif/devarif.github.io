document.addEventListener('DOMContentLoaded', function () {
  var app = document.getElementById('app');
  if (!app) return;

  app.innerHTML =
    renderNavbar() +
    renderHero(profile) +
    renderAbout(profile) +
    renderExperience(experiences) +
    renderSkills(skills) +
    renderContact(profile) +
    renderFooter();

  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var html = document.documentElement;
      html.classList.toggle('dark');
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });
  }

  // Particle Network
  var canvases = document.querySelectorAll('.particle-canvas');
  var particleAnims = [];
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initParticleCanvas(canvas) {
    var ctx = canvas.getContext('2d');
    var section = canvas.parentElement;
    var width, height, particles, animId, running = false;

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
    resize();
    requestAnimationFrame(resize);
    window.addEventListener('resize', resize);

    var html = document.documentElement;

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

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) start(); else stop();
      });
    }, { threshold: 0.02 });
    io.observe(section);
    particleAnims.push({ io: io });
  }

  canvases.forEach(initParticleCanvas);

  // Scroll to Top Button
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
