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

function nextSlide() {
  document.querySelector(".slider").appendChild(document.querySelectorAll(".slides")[0])
}
function prevSlide() {
  document.querySelector(".slider").prepend(document.querySelectorAll(".slides")[document.querySelectorAll(".slides").length - 1])
}

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
})

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
})

setInterval(nextSlide, 3000);

window.addEventListener("load", () => {
  document.querySelector(".loading").style.display = "none";
})