/* ============================================================
   SÃO JOSÉ – ARTIGOS RELIGIOSOS E PEREGRINAÇÕES
   main.js — Global Scripts
   ============================================================ */

// ── WhatsApp Configuration ──────────────────────────────
const WHATSAPP_NUMBER = '556732117001'; // +55 (67) 3211-7001
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
  const whatsappIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.55 6.55 0 0 1-3.342-.916l-.24-.144-2.494.654.666-2.432-.156-.25a6.55 6.55 0 1 1 5.566 3.088zm3.594-4.922c-.197-.098-1.165-.575-1.345-.64-.18-.066-.312-.099-.443.098-.131.197-.509.64-.624.772-.115.131-.23.148-.427.049-.197-.098-.832-.306-1.584-.977-.586-.522-.982-1.166-1.097-1.363-.115-.197-.012-.303.086-.401.089-.088.197-.23.296-.345.098-.115.131-.197.197-.328.065-.131.033-.246-.016-.345-.05-.098-.443-1.067-.607-1.46-.16-.383-.323-.331-.443-.337a8 8 0 0 0-.378-.007.724.724 0 0 0-.525.246c-.18.197-.689.673-.689 1.64 0 .968.705 1.903.804 2.034.098.131 1.388 2.12 3.363 2.973.47.203.837.324 1.123.414.472.15.902.129 1.242.078.379-.057 1.165-.476 1.329-.936.164-.46.164-.853.115-.936-.049-.082-.18-.131-.377-.23z"/></svg>';
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    const customMsg = el.getAttribute('data-whatsapp-msg');
    el.href = getWhatsAppURL(customMsg);
    el.target = '_blank';
    el.rel = 'noopener';
    if (el.matches('.whatsapp-float, .btn-whatsapp, .btn-nav-whatsapp') && !el.querySelector('svg')) {
      el.insertAdjacentHTML('afterbegin', whatsappIcon);
    }
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
