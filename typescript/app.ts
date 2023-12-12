let num: number = 1;
console.log(num);

let word: string = "salam";
console.log(word);

word = `${num}`;
console.log(word);
let obj: {
  name: string;
  id: number;
} = {
  name: "fatime",
  id: 20,
};
console.log(obj);

let obj2: object = {
  name: "salam",
  id: 20,
};
console.log(obj2);

let arr1: string[] = ["a", "b", "c"];
console.log(arr1);
let arr: [string, number, boolean];
arr = ["salam", 20, false];
let arr3: [string, number, boolean?];
arr3 = ["hello", 5];
console.log(arr3);
let result: any;
result = "salam";
console.log(result);

result = true;
console.log(result);
function SayHello(): void {
  console.log("first");
}
console.log(SayHello());
let result2: string | number;
result2 = "salam";
result2 = 5;
console.log(result2);
