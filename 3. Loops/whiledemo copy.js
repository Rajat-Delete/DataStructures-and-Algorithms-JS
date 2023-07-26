const prompt = require('prompt-sync')({sigint : true});
let endNumber = parseInt(prompt("Enter the Number:"));
let i = 1; 

while(i <= endNumber){
    console.log("Value of i:",i);
    i++;
}

console.log("End of the Program");