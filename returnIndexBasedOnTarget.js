const mongo = require("mongoose");
const fs = require("fs");
// const arr = [12, 33, 9, 10];
// const target = 19;
// // Multiple loop
// const [output1] = arr
//   .map((eachval, index) => {
//     const Index = arr.findIndex(
//       (eachsubval) => eachsubval + eachval === target
//     );
//     if (Index !== -1) {
//       return [index, Index];
//     }
//   })
//   .filter((val) => val);

// // Single loop
// const numMap = new Map();

// let output;
// for (let i = 0; i < arr.length; i++) {
//   const complement = target - arr[i];

//   if (numMap.has(complement)) {
//     output = [numMap.get(complement), i];
//     return;
//   }

//   numMap.set(arr[i], i);
// }

// console.log(output);

// console.log(output1);

// const baseMap = new Map()
// let result
// arr.map((num, index) => {
//     const diff = target - num
//     if (baseMap.has(num)) {
//         result = [baseMap.get(num), index]
//     }
//     baseMap.set(diff, index)
// }).flat(1).l
// console.log(result)\
// const nums1 = [1, 4,2];
// const nums2 = [3];
// const baseNum = [...nums1, ...nums2].sort((a, b) => a - b);
// const baseNumlen = baseNum.length;
// const val =
//   baseNumlen % 2 === 0
//     ? (baseNum[(baseNumlen / 2) - 1] + baseNum[(((baseNumlen / 2) + 1) ) - 1]) / 2
//     : baseNum[((baseNumlen + 1) / 2) - 1];
// console.log(val);

// board = [
//   ["8", "3", ".", ".", "7", "8", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// let result = true;
// const horizontalMap = new Map();
// const Vertical = new Map();

// board.forEach((subArr) => {
//   if (result) {
//     subArr.forEach((val, index) => {
//       if (!isNaN(Number(val))) {
//         if (horizontalMap.has(val) && horizontalMap.get(val) !== index) {
//           result = false;
//           return;
//         }
//         horizontalMap.set(val, index);
//       }
//     });
//   }
//   return;
// });

// function diagonalDifference(arr) {
//   let arr1 = 0;
//   let arr2 = 0;
//   arr.map((arr, index) => {
//     const [val] = arr.filter((_, innerindex) => innerindex === index);
//     arr1 += val;
//   });
//   let len = arr.length -1;
//   arr.map((arr) => {
//     const [val] = arr.filter((_, innerindex) => innerindex === len);
//     arr2 += val;
//     len--
//   });

//   return arr1 - arr2 > 0 ? arr1 - arr2 : -(arr1 - arr2);
// }

// function plusMinus(arr) {
//   const map = new Map([
//     ["plus", []],
//     ["minus", []],
//     ["zero", []],
//   ]);
//   arr.forEach((val) => {
//     val > 0
//       ? map.get("plus").push(val)
//       : val < 0
//       ? map.get("minus").push(val)
//       : map.get("zero").push(val);
//   });
//   console.log((map.get("plus").length / arr.length).toFixed(6));
//   console.log((map.get("minus").length / arr.length).toFixed(6));
//   console.log((map.get("zero").length / arr.length).toFixed(6));
// }

// function staircase(n) {
//   for (let i = 1; i <= n; i++) {
//     const sym = "#".repeat(i).padStart(n, " ");
//     console.log(sym);
//   }
// }

// function miniMaxSum(arr) {
//   const map = new Map([
//     ["minVal", 0],
//     ["maxVal", 0],
//   ]);
//   const maxFun = () => {
//     let maxVal = Infinity;
//     let minVal = -Infinity;
//     arr.forEach((val, index) => {
//       if (val > minVal) {
//         maxVal = val;
//         minVal = val;

//         map.set("maxVal", { index, val });
//       }
//     });
//     return maxVal;
//   };

//   const minFun = () => {
//     let maxVal = Infinity;
//     let minVal = -Infinity;
//     arr.forEach((val, index) => {
//       if (val < maxVal) {
//         maxVal = val;
//         minVal = val;
//         map.set("minVal", { index, val });
//       }
//     });
//     return minVal;
//   };

//   const minVal = minFun();
//   const maxVal = maxFun();

//   const minSum = arr
//     .filter((_, index) => index !== map.get("minVal").index)
//     .reduce((acc, val) => acc + val, 0);

//   const maxSum = arr
//     .filter((_, index) => index !== map.get("maxVal").index)
//     .reduce((acc, val) => acc + val, 0);

//   console.log(minSum, maxSum);
// }

// function miniMaxSum(arr) {
//   let minVal = Infinity,
//     maxVal = -Infinity,
//     minIndex = -1,
//     maxIndex = -1,
//     totalSum = 0;

//   // Find min, max, and total sum in one pass
//   arr.forEach((val, index) => {
//     totalSum += val;
//     if (val < minVal) {
//       minVal = val;
//       minIndex = index;
//     }
//     if (val > maxVal) {
//       maxVal = val;
//       maxIndex = index;
//     }
//   });

//   // Compute minSum and maxSum
//   const minSum = totalSum - maxVal;
//   const maxSum = totalSum - minVal;

//   console.log(minSum, maxSum);
// }

// miniMaxSum([1, 3, 4, 5, 2]);
// miniMaxSum([5, 5, 5, 5, 5]);

// miniMaxSum([1, 3, 4, 5, 2]);

// function steadyGene(gene) {
//   const geneCombo = ["A", "C", "T", "G"];
//   const len = gene.length;
//   const lenDiv = len / 4;
//   const arr = gene.split("");
//   const arrLen = arr.lenght;
//   const continuousElementMap = new Map();
//   const fixedElements = new Map();
//   arr.map((val, index) => {
//     if (arrLen - 1 !== index && val === arr?.[index + 1]) {
//       if (continuousElementMap.has(val)) {
//         continuousElementMap.get(val).index.push([index, index + 1]);

//         if (arrLen >= 0) {
//           if (index === 0 && !fixedElements.has(val)) {
//             const element = continuousElementMap.get(val);
//             const elementIndex = element.index.find((indexval) =>
//               indexval.filter((innerindexval) => innerindexval === index)
//             );
//             if (elementIndex) {
//               fixedElements.set(val, {
//                 letter: val,
//                 index: [index, index + 1],
//               });
//             }
//           }
//           if (index === arrLen - 1 && !fixedElements.has(val)) {
//             const element = continuousElementMap.get(val);
//             const elementIndex = element.index.find((indexval) =>
//               indexval.filter((innerindexval) => innerindexval === index)
//             );
//             if (elementIndex) {
//               fixedElements.set(val, {
//                 letter: val,
//                 index: [index - 1, index],
//               });
//             }
//           }
//         }
//       }
//       {
//         continuousElementMap.set(val, {
//           letter: val,
//           index: [[index, index + 1]],
//         });

//         if (arrLen >= 0) {
//           if (index === 0 && !fixedElements.has(val)) {
//             const element = continuousElementMap.get(val);
//             const elementIndex = element.index.find((indexval) =>
//               indexval.filter((innerindexval) => innerindexval === index)
//             );
//             if (elementIndex) {
//               fixedElements.set(val, {
//                 letter: val,
//                 index: [index, index + 1],
//               });
//             }
//           }
//           if (index === arrLen - 1 && !fixedElements.has(val)) {
//             const element = continuousElementMap.get(val);
//             const elementIndex = element.index.find((indexval) =>
//               indexval.filter((innerindexval) => innerindexval === index)
//             );
//             if (elementIndex) {
//               fixedElements.set(val, {
//                 letter: val,
//                 index: [index - 1, index],
//               });
//             }
//           }
//         }
//       }
//     }
//   });
//   console.log(continuousElementMap);
// }

// steadyGene("GAAATAAA");
// for (let i = start; i <= finish; i++) {
//   const strI = i.toString();
//   if (strI.endsWith(s)) {
//     const digitsOk = [...strI].every((d) => Number(d) <= limit);
//     if (digitsOk) {
//       numArr.push(strI);
//       powerdigits++;
//     }
//   }
// }
// function numberOfPowerfulInt(start, finish, limit, s) {
//   if (finish < Number(s)) return 0;
//   const numArr = [];
//   let powerdigits = 0;
//   let i = start;
//   while (i <= finish) {
//     const strStart = i.toString();
//     if (i >= 100 && ![...strStart].every((d) => Number(d) <= limit)) {
//       i++;
//       continue;
//     }
//     if (strStart.endsWith(s) && 1 !== i) {
//       numArr.push(strStart);
//       powerdigits++;
//     }
//     i++;
//   }
//   console.table(numArr);
//   return powerdigits;
// }

// function numberOfPowerfulInt(start, finish, limit, s) {
//   const arr = [];
//   const suffLen = s.length;
//   const suffNum = Number(s);
//   let powerdigits = 0;

//   let i = 0;
//   while (true) {
//     const suffIncludedNum = i * 10 ** suffLen + suffNum;
//     if (suffIncludedNum > finish) break;
//     if (
//       suffIncludedNum >= start &&
//       [...suffIncludedNum.toString()].every((d) => Number(d) <= limit)
//       // suffIncludedNum !== i + 1
//     ) {
//       powerdigits++;
//       arr.push(suffIncludedNum);
//     }
//     i++;
//   }
//   console.table(arr);
//   return powerdigits;
// }

// console.log(numberOfPowerfulInt(1,2000, 8,`ObjectId(" "1"));

const asset = [
  `ObjectId('685bce3f4cf876f65750fbfa')`,
  `ObjectId('685bce3f4cf876f65750fbf4')`,
  `ObjectId('685bce3f4cf876f65750fbf9')`,
  `ObjectId('685bce3f4cf876f65750fbfb')`,
  `ObjectId('685bd0d4c8547d31c8773199')`,
  `ObjectId('685bd0d4c8547d31c8773196')`,
  `ObjectId('685bd0d4c8547d31c877319a')`,
  `ObjectId('685bd0d4c8547d31c877319b')`,
  `ObjectId('685bd0d4c8547d31c8773195')`,
  `ObjectId('685bd0d4c8547d31c8773197')`,
  `ObjectId('685bd0d4c8547d31c8773198')`,
  `ObjectId('685bd0d4c8547d31c877319c')`,
]; 
// const ids = asset.map((eachasset) => `ObjectId('${eachasset._id}')`);

fs.writeFile("JPPL_50_PV_Module_Y_24.txt", asset.join(",\n"), "utf8", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
