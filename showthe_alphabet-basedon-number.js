/* Write a program to give the following output for the given input  
eg1 : 
 input: a1b10
 output: abbbbbbbbbb
 
eg2 :
 input: b3c6d15 
 output: bbbccccccddddddddddddddd */

const input = "e4r3";
const arrayinput = input.split("");
let arrobj = [];
arrayinput.map((val, index) => {
  let alp = [];
  let num = [];

  if (typeof val === "string") {
    alp.push(val);

    const indexOfVal = arrayinput.indexOf(val);

    const modifiedArrayInp = arrayinput.toSpliced(0, indexOfVal);

    modifiedArrayInp.map((val1, index) => {
      if (
        typeof Number(val1) === Number &&
        typeof Number(modifiedArrayInp[index + 1]) !== NaN
      ) {
        return num.push(val1);
      }
      num.push(val1);
    });

    arrobj.push({ number: num.join(""), alpha: alp.join("") });
  }
  //   return new Error("Invalid Input");
});

console.log(arrobj);
