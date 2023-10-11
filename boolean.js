/* Write js program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. */

function sumOfTwo (num1,num2)  {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50)  {
        console.log(true)
    }else  {
        console.log(false)
    }
}

sumOfTwo(50,0)