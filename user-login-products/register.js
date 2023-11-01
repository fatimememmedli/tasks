let usernameInp = document.querySelector(".input-username");
let myBtn = document.querySelector(".mybtn");
let emailInp = document.querySelector(".input-email");
let passInp = document.querySelector(".input-pass");
let url = "http://localhost:3000/posts/";

myBtn.addEventListener("click", function () {
  let obj = {};
  obj.username = usernameInp.value;
  obj.email = emailInp.value;
  obj.password = passInp.value;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {})
    .catch();
});
