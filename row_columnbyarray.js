// Array.prototype.snail = function (rowsCount, colsCount) {
//   let nestedarr = [];
//   let addedarr = [];

//   if (this.length == rowsCount * colsCount) {
//     for (let i = 0; i <= this.length; i++) {
//       if (addedarr.length < colsCount) {
//         addedarr.push(this[i]);
//       } else {
//         nestedarr.push(addedarr);
//         addedarr = [];
//       }
//     }
//   }
//   return nestedarr;
// };

// const arr = [1, 3];
// console.log(arr.snail(2, 2)); // [[1,2,3,4]]

Array.prototype.snail = function (rowsCount, colsCount) {
  let nestedarr = [];
  let addedarr = [];
  let result = Array(rowsCount).snail();
  console.log(result);
  if (this.length == rowsCount * colsCount) {
    // for (let i = 0; i <= this.length; i++) {
    //   if (addedarr.length < colsCount) {
    //     addedarr.push(this[i]);
    //   } else {
    //     nestedarr.push(addedarr);
    //     addedarr = [];
    //   }
    // }

    for (let i = 0; i <= this.length; i++) {
        let num = i
      for (let j = 0; j < colsCount; j++) {
        
        result[i][j] = this[num];
        num = num + 9
      }

    }
  }
  return result;
};

const arr = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];
console.log(arr.snail(5, 4)); // [[1,2,3,4]]
