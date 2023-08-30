/*

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]

*/

//[4,3,2,7,8,2,3,1]
//

function disappearedNumbers(arr){
    let resultlist = [];
    for(let i = 0;i<arr.length;i++){
        let number = Math.abs(arr[i]);
        if(arr[number-1] > 0){
            arr[number-1] *= -1;
        }
        
    }

    for(let j = 0;j<arr.length;j++){
        if(arr[j]>0){
            resultlist.push(j+1);
        }
    }
    console.log(resultlist);
}
let arr = [4,3,2,7,8,2,3,1];

disappearedNumbers(arr);