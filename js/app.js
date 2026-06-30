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
});
