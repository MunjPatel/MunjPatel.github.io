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

// ===== Dynamic Skills =====
const ICON_CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const SKILL_IMG = 'assets/images/skills';

const foundationSkills = [
  { name: 'Python', icon: 'python' },
  { name: 'SQL', icon: 'postgresql' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Git', icon: 'git' },
  { name: 'NumPy', icon: 'numpy' },
  { name: 'Pandas', icon: 'pandas' },
  { name: 'Bash', icon: 'bash' },
  { name: 'Excel', img: 'skill_xls' }
];

const skillSets = {
  quant_trading: {
    title: 'Quant Trading',
    intro: 'Systematic trading, alpha research, and execution modeling across asset classes.',
    skills: [
      { name: 'Time Series', img: 'skill_ts' },
      { name: 'Market Microstructure', img: 'skill_mm' },
      { name: 'Optimization', img: 'skill_opt' },
      { name: 'Stochastic Processes', img: 'skill_sp' },
      { name: 'Risk Metrics', img: 'skill_var' },
      { name: 'ARIMA/GARCH', img: 'skill_mc' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'scikit-learn', icon: 'sklearn' },
      { name: 'Jupyter', icon: 'jupyter' }
    ]
  },
  risk: {
    title: 'Risk & Model Validation',
    intro: 'Model risk, regulatory validation, and stress testing for financial systems.',
    skills: [
      { name: 'Risk Modeling', img: 'skill_var' },
      { name: 'Stress Testing', img: 'skill_st' },
      { name: 'R', icon: 'r' },
      { name: 'Bayesian Stats', img: 'skill_bayes' },
      { name: 'Monte Carlo', img: 'skill_mc' },
      { name: 'Explainable ML', img: 'skill_shap' },
      { name: 'Excel', img: 'skill_xls' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MATLAB', icon: 'matlab' },
      { name: 'Regulatory', img: 'skill_st' }
    ]
  },
  asset_mgmt: {
    title: 'Asset Management',
    intro: 'Portfolio construction, factor research, and long-horizon forecasting.',
    skills: [
      { name: 'Portfolio Optimization', img: 'skill_po' },
      { name: 'Factor Models', img: 'skill_ff' },
      { name: 'Clustering', img: 'skill_cl' },
      { name: 'LSTMs', img: 'skill_nn' },
      { name: 'PCA', img: 'skill_pca' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'Random Forests', img: 'skill_ff' },
      { name: 'Gradient Boosting', img: 'skill_opt' },
      { name: 'Risk Attribution', img: 'skill_var' }
    ]
  },
  quant_trading_2: {
    title: 'Quant Trading (continued)',
    intro: 'Execution, order books, volatility modeling, and risk-adjusted metrics.',
    skills: [
      { name: 'Order Books', img: 'skill_mm' },
      { name: 'Volatility', img: 'skill_var' },
      { name: 'Sharpe/Sortino', img: 'skill_opt' },
      { name: 'EWMA', img: 'skill_ts' },
      { name: 'Feature Eng.', img: 'skill_ff' },
      { name: 'XGBoost', icon: 'tensorflow' },
      { name: 'Reinforcement', img: 'skill_nn' },
      { name: 'Matplotlib', icon: 'matplotlib' },
      { name: 'Plotly', img: 'skill_pca' },
      { name: 'Streamlit', img: 'skill_ts' }
    ]
  },
  data_science: {
    title: 'Data Science',
    intro: 'ML pipelines, NLP, statistical modeling, and research tooling.',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'NLP', img: 'skill_nn' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'Clustering', img: 'skill_cl' },
      { name: 'Regression', img: 'skill_opt' },
      { name: 'scikit-learn', icon: 'sklearn' },
      { name: 'Jupyter', icon: 'jupyter' },
      { name: 'Pandas', icon: 'pandas' },
      { name: 'NumPy', icon: 'numpy' }
    ]
  },
  data_analytics: {
    title: 'Data Analytics & Dashboarding',
    intro: 'Business intelligence, visualization, and data-driven reporting.',
    skills: [
      { name: 'Power BI', img: 'skill_po' },
      { name: 'Tableau', img: 'skill_ff' },
      { name: 'Excel', img: 'skill_xls' },
      { name: 'SQL', icon: 'postgresql' },
      { name: 'Python', icon: 'python' },
      { name: 'Plotly', img: 'skill_pca' },
      { name: 'Streamlit', img: 'skill_ts' },
      { name: 'Pandas', icon: 'pandas' },
      { name: 'Dash', img: 'skill_mm' },
      { name: 'Metabase', img: 'skill_opt' }
    ]
  }
};

const iconMap = {
  python: 'python/python-original',
  postgresql: 'postgresql/postgresql-original',
  r: 'r/r-original',
  docker: 'docker/docker-original',
  mongodb: 'mongodb/mongodb-original',
  numpy: 'numpy/numpy-original',
  pandas: 'pandas/pandas-original',
  tensorflow: 'tensorflow/tensorflow-original',
  pytorch: 'pytorch/pytorch-original',
  git: 'git/git-original',
  bash: 'bash/bash-original',
  jupyter: 'jupyter/jupyter-original',
  sklearn: 'scikit-learn/scikit-learn-original',
  matplotlib: 'matplotlib/matplotlib-original',
  matlab: 'matlab/matlab-original'
};

function renderSkillBox(skill, basePath = '') {
  const box = document.createElement('div');
  box.className = 'skill-box';
  const iconDiv = document.createElement('div');
  iconDiv.className = 'skill-icon';
  const img = document.createElement('img');
  if (skill.icon) {
    const path = iconMap[skill.icon] || 'python/python-original';
    img.src = `${ICON_CDN}/${path}.svg`;
    img.alt = skill.name;
  } else if (skill.img) {
    img.src = `${basePath}${SKILL_IMG}/${skill.img}.png`;
    img.alt = skill.name;
  } else if (skill.text) {
    iconDiv.className = 'skill-icon skill-icon-text';
    iconDiv.textContent = skill.text;
  }
  if (skill.icon || skill.img) {
    iconDiv.appendChild(img);
  }
  const nameSpan = document.createElement('span');
  nameSpan.className = 'skill-name';
  nameSpan.textContent = skill.name.toUpperCase();
  box.appendChild(iconDiv);
  box.appendChild(nameSpan);
  return box;
}

function getBasePath() {
  return window.location.pathname.includes('/projects/') ? '../' : '';
}

function renderFoundation() {
  const grid = document.getElementById('skillsFoundation');
  if (!grid) return;
  foundationSkills.forEach(skill => grid.appendChild(renderSkillBox(skill, getBasePath())));
}

function updateSkills(set) {
  const grid = document.getElementById('skillsGrid');
  const title = document.getElementById('skillsTitle');
  const intro = document.getElementById('skillsIntro');
  const container = document.querySelector('.skills-what-i-do');
  const basePath = getBasePath();

  if (!grid || !set) return;

  container.classList.add('skills-fade');
  setTimeout(() => {
    title.textContent = set.title;
    intro.textContent = set.intro;
    grid.innerHTML = '';
    set.skills.forEach(skill => grid.appendChild(renderSkillBox(skill, basePath)));
    container.classList.remove('skills-fade');
  }, 300);
}

const roles = Object.keys(skillSets).filter(k => !k.includes('foundation'));
let currentRole = 0;

if (document.getElementById('skillsGrid')) {
  renderFoundation();
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
