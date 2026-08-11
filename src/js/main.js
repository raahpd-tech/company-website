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