/*
For a given number n , print the following pattern:

n=3

  *
 ***
*****
 ***
  *

*/

/*
First print the upper 3 layers
 so for that we have to print n-row spaces in every row
 we have to print 2*row -1 stars in every row

*/


function PrintPattern(n){

//Outer loop to return n times
    for(let row=1;row<=n;row++){
        let str="";
        //first task is to print n-row spaces
        for(let spaces=1;spaces<=n-row;spaces++){
            str= str+" ";
        }
        //second task is to print 2*row -1 stars
        for(let stars=1;stars<=(2*row)-1;stars++){
            str = str + "*";
        }
        console.log(str);
    }
    //loop for lower half

    /*
    logic : 
    for row 1 we have to print n stars and 1 space
    for row 2 we have to 
    */
    for(let row=1;row<n;row++){
        let str = "";

        //printing the spaces
        for(let spaces=1;spaces<=row;spaces++){
            str = str + " ";
        }

        //printing the stars
        for(let stars = 1;stars <= (2*(n-row) - 1);stars++){
            str = str + "*";
        }
        console.log(str);
    }

}

PrintPattern(5);