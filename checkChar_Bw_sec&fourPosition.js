//Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

function check(char, letter){
    let val
    for(let i = 0; i < char.length; i++){
        if(char.indexOf(letter) >= 2 && char.indexOf(letter) <= 4){
         val = true
         break
        }
    }
    if(val)
      return true
    return false
}
console.log(check('Hello','H'))