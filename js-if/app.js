let productName=prompt("Enter Product Name:");
let productCostPrice=Number(prompt("enter cost price"));
let productSalePrice=Number(prompt("Enter Sale Price"));
if(productSalePrice > productCostPrice){
    let info=confirm(`Does ${productName} has discount percentage?`)
    if(info==true){
    let productDiscountPercentage=Number(prompt("Enter Discount Percentage"));
        if(productDiscountPercentage<100){
            productSalePrice = productSalePrice- productSalePrice*productDiscountPercentage/100;
            let profit=productSalePrice-productCostPrice;
            alert(`your profit ${profit}`)
        }
        else{
            alert("profit must small 100")

        }
    
    }
    else{
    profit=productSalePrice-productCostPrice;
    alert(`your profit ${profit}`);
    }

}
else{
    alert("Cost price must bigger sale price")
}




   