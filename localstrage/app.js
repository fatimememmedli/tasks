let container = document.querySelector(".container");
let body = document.querySelector("body");
let modeBtn = document.querySelector(".modeBtn");
darkBtn.addEventListener("click", function () {
  if (JSON.parse(localStorage.getItem("dark-mode")) === null) {
    localStorage.setItem("dark-mode", JSON.stringify(true));
    this.textContent = "Light mode";
    this.classList.replace("btn-dark", "btn-light");
    document.body.classList.add("bg-dark");
  } else {
    if (JSON.parse(localStorage.getItem("dark-mmode")) === true) {
      this.textContent = "Dar";
    }
  }
});
