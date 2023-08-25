/*

Map is a Higher order function available with arrays.
It takes a function refernce as a argument.
It returns an array in which array value is populated by calling function f with original array element as argument

*/

/*
Map Internally Iterates/loop over every element of the given original array
pass that element in the argument function F and then store the returned value 
inside an array.
*/
let arr = [1,2,3,4,5];
function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function isEvenOrOdd(n){
    if(n%2 == 0){
        return "Even";
    }else{
        return "odd";
    }
}

let sqArray = arr.map(square);
console.log(sqArray);

let cubeArray = arr.map(cube);
console.log(cubeArray);

let isEvenOdd = arr.map(isEvenOrOdd);
console.log(isEvenOdd);



/*

If the function that we are passing in map takes two argument then the first argument will be assigned the actual value
second argument will be the accessing index of the value.

*/

let newArr = [5,6,7,8,9];

function print(element,idx){
    return `Value at ${idx} is ${element}`;
}

let newArray = newArr.map(print);
console.log(newArray);

//Implementing custom Mapper

function customMapper(arr, func){
    let finalarr= [];
    for(let i=0;i<arr.length;i++){
        finalarr.push(func(arr[i], i));
    }
    return finalarr;
}

const customArray = customMapper(newArr, print);
console.log(customArray);