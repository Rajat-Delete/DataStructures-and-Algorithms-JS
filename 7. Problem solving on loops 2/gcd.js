
function gcd(a,b){
    let ans = 1;
    for(let x = 2;x<=Math.min(a,b);x++){
        if(a%x == 0 && b%x == 0){
            ans = x;
        }
    }
    return ans;
}

console.log(gcd(12,11));