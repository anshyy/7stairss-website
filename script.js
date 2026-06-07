// 7STAIRSS — Main Script

// ─── Intro animation ────────────────────────────────────────────────────────
(function () {
  const overlay = document.getElementById('introOverlay');
  if (!overlay) return;
  document.body.classList.add('intro-active');
  setTimeout(() => {
    overlay.classList.add('done');
    document.body.classList.remove('intro-active');
    setTimeout(() => overlay.remove(), 200);
  }, 3050);
})();

// ─── Hero video crossfade ────────────────────────────────────────────────────
(function () {
  const video = document.getElementById('heroVideo');
  const reel  = document.getElementById('heroReel');
  if (!video || !reel) return;
  video.addEventListener('canplaythrough', () => {
    video.classList.add('loaded');
    setTimeout(() => reel.classList.add('hidden'), 1400);
  }, { once: true });
  video.addEventListener('error', () => {
    video.parentElement.style.display = 'none';
  });
})();

// ─── Hero stairs entrance (after intro finishes) ─────────────────────────────
(function () {
  const blocks = document.querySelectorAll('.hs-block');
  if (!blocks.length) return;
  // Trigger after intro wipe (≈3.1s) + slight extra delay
  blocks.forEach((b, i) => {
    setTimeout(() => b.classList.add('hs-in'), 3200 + i * 120);
  });
})();

// ─── 7 Stairs interactive panel ──────────────────────────────────────────────
(function () {
  const stairs  = document.querySelectorAll('.sv-stair');
  const sipNum  = document.getElementById('sipNum');
  const sipSvc  = document.getElementById('sipService');
  const sipDesc = document.getElementById('sipDesc');
  const sipFill = document.getElementById('sipBarFill');
  if (!stairs.length || !sipNum) return;

  function activate(stair, idx) {
    stairs.forEach(s => s.classList.remove('active'));
    stair.classList.add('active');
    sipNum.textContent  = String(idx + 1).padStart(2, '0');
    sipSvc.innerHTML    = stair.dataset.service;
    sipDesc.textContent = stair.dataset.desc;
    sipFill.style.width = `${((idx + 1) / 7) * 100}%`;
  }

  stairs.forEach((stair, i) => {
    stair.addEventListener('mouseenter', () => activate(stair, i));
  });

  // Default to first stair active
  activate(stairs[0], 0);

  // Scroll-trigger reveal with stagger
  const stairObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stairs.forEach((s, i) => {
          setTimeout(() => s.classList.add('visible'), i * 100);
        });
        stairObs.disconnect();
      }
    });
  }, { threshold: 0.2 });

  const wrap = document.querySelector('.stairs-visual');
  if (wrap) stairObs.observe(wrap);
})();

// ─── NAV scroll effect ───────────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ─── Hamburger / mobile menu ─────────────────────────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
  const spans = hamburger.querySelectorAll('span');
  if (menuOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

document.querySelectorAll('.mobile-link, .mobile-cta').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ─── Smooth scroll ───────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─── Intersection Observer factory ──────────────────────────────────────────
function makeObserver(threshold = 0.1, rootMargin = '0px 0px -50px 0px') {
  return new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target._observer && entry.target._observer.unobserve(entry.target);
      }
    });
  }, { threshold, rootMargin });
}

const scrollObserver = makeObserver(0.08, '0px 0px -40px 0px');

// Service cards — scale-up with stagger
document.querySelectorAll('.service-card').forEach((el, i) => {
  el.classList.add('scale-up');
  el.style.transitionDelay = `${(i % 3) * 80}ms`;
  el._observer = scrollObserver;
  scrollObserver.observe(el);
});

// Work gallery items — stagger reveal
document.querySelectorAll('.work-item').forEach((el, i) => {
  el.style.transitionDelay = `${i * 90}ms`;
  el._observer = scrollObserver;
  scrollObserver.observe(el);
});

// About cards
document.querySelectorAll('.about-card').forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = `${i * 100}ms`;
  el._observer = scrollObserver;
  scrollObserver.observe(el);
});

// Process steps
document.querySelectorAll('.process-step').forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = `${i * 60}ms`;
  el._observer = scrollObserver;
  scrollObserver.observe(el);
});

// Stats
document.querySelectorAll('.stat').forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = `${i * 120}ms`;
  el._observer = scrollObserver;
  scrollObserver.observe(el);
});

// Section headers, halves, contact items
[
  '.section-header', '.about-left', '.about-right',
  '.contact-left', '.contact-right', '.contact-item',
  '.hero-content', '.hero-badge',
].forEach(sel => {
  document.querySelectorAll(sel).forEach(el => {
    el.classList.add('fade-up');
    el._observer = scrollObserver;
    scrollObserver.observe(el);
  });
});

// ─── Animated stat counters ──────────────────────────────────────────────────
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  if (isNaN(target)) return;
  const suffix   = el.dataset.suffix || '';
  const duration = 1600;
  const start    = performance.now();
  function step(now) {
    const p    = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 4);
    const val  = target * ease;
    el.textContent = (Number.isInteger(target) ? Math.round(val) : val.toFixed(1)) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('.stat-num[data-target]').forEach(el => counterObs.observe(el));

// ─── Parallax on work gallery images ────────────────────────────────────────
const parallaxItems = document.querySelectorAll('.work-item img, .service-card-img img');

function applyParallax() {
  parallaxItems.forEach(img => {
    const rect = img.closest('.work-item, .service-card-img').getBoundingClientRect();
    const vp   = window.innerHeight;
    // Map element center from viewport top (0) to bottom (1)
    const progress = (rect.top + rect.height / 2) / vp;
    const shift    = (progress - 0.5) * 30; // max 15px up or down
    img.style.transform = `translateY(${shift}px) scale(1.08)`;
  });
}

// Only apply parallax on hover-free scroll for service cards (scale handles hover)
const workImgs = document.querySelectorAll('.work-item img');
function applyWorkParallax() {
  workImgs.forEach(img => {
    const rect     = img.closest('.work-item').getBoundingClientRect();
    const vp       = window.innerHeight;
    const progress = (rect.top + rect.height / 2) / vp;
    const shift    = (progress - 0.5) * 24;
    img.style.transform = `translateY(${shift}px)`;
  });
}

window.addEventListener('scroll', applyWorkParallax, { passive: true });
applyWorkParallax();

// ─── Smooth ticker pause on hover ───────────────────────────────────────────
const tickerTrack = document.querySelector('.ticker-track');
if (tickerTrack) {
  const wrap = tickerTrack.closest('.ticker-wrap');
  wrap.addEventListener('mouseenter', () => tickerTrack.style.animationPlayState = 'paused');
  wrap.addEventListener('mouseleave', () => tickerTrack.style.animationPlayState = 'running');
}

// ─── Contact form submit ─────────────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn      = contactForm.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent      = 'Message Sent! ✓';
    btn.style.background = '#1a5c34';
    btn.style.borderColor= '#1a5c34';
    btn.disabled         = true;
    setTimeout(() => {
      btn.textContent      = original;
      btn.style.background = '';
      btn.style.borderColor= '';
      btn.disabled         = false;
      contactForm.reset();
    }, 3500);
  });
}
