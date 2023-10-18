let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
let max = arr[0];
let min = arr[0];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "number" && arr[i] > max) {
    max = arr[i];
  }
  if (typeof arr[i] == "number" && arr[i] < min) {
    min = arr[i];
  }
  if ((typeof arr[i] != "number" && arr[i] != max) || arr[i] != min) {
    sum = sum + arr[i];
  } else {
    continue;
  }
}
console.log(sum);
