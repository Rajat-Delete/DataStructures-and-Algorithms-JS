let x = {name : "Sanket" , age: 24};
let y  = {
    name : "Rajat",
    age : 24
}

console.log(x["name"]);
console.log(y.name);

//are objects mutuable -> yes

y.name = "lakshay";
console.log(y);


//how to add a new property to an already created object
x.marks = 100; // If marks are present then value will be updated else key value pair will be added.
x["company"] = "Google";


console.log(x);

//delete a key value pair?
//we can use delete operator along with object.key

delete x.name;
console.log(x);