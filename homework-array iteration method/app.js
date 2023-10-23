// 33. İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan 	ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya 	yazın. Məsələn - [13,67,54]

let arr = [
  {
    name: "fatime",
    age: 19,
  },
  {
    name: "arzu",
    age: 25,
  },
  {
    name: "ayna",
    age: 32,
  },
  {
    name: "eli",
    age: 21,
  },
];
let arr1 = [];
let azyas = arr[0].age;
let coxyas = arr[0].age;
let result = arr.forEach((elem) => {
  if (elem.age < azyas) {
    azyas = elem.age;
  }
  if (elem.age > coxyas) {
    coxyas = elem.age;
  }
});
arr1 = [azyas, coxyas, coxyas - azyas];

console.log(arr1);

// 34. N faktorialı hesaplayan funksiya yazın.
// let fac = 1;
// function factorial(n) {
//   for (let i = n; i > 0; i--) {
//     fac *= i;
//   }
//   return fac;
// }
// console.log(factorial(5));

// const input = [
//     ["a", "b", "c"],
//     ["c", "d", "f"],
//     ["d", "f", "g"],
//       ];

String.prototype.myStringMethod = function () {
  return this[0];
};
let str = "salam";
console.log(str.myStringMethod());

String.prototype.MyLenght;
