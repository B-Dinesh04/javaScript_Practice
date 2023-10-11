/* Write a js program to determine whether a given year is a leap year in the Geogorian calender.*/

function leapYear(year)
{
 let val = year % 100 === 0 ? year % 400 === 0 : year % 4===0 
 if (val)
 {
    return ( `This ${year} is a leapyear`)
 }
 else
 {
    return ( `This ${year} is not a leapyear`)
 }
}
 console.log(leapYear(2001))
 
 

 // OR
 /*

if(a %100 ===0)
  {
    if(a %400 ===0)
    {
     console.log( "This "+ a + " is a leapyear")
    }
    else
    {
     console.log( "This "+ a + " is not a leapyear")  
    }
  }
else if (a%4===0)
  {
    console.log ("This "+ a + " is a leapyear")
  }
else
   {
     console.log ("This "+ a + " is not a leapyear")
   }  

}
leapYear(2100)
*/