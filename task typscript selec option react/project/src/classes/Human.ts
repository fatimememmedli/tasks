interface IHuman {
  name: string;
  surname: string;
  age: number;
  getInfo(): string;
}

export default abstract class Human implements IHuman {
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
    return `${this.name}, ${this.surname}, ${this.age}`;
  }
}
