const app = {
    processingButton(event) {
        const button = event.currentTarget;
        const track = button.closest(".carrusel").querySelector(".carrusel-track");
        const carruselItems = Array.from(track.children);
        const carruselWidth = carruselItems[0].getBoundingClientRect().width;

        const buttonPrev = button.closest(".carrusel").querySelector(".carrusel-prev");
        const buttonNext = button.closest(".carrusel").querySelector(".carrusel-next");

        const currentIndex = carruselItems.findIndex(item => item.classList.contains("current-item"));
        let targetIndex = currentIndex;

        if (button.dataset.button === "button-next") {
            targetIndex = currentIndex + 1;
        } else if (button.dataset.button === "button-prev") {
            targetIndex = currentIndex - 1;
        }

        if (targetIndex < 0 || targetIndex >= carruselItems.length) {
            return;
        }

        const targetItem = carruselItems[targetIndex];

        track.style.transform = `translateX(-${targetItem.style.left})`;
        carruselItems[currentIndex].classList.remove("current-item");
        targetItem.classList.add("current-item");

        if (targetIndex === 0) {
            buttonPrev.disabled = true;
        } else {
            buttonPrev.disabled = false;
        }

        if (targetIndex === carruselItems.length - 1) {
            buttonNext.disabled = true;
        } else {
            buttonNext.disabled = false;
        }
    }
};
