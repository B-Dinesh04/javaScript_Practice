function palindrom(str){
   console.log(str);
   const arrPalindrom = []
   for(let i=0 ; i < str.length ; i+=2){
      let num = 2
      const twoLetters = str.slice(i , num + i)
      const reverseOfTwoLetters = twoLetters.split('').reverse().join('')
      const firstIndex = str.indexOf(twoLetters)
      const lastIndex = str.lastIndexOf(reverseOfTwoLetters)
      const word = str.slice(firstIndex,(lastIndex + 1)+1)
      const reverseOfWord = word.split('').reverse().join('')
      if(word.length>1){
      if(word === reverseOfWord){
         arrPalindrom.push(word)
      }
   }

   }
   for(let i=1 ; i < str.length ; i+=3){
      let num = 2
      const twoLetters = str.slice(i , num + i)
      const reverseOfTwoLetters = twoLetters.split('').reverse().join('')
      const firstIndex = str.indexOf(twoLetters)
      const lastIndex = str.lastIndexOf(reverseOfTwoLetters)
      const word = str.slice(firstIndex,(lastIndex + 1)+1)
      const reverseOfWord = word.split('').reverse().join('')
      if(word.length>1){
      if(word === reverseOfWord){
         arrPalindrom.push(word)
      }
   }
   }
   return arrPalindrom.reduce((emptyStr,currentStr)=> currentStr.length > emptyStr.length ? currentStr : emptyStr , "")
   
}
console.log(palindrom("youspeakmalayalamsowellbeebeebll"));

