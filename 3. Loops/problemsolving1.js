//Write a program to find the sum of number from 1 to n
const prompt = require('prompt-sync')({sigint : true});
let endNumber = parseInt(prompt("Enter the Number:"));
let i =1;
let sum=0;
//console.log(sum , typeof sum);

while(i <= endNumber){
    sum = sum+i;
    i++;
}
console.log("Sum is:",sum);