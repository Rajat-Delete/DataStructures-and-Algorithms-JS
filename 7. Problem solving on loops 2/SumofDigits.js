//calculate the sum of digits of numbers x

function calculateSum(number){
    let sum = 0;
    let r =0;
    while(number>0){//4>0
        r= number%10//4
        number = Math.floor(number/10);//0
        sum = sum+r;//14
    }
    return sum;
}

console.log(calculateSum(4538));