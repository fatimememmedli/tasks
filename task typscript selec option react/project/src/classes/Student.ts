import Human from "./Human";
interface IStudent<Type> {
  groupName: string;
  hobbies: Type;
  GPA: number;
  hasPassed(): boolean;
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
