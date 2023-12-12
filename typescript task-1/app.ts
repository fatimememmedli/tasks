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
enum ShapeKind {
  circle,
  square,
}

interface Shape {
  kind: ShapeKind;
  radius?: number;
  sideLength?: number;
  getArea(a: number): number;
}
// const Rectangle = class {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
