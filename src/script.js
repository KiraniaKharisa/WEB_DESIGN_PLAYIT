const navbar = document.querySelector(".navbar"),
hamburgerButton = document.querySelector(".hamburgerButton");

hamburgerButton.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburgerButton.classList.toggle("diklik");
})