//check whether the dimensions are of a valid traingle
const prompt = require('prompt-sync')({sigint : true});
let a = parseInt(prompt("Enter a :"));
let b = parseInt(prompt("Enter b :"));
let c = parseInt(prompt("Enter c :"));

if((a+b > c) && (b+c > a) && (c+a > b)){
    console.log("Yes the dimesions are of a valid traingle");
}else{
    console.log("The dimesions are not of a valid traingle");
}