/*

Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

*/

let arr = [1,1,0,1,1,1];

function findmaxones(arr){
    let max = 0;
    let curr = 0;
    for(let i=0;i<arr.length;i++){
       if(arr[i] == 1){
        curr++;
       }else{
        max = Math.max(max,curr);
        curr =0;
       }
    }
    return Math.max(max,curr);
    
    
}

console.log(findmaxones(arr));