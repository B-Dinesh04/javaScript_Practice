const palindrom = function(str){
    const arr = str.split(' ')
    
    const palindrom = arr.filter((value)=>{
        const reverse = value.split('').reverse().join('')
        return value === reverse
    }).reduce((emptystr,strvalue)=>{ 
      return strvalue.length > emptystr.length ? strvalue : emptystr
    },"")
    console.log(palindrom)
}

palindrom("hi my name is bob im from keral i speak malayalam and i love dogs")
