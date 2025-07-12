const groupBy = function (arr, fn) {
  let groupedby = {};
  arr.map((val) => {
    let key = fn(val);
    groupedby[key] ? groupedby[key].push(val) : (groupedby[key] = [val]);
  });
  return groupedby;
};

console.log(groupBy(['22','322','33','432','412','523'], (x)=> x.length));
