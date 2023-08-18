/*
Gor a given number n , print the below pattern

n=5

*****
****
***
**
*

*/


/*
The task of repetition is 

in row 1 we have to print n-1+1 stars
in row 2 we have to print n-2+1 stars

*/


function PrintPattern(n){

    //Outer loop task to repeat the things n times
    for(let row=1;row<=n;row++){
        let str = "";
        //Inner task is to print the number of stars
        for(let stars=1;stars<= n-row+1;stars++){
            str = str + "*";
        }
        console.log(str);
    }
}


PrintPattern(5);