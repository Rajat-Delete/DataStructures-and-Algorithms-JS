/*
For a given number n , print the following butterfly pattern:

n=5

*   *
** **
*****
** **
*   *

*/


/*

Printing this part first

*   *
** **

task is that it will be having ((n-1)/2) rows everytime
in row 1 there is one star before space and one star after the space
in row 2 there are two star before space and two star after the space

*/



function upperhalf(n){
    //outer loop for ((n-1)/2) times
    for(let row=1;row<=((n-1)/2);row++){
        let str ="";
        //printing the star before space
        for(let star=1;star<=row;star++){
            str = str+"*";
        }

        //printing the remaining number of spaces
        for(let space=1;space<=(n - 2*row);space++){
            str = str + " ";
        }
        
        //printing the star after space
        for(let star=1;star<=row;star++){
            str = str+"*";
        }
        console.log(str);
    }

}


function middlehalf(n){
    let str = "";
    //printing the star as n
    for(let star = 1;star<=n;star++){
        str = str+"*";
    }
    console.log(str);
}

function lowerhalf(n){
    
    //first task is to print ((n-1)/2) rows

    for(let row=1;row<=((n-1)/2);row++){
        let str= "";

        //first we have to print ((n-1)/2) star before and after spaces
        for(let star=row;star<=((n-1)/2);star++){
            //console.log("star",star,"row",row);
            str=str+"*";
        }

        //printing the spaces
        for(let spaces=1;spaces<=(2*row -1);spaces++){
            str=str+" ";
        }
        

        //printing the space after stars
        for(let star=row;star<=((n-1)/2);star++){
            str=str+"*";
        }
        console.log(str);
    }

}

upperhalf(9);
middlehalf(9);
lowerhalf(9);