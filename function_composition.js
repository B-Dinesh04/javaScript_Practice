var compose = function (functions) {
  return function (x) {
    if (functions.length <= 0) {
      return [];
    }

    let val = x;

    const arr = functions.reverse().map((each) => {
      val = each(val);
    });
    return val;
  };
};

const fn = compose([]);
console.log(fn(4)); // 9
