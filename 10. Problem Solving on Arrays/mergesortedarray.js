/*


You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

function merge_array(nums1, m, nums2, n){
   let arr = Array(m+n);
    let i=0;
    let j=0;
    let k=0;
    while(i < m || j < n){
        //console.log("arr everytime", arr);
        //console.log(i,j);
        if(nums1[i] <= nums2[j]){
            arr[k] = nums1[i];
            k++;
            i++;
        }else{
            arr[k] = nums2[j];
            k++;
            j++;
        }
    }
    for(let m=0;m<arr.length;m++){
        nums1[m]=arr[m];
    }
    return nums1;
} 

let nums1 = [1,2,3];
let m = 3;
let nums2 = [2,5,6];
let n = 3;

console.log(merge_array(nums1, m, nums2, n));