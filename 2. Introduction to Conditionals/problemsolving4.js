//check the type of traingle
const prompt = require('prompt-sync')({sigint : true});
let a = parseInt(prompt("Enter a :"));
let b = parseInt(prompt("Enter b :"));
let c = parseInt(prompt("Enter c :"));


if(a == b && b == c && c == a){
    console.log("The Above dimensions are of Equilateral Traingle");
}else if(a == b || b == c || c == a){
        console.log("The Above dimensions are of Isoceles Traingle");
}else if(a !== b && b !== c && c !== a){
    console.log("The Above dimensions are of Scalene Traingle");
}