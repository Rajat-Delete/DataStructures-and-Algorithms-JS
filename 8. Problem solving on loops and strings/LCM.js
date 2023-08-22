//Given two numbers , find out the LCM of both.

/*

So there exists a property in Math that a*b = GCD*LCM
so We can calculate LCM  = (a*b)/GCD

*/

function gcd(a,b){
    while( a%b != 0){
        let r = a %b;
        a=b;
        b=r;
    }
    return b;

}

function LCM(a,b){
    return (a*b)/gcd(a,b);
}

console.log(LCM(9,12));
