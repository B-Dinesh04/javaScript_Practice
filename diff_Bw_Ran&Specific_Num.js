/* Write a js program program to compute the absolute difference between a specified number and 19. 
Returns triple the absolute difference if the specified number is greater than 19. */

function difference (num)  {
    if(num > 19)  {
        console.log((num - 19) * 3)
    } else  {
        console.log(19 - num)
    }
}

difference(89)