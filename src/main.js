document.documentElement.classList.add('js');

(() => {
  const hasMatchMedia = typeof window.matchMedia === 'function';
  const prefersReducedMotion = hasMatchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));

  if (revealItems.length) {
    if (!hasMatchMedia || !('IntersectionObserver' in window) || prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.14,
      });

      revealItems.forEach((item) => revealObserver.observe(item));
    }
  }

  const heroVisual = document.querySelector('.hero-visual');
  const tiltTarget = heroVisual ? heroVisual.querySelector('[data-tilt]') : null;
  const restingTilt = 'rotate(12deg)';

  if (heroVisual && tiltTarget && hasMatchMedia && !prefersReducedMotion) {
    const requestFrame = (callback) => {
      if (window.requestAnimationFrame) {
        return window.requestAnimationFrame(callback);
      }

      return window.setTimeout(callback, 16);
    };
    const cancelFrame = (id) => {
      if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(id);
        return;
      }

      window.clearTimeout(id);
    };
    let bounds = null;
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const updateTilt = () => {
      frame = 0;

      if (!bounds) return;
      if (!bounds.width || !bounds.height) return;

      const x = ((pointerX - bounds.left) / bounds.width) - 0.5;
      const y = ((pointerY - bounds.top) / bounds.height) - 0.5;
      const rotateX = y * -6;
      const rotateY = x * 6;

      tiltTarget.style.transform = `${restingTilt} rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    };

    const scheduleTilt = () => {
      if (!frame) {
        frame = requestFrame(updateTilt);
      }
    };

    heroVisual.addEventListener('pointerenter', () => {
      bounds = heroVisual.getBoundingClientRect();
    });

    heroVisual.addEventListener('pointermove', (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (!bounds) {
        bounds = heroVisual.getBoundingClientRect();
      }

      scheduleTilt();
    });

    heroVisual.addEventListener('pointerleave', () => {
      if (frame) {
        cancelFrame(frame);
        frame = 0;
      }

      bounds = null;
      tiltTarget.style.transform = '';
    });

    window.addEventListener('resize', () => {
      bounds = null;
    });
  }

  const calendarForm = document.querySelector('[data-calendar-form]');

  if (calendarForm) {
    calendarForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const dateInput = calendarForm.querySelector('input[name="meeting-time"]');

      if (!dateInput || !dateInput.value) {
        if (dateInput) {
          dateInput.focus();
        }
        return;
      }

      const startDate = new Date(dateInput.value);

      if (Number.isNaN(startDate.getTime())) {
        dateInput.focus();
        return;
      }

      const endDate = new Date(startDate.getTime() + 45 * 60 * 1000);
      const formatCalendarDate = (date) => {
        const pad = (value) => value.toString().padStart(2, '0');

        return [
          date.getFullYear(),
          pad(date.getMonth() + 1),
          pad(date.getDate()),
          'T',
          pad(date.getHours()),
          pad(date.getMinutes()),
          '00',
        ].join('');
      };

      const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: 'Diagnostico de procesos - Factos Solutions',
        dates: `${formatCalendarDate(startDate)}/${formatCalendarDate(endDate)}`,
        details: 'Reunion para conversar sobre oportunidades de automatizacion e IA para procesos empresariales.',
        location: 'Reunion virtual',
        add: 'hola@factossolutions.com',
        ctz: 'America/Lima',
      });

      window.open(`https://calendar.google.com/calendar/render?${params.toString()}`, '_blank', 'noopener');
    });
  }

  const year = document.querySelector('#year');

  if (year) {
    year.textContent = new Date().getFullYear().toString();
  }
})();
