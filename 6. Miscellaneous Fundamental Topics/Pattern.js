//Print the below Pattern

/*

n = 4
 
   1
  121
 12321
1234321

*/

//First observation is to print left side first

/*

observation1 is n-row spaces
observation2 is for a row print numbers from 1 to row no. 

*/


function printpattern(n){
    //loop for number of rows 
    for(let row=1;row<=n;row++){
        let str = "";
        
        //First task is to print the spaces
        for(let spaces=1;spaces<=n-row;spaces++){
            str = str+" ";
        }

        //Second task is to print the number from 1 to rownumber
        for(let number=1;number<=row;number++){
            str=str+number;
        } 
        let rightcounter = row-1;
        if(rightcounter>=1){
            for(let right=rightcounter;right>0;right--){
                str = str+right;
            }
        }
        console.log(str);
    }

}

printpattern(9);