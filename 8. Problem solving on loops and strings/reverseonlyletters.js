/*

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

 

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

*/

function isChar(c){
    //console.log(c);
    return c.toLowerCase() != c.toUpperCase();
}

function reverse(arr){
    let i=0;//1
    let j =arr.length -1;//12
      //  console.log(value, isChar(value));
      while(i<=j){
        //console.log(i ," ",j);
        let swap ="";
        //console.log(str);
        if(isChar(arr[i]) && isChar(arr[j])){
            //swap the elements
            swap = arr[i];
            arr[i] = arr[j];//
            arr[j] = swap;

            i++;
            j--;
        }else if(!isChar(arr[i])){
            i++;
        }else if(!isChar(arr[j])){
            j--;
        }
        // }else{
        //     i++;
        //     j--;
        // }

}
console.log(arr);
return arr;
}

//reverse("ab-cd");
const arr = ("a-bC-dEf-ghIj").split("");
console.log("arr",arr);
//console.log(arr);
let ar = reverse(arr);

let str="";
for(let value of ar){
    str += value;
}
console.log(str);

// ab - cd
// 01 2  34