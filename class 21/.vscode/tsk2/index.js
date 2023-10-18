class Human {
  #birthYear;
  constructor(name, surname, birthYear, birthPlace) {
    this.name = name;
    this.surname = surname;
    this.#birthYear = birthYear;
    this.birthPlace = birthPlace;
  }
  getFullName() {
    console.log(this.name, this.surname);
  }
  getAge() {
    const d = new Date();
    return d.getFullYear() - this.#birthYear;
  }
  get age() {
    return this.getAge();
  }
  get fullName() {
    return this.getFullName();
  }
}

class User extends Human {
  password = this.birthPlace.slice(0, 2).toUpperCase() + this.birthYear;
  constructor(name, surname, birthYear, birthPlace, username, email, password) {
    super(name, surname, birthYear, birthPlace);
    this.username = username;
    this.password = password;
  }
  login(username, password) {
    if (username == this.username && password == this.password) {
      alert(`welcome back ${this.fullName}`);
    } else {
      alert("incorrect");
    }
  }
}
let user1 = new User(
  "fatime",
  "memmedli",
  2004,
  "baku",
  "fatimememmedli",
  "salam123"
);
console.log(user1.login("fatimememmedli", "salam123"));
