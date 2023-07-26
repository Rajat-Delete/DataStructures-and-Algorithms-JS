//write a program to find even numbers with upper and lower bound.

const prompt = require('prompt-sync')({sigint : true});
let lowerBound = parseInt(prompt("Enter the Lower Number:"));
let upperBound = parseInt(prompt("Enter the Upper Number:"));

for(let i=lowerBound ; i <= upperBound ; i++ ){
    if(i%2 == 0){
        console.log(i);
    }
}