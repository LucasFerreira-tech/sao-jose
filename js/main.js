/* ============================================================
   SÃO JOSÉ – ARTIGOS RELIGIOSOS E PEREGRINAÇÕES
   main.js — Global Scripts
   ============================================================ */

// ── WhatsApp Configuration ──────────────────────────────
const WHATSAPP_NUMBER = '5567932117001'; // ex: '5567999998888'
window.SJ_WHATSAPP_NUMBER = WHATSAPP_NUMBER;
const WHATSAPP_DEFAULT_MSG = encodeURIComponent(
  'Olá! Gostaria de mais informações sobre as peregrinações da Loja São José.'
);

function getWhatsAppURL(customMsg) {
  const msg = customMsg
    ? encodeURIComponent(customMsg)
    : WHATSAPP_DEFAULT_MSG;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

// Wire all WhatsApp buttons
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    const customMsg = el.getAttribute('data-whatsapp-msg');
    el.href = getWhatsAppURL(customMsg);
    el.target = '_blank';
    el.rel = 'noopener';
  });
});

// ── Navbar scroll effect ────────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── Mobile nav toggle ───────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navMobile = document.querySelector('.nav-mobile');
if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  // Close on link click
  navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navMobile.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });
}

// ── Active nav link ─────────────────────────────────────
(function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ── Scroll-triggered fade-up animations ────────────────
window.initFadeUp = function initFadeUp() {
  const fadeItems = document.querySelectorAll('.fade-up:not(.visible)');
  if (!('IntersectionObserver' in window)) {
    fadeItems.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  fadeItems.forEach(el => observer.observe(el));
};
window.initFadeUp();

// ── Animate stat counters ───────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'), 10);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target + (el.getAttribute('data-suffix') || '');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current) + (el.getAttribute('data-suffix') || '');
    }
  }, 16);
}

if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          counterObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));
} else {
  document.querySelectorAll('[data-count]').forEach(animateCounter);
}

// ── Contact form handler ────────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name    = document.getElementById('cf-name')?.value || '';
    const subject = document.getElementById('cf-subject')?.value || 'Consulta';
    const msg = `Olá! Meu nome é ${name}. ${subject === 'Consulta geral' ? 'Gostaria de mais informações sobre as peregrinações.' : 'Tenho interesse em: ' + subject}`;
    window.open(getWhatsAppURL(msg), '_blank');
  });
}

// ── Smooth scroll for anchor links ─────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 88;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
