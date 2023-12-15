import Human from "./Human";
enum Position {
  muhendis = "muhendis",
}
interface IEmployee<T> {
  salary: number;
  skills: T;
  position: Position;
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
