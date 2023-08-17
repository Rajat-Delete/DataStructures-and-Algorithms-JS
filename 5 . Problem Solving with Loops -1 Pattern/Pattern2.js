/*

Print the below pattern
n=3
*
**
***

*/


function Pattern(n){
    //outer loop task to print the same number of rows
    for(let row=1;row<=n;row++){
        //inner loop to print the same number of * as rows
        let str ='';
        for(let col=1;col<=row;col++){
            str= str + '*';
        }
        console.log(str);
    }


}

Pattern(5);