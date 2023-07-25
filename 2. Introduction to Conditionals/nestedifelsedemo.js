let isUserDiscovery = false;
let isUserPrime = true;
let isUserAccorn = true;

if(isUserPrime && isUserDiscovery){
    console.log("Enjoy both Prime and Discovery Content.")
}else{
    console.log("Enjoy Prime Content");
}


if(isUserPrime){
    if(isUserDiscovery){
        if(isUserAccorn){
            console.log("Enjoy all accorn, prime and Discovery Subscription");
        }else{
        console.log("Enjoy both Prime and Discovery Content");
        }
    }else if(isUserAccorn){
        console.log("Enjoy both Prime and Accorn Content");
    }
    else{
        console.log("Enjoy Prime Video!!");
    }
}else{
    console.log("Please buy a subscription to enjoy prime content");
}