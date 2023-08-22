//Given a number n , print it's reversed number

//if n = 12345
//print 54321


function print_reverse(n){

    let reversenumber = 0;

    while(n > 0){//12 > 0
        let remainder = n % 10; //2
        reversenumber = (reversenumber*10)+remainder;//5432
        n = Math.floor(n/10);//1
    }
    console.log("reversenumber",reversenumber);

}

print_reverse(12345);
