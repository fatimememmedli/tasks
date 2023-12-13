// enum EngineType {
//   dohc = "dohc",
//   turbo = "turbo",
// }

// enum VehicleType {
//   car,
//   motorcycle,
// }
// type FuelCapacityType = 30 | 40 | 50 | 70 | 100;
// interface IVehicle<T> {
//   brandName: string;
//   modelName: string;
//   year: number;
//   fuelCapacity: FuelCapacityType;
//   currentFuel: T;
//   millage: number;
//   fuelFor1Km: number;
//   engine: EngineType;
//   vahicleType: VehicleType;
//   getInfo(): void;
//   drive(km: number): T;
// }

// class Car implements IVehicle<number> {
//   brandName: string;
//   modelName: string;
//   year: number;
//   fuelCapacity: FuelCapacityType;
//   currentFuel: number;
//   millage: number;
//   fuelFor1Km: number;
//   engine: EngineType;
//   vahicleType: VehicleType;

//   constructor(
//     brandName: string,
//     modelName: string,
//     year: number,
//     fuelCapacity: FuelCapacityType,
//     currentFuel: number,
//     millage: number,
//     fuelFor1Km: number,
//     engine: EngineType,
//     vehicleType: VehicleType
//   ) {
//     (this.brandName = brandName), (this.modelName = modelName);
//     this.year = year;
//     this.fuelCapacity = fuelCapacity;
//     this.currentFuel = currentFuel;
//     this.millage = millage;
//     this.fuelFor1Km = fuelFor1Km;
//     this.engine = engine;
//     this.vahicleType = vehicleType;
//   }
//   getInfo(): void {
//     let obj = {
//       brandName: this.brandName,
//       modelName: this.modelName,
//       year: this.year,
//       fuelCapacity: this.fuelCapacity,
//       currentFuel: this.currentFuel,
//       millage: this.millage,
//       fuelFor1Km: this.fuelFor1Km,
//       engine: this.engine,
//     };
//     console.log(obj);
//   }
//   drive(km: number): number {
//     let fuelConsumed = km * this.fuelFor1Km;
//     this.currentFuel -= fuelConsumed;
//     return this.currentFuel;
//   }
// }
// // class Motorcycle implements Vehicle {
// //   vahicleType: VehicleType = VehicleType.motorcycle;
// //   constructor() {}
// // }

// class Motorcycle implements IVehicle<number> {
//   brandName: string;
//   modelName: string;
//   year: number;
//   fuelCapacity: FuelCapacityType;
//   currentFuel: number;
//   millage: number;
//   fuelFor1Km: number;
//   engine: EngineType;
//   vahicleType: VehicleType;

//   constructor(
//     brandName: string,
//     modelName: string,
//     year: number,
//     fuelCapacity: FuelCapacityType,
//     currentFuel: number,
//     millage: number,
//     fuelFor1Km: number,
//     engine: EngineType,
//     vehicleType: VehicleType
//   ) {
//     (this.brandName = brandName), (this.modelName = modelName);
//     this.year = year;
//     this.fuelCapacity = fuelCapacity;
//     this.currentFuel = currentFuel;
//     this.millage = millage;
//     this.fuelFor1Km = fuelFor1Km;
//     this.engine = engine;
//     this.vahicleType = vehicleType;
//   }
//   getInfo(): void {
//     let obj = {
//       brandName: this.brandName,
//       modelName: this.modelName,
//       year: this.year,
//       fuelCapacity: this.fuelCapacity,
//       currentFuel: this.currentFuel,
//       millage: this.millage,
//       fuelFor1Km: this.fuelFor1Km,
//       engine: this.engine,
//     };
//     console.log(obj);
//   }
//   drive(km: number): number {
//     let fuelConsumed = km * this.fuelFor1Km;
//     this.currentFuel -= fuelConsumed;
//     return this.currentFuel;
//   }
// }

// let car1 = new Car(
//   "asdad",
//   "asdasda",
//   2000,
//   50,
//   150,
//   20,
//   20,
//   EngineType.dohc,
//   VehicleType.car
// );
// let motor1 = new Car(
//   "asdad",
//   "asdasda",
//   2000,
//   50,
//   150,
//   20,
//   20,
//   EngineType.dohc,
//   VehicleType.car
// );
// console.log(car1.getInfo());
// console.log(car1.drive(1));
// console.log(motor1.getInfo());
// console.log(motor1.drive(2));

interface IAnimal {
  name: string;
  age: number;
  getInfo(): void;
}

enum livePlaceType {
  river = "river",
  ocean = "ocean",
  sea = "sea",
}
interface IBird {
  fly(): boolean;
  wingColor: string;
}
interface Ikill<T> {
  kill: T;
}
interface IFish extends Ikill<string> {
  swim(): boolean;
  livePlace: livePlaceType;
  kill: string;
}

abstract class Animal implements IAnimal {
  readonly name: string;
  readonly age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getInfo(): void {
    console.log(this.name, "age is ", this.age);
  }
}
class Bird extends Animal implements IBird {
  wingColor: string;
  constructor(name: string, age: number, wingColor: string) {
    super(name, age);

    this.wingColor = wingColor;
  }
  fly(): boolean {
    return true;
  }
}
// class Fish extends Animal implements IFish<string> {

class Fish extends Animal implements IFish {
  name: string;
  age: number;
  constructor(name: string, age: number, livePlace: string, kill: string) {
    super(name, age);
    this.name = name;
    this.age = age;
  }
  swim(): boolean {
    return true;
  }
}

// }
let bird1 = new Bird("qus", 1, "red");
bird1.getInfo();
// let fish1 = new Fish();
