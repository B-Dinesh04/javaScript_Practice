// Write a js program to create new string from a given string by achanging the position of the first and last characters. The string length must be broader than 1.

charChange = (str)=>{
    if(str.length > 1){
    let len = str.length-1
    const middle = str.slice(1,len)
    console.log(`${str.at(len).toUpperCase()}${middle}${str.at(0)}`)
}else{
    console.log(str.toUpperCase())
}
}

charChange('the')
