// Image lightbox — uses <dialog> when available; otherwise opens the image in a new tab.

(function () {
  function initImageLightbox() {
    const dialog = document.querySelector('[data-image-lightbox]');
    if (!dialog) return;

    const img = dialog.querySelector('.image-lightbox__img');
    const closeBtn = dialog.querySelector('[data-lightbox-close]');
    if (!img || !closeBtn) return;

    const triggers = document.querySelectorAll('[data-lightbox-open]');
    if (!triggers.length) return;

    const useDialog = typeof dialog.showModal === 'function';
    let lastTrigger = null;

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const thumb = trigger.querySelector('img');
        const src = thumb && thumb.getAttribute('src');
        if (!src) return;

        if (useDialog) {
          lastTrigger = trigger;
          img.alt = (thumb && thumb.getAttribute('alt')) || '';

          const snapScrollOrigin = () => {
            dialog.scrollTop = 0;
            dialog.scrollLeft = 0;
          };

          img.addEventListener('load', snapScrollOrigin, { once: true });
          img.src = src;
          dialog.showModal();
          snapScrollOrigin();
          requestAnimationFrame(snapScrollOrigin);
          if (img.complete) {
            snapScrollOrigin();
          }

          closeBtn.focus();
        } else {
          window.open(src, '_blank', 'noopener,noreferrer');
        }
      });
    });

    if (!useDialog) return;

    closeBtn.addEventListener('click', () => {
      dialog.close();
    });

    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    });

    dialog.addEventListener('close', () => {
      if (lastTrigger) {
        lastTrigger.focus();
        lastTrigger = null;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageLightbox);
  } else {
    initImageLightbox();
  }
})();
