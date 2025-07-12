// var romanToInt = function (s) {
//   let symbol = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let arr = s.split("");
//   let ans = 0

//   for(let i = 0; i < arr.length; i++){
//     if(symbol[arr[i]] < symbol[arr[i+1]]){
//        ans -= symbol[arr[i]]
//     }else{
//         ans += symbol[arr[i]]
//     }
//   }
//   return ans

// };

// console.log(romanToInt("MCMXCIV"));


// var addTwoNumbers = function(l1, l2) {
//     return l1.map((val, i)=> val + l2[i])
// };

// console.log(addTwoNumbers([1,2], [2,1]))

console.log(isNaN('NaN'))