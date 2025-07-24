document.addEventListener("DOMContentLoaded", () => {
  const viewer = document.querySelector(".image-viewer");
  const viewerImg = viewer.querySelector(".image-viewer__img");
  const overlay = viewer.querySelector(".image-viewer__overlay");
  const leftArrow = viewer.querySelector(".image-viewer__arrow.left");
  const rightArrow = viewer.querySelector(".image-viewer__arrow.right");

  const items = Array.from(document.querySelectorAll(".grid__item"));
  const images = items.map(item => item.querySelector("img"));
  let currentIndex = 0;

  function openViewer(index) {
    if (!images[index]) return;

    currentIndex = index;
    viewerImg.src = images[currentIndex].src;
    viewer.classList.add("active");
    viewer.style.display = "flex";
    document.body.classList.add("noscroll");
  }

  function closeViewer() {
    viewer.classList.remove("active");
    setTimeout(() => {
      viewer.style.display = "none";
      viewerImg.src = "";
      document.body.classList.remove("noscroll");
    }, 300);
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    viewerImg.src = images[currentIndex].src;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    viewerImg.src = images[currentIndex].src;
  }

  items.forEach((item, index) => {
    const firstImg = item.querySelector("img");
    if (!firstImg) return;

    firstImg.addEventListener("click", () => {
      openViewer(index);
    });
  });

  overlay.addEventListener("click", closeViewer);
  leftArrow.addEventListener("click", showPrev);
  rightArrow.addEventListener("click", showNext);

  document.addEventListener("keydown", e => {
    if (!viewer.classList.contains("active")) return;
    if (e.key === "Escape") closeViewer();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });
});
