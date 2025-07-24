document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector(".discover__iframe");
    const iframe = popup.querySelector("iframe");
    const closeBtn = popup.querySelector("a");
    const imgLinks = document.querySelectorAll(".discover__img-item");

    imgLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const videoId = link.dataset.video;
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            popup.style.display = "flex";
            document.body.classList.add("noscroll");
        });
    });

    closeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        popup.style.display = "none";
        iframe.src = "";
        document.body.classList.remove("noscroll");
    });

    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
            iframe.src = "";
            document.body.classList.remove("noscroll");
        }
    });
});
