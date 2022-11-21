// ESERCIZIO 21-11-22

"use strict";

// Calculator + controls
const args = process.argv;
const arg = args.slice(2);
const myOperation = arg[0];
const firstNum = parseFloat(arg[1]);
const secondNum = parseFloat(arg[2]);

if (isNaN(firstNum) || isNaN(secondNum)) {
  console.log("Error: invalid operation");
} else if (myOperation === "sum") {
  console.log("The result is: " + (firstNum + secondNum));
} else if (myOperation === "sub") {
  console.log("The result is: " + (firstNum - secondNum));
} else if (myOperation === "mult") {
  console.log("The result is: " + firstNum * secondNum);
} else if (myOperation === "div") {
  if (secondNum == 0) {
    console.log("Error");
  } else {
    console.log("The result is: " + firstNum / secondNum);
  }
} else {
  console.log("Error: invalid operation");
}
