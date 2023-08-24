

function seperate(arr){
    
    let i =0;
    let j = arr.length -1;
    while(i<=j){
        let swap =0;
        if(arr[i] == 1){
            //swap the variables
            swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;

            j--;
        }else if(arr[i]  == 0){
            i++;
        }
    }
    return arr;
}

console.log(seperate([1,0,1,1,1,1,0,0,0,0,1,0]));

//[1,1,0,0,1,0] --> [0,1,0,0,1,1] --> [0,1,0,0,1,1] --> [0,1,0,0,1,1] 
// i         j       i       j           i     j           i   j