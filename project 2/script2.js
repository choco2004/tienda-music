document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".carrusel").forEach(carrusel => {
        const track = carrusel.querySelector(".carrusel-track");
        const carruselItems = Array.from(track.children);
        const carruselWidth = carruselItems[0].getBoundingClientRect().width;

        carruselItems.forEach((item, index) => {
            item.style.left = `${carruselWidth * index}px`;
        });

        carruselItems[0].classList.add("current-item");

        const buttonPrev = carrusel.querySelector(".carrusel-prev");
        const buttonNext = carrusel.querySelector(".carrusel-next");

        if (buttonPrev) buttonPrev.disabled = true;

        if (buttonPrev) buttonPrev.addEventListener("click", app.processingButton);
        if (buttonNext) buttonNext.addEventListener("click", app.processingButton);
    });
});
