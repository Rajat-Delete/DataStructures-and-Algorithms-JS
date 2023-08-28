//Given an array write an Algorithm to reverse the Same array
//Note you shouldnot create a new Array


let arr = [5,9,1,8,2,3,4];

function reverse(arr){
    let i = 0;
    let j = arr.length -1;

    while(i<=j){
        //Swap the elements
        let temp = undefined;
        temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    return arr;
}

console.log(reverse(arr));