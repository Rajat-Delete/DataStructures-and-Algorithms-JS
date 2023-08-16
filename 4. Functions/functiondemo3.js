function add(x,y){//here x and y are parameters
    let c = x+y;
    return c;
}

let a=10;
let b=20;
let result = add(a,b); // here a and b are arguments
console.log(result);

/*
here we are passing add(9,1) inside console.log
so first of all add(9,1) will be processed 
so add(9,1) will return 10
and then once we have the values processed as 10, then
console.log will print 10
*/

console.log(add(9,1));
console.log("add(9,1)");

//If we pass three arguments also then the JS function will take only two.
console.log(add(10,20,30));