let div = document.createElement("div");
let body = document.querySelector("body");
let inp = document.createElement("input");
let btn = document.createElement("button");
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "red";
btn.style.width = "60px";
btn.style.height = "30px";
btn.innerText = "button";

body.appendChild(div);
body.appendChild(inp);
body.appendChild(btn);

btn.addEventListener("click", function () {
  console.log(inp.value);
  btn.innerText.value = "";
});
