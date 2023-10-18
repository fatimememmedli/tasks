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
  static compareAge(human1, human2) {
    if (human1.age > human2.age) {
      return human1;
    } else {
      return human2;
    }
  }
  static compareSameBirthCity(human1, human2) {
    if (human1.birthPlace == human2.birthPlace) {
      return true;
    } else {
      return false;
    }
  }
}

class User extends Human {
  password = this.birthPlace.slice(0, 2).toUpperCase() + this.birthYear;
  isLogged = false;
  constructor(
    name,
    surname,
    birthYear,
    birthPlace,
    username,
    email,
    password,
    isLogged
  ) {
    super(name, surname, birthYear, birthPlace);
    this.username = username;
    this.email = email;
    this.password = password;
  }
  login(username, password) {
    if (username == this.username && password == this.password) {
      alert(`welcome back ${this.name} ${this.surname}`);
      this.isLogged = true;
    } else {
      alert("incorrect username or password");
    }
  }
  logOut() {
    if (this.isLogged == true) {
      alert("log out successfully");
      this.isLogged = false;
    } else {
      alert("you didn't login");
    }
  }
}
let user1 = new User(
  "fatime",
  "memmedli",
  2004,
  "baku",
  "fatimememmedli",

  "fa@gmail"
);

// console.log(user1);

let human1 = new Human(
  "eli",
  "memmedli",
  2004,
  "baku",
  "fatimememmedli",
  "fa@gmail",
  "salam123"
);
let human2 = new Human(
  "veli",
  "memmedli",
  2009,
  "baku",
  "fatimememmedli",
  "fa@gmail",
  "salam123"
);
console.log(human1.age);
console.log(Human.compareAge(human1, human2));
console.log(user1.login("fatimememmedli", "BA2004"));
console.log(user1.logOut());
console.log(Human.compareSameBirthCity(human1, human2));
