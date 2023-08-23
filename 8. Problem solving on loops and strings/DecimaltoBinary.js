//Given a number n, print it's binary format.


function Decimal_to_Binary(num){
    let binary = "";
    while(num>0){//1>0
        let lastbit = 0;
        if(num%2 == 0){
            lastbit = 0;
            binary = lastbit+binary;//01
        }else{
            lastbit = 1;
            binary = lastbit+binary;//101
        }
        num = Math.floor(num/2);//1
    }
    return binary;
}

console.log(Decimal_to_Binary(6));