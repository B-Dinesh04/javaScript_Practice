var map = function (arr, fn) {
  let newArr = [];
  arr.forEach((val, ind) => newArr.push(fn(val, ind)));

  return newArr;
};

console.log(map([1, 2, 3], function consts(val, i) {
  return val + i;
}));
