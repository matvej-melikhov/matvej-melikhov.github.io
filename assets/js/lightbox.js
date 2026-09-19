document.addEventListener('DOMContentLoaded', () => {
  const mediaSelector = '.prose img, .prose video, .tg-collage img, .tg-collage video';
  const items = Array.from(document.querySelectorAll(mediaSelector));
  if (items.length === 0) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-counter"></div>
    <button class="lightbox-btn lightbox-close" title="Close (Esc)">&#10005;</button>
    <button class="lightbox-btn lightbox-prev" title="Previous (Left Arrow)">&#8592;</button>
    <div class="lightbox-content-wrapper"></div>
    <button class="lightbox-btn lightbox-next" title="Next (Right Arrow)">&#8594;</button>
  `;
  document.body.appendChild(lightbox);

  const wrapper = lightbox.querySelector('.lightbox-content-wrapper');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  const counter = lightbox.querySelector('.lightbox-counter');
  
  let currentIndex = 0;

  function showMedia(index) {
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    currentIndex = index;
    wrapper.innerHTML = '';
    
    // Update counter
    counter.textContent = `${currentIndex + 1} / ${items.length}`;
    
    const item = items[index];
    if (item.tagName === 'IMG') {
      const img = document.createElement('img');
      let src = item.src;
      if (item.parentElement && item.parentElement.tagName === 'A') src = item.parentElement.href;
      img.src = src;
      wrapper.appendChild(img);
    } else if (item.tagName === 'VIDEO') {
      const video = document.createElement('video');
      video.src = item.src;
      video.controls = true;
      video.autoplay = true;
      video.playsinline = true;
      wrapper.appendChild(video);
    }
  }

  items.forEach((item, index) => {
    if (item.parentElement && item.parentElement.tagName === 'A') {
      item.parentElement.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(index);
      });
    } else {
      item.style.cursor = 'zoom-in';
      item.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(index);
      });
    }
  });

  function openLightbox(index) {
    showMedia(index);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    wrapper.innerHTML = ''; // stops video playing
  }

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showMedia(currentIndex - 1); });
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showMedia(currentIndex + 1); });
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === wrapper) closeLightbox();
  });
  
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showMedia(currentIndex - 1);
    if (e.key === 'ArrowRight') showMedia(currentIndex + 1);
  });

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) { // 50px threshold
      if (diff > 0) {
        showMedia(currentIndex + 1); // swiped left
      } else {
        showMedia(currentIndex - 1); // swiped right
      }
    }
  }
});
