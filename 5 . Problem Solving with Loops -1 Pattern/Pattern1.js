/*

Print the below pattern
n=3
***
***
***

*/

function PrintPattern(n){
    //write a loop to repeat a task for n rows
    for(let row=1;row <= n ;row++){

        //task
        //the task is to concatenate '*' n times
        let str ='';
        for(let col =1;col <= n;col++){
            str += '*';
        }
        console.log(str);
    }

}

PrintPattern(6);