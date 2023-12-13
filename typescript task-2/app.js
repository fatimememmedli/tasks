function createPerson(name, surname, age, id, birthDate, hobbies) {
    var person = { name: name, surname: surname, age: age, id: id, birthDate: birthDate, hobbies: hobbies };
    return person;
}
var person1 = createPerson("fatime", "memmedli", 19, "salkdja", new Date("2020-10-10"), ["music"]);
console.log(person1);
