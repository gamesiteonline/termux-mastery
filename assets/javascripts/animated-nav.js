document.addEventListener('DOMContentLoaded', function() {
  // ============================================
  // 1. Scroll Animations with IntersectionObserver
  // ============================================
  const animateElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after animation to save resources
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  animateElements.forEach(el => observer.observe(el));

  // ============================================
  // 2. Smooth Scroll for Anchor Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ============================================
  // 3. Copy Code Button Enhancement
  // ============================================
  document.querySelectorAll('.highlight pre, .codehilite pre').forEach(codeBlock => {
    const wrapper = codeBlock.closest('.highlight, .codehilite');
    if (!wrapper) return;

    const button = document.createElement('button');
    button.className = 'copy-button';
    button.innerHTML = '📋';
    button.title = 'Copy to clipboard';
    button.style.cssText = `
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: var(--md-default-bg-color);
      border: 1px solid var(--md-default-fg-color--lightest);
      border-radius: 4px;
      padding: 0.25rem 0.5rem;
      cursor: pointer;
      font-size: 0.8rem;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 10;
    `;

    wrapper.style.position = 'relative';

    wrapper.addEventListener('mouseenter', () => { button.style.opacity = '1'; });
    wrapper.addEventListener('mouseleave', () => { button.style.opacity = '0'; });

    button.addEventListener('click', async () => {
      const code = codeBlock.querySelector('code')?.innerText || codeBlock.innerText;
      try {
        await navigator.clipboard.writeText(code);
        button.innerHTML = '✅';
        setTimeout(() => { button.innerHTML = '📋'; }, 1500);
      } catch {
        button.innerHTML = '❌';
        setTimeout(() => { button.innerHTML = '📋'; }, 1500);
      }
    });

    wrapper.appendChild(button);
  });

  // ============================================
  // 4. Progress Bar Animation for 100-Examples
  // ============================================
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const fill = bar.querySelector('.fill');
    if (fill) {
      const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && fill.dataset.target) {
            fill.style.width = fill.dataset.target + '%';
            progressObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      progressObserver.observe(bar);
    }
  });

  // ============================================
  // 5. Category Filtering for Examples
  // ============================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const exampleCards = document.querySelectorAll('.example-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      exampleCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          card.classList.add('visible');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ============================================
  // 6. Terminal Typing Effect
  // ============================================
  document.querySelectorAll('.typing-demo').forEach(el => {
    const text = el.dataset.text || el.innerText;
    el.innerText = '';
    let i = 0;

    function typeChar() {
      if (i < text.length) {
        el.innerText += text.charAt(i);
        i++;
        setTimeout(typeChar, 30 + Math.random() * 50);
      }
    }

    const typingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(typeChar, 500);
          typingObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    typingObserver.observe(el);
  });

  // ============================================
  // 7. Lightbox for Screenshots
  // ============================================
  document.querySelectorAll('.terminal-screenshot').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
        animation: fadeIn 0.3s ease;
      `;

      const enlarged = document.createElement('img');
      enlarged.src = img.src;
      enlarged.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 8px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        animation: scaleIn 0.3s ease;
      `;

      overlay.appendChild(enlarged);
      overlay.addEventListener('click', () => document.body.removeChild(overlay));
      document.body.appendChild(overlay);

      // Close on Escape
      document.addEventListener('keydown', function closeHandler(e) {
        if (e.key === 'Escape') {
          document.body.removeChild(overlay);
          document.removeEventListener('keydown', closeHandler);
        }
      });
    });
  });

  // ============================================
  // 8. Sidebar Active Section Highlight
  // ============================================
  const navLinks = document.querySelectorAll('.md-nav__link');
  const sections = document.querySelectorAll('h2[id], h3[id]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('md-nav__link--active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('md-nav__link--active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => sectionObserver.observe(section));

  // ============================================
  // 9. Keyboard Shortcuts Navigation
  // ============================================
  document.addEventListener('keydown', (e) => {
    // Alt+ArrowLeft = previous page
    if (e.altKey && e.key === 'ArrowLeft') {
      const prev = document.querySelector('.md-footer__link--prev a');
      if (prev) window.location.href = prev.href;
    }
    // Alt+ArrowRight = next page
    if (e.altKey && e.key === 'ArrowRight') {
      const next = document.querySelector('.md-footer__link--next a');
      if (next) window.location.href = next.href;
    }
    // ? = show keyboard shortcut help
    if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
      const help = document.getElementById('keyboard-help');
      if (help) help.style.display = help.style.display === 'none' ? 'block' : 'none';
    }
  });

  // ============================================
  // 10. Example Counter Badges
  // ============================================
  document.querySelectorAll('.example-counter').forEach(counter => {
    const total = parseInt(counter.dataset.total) || 0;
    let current = 0;
    const step = Math.ceil(total / 30);
    const interval = setInterval(() => {
      current += step;
      if (current >= total) {
        current = total;
        clearInterval(interval);
      }
      counter.innerText = current + '+' ;
    }, 50);
  });

  console.log('Termux Mastery: animated navigation loaded');
});