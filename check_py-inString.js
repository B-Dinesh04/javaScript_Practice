/* Write a js program to create another string by adding "Py" in front of a given string. 
If the given string begins with "Py" return the original string. */

function string (word) {
    if ( word === undefined || word === null || word.substring(0,2) === "Py")  {
        return word
    }else {
        return `Py${word}` 
    }
}

console.log(string("Javascript"))
console.log(string())