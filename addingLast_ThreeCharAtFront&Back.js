//Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more. 

function string(char){
    if(char.length >= 3){
        let lastChar = char.slice(char.length-3)
        console.log(`${lastChar}${char}${lastChar}`)
    }else{
        console.log('String length is less than 3')
    }
}

string('Hello')