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

// document.addEventListener("DOMContentLoaded", () =>{
//   gsap.registerPlugin(ScrollTrigger);
//   gsap.to(".animasi",{
//     scrollTrigger: {
//       trigger: ".divAnimasiCard",    // Section yang memicu animasi
//       start: "top center", 
//       end: "bottom center",           // Memulai animasi saat bagian atas section masuk ke tengah viewport
//       toggleActions: "play none none reset", // Memulai animasi saat memasuki section, dan reset saat keluar
//       markers: true                   // Marker untuk melihat posisi start dan end (opsional, hanya untuk debugging)
//   },
//     opacity: 1,
//     y: 0,
//     duration: 1.5,
//     stragger : 0.3,
//     ease : "power2.out",
//   })
    
// })

let kaliDuration = 0.5;
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Untuk setiap card, buat animasi 'while in view'
  gsap.utils.toArray(".animasi").forEach((card, index) => {
      gsap.fromTo(card, 
          { opacity: 0, y: -100 },       // Posisi awal
          { 
              opacity: 1,
              y: 0,
              duration: 1 * (index + kaliDuration),
              ease: "power2.out",
              scrollTrigger: {
                  trigger: card,
                  start: "top center",       // Mulai animasi ketika elemen hampir terlihat
                  end: "bottom top",      // Akhiri animasi saat elemen meninggalkan viewport
                  toggleActions: "play none none reverse", // Balik ke posisi awal saat keluar
                  markers: true,         // Tambahkan ini untuk debugging
                  onEnter: () => gsap.to(card, { opacity: 1, y: 0, duration: 1 * (index + kaliDuration) }),  // Animasi saat masuk
                  onEnterBack: () => gsap.to(card, { opacity: 1, y: 0, duration: 1 * (index + kaliDuration) }),
                  onLeave: () => gsap.to(card, { opacity: 0, y: -100, duration: 1 * (index + kaliDuration) }),
                  onLeaveBack: () => gsap.to(card, { opacity: 0, y: -100, duration: 1 * (index + kaliDuration) })// Reset saat keluar
              }
          }
      );
  });
});
