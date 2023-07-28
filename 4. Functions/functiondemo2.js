//If we don't return anything from function then automatically undefined is returned in JS.
function welcome(name){
    console.log("Hello",name,"Welcome to JS!!");
}

let result = welcome("Rajat");
console.log(result);