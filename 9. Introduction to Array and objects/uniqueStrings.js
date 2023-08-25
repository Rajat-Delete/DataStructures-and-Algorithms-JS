
function uniqueStrings(arr){
    let obj = {};
    for(let value of arr){
        if(obj[value]){

        }else{
            obj[value] = true;
        }
    }
    console.log(Object.keys(obj));

}

uniqueStrings(['abc','hello','c','d','abc','c','d']);