function getSum(num1, num2) {
  //   console.log(num1 + num2);
  return num1 + num2;
}
function getDiff(num1, num2) {
  //   console.log(num1 - num2);
  return num1 - num2;
}

function umumi(num1, num2) {
  let sum = getSum(num1, num2);
  let diff = getDiff(num1, num2);
  console.log(sum * diff);
}
umumi(6, 7);
