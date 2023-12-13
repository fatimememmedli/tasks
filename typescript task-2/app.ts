type UUID = string | number;
type Person<T> = {
  name: string;
  surname: string;
  id: UUID;
  age: number;
  hobbies: T[];
  birthDate: Date;
};
function createPerson<Type>(
  name: string,
  surname: string,
  age: number,
  id: UUID,
  birthDate: Date,
  hobbies: Type[]
): Person<Type> {
  const person: Person<Type> = { name, surname, age, id, birthDate, hobbies };
  return person;
}
const person1 = createPerson(
  "fatime",
  "memmedli",
  19,
  "salkdja",
  new Date("2020-10-10"),
  ["music"]
);
console.log(person1);
