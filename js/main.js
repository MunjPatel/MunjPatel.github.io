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

// ===== Dynamic Skills (Quant Trading / Risk / Asset Mgmt) =====
const ICON_CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const skillSets = {
  quant_trading: {
    title: 'Quant Trading',
    intro: 'Systematic trading, alpha research, and execution modeling across asset classes.',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'Time Series', text: 'TS' },
      { name: 'Market Microstructure', text: 'MM' },
      { name: 'Optimization', text: 'OPT' },
      { name: 'Stochastic Processes', text: 'SP' },
      { name: 'SQL', icon: 'postgresql' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Risk Metrics', text: 'VaR' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'Pandas', icon: 'pandas' }
    ],
    meta: [
      'Python (NumPy, Pandas, scikit-learn)',
      'ARIMA, GARCH, EWMA, Monte Carlo',
      'Order books, execution, volatility',
      'Docker, Linux, Git'
    ]
  },
  risk: {
    title: 'Risk & Model Validation',
    intro: 'Model risk, regulatory validation, and stress testing for financial systems.',
    skills: [
      { name: 'Risk Modeling', text: 'VaR' },
      { name: 'Stress Testing', text: 'ST' },
      { name: 'Python', icon: 'python' },
      { name: 'R', icon: 'r' },
      { name: 'Bayesian Stats', text: 'Bayes' },
      { name: 'SQL', icon: 'postgresql' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Monte Carlo', text: 'MC' },
      { name: 'Explainable ML', text: 'SHAP' },
      { name: 'Excel', text: 'XLS' }
    ],
    meta: [
      'VaR, CVaR, Expected Shortfall',
      'Regression, hypothesis testing',
      'Basel III/IV, SR 11-7',
      'Explainable ML, backtesting'
    ]
  },
  asset_mgmt: {
    title: 'Asset Management',
    intro: 'Portfolio construction, factor research, and long-horizon forecasting.',
    skills: [
      { name: 'Portfolio Optimization', text: 'PO' },
      { name: 'Factor Models', text: 'FF' },
      { name: 'Python', icon: 'python' },
      { name: 'Clustering', text: 'CL' },
      { name: 'LSTMs', text: 'NN' },
      { name: 'SQL', icon: 'postgresql' },
      { name: 'Docker', icon: 'docker' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Pandas', icon: 'pandas' },
      { name: 'PCA', text: 'PCA' }
    ],
    meta: [
      'Risk attribution & decomposition',
      'PCA, regime detection',
      'Time series forecasting',
      'Dockerized research pipelines'
    ]
  }
};

function renderSkillBox(skill) {
  const box = document.createElement('div');
  box.className = 'skill-box';
  const iconDiv = document.createElement('div');
  iconDiv.className = 'skill-icon';
  if (skill.icon) {
    const iconMap = {
      python: 'python/python-original',
      postgresql: 'postgresql/postgresql-original',
      r: 'r/r-original',
      docker: 'docker/docker-original',
      mongodb: 'mongodb/mongodb-original',
      numpy: 'numpy/numpy-original',
      pandas: 'pandas/pandas-original'
    };
    const path = iconMap[skill.icon] || 'python/python-original';
    const img = document.createElement('img');
    img.src = `${ICON_CDN}/${path}.svg`;
    img.alt = skill.name;
    iconDiv.appendChild(img);
  } else if (skill.text) {
    iconDiv.className = 'skill-icon skill-icon-text';
    iconDiv.textContent = skill.text;
  }
  const nameSpan = document.createElement('span');
  nameSpan.className = 'skill-name';
  nameSpan.textContent = skill.name.toUpperCase();
  box.appendChild(iconDiv);
  box.appendChild(nameSpan);
  return box;
}

function updateSkills(set) {
  const grid = document.getElementById('skillsGrid');
  const meta = document.getElementById('skillsMeta');
  const title = document.getElementById('skillsTitle');
  const intro = document.getElementById('skillsIntro');
  const container = document.querySelector('.skills-what-i-do');

  if (!grid || !meta || !set) return;

  container.classList.add('skills-fade');
  setTimeout(() => {
    title.textContent = set.title;
    intro.textContent = set.intro;
    grid.innerHTML = '';
    set.skills.forEach(skill => grid.appendChild(renderSkillBox(skill)));
    meta.innerHTML = set.meta.map(line => `<p>${line}</p>`).join('');
    container.classList.remove('skills-fade');
  }, 300);
}

const roles = Object.keys(skillSets);
let currentRole = 0;

if (document.getElementById('skillsGrid')) {
  updateSkills(skillSets[roles[0]]);
  setInterval(() => {
    currentRole = (currentRole + 1) % roles.length;
    updateSkills(skillSets[roles[currentRole]]);
  }, 3500);
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
