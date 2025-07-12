Array.prototype.last = function () {
    console.log(this.length)
  return this.length > 0 ? this[this.length - 1] : -1;
};

const arr = [1, 2, 3];
console.log(arr.last()) // 3


