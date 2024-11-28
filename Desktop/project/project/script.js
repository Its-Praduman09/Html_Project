const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;

// Move to the previous set of cards
prevBtn.addEventListener('click', () => {
  scrollAmount -= 270; // Adjust the scroll distance based on card width + margin
  if (scrollAmount < 0) scrollAmount = 0; // Prevent overscrolling
  slider.style.transform = `translateX(-${scrollAmount}px)`;
});

// Move to the next set of cards
nextBtn.addEventListener('click', () => {
  const maxScroll = slider.scrollWidth - slider.parentElement.offsetWidth;
  scrollAmount += 270; // Adjust the scroll distance based on card width + margin
  if (scrollAmount > maxScroll) scrollAmount = maxScroll; // Prevent overscrolling
  slider.style.transform = `translateX(-${scrollAmount}px)`;
});