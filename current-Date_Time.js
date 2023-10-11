/* Write a js program to display the current day and time in the following format. 
Sample Output : Today is : Tuesday.
Current time id : 10 PM:30:38 */

let today = new Date()

let day = today.getDay()

let weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

console.log("Today is : ",weeks[day] + ".")

let hour = today.getHours()
if (hour < 12 )
{ 
    if (hour===0)
    {
    hour = 12 
    }
    console.log("Current Time is : " + hour + " AM " + " : " + today.getMinutes() + " : " + today.getSeconds())
}
else 
{
    hour = hour >=12 ? hour-12 : hour
    if(hour===0)
    {
     hour =12
    }  
    console.log("Current Time is : " + hour + " PM " + " : " +today.getMinutes() + " : " + today.getSeconds())
} 