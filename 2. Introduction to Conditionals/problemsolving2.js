const prompt = require('prompt-sync')({sigint : true});
let a = parseInt(prompt("Enter a :"));
let b = parseInt(prompt("Enter b :"));
let c = parseInt(prompt("Enter c :"));

console.log(a , typeof a);

if(a <= b && a <= c){
    console.log("a is smallest");
}else if(b <= a && b <= c){
    console.log("b is smallest");
}else{
    console.log("c is smallest");
}