/*  Write a js program to get the difference between a given number and 13, 
if the number is border than 13 return double the absolute difference  */

function difference(num)  {
if (num > 13)  {
    diff = (num - 13) * 2
    console.log(diff)
} else  {
    diff = 13 - num 
    console.log(diff)
} 
}

difference(32)