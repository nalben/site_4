function updateCardOffsets() {
  const cards = document.querySelectorAll(".card__item:not(.swiper-slide-duplicate)");

  cards.forEach(card => {
    const content = card.querySelector(".card__content");

    if (content) {
      const cardHeight = card.offsetHeight;

      if (cardHeight > 0) {
        const offset = cardHeight - 80;
        content.style.setProperty('--content-offset', `${offset}px`);
      }
    }
  });
}

