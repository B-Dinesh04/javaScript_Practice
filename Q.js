/* Write a js program to check two given numbers whether one is positive and another one is negative. */

function positiveNegative (num1 , num2)  {
    return (num1 > 0 && num2 < 0 || num1 < 0 && num2 > 0)
}

console.log(positiveNegative(3,-4))