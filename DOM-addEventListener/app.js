let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let p = document.querySelector("p");
let myInput = document.querySelector(".myInput");
let h5 = document.querySelector("h5");
let clickButton = querySelector(".btn-primary");
let fullName = querySelector(".full-name");
let addCard = querySelector(".add-card");

let count = 1;

minus.addEventListener("click", function () {
  if (count > 0) {
    count--;
    p.textContent = count;
  } else {
    minus.style.backgroundColor = "red";
    this.setAttribute("disabled", true);
  }
});
plus.addEventListener("click", function () {
  count++;
  p.textContent = count;
  minus.style.backgroundColor = "green";
  minus.removeAttribute("disabled");
});
myInput.addEventListener("keyup", function () {
  if (myInput.value.length == 0 || myInput.value.length > 5) {
    h5.style.display = "none";
    clickButton.removeAttribute("disabled");
  } else {
    h5.style.display = "block";
    clickButton.setAttribute("disabled", true);
  }
});
