window.addEventListener("load", () => {
    document.querySelector(".loading").style.display = "none";
})

const textArea = document.querySelector(".textArea");
textArea.addEventListener("input", () => {
    document.querySelector(".textValueArea span").textContent = textArea.value.length;
})

const contentTestiEl = document.querySelector(".contentCardTestimonial");
function getAllData () {
    fetch("https://script.google.com/macros/s/AKfycbyQYB5Z92amHj6Tijrub_Qtun4WgX2E2N7jY5J8dSFL1doYClTVHQsahrPN10TL0uNk/exec?action=dapatkansemua")
.then(res => {
    return res.json();
})
.then(data => {
    data.data.forEach(el => {
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < el.BINTANG ? 
                '<i class="bi bi-star-fill active"></i>' : 
                '<i class="bi bi-star-fill"></i>';
        }).join('');

        contentTestiEl.insertAdjacentHTML("beforeend", `
        <div class="cardTestimoniPage">
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
    })
}
getAllData();

document.querySelector(".formData").addEventListener("submit", (e) => {
    e.preventDefault()

    const nama = document.querySelector("#namaPertama").value + " " + document.querySelector("#namaKedua").value;
    const bintang = document.querySelector("#bintang").value;
    const pesan = document.querySelector("#pesan").value;

    data = {
        "nama": nama,
        "bintang": bintang,
        "pesan": pesan
    }

    fetch("https://script.google.com/macros/s/AKfycbyQYB5Z92amHj6Tijrub_Qtun4WgX2E2N7jY5J8dSFL1doYClTVHQsahrPN10TL0uNk/exec?action=insert", {
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
        document.querySelector("#bintang").value = "";
        document.querySelector("#pesan").value = "";

        contentTestiEl.innerHTML = "";
        getAllData();
        document.querySelector(".successAlert").classList.add("ada");
        setTimeout(() => {
            document.querySelector(".successAlert").classList.remove("ada");
        }, 3000)
    })
});