/* Write a js program where the program takes a random integer between 1 and 10, and the user is then prompted
to input a guess number. The program displays a message "Good work* if the input matches the guess number otherwise "Not matched". */

let ran = Math.floor(Math.random() * (10-1+1))+1
//console.log(ran)
let user = 1


if (user === ran)  {
    console.log("Good Work, matched to the number")
} else  {
    console.log("Your numbr not matched to the number :",ran)
}