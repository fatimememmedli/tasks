class Product {
  constructor(
    name,
    costPrice = 20,
    salePrice = 100,
    isDiscounted = false,
    discountPercentage = 0
  ) {
    this.name = name;
    this.costPrice = costPrice;
    this.salePrice = salePrice;
    this.isDiscounted = isDiscounted;
    this.discountPercentage = discountPercentage;
  }
  getProfit() {
    if (this.isDiscounted == false) {
      let profit = this.salePrice - this.costPrice;
      return profit;
    }
  }
}
let product1 = new Product("sdasd", 20, 100, false, 0);
console.log(product1.getProfit());
