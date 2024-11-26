document.addEventListener("scroll", () => {
    const images = document.querySelectorAll(".image[data-rotate]");
    const scrollY = window.scrollY;

    images.forEach((image) => {
        const rotateDirection = image.getAttribute("data-rotate") === "left" ? -1 : 1;
        const rect = image.getBoundingClientRect();
        const offset = (scrollY - rect.top + window.innerHeight / 2) * 0.05;

        image.style.transform = `rotateY(${offset * rotateDirection}deg)`;
        image.style.boxShadow = `${Math.abs(offset) / 4}px ${Math.abs(offset) / 4}px 20px rgba(0,0,0,0.3)`;
    });
});
