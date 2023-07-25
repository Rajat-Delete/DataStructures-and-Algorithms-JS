const prompt = require('prompt-sync')({sigint : true});
let x = prompt("Enter a Number:");

if(x % 2 == 0){
    console.log("Number is Even");
}else if(x % 2 == 1){
    console.log("Number is Odd");
}else{
    console.log("Invalid Number");
}

