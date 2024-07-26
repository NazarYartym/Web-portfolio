const scrollWrapper = document.querySelector('.scroll-wrapper');
const scrollContent = document.querySelector('.scroll-content');
const items = Array.from(scrollContent.children);

function cloneItems() {
  const contentWidth = scrollContent.scrollWidth;
  const containerWidth = scrollWrapper.offsetWidth;

  let totalWidth = contentWidth;
  while (totalWidth < containerWidth * 2) {
    items.forEach(item => {
      const clone = item.cloneNode(true);
      scrollContent.appendChild(clone);
      totalWidth += item.offsetWidth;
    });
  }
}

cloneItems();

scrollWrapper.addEventListener('mouseenter', () => {
  scrollContent.classList.add('paused');
});

scrollWrapper.addEventListener('mouseleave', () => {
  scrollContent.classList.remove('paused');
});
