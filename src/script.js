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
                  markers: false,         // Tambahkan ini untuk debugging
                  onEnter: () => gsap.to(card, { opacity: 1, y: 0, duration: 1 * (index + kaliDuration) }),  // Animasi saat masuk
                  onEnterBack: () => gsap.to(card, { opacity: 1, y: 0, duration: 1 * (index + kaliDuration) }),
                  onLeave: () => gsap.to(card, { opacity: 0, y: -100, duration: 1 * (index + kaliDuration) }),
                  onLeaveBack: () => gsap.to(card, { opacity: 0, y: -100, duration: 1 * (index + kaliDuration) })// Reset saat keluar
              }
          }
      );
  });
});

// animasi deskripsi
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".animasi-deskripsi").forEach((card, index) => {
      const direction = index % 2 === 0 ? -100 : 100;

      gsap.fromTo(card,
          { opacity: 0, x: direction },
          {
              opacity: 1,
              x: 0,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                  trigger: card,
                  start: "top center",         
                  end: "bottom top",
                  toggleActions: "play none none reverse",
                  markers: false
              }
          }
      );
  });
});


// animasi judul
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".judul-1",{
    opacity: 1,
    y: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".judul-1",
      start: "top center",
      end: "bottom top",
      toggleActions: "play none none reverse",
      markers: false
    }
  })
})
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".judul-2",{
    opacity: 1,
    y: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".judul-2",
      start: "top center",
      end: "bottom top",
      toggleActions: "play none none reverse",
      markers: false
    }
  })
})
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".judul-3",{
    opacity: 1,
    y: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".judul-3",
      start: "top center",
      end: "bottom top",
      toggleActions: "play none none reverse",
      markers: false
    }
  })
})
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".judul-4",{
    opacity: 1,
    y: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".judul-4",
      start: "top center",
      end: "bottom top",
      toggleActions: "play none none reverse",
      markers: false
    }
  })
})
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".judul-5",{
    opacity: 1,
    y: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".judul-5",
      start: "top center",
      end: "bottom top",
      toggleActions: "play none none reverse",
      markers: false
    }
  })
})

kaliDuration = 0.5;
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Untuk setiap card, buat animasi 'while in view'
  gsap.utils.toArray(".animasi-sejarah-des").forEach((card, index) => {
      gsap.fromTo(card, 
          { opacity: 0, x: -100 },    // Posisi awal
          { 
              opacity: 1,
              x: 0,
              duration: 1 * (index + kaliDuration),
              ease: "power2.out",
              scrollTrigger: {
                  trigger: card,
                  start: "top center",       // Mulai animasi ketika elemen hampir terlihat
                  end: "bottom top",      // Akhiri animasi saat elemen meninggalkan viewport
                  toggleActions: "play none none reverse", // Balik ke posisi awal saat keluar
                  markers: false,         // Tambahkan ini untuk debugging
                  onEnter: () => gsap.to(card, { opacity: 1, x: 0, duration: 1 * (index + kaliDuration) }),  // Animasi saat masuk
                  onEnterBack: () => gsap.to(card, { opacity: 1, x: 0, duration: 1 * (index + kaliDuration) }),
                  onLeave: () => gsap.to(card, { opacity: 0, x: -100, duration: 1 * (index + kaliDuration) }),
                  onLeaveBack: () => gsap.to(card, { opacity: 0, x: -100, duration: 1 * (index + kaliDuration) })// Reset saat keluar
              }
          }
      );
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".img-sjarah",{
    opacity: 1,
    x: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".img-sjarah",
      start: "top center",
      end: "bottom top",
      toggleActions: "play none none reverse",
      markers: false
    }
  })
})

fetch("https://script.google.com/macros/s/AKfycbyQYB5Z92amHj6Tijrub_Qtun4WgX2E2N7jY5J8dSFL1doYClTVHQsahrPN10TL0uNk/exec?action=dapatkansebagian&banyakData=10")
.then(res => {
    return res.json();
})
.then(data => {
  data.data.forEach((el, i) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        return index < el.BINTANG ? 
            '<i class="bi bi-star-fill active"></i>' : 
            '<i class="bi bi-star-fill"></i>';
    }).join('');

    document.querySelector(".sliderTestimoni .list").insertAdjacentHTML("beforeend", `
    <div class="cardTestimoni" style="--position: ${i + 1};">
            <div class="top">
              <h3>${el.NAMA}</h3>
              <div class="bintang">
                ${stars}
              </div>
            </div>
            <div class="message">
              <p>${el.PESAN}</p>
            </div>
          </div>`)
    });
  });


  document.querySelector(".formData").addEventListener("submit", (e) => {
    e.preventDefault()

    const nama = document.querySelector("#namaPertama").value + " " + document.querySelector("#namaKedua").value;
    const email = document.querySelector("#email").value;
    const pesan = document.querySelector("#pesan").value;

    data = {
        "nama": nama,
        "email": email,
        "pesan": pesan
    }

    fetch("https://script.google.com/macros/s/AKfycbyQYB5Z92amHj6Tijrub_Qtun4WgX2E2N7jY5J8dSFL1doYClTVHQsahrPN10TL0uNk/exec?action=tambahKontak", {
        method: "POST",
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => {
        document.querySelector("#namaPertama").value = ""; 
        document.querySelector("#namaKedua").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#pesan").value = "";

       
        document.querySelector(".successAlert").classList.add("ada");
        setTimeout(() => {
            document.querySelector(".successAlert").classList.remove("ada");
        }, 3000)
    })
});