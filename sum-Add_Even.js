var month = "january";
let text = function () {
  return `hello ${month}`;
};

console.log(text());

const arrs = [1, -2, -1, 0, "Dinesh"];

let values = arrs.map(function (arr) {
  console.log(typeof arr);
  return arr > 0;
});
console.log(values);

const arrsNum = [2, 3, -4, 5, 1, 45, 66];
let even = 0;
let odd = 0;
arrsNum.forEach(function (arr) {
  if (arr % 2 === 0) {
    even = even + arr;
  } else {
    odd = odd + arr;
  }
});
console.log(`Evensum : ${even}`);
console.log(`Oddsum  : ${odd}`);
