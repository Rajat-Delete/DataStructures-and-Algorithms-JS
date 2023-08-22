//https://leetcode.com/problems/add-digits

/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 

Constraints:

0 <= num <= 231 - 1

*/

function addSum(num) {
    let s =0;
    while(num>0){
        let rem= num %10;
        s = s + rem;
        num = parseInt(num/10);
    }
    //console.log(s);
    if(s>9){
        return addSum(s);
    }else{
        return s;
    }
}

//good solution on leetcode
function test(num){
return 1 + (num-1)%9;
};

console.log(test(38));

console.log(addSum(228));