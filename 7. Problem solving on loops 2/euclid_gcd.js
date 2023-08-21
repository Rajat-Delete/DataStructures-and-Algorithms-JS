
function euclid_gcd(a,b){
    while( a%b != 0){
        let r = a %b;
        a=b;
        b=r;
    }
    return b;

}

console.log(euclid_gcd(8,4));