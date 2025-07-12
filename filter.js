var filter = function (arr, fn) {
  return arr.filter((val, index) => fn(val, index));
};

console.log(
  filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
  })
);
