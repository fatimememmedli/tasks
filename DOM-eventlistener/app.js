let myButton = document.querySelector("#myButton");
let myInput = document.querySelector("#myInput");
let body = document.querySelector("body");
let inputWidth = document.querySelector("#width");
let inputHeight = document.querySelector("#height");

let arr = [];
myButton.addEventListener("click", getEvent);
function getEvent() {
  console.log(myInput.value);
  myInput.value = "";
  let obj = {};
  obj.surname = myInput.value;
  arr.push(obj);
  console.log(arr);
}

myButton.addEventListener("click", getEvent);
function getEvent() {
  body.style.backgroundColor = myInput.value;
  let div = document.createElement("div");

  div.style.width = inputWidth.value;
  div.style.height = inputHeight.value;
  div.style.border = "1px solid black";
  body.append(div);
}
