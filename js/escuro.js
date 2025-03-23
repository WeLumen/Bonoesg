function toggleMode() {
    const html = document.documentElement;
    const body = document.body;
    const logo = document.getElementById("logo"); 

    html.classList.toggle("light");
    body.classList.toggle("dark");

    const isLightMode = html.classList.contains("light");

    // Atualiza a logo corretamente
    if (logo) {
        logo.src = isLightMode ? "img/bono.png" : "img/logo-dark.png";
        logo.alt = isLightMode ? "Logo da Bono (claro)" : "Logo da Bono (escuro)";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const isLightMode = document.documentElement.classList.contains("light");

    const logo = document.getElementById("logo");
    if (logo) {
        logo.src = isLightMode ? "img/bono.png" : "img/logo-dark.png";
        logo.alt = isLightMode ? "Logo da Bono (claro)" : "Logo da Bono (escuro)";
    }
});
