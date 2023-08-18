/*

Print the below pattern
n=4
   *
  **
 ***
****
*/

function PrintPattern(n){

    //outer loop task
    for(let row=1;row<=n;row++){
        //inner loop task
        let str = '';
        //so this will print the space for n-row times
        for(let space=0;space<n-row;space++){   
            str = str + " ";
        }
        //this for loop will print the stars as per the row number
        for(let col=1;col <=row;col++){
            str= str + "*";
        }
        console.log(str);
    }

}

PrintPattern(6);