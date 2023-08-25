

function find_frequency(str){
    let freqObject = {};
    for(let char of str){
        if(freqObject[char]){
            //we need to update the frequency if the character already exits
            freqObject[char] = freqObject[char]+1;
        }else{
            //we need to make a entry in the object
            freqObject[char] = 1;
        }
    }
    return freqObject;
}

console.log(find_frequency("javascript"));