//program to check if the number is even or not using functions
let x =10;
let y = 20;
let z= 35;


function isEvenOrOdd(number){
    if( number % 2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
}

console.log("X is",isEvenOrOdd(x));
console.log("Y is",isEvenOrOdd(y));
console.log("Z is",isEvenOrOdd(z));