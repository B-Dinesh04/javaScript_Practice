let number = 333
let val = true

if(number === 1){
    console.log('This is neither prime nor composite')
}
else if(number > 1){
    for(let num = 2; num < number; num++){
        if(number % num === 0){
            val = false
            break;
        }
    }
    if(val){
        console.log('This is a prime')
    }
    else{
        console.log('This is not a prime')
    }
}
else{
    console.log('This is not a prime')
}