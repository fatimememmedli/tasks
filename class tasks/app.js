// let str = "HELLO_everybody";
// console.log(str.replace("_", "-"));

// Task-2
// let str = "HELLO";
// function kicikHerf(str) {
//   return str.toLowerCase();
// }
// console.log(kicikHerf(str));

// Task 3
// let str = "   hello   ";
// function toArray(str) {
//   let arr = [];
//   newWord = str.trim();
//   for (let i = 0; i < newWord.length; i++) {
//     arr.push(newWord[i]);
//   }
//   return arr;
// }
// console.log(toArray(str));

// // Task 4
// Bir function yazın. ("Robin Singh from USA")) input olaraq belə bir string qəbul edərsə, output-a "robin-singh-from-usa" string-ini verməlidir. Arrow function yazmalısınız.

// let str = "Robin Singh from USA";
// function dash(str) {
//   let newWord = str.toLowerCase();
//   return newWord.replaceAll(" ", "-");
// }
// console.log(dash(str));

// TAsk 5 ???
// Bir function yazın, input olaraq ('js string exercises') qəbul edərsə output-da "Js string exercises" string-ini qaytarmalıdır. Capitalize etməlidir. Regular function yazmalısınız.

// let str = "js string exercises";
// function CapitalizeLetter(str) {

// }
// console.log(CapitalizeLetter(str));

// // Task 6
// 6. Daxil edilmiş string-dəki böyük hərflərin sayını return edən bir anonym function yazın.

// let str = "HellO";

// (function (str) {
//   count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i].toUpperCase()) {
//       count++;
//     }
//   }
//   console.log(count);
// })(str);

// Task 7
// 7. Bir function yazın, parametr olaraq bir söz və bir cümlə qəbul edir. Əgər həmin söz cümlədə tapılarsa bir object return edir. Object-də isFound və index dəyərləri olur. Əgər tapılarsa həmin söz isFound true, index isə həmin sözün indeksi olur. Əgər tapılmasa isə isFound false, index isə -1 olmalıdır.

// let str = "hello";
// let sentence = "hello everybody";
// let obj = {};

// function search(str, sentence) {
//   if (sentence.includes(str)) {
//     obj.isFound = true;
//     obj.index = sentence.indexOf(str);
//     return obj;
//   } else {
//     obj.isFound = false;
//     obj.index = -1;
//     return obj;
//   }
// }
// console.log(search(str, sentence));

// Task 8
// Bir Human Function Constructor yaradırsınız. Human-ın name, surname, birthYear, birthCity propert-ləri və getFullName adında bir metodu var, hansı ki fullname-ini qaytarmalıdır (name və surname-i). Bu function constructor-dan istifadə edib 4-5 human yaradın və bir people array-i yaradıb ora yığın. Daha sonra searchHuman adında bir function yazın və bu function sizdən bir search string-i və bir dənə isə haradan axtaracağı array-i qəbul edir. search string-inin dəyərini prompt-dan götürəcəksiniz. Search fullname-ə görə olmalıdır. Yəni mən yalnız name-i yazıb və ya yalnız surname-i yazıb axtarsan ona uyğun data-larımı qaytarmalıdır function. Eyni zaman-da həm name həm də surname-i yazıb axtarsam yenə tapıb qaytarmalıdır. searchByFullName function-ı yaratmalısınız və geriyə kimləri tapdısa, həmin human object-lərini bir array-ə yığıb onu return etməlisiniz.
let People = [];
function human(name, surname, birthYear, birthCity) {
  this.name = name;
  this.surname = surname;
  this.birthYear = birthYear;
  this.birthCity = birthCity;
  this.getFullName = function () {
    return this.name, this.surname;
  };
}
let human1 = new human("fatime");
