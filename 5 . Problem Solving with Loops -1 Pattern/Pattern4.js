/*

Print the below pattern
n=4
   *
  ***
 *****
*******
*/


//Element of repetition
/*
for row 1 we have n-row spaces
for the same row we have 1 space(2*row -1)

for row 2 we have n-row spaces
for row 2 we have 3 spaces(2*row -1)

for row 3 we have n-row spaces
for row 2 we have 5 spaces(2*row -1)
*/

function PrintPattern(n){//5
    for(let row=1;row<=n;row++){//1<5  true
            let str = "";

        //task 1 is to print n - row spaces
        for(let spaces = 1; spaces <= n-row;spaces++){//1<4
            str= str+ " ";
        }

        //task 2 is to print 2*row -1 stars
        for(let stars=1;stars<=(2*row -1);stars++){
            str=str+"*";
        }
        console.log(str);
    }

}

PrintPattern(5);