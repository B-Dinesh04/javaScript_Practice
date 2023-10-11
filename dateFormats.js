/* Write a js program to get the current date.
Expected Output :
 mm-dd-yyyy,mm/dd/yyyy or dd-mm-yyyy,dd/mm/yyyy */

 let today = new Date()

 let year = today.getFullYear()
 let date = today.getDate()
 let month = today.getMonth()+1

 if (month < 10)
 {
    month = "0"+ month
 }

 if(date < 10)
 {
    date = "0"+ date
 }

 console.log(month + "-" + date + "-" + year)
 console.log(month + "/" + date + "/" + year,"\n")
 console.log(date + "-" + month + "-" + year)
 console.log(date + "/" + month + "/" + year)
 console.log(today)