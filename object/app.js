let employees = [];
let emp1 = {
  fullname: "eli memmedov",
  salary: 4000,
  department: "IT",
  age: 61,
  isMarried: true,
  isMale: true,
};
let emp2 = {
  fullname: "arzu memmedova",
  salary: 5000,
  department: "HR",
  age: 20,
  isMarried: true,
  isMale: false,
};

let emp3 = {
  fullname: "ehmed memmedov",
  salary: 900,
  department: "Marketing",
  age: 19,
  isMarried: false,
  isMale: true,
};
employees.push(emp1, emp2, emp3);

// task-1
// let num = 0;
// for (i = 0; i < employees.length; i++) {
//   num += employees[i].salary;
// }
// console.log(num / employees.length);

// task2
// let num = 0;
// for (i = 0; i < employees.length; i++) {
//   if (employees[i].isMarried == true) num++;
// }
// console.log(num);

// task3
// for (i = 0; i < employees.length; i++) {
//   if (employees[i].age > 60) {
//     employees.splice(i, 1);
//     console.log(employees);
//   }
// }

// task4
// for (i = 0; i < employees.length; i++) {
//   if (employees[i].isMarried == true) {
//     alert(employees[i].fullname);
//   }
// }

// task5
// for (i = 0; i < employees.length; i++) {
//   if (employees[i].salary < 1000) {
//     employees[i].salary += 500;
//     console.log(employees[i]);
//   }
// }

// task6
// let newArr = [];
// for (i = 0; i < employees.length; i++) {
//   if (employees[i].department == "IT") {
//     newArr.push(employees[i]);
//     console.log(newArr);
//   }
// }

// task7
// let max = 0;
// for (i = 0; i < employees.length; i++) {
//   if (employees[i].salary > max) {
//     max = employees[i].salary;
//   }
//   console.log(employees.filter);
// }

// task8
let min = 0;
for (i = 0; i < employees.length; i++) {
  if (employees[i].salary < min) {
    min = employees[i].salary;
  }
}
