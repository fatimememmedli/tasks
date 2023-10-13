let arr = [3, 7, 8, 10, 25, 4];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0 && arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
