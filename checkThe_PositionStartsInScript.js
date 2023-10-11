// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

function string(char){
    if(char.startsWith('Script', 4)){
        return char.substring(0,4)
    }
    return char
}

console.log(string('Javacript'))