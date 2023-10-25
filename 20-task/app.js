let inputName = document.querySelector(".input-name");
let inputSurname = document.querySelector(".input-surname");
let inputMale = document.querySelector(".input-male");
let inputFemale = document.querySelector(".input-female");
let form = document.querySelector("#form");
let inputAge = document.querySelector(".input-age");
let inputSubmit = document.querySelector(".input-submit");
let hobbies = document.querySelectorAll(".hobbi");
let cities = document.querySelector(".cities");
let arrStudent = [];
let getGender;

inputSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let arrHobbies = [];
  for (let elem of hobbies) {
    if (elem.checked) {
      arrHobbies.push(elem.name);
    }
  }
  if (inputMale.checked) {
    getGender = "male";
  } else {
    getGender = "female";
  }

  let obj = {
    name: inputName.value,
    surname: inputSurname.value,
    age: inputAge.value,
    gender: getGender,
    hobbi: arrHobbies,
    city: cities.value,
  };
  arrStudent.push(obj);
  console.log(arrStudent);
});
