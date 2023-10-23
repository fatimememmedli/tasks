String.prototype.myCapitalize = function () {
  let letter = this[0].toUpperCase();
  return letter + this.slice(1, this.length);
};
let str = "hello";
console.log(str.myCapitalize());

// Task 5

String.prototype.isBlank = function () {
  if (this.includes(" ") && this.trim() == "") {
    return true;
  } else {
    return false;
  }
};

let str2 = "    ";
console.log(str2.isBlank());

// Task-6

String.prototype.myConcat = function (word) {
  return this + word;
};
let str3 = "hello";
console.log(str3.myConcat("salam"));

// Task -7
String.prototype.myReplace = function (a, b) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == a) {
      this[i] = b;
      return this;
    }
  }
};

let word2 = "hello";
console.log(word2.myReplace("e", "o"));

// task 1 forEach
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};
let arr = [2, 3, 4, 5, 6, 7, 8, 9, 5];
arr.myForEach((elem) => console.log(elem));

// task 2 map
Array.prototype.myMap = function (callback) {
  let mapArr = [];
  for (let i = 0; i < this.length; i++) {
    mapArr.push(this[i]);
  }
  callback(mapArr);
};
let result = arr.myMap((elem) => console.log(elem));

//task 3

let result2 = arr.filter((elem) => elem == 5);
console.log(result2);
