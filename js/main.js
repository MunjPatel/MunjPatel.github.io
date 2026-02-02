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

// Dynamic skills rotation - 2 columns, 5 skills each, every 4.5 seconds
const skillsSets = [
  {
    col1: ['Portfolio Optimization', 'Risk Modeling', 'VaR & CVaR', 'Time Series Analysis', 'Python · SQL'],
    col2: ['Derivatives Pricing', 'Monte Carlo Simulation', 'Statistical Inference', 'ETL & Data Pipelines', 'Excel · Power BI']
  },
  {
    col1: ['Stochastic Calculus', 'Options Pricing', 'Fixed Income', 'Hypothesis Testing', 'Pandas · NumPy'],
    col2: ['Regime Detection', 'Backtesting', 'Factor Modeling', 'Data Quality', 'Streamlit · Plotly']
  },
  {
    col1: ['Capital Markets', 'Asset Allocation', 'Credit Risk', 'NLP · Sentiment', 'scikit-learn'],
    col2: ['Bootstrapping', 'Yield Curves', 'Drawdown Analysis', 'VBA · Power Query', 'Git · GitHub']
  },
  {
    col1: ['Volatility Modeling', 'Structured Products', 'Linear Algebra', 'Regression Analysis', 'AWS · EC2'],
    col2: ['Machine Learning', 'Clustering · PCA', 'Financial Reporting', 'Bloomberg Terminal', 'R · MATLAB']
  }
];

const col1El = document.getElementById('skillCol1');
const col1Container = document.querySelector('.skills-column:first-child');
const col2Container = document.querySelector('.skills-column:last-child');

if (col1Container && col2Container) {
  function updateSkills(idx) {
    const set = skillsSets[idx];
    const items1 = col1Container.querySelectorAll('.skill-item');
    const items2 = col2Container.querySelectorAll('.skill-item');
    items1.forEach((el, i) => { el.style.opacity = '0'; });
    items2.forEach((el, i) => { el.style.opacity = '0'; });
    setTimeout(() => {
      items1.forEach((el, i) => {
        el.textContent = set.col1[i] || el.textContent;
        el.style.opacity = '1';
      });
      items2.forEach((el, i) => {
        el.textContent = set.col2[i] || el.textContent;
        el.style.opacity = '1';
      });
    }, 350);
  }

  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % skillsSets.length;
    updateSkills(idx);
  }, 4500);
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
