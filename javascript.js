const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

let num1;
let num2;
let operator;

const operate = (num1, operator, num2) => {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return sub(num1, num2);
  } else if (operator == "*") {
    return mul(num1, num2);
  } else if (operator == "/") {
    return div(num1, num2);
  }
}