

function print_fibonacci(n){
    let secondlast = 0;
    let last = 1;
    if(n == 0){
        console.log(0);
        return;
    }
    if(n >= 1){
        console.log(0);
        console.log(1);
    }

    for(let i=2;i<n;i++){
            let nextfib = last + secondlast;
            secondlast = last;
            last = nextfib;
            console.log(nextfib);
    }
    
}

print_fibonacci(5);