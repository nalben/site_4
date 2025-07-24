document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".image-popup");
  const popupImg = popup.querySelector(".image-popup__img");
  const overlay = popup.querySelector(".image-popup__overlay");
  const leftArrow = popup.querySelector(".image-popup__arrow.left");
  const rightArrow = popup.querySelector(".image-popup__arrow.right");

  const items = Array.from(document.querySelectorAll(".grid__item"));
  const images = items.map(item => item.querySelector("img")); // берем только первую
  let currentIndex = 0;

  function openPopup(index) {
    if (!images[index]) return;

    currentIndex = index;
    popupImg.src = images[currentIndex].src;
    popup.classList.add("active");
    popup.style.display = "flex";
    document.body.classList.add("noscroll");
  }

  function closePopup() {
    popup.classList.remove("active");
    setTimeout(() => {
      popup.style.display = "none";
      popupImg.src = "";
      document.body.classList.remove("noscroll");
    }, 300);
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    popupImg.src = images[currentIndex].src;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    popupImg.src = images[currentIndex].src;
  }

  items.forEach((item, index) => {
    const firstImg = item.querySelector("img");
    if (!firstImg) return;

    firstImg.addEventListener("click", () => {
      openPopup(index);
    });
  });

  overlay.addEventListener("click", closePopup);
  leftArrow.addEventListener("click", showPrev);
  rightArrow.addEventListener("click", showNext);

  document.addEventListener("keydown", e => {
    if (!popup.classList.contains("active")) return;
    if (e.key === "Escape") closePopup();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });
});
