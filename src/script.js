const navbar = document.querySelector(".navbar"),
hamburgerButton = document.querySelector(".hamburgerButton");

hamburgerButton.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburgerButton.classList.toggle("diklik");
})

// Navbar Section Active
const allSection = document.querySelectorAll("section"),
allLinksNavbar = document.querySelectorAll(".nav-link");

window.onscroll = () => {
    allSection.forEach(section => {
        let top = window.scrollY,
        sectionOffset = section.offsetTop - 100,
        heightSection = section.offsetHeight,
        idSection = section.getAttribute('id');
        
        if(top >= sectionOffset && top < sectionOffset + heightSection) {
            allLinksNavbar.forEach(link => {
                link.classList.remove("active");
                document.querySelector(".nav-items-links a[href*=" + idSection + "]").classList.add("active");
            })
        }
    })
}