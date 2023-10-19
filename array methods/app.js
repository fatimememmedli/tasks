let arr = [
  {
    id: 1,
    name: "asmar",
    age: 19,
    kesr: false,
    hobbies: ["shopping", "restoran", "travel"],
    password: {
      email: "asmar@mail.com",
      pass: "12345",
      memmbers: {
        qardas: "qardas",
      },
    },
  },
  {
    id: 2,
    name: "shanana",
    age: 20,
    kesr: true,
    hobbies: ["kitab", "resm"],
    password: {
      email: "shana@mail.com",
      pass: "123456",
      memmbers: {
        qardas: "qardas",
      },
    },
  },
  {
    id: 3,
    name: "nicat",
    age: 21,
    kesr: false,
    password: {
      email: "nicat@mail.com",
      pass: "1234569",
    },
  },
  {
    id: 4,
    name: "ayan",
    age: 22,
    kesr: true,
    hobbies: ["mahni oxumaq", "mahni qulaq asmaq"],
    password: {
      email: "ayan@mail.com",
      pass: "123456",
      memmbers: {
        qardas: "qardas",
        baci: "baci",
      },
    },
  },
];
arr.forEach((elem) => console.log(elem.name));
arr.forEach((elem) => {
  if (elem.kesr == true) {
    console.log(elem);
  }
});




arr.forEach((elem) => {
  if (elem.password?.memmbers?.baci) {
    console.log(elem);
  }
});



`       `
let sum = 0;
arr.forEach((elem) => {
  sum += elem.age;
});
console.log(sum);
