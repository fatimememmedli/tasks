// let num1 = Number(prompt("ededi daxil edin: "));
// let count = 0;
// function sadeMurekkeb(num) {
//   for (let i = 1; i <= num; i++) {
//     let count = 0;
//     if (num == 1) {
//       return 0;
//     }
//     if (num % i == 0) {
//       count++;
//     }
//   }

//   if (count > 2) {
//     return false;
//   } else {
//     return true;
//   }
// }
// // console.log(sadeMurekkeb(num1));
// let arr = [7, 6, 5, 4, 8];

// function PrimeQuantity(numbers) {
//   for (let i = 0; i < numbers.lenght; i++) {
//     let count = 0;
//     if (sadeMurekkeb(numbers[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(PrimeQuantity(arr));

let car = {
  brand: "hyundai",
  model: "santafe",
  year: 2016,
  mileage: 10500,
  fuelfor1KM: 5,
  fuelCapacity: 15,
  currentFuel: 10,
  increaseFuel: function (Increasefuel) {
    if (Increasefuel + this.currentFuel > this.fuelCapacity) {
      return alert("dasir");
    } else {
      this.currentFuel++;
      return this.currentFuel;
    }
  },
  drive: function (km) {
    if (km <= this.currentFuel / this.fuelfor1KM) {
      this.currentFuel -= this.fuelCapacity;
    }
  },
};

console.log(car.increaseFuel(2));
