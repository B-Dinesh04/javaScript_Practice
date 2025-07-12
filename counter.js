var createCounter = function (n) {
//   let i = 0;
  return function () {
    return n++;
  };
};

const counter = createCounter(10);
console.log(counter());
// 10
console.log(counter());
// 11
console.log(counter());
// 12
