console.log("abc"=="abc");
let x = "abc"; // String Literal
let y = "abc";

console.log(x == y);

let z = String("abc");
let a = new String("abc");//String Object
console.log(z);

console.log(a == z);
console.log(a == x);
console.log(z == x);

console.log(a === z);
console.log(a === x);
console.log(z === x);
console.log("abc" === new String("abc"));