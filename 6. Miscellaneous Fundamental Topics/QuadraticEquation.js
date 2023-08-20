
function quadraticroots(a , b , c){
    let sqrt = Math.sqrt(b*b - 4*a*c);
    let root1 = (( -b + sqrt)/2*a);
    console.log(( -b - sqrt))
    let root2 = (( -b - sqrt)/2*a);
    console.log("Roots are ",root1 , root2);
}

quadraticroots(1,7,10);