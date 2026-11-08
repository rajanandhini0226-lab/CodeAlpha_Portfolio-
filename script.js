// Mobile menu
const menu = document.getElementById('menu');
document.getElementById('menuBtn').addEventListener('click', () => menu.classList.toggle('open'));
menu.addEventListener('click', e => { if (e.target.tagName === 'A') menu.classList.remove('open'); });

// Reveal sections on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('show'); io.unobserve(en.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(s => io.observe(s));

document.getElementById('year').textContent = new Date().getFullYear();
