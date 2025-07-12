var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
      fn(...args)
        .then(resolve('Success'))
        .catch(reject('Error'));
    });
  };
};

const limited = timeLimit(async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
}, 50);
limited([5]).then(console.log).catch(console.log); // "Time Limit Exceeded" at t=100ms
