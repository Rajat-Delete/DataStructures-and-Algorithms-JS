
//function to check whether a number is prime or not
//if prime then return true else false.
function isPrime(x){
    for(let i=2;i<x-1;i++){
        if(x%i==0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(5));
console.log(isPrime(9));
console.log(isPrime(13));
console.log(isPrime(49));
console.log(isPrime(98));
console.log(isPrime(101));



