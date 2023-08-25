let x = {
    name : "John",
    company : "Microsoft",
    salary : 4000000,
    age : 24,
    city : "Bengaluru",
    team : "Azure Storage",
    designation : "Software Engineer"
}

let keysofX = Object.keys(x); // it returns all the keys of x
console.log(keysofX);

let valuesofx = Object.values(x); // it returns all the values of x
console.log(valuesofx);

let entriesofX = Object.entries(x);//it will return array of arrays of key value pair
console.log(entriesofX);
