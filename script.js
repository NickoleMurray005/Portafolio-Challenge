document.addEventListener("DOMContentLoaded", function () {
    // Animación del menú desplegable
    const toggleButton = document.querySelector(".menu-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    toggleButton.addEventListener("click", function () {
        dropdownMenu.classList.toggle("active");
        toggleButton.classList.toggle("rotate");
    });

    // Animación al cargar la página
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 300); // Retraso entre secciones
    });

    // Animación para tarjetas al pasar el mouse
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.1)";
            card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Validaciones del formulario de contacto
    const contactForm = document.querySelector("#contact form");
    const nameInput = contactForm.querySelector("input[name='name']");
    const emailInput = contactForm.querySelector("input[name='email']");
    const subjectInput = contactForm.querySelector("input[name='subject']");
    const messageInput = contactForm.querySelector("textarea[name='message']");

    contactForm.addEventListener("submit", function (event) {
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validar campo Nombre
        if (nameInput.value.trim() === "") {
            alert("El campo 'Nombre' es obligatorio.");
            isValid = false;
        }

        // Validar campo E-mail
        if (!emailRegex.test(emailInput.value)) {
            alert("Por favor, introduce un correo electrónico válido.");
            isValid = false;
        }

        // Validar campo Asunto
        if (subjectInput.value.trim() === "") {
            alert("El campo 'Asunto' es obligatorio.");
            isValid = false;
        }

        // Validar campo Mensaje
        if (messageInput.value.trim() === "") {
            alert("El campo 'Mensaje' es obligatorio.");
            isValid = false;
        }

        // Si hay errores, prevenir el envío del formulario
        if (!isValid) {
            event.preventDefault(); // Evitar envío si hay errores
        } else {
            event.preventDefault(); // Para pruebas: prevenir envío real
            alert("¡El mensaje fue enviado exitosamente!"); // Mostrar mensaje de éxito
            contactForm.reset(); // Limpiar el formulario
        }
    });
});