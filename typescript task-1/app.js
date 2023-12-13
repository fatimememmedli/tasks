// let num = <HTMLElement>document.querySelector(".number")!;
// let incBtn = document.querySelector(".inc");
// let decBtn = document.querySelector(".dec");
// let count: number = 0;
// let body = document.querySelector("body");
// let incBtn = document.createElement("button");
// let decBtn = document.createElement("button");
// let h1 = document.createElement("h1");
// h1.className = "number";
// incBtn.textContent = "increment";
// decBtn.textContent = "decrement";
// incBtn.className = "inc";
// decBtn.className = "dec";
// body?.appendChild(incBtn);
// body?.appendChild(h1);
// body?.appendChild(decBtn);
// incBtn?.addEventListener("click", function (): void {
//   count += 1;
//   h1.textContent = String(count);
// });
// decBtn?.addEventListener("click", function (): void {
//   count -= 1;
//   h1.textContent = String(count);
// });
// type Nametype = string
// type Surnametype = string
// type agetype = number
// type idtype = number|string
// type birthDatetype=Date
// type hobbiestype=string[]
// type person = {
//    name : string,
//    surname:string
//    age:number,
//    id:number,
//    birthDate:Date,
//    hobbies: string[
//    ]
// }
// let function createPerson (name:Nametype, surname:Surnametype, age:agetype, id:idtype, birthDate: birthDatetype, hobbies:hobbiestype) {
// return
// }
// task
// enum ShapeKind {
//   circle,
//   square,
// }
// interface Shape {
//   kind: ShapeKind;
//   radius?: number;
//   sideLength?: number;
//   getArea(a: number): number;
// }
// class Circle implements Shape {
//   kind: ShapeKind = ShapeKind.circle;
//   radius?: number;
//   constructor(radius: number) {
//     this.radius = radius;
//   }
//   getArea(a: number): number {
//     return Math.PI * this.radius * this.radius * a;
//   }
// }
// class Square implements Shape {
//   kind: ShapeKind = ShapeKind.square;
//   sideLength: number;
//   constructor(sideLength: number) {
//     this.sideLength = sideLength;
//   }
//   getArea(value: number): number {
//     return this.sideLength * this.sideLength * value;
//   }
// }
// const circle = new Circle(2);
// const square = new Square(4);
// console.log(circle.getArea(1));
// console.log(square.getArea(1));
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["circle"] = 0] = "circle";
    ShapeKind[ShapeKind["square"] = 1] = "square";
})(ShapeKind || (ShapeKind = {}));
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.kind = ShapeKind.circle;
        this.radius = radius;
    }
    Circle.prototype.getArea = function (a) {
        return Math.PI * this.radius * this.radius * a;
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square(sideLength) {
        this.kind = ShapeKind.square;
        this.sideLength = sideLength;
    }
    Square.prototype.getArea = function (a) {
        return this.sideLength * this.sideLength * a;
    };
    return Square;
}());
var circle = new Circle(2);
console.log(circle.getArea(1));
var square = new Square(5);
console.log(square.getArea(1));
