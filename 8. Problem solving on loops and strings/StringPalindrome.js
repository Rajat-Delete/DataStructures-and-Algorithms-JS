

function check_Palindrome(num){
    let str = ""+num;
    for(let i=0,j=str.length-1;i<=j;){
        console.log(str[i]," ",str[j]);
        if(str[i] == str[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }
    return true;

}

console.log(check_Palindrome(12311));