//Upper Part
//In every ith row we have to first print n-i spaces
//Post that we have to start from row number to n followed by spaces



//Lower Part
// n -1 rows
//in ith row we have to print n-i-1 spaces
//we have to start printing numbers from n-i

function NumberDiamondPattern(n){
    upperPart(n);
    lowerPart(n);
}


function upperPart(n){
    for(let i=1;i<=n;i++){
        let str = "";

        for(let spaces = 1;spaces < i;spaces++){
        str = str+ " ";
        }

        for(let number = i;number <= n;number++){
            str = str + number+" ";
        }
        console.log(str);
        }
}

function lowerPart(n){
    for(let  i=1;i < n;i++){
        let str = "";
        for(let spaces =1;spaces < n-i;spaces++){
            //console.log("spaces",spaces);
            str = str + " ";
        }
        for(let number = n-i;number <=n;number++){
            //console.log("number",number);
            str= str + number + " ";
            //console.log("str after",str);
        }
        console.log(str);
    }
}

NumberDiamondPattern(8);