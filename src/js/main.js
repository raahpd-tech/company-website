// ==========================================================
// MENÚ MÓVIL
// ==========================================================

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#primary-menu");

menuToggle.addEventListener("click", () => {

    const isOpen = menu.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );

});


// ==========================================================
// CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
// ==========================================================

const menuLinks = document.querySelectorAll("#primary-menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("is-open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menú"
        );

    });

});


// ==========================================================
// CERRAR MENÚ CON ESCAPE
// ==========================================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        menu.classList.remove("is-open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menú"
        );

    }

});


// ==========================================================
// CERRAR MENÚ AL HACER CLIC FUERA
// ==========================================================

document.addEventListener("click", (event) => {

    const clickedOutsideMenu =
        !menu.contains(event.target) &&
        !menuToggle.contains(event.target);

    if (clickedOutsideMenu) {

        menu.classList.remove("is-open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menú"
        );

    }

});

// ==========================================================
// FAQ - ACORDEÓN
// ==========================================================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const faqItem = question.closest(".faq-item");

        const isOpen = faqItem.classList.contains("is-open");


        // Cerrar todos los FAQ

        faqQuestions.forEach(otherQuestion => {

            const otherItem =
                otherQuestion.closest(".faq-item");

            otherItem.classList.remove("is-open");

            otherQuestion.setAttribute(
                "aria-expanded",
                "false"
            );

        });


        // Abrir el seleccionado si estaba cerrado

        if (!isOpen) {

            faqItem.classList.add("is-open");

            question.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    });

});

// ==========================================================
// NAVEGACIÓN ACTIVA SEGÚN LA SECCIÓN VISIBLE
// ==========================================================

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".menu a");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navigationLinks.forEach(link => {

                    link.classList.remove("active");
                    link.removeAttribute("aria-current");

                });

                const activeLink = document.querySelector(
                    `.menu a[href="#${entry.target.id}"]`
                );

                if (activeLink) {

                    activeLink.classList.add("active");

                    activeLink.setAttribute(
                        "aria-current",
                        "page"
                    );

                }

            }

        });

    },
    {
        threshold: 0.2
    }
);

sections.forEach(section => {

    sectionObserver.observe(section);

});