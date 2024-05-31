/* Write a js program to calculate the days left before Christmas. */

let today = new Date()

let today_thatDate = today.getDate()
let today_thatMonth = today.getMonth()
let time_T = today.getTime()

let chms_Date = new Date(today.getFullYear(),11,25)

let chms_thatDate = chms_Date.getDate()
let chms_thatMonth = chms_Date.getMonth()
let time_C = chms_Date.getTime()

let day_ms = 24 * 60 * 60 * 1000

function leapYear(year)
{
    return (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)
}
    
    if (today_thatDate < chms_thatDate && today_thatMonth <= chms_thatMonth) 
    {
        diff = Math.ceil(Math.abs(time_T - time_C) / day_ms) 
        console.log(`The day left before Christmas is ${diff}.`)
    } 
    else if (today_thatDate > chms_thatDate && today_thatMonth < chms_thatMonth) 
    {
        diff = Math.ceil(Math.abs(time_T - time_C) / day_ms) 
        console.log(`The day left before Christmas is ${diff}.`)
    } 
    else if (today_thatDate > chms_thatDate && today_thatMonth === chms_thatMonth) 
    {
        year = today.getFullYear()+1
        leap = leapYear(year)
        diff = Math.floor(Math.abs(time_T - time_C) / day_ms)
        
        if(leap)  {
            day = 366 - diff
            console.log(`The day left before Christmas is ${day}.`)
        }
        else  {
            day = 365 - diff
            console.log(`The day left before Christmas is ${day}.`)
        }
    } 
    else if (today_thatDate > chms_thatDate && today_thatMonth > chms_thatMonth) 
    {
        year = today.getFullYear()+1
        leap = leapYear(year)
        diff = Math.floor(Math.abs(time_T - time_C) / day_ms)
        
        if(leap)  {
            day = 366 - diff
            console.log(`The day left before Christmas is ${day}.`)
        }
        else  {
        day = 365 - diff
            console.log(`The day left before Christmas is ${day}.`)
        }
    } 
    else if (today_thatDate < chms_thatDate && today_thatMonth > chms_thatMonth) 
    {
        year = today.getFullYear()+1
        leap = leapYear(year)
        diff = Math.floor(Math.abs(time_T - time_C) / day_ms)
        
        if(leap)  {
            day = 366 - diff
            console.log(`The day left before Christmas is ${day}.`)
        }
        else  {
            day = 365 - diff
            console.log(`The day left before Christmas is ${day}.`)
        }
    }  
    else  
    {
        console.log(`Today is Christmas`)
    }
    