//write a function that takes a string as input and returns the number of words in the sentence that starts with a vowel.

function calculateVowels(x){
const array = x.split(" ");
let count =0;
for(let i=0;i<array.length;i++){
    if(array[i][0] == "A" ||array[i][0] == "a" || array[i][0] == "e" || array[i][0] == "E" || array[i][0] == "I" ||array[i][0] == "i"||array[i][0] == "o"||array[i][0] == "O"||array[i][0] == "U"||array[i][0] == "u"){
        count++;
    }
}
return count;
}

console.log(calculateVowels("I am working for Myself"));