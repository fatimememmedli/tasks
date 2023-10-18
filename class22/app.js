class Canli {
  constructor(name, place, age) {
    this.name = name;
    this.place = place;
    this.age = age;
  }
  NameAge() {
    console.log(this.name, this.age);
  }
  get Yage() {
    const d = new Date();
    return d.getFullYear() - this.age;
  }
}

class Insanlar extends Canli {
  #finkod;
  constructor(name, place, age, finkod) {
    super(name, place, age);
    this.#finkod = finkod;
  }
}
class YadPlanetli extends Canli {
  #planet;
  constructor(name, place, age, planet) {
    super(name, place, age);
    this.#planet = planet;
  }
}
class Heyvanlar extends Canli {
  #reng;

  constructor(name, place, age, reng) {
    super(name, place, age);
    this.#reng = reng;
  }
}
let canli1 = new Insanlar("fjjjjs", "fdsjf", 24, "xxxx");
console.log(canli1.Yage);
