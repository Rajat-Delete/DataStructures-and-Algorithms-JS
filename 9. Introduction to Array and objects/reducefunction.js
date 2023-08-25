/*

reduce is a higher order function available for arrays.
reduce also takes a function F as a argument, what reduce does is , it
one by one goes to every element of the array.
Say the current element is a[i]
Reduce will pass this element to the function f and accumulate the result of
further function calls with this particular result.


*/

let arr = [1,2,3,4,5,6];
function sum(x,currentValue){
    return x+currentValue;
}

const result = arr.reduce(sum);
console.log(result);



//consider the scenario of flipkart, we have some 3-4 items in the cart
//we have to calculate the total price of all the items in the cart

let cart = [{name : "Iphone14", price:140000}, {name: "Cover",price:500},{name : "charger",price:4000}];

function addPrices(prevValue,Curr){
    console.log(prevValue,Curr);
    let newPrice = prevValue.price + Curr.price;
    console.log(newPrice);
    return {price : newPrice};
}

let totalPrice = cart.reduce(addPrices);
console.log(totalPrice);