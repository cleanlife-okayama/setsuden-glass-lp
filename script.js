// FAQアコーディオン
const triggers = document.querySelectorAll('.accordion-trigger');
triggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const content = trigger.nextElementSibling;
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!isOpen));
    content.style.maxHeight = isOpen ? null : content.scrollHeight + 'px';
  });
});


// 画像読み込み状態でプレースホルダー表示を切替
const setImageFrameState = (img) => {
  const frame = img.closest('.image-frame');
  if (!frame) return;
  if (img.complete && img.naturalWidth > 0) {
    frame.classList.add('img-loaded');
  } else {
    frame.classList.remove('img-loaded');
  }
};

document.querySelectorAll('.image-frame img').forEach((img) => {
  img.addEventListener('load', () => setImageFrameState(img));
  img.addEventListener('error', () => setImageFrameState(img));
  setImageFrameState(img);
});
