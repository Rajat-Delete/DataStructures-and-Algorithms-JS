/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/


//Brute force approach
function bestTime(arr){
    let profit = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] - arr[i] > profit){
                profit = arr[j]-arr[i];
            }else{
                continue;
            }
        }
    }
    console.log(profit);
}

//Optimised Approach
function approach2(arr){
    let profit = 0;
    let curr_min = arr[0];

    for(let i=0;i<arr.length;i++){
        //should we sell today
        if(arr[i] > curr_min){
            profit = Math.max(profit , arr[i]-curr_min);
        }

        //can we buy today
        if(arr[i] < curr_min){
            curr_min = arr[i];
        }
    }
    return profit;
}

console.log(approach2([7,1,5,3,6,4]));