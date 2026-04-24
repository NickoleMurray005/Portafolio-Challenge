document.addEventListener("DOMContentLoaded", function () {
    // Animación al cargar secciones
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 300);
    });

    // Validación del formulario
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("¡Gracias! El mensaje fue enviado exitosamente.");
        contactForm.reset();
    });
});