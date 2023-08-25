//filter function

/*
filter function is also a higher prder function
filter also loops over the array element
there is one special thing about filter ie. the argument function f which we have to pass inside the
filter should always return a boolean otherwise output will be converted to a boolean


filter loops over every element, passed that element in the argument function and then if the output of this 
function call is true , then it stores the original element in a new array otherwise doesnot add the 
element to the array.
*/

function OddOrEven(n){
    //return (n%2 == 0);
    return "undefined";
}

let arr= [1,2,3,4,5,6,7,8,9];
let newArray = arr.filter(OddOrEven);
console.log(newArray);