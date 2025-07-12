var reduce = function (nums, fn, init) {
  if (nums.length > 0) {
    nums.forEach((num) => {
       init = fn(init, num);
    });
    return init;
  } else {
    return init;
  }
};

let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) {
  return accum + curr * curr;
};
let init = 100;

console.log(reduce(nums, fn, init));
