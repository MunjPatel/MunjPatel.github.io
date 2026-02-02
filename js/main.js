// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Nav scroll effect
const nav = document.getElementById('nav');
if (nav) {
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dynamic skills rotation (every 10 seconds)
const skills = [
  'Portfolio Optimization · Risk Modeling · VaR',
  'Python · SQL · Quantitative Analysis',
  'Derivatives Pricing · Fixed Income · Credit',
  'Time Series · Monte Carlo · Statistical Inference',
  'ETL Pipelines · Data Quality · Stakeholder Reporting',
  'Capital Markets · Asset Allocation · Hypothesis Testing'
];

const skillEl = document.getElementById('skillCurrent');
if (skillEl) {
  let idx = 0;
  setInterval(() => {
    skillEl.style.opacity = '0';
    setTimeout(() => {
      idx = (idx + 1) % skills.length;
      skillEl.textContent = skills[idx];
      skillEl.style.opacity = '1';
    }, 400);
  }, 10000);
}

// Card hover parallax (subtle)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const img = card.querySelector('.card-image img');
    if (img) {
      img.style.transform = `scale(1.05) translate(${(x - 0.5) * 8}px, ${(y - 0.5) * 8}px)`;
    }
  });
  card.addEventListener('mouseleave', () => {
    const img = card.querySelector('.card-image img');
    if (img) img.style.transform = '';
  });
});
