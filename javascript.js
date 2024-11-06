const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

let inputs = [0, '+'];
let operator;
let startNewNum = true;
let calcLast = true;

const operate = (num1, operator, num2) => {
  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '−') {
    return sub(num1, num2);
  } else if (operator === '×') {
    return mul(num1, num2);
  } else if (operator === '÷') {
    return div(num1, num2);
  }
}

const displayDiv = document.querySelector('.display');
const clearButton = document.querySelector('.clear');
const numberButtons = document.querySelectorAll('.number');
const calcButtons = document.querySelectorAll('.button');
const calcs = ['+','−','×','÷'];

clearButton.addEventListener('click', () => {
  displayDiv.textContent = '0';
  startNewNum = true;
  inputs = [0, '+'];
})

numberButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    calcLast = false;
    if (startNewNum) {
      displayDiv.textContent = event.target.textContent;
      startNewNum = false;    
    } else {
      displayDiv.textContent += event.target.textContent;
    }
  });
});

calcButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    let operator = event.target.textContent;
    if (calcLast) {
      inputs[1] = operator;
    } else {
      inputs.push(displayDiv.textContent);
      console.log(inputs)
      let result = operate(inputs[0] * 1, inputs[1], inputs[2] * 1);
      displayDiv.textContent = result;
      inputs = [result];
      console.log(inputs)
      inputs.push(operator);  
    }
    startNewNum = true;
    calcLast = true;
    console.log(inputs)
  });
});
