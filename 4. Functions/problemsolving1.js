//check which numbers are even or odd between 1-50

function isEvenOrOdd(number){
    if( number % 2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
}

for(let i=0 ;i<=50;i++){
    console.log(i,"is",isEvenOrOdd(i));
}