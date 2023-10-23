let div = document.querySelector(".container");
let box = document.querySelector(".box");
let btn = document.querySelector(".btn");
let h1 = document.querySelector("h1");
let inp = document.querySelector(".inp");
btn.addEventListener("click", function () {
  if (h1.textContent == "small") {
    box.style.width = "300px";
    box.style.height = "300px";
    box.style.backgroundColor = "red";
    h1.textContent = "big";
  } else {
    box.style.width = "200px";
    box.style.height = "200px";
    h1.textContent = "small";
    box.style.backgroundColor = "yellow";
  }
});

// box.style.width = "300px";
//   box.style.height = "300px";
//   h1.textContent = "big";
