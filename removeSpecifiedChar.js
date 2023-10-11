/* Write a js program to remove a character at the specified position in a given string and return the modified string. */

function string (str , position)  {
    const arr = str.split('')
    arr.splice(position,1)
    console.log(arr.join(''))
}

string('Heello',1)