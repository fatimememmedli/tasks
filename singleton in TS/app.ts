interface IHuman {
  name: string;
  surname: string;
  age: number;
  getInfo(): string;
}

abstract class Human implements IHuman {
  private name: string;
  private surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  get FullName() {
    return this.name, this.surname;
  }
  get getName() {
    return this.name;
  }
  get getSurname() {
    return this.surname;
  }
  getInfo(): string {
    let obj = {
      name: this.name,
      surname: this.surname,
      age: this.age,
    };
    return `${this.name}, ${this.surname}, ${this.age}`;
  }
}
enum Position {
  muhendis = "muhendis",
}
interface IEmployee<T> {
  salary: number;
  skills: T;
  position: Position;
}
interface IStudent<Type> {
  groupName: string;
  hobbies: Type;
  GPA: number;
  hasPassed(): boolean;
}
class Employee extends Human implements IEmployee<string> {
  salary: number;
  skills: string;
  position: Position;
  constructor(
    name: string,
    surname: string,
    age: number,
    salary: number,
    skill: string,
    position: Position
  ) {
    super(name, surname, age);
    this.salary = salary;
    this.skills = skill;
    this.position = position;
  }
}
class Student extends Human implements IStudent<string> {
  groupName: string;
  hobbies: string;
  private _GPA: number;
  constructor(
    name: string,
    surname: string,
    age: number,
    groupName: string,
    hobbies: string,
    GPA: number
  ) {
    super(name, surname, age);
    this.groupName = groupName;
    this.hobbies = hobbies;
    if (GPA >= 0 && GPA <= 100) {
      this._GPA = GPA;
    }
  }
  get getGPA() {
    return this._GPA;
  }
  set setGPA(newGPA: number) {
    if (newGPA > 0 && newGPA < 100) {
      this._GPA = newGPA;
    }
  }
  hasPassed(): boolean {
    if (this._GPA < 50 && this._GPA > 0) {
      return false;
    } else {
      return true;
    }
  }
}

const employee = new Employee(
  "asd",
  "asdad",
  20,
  5000,
  "fly",
  Position.muhendis
);
// console.log(employee);
// employee.getInfo();
let form = document.querySelector(".form");
let nameInput = <HTMLInputElement>document.querySelector(".nameInput");
let surnameInput = <HTMLInputElement>document.querySelector(".surnameInput");
let ageInput = <HTMLInputElement>document.querySelector(".ageInput");
let studentOption = <HTMLOptionElement>document.querySelector(".studentOption");
let studentForm = <HTMLFormElement>document.querySelector(".formStudent");
let formEmployee = <HTMLFormElement>document.querySelector(".formEmployee");
let groupNameInp = <HTMLInputElement>document.querySelector(".groupName");
let hobbiesINp = <HTMLInputElement>document.querySelector(".hobbies");
let GPAInp = <HTMLInputElement>document.querySelector(".GPA");
formEmployee.style.display = "none";
studentForm.style.display = "none";
let employeeOption = <HTMLOptionElement>(
  document.querySelector(".employeeOption")
);
let InputName: string = "";
let InputSurname: string = "";
let inputAge: number = 0;
let inputgroup: string = "";
let InputHobbies: string = "";
let InputGpa: number = 0;
form?.addEventListener("submit", function (e) {
  e.preventDefault();
  InputName = nameInput?.value;
  InputSurname = surnameInput?.value;
  inputAge = Number(ageInput?.value);

  console.log("salam");
  if (studentOption?.value == "Student") {
    // console.log("first");
    studentForm.style.display = "block";
    formEmployee.style.display = "none";
    inputgroup = groupNameInp.value;
    InputHobbies = hobbiesINp.value;
    InputGpa = Number(GPAInp.value);
    let student1 = new Student(
      InputName,
      InputSurname,
      inputAge,
      inputgroup,
      InputHobbies,
      InputGpa
    );
    console.log(student1);
  } else if (employeeOption?.value == "Employee") {
    studentForm.style.display = "none";
    formEmployee.style.display = "block";
  }
});
