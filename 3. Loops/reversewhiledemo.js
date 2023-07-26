//print numbers from 20 to 1 using while loop
const prompt = require('prompt-sync')({sigint : true});
let endNumber = parseInt(prompt("Enter the Number:"));


while(endNumber >= 1){
    console.log("Number is:",endNumber);
    endNumber--;
}