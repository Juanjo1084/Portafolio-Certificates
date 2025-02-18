// Animación de bloques al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
    let observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    document.querySelectorAll(".bloque").forEach((bloque) => {
        observer.observe(bloque);
    });
});