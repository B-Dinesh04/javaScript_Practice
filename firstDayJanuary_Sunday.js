/* write a js program to find out if 1st january will be a Sunday between 2014 and 2050 */

let today = new Date(),
present,
day

for (let i = 2014; i < 2050; i++ )  
{
    present = today.setFullYear(i,0,1)
    day = today.getDay()
    if (day === 0){
        console.log(`The 1st January of ${i} is Sunday`)
    }
    
}
    
    