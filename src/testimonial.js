window.addEventListener("load", () => {
    document.querySelector(".loading").style.display = "none";
})

const textArea = document.querySelector(".textArea");
textArea.addEventListener("input", () => {
    document.querySelector(".textValueArea span").textContent = textArea.value.length;
})