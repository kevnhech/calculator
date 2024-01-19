function round(num) {
  return Math.round(num * 100) / 100;
}

function add(a, b) {
  return round(a + b);
}

function subtract(a, b) {
  return round(a - b);
}

function multiply(a, b) {
  return round(a * b);
}

function divide(a, b) {
  return round(a / b);
}

let firstNum = '3';
let operator = '+';
let secondNum = '5';

function operate(op, num1, num2) {
  if (op == '+') {
    return add(num1, num2);
  } else if (op == '-') {
    return subtract(num1, num2);
  } else if (op == '*') {
    return multiply(num1, num2);
  } else if (op == '/') {
    return divide(num1, num2);
  }
}

let calcDisplay = document.querySelector('#display');

const nineBtn = document.querySelector('#nine');
const eightBtn = document.querySelector('#eight');
const sevenBtn = document.querySelector('#seven');
const sixBtn = document.querySelector('#six');
const fiveBtn = document.querySelector('#five');
const fourBtn = document.querySelector('#four');
const threeBtn = document.querySelector('#three');
const twoBtn = document.querySelector('#two');
const oneBtn = document.querySelector('#one');
const zeroBtn = document.querySelector('#zero');

const clearBtn = document.querySelector('#clear-button');
const equalBtn = document.querySelector('#equal-button');
const addBtn = document.querySelector('#add-button');
const subtractBtn = document.querySelector('#subtract-button');
const multiplyBtn = document.querySelector('#multiply-button');
const divideBtn = document.querySelector('#divide-button');

nineBtn.addEventListener('click', () => {
  if (calcDisplay.textContent == '0') {
    calcDisplay.textContent = '9';
  } else {
    calcDisplay.textContent += '9';
  }
});

eightBtn.addEventListener('click', () => {
  if (calcDisplay.textContent == '0') {
    calcDisplay.textContent = '8';
  } else {
    calcDisplay.textContent += '8';
  }
});

sevenBtn.addEventListener('click', () => {
  if (calcDisplay.textContent == '0') {
    calcDisplay.textContent = '7';
  } else {
    calcDisplay.textContent += '7';
  }
});

sixBtn.addEventListener('click', () => {
  if (calcDisplay.textContent == '0') {
    calcDisplay.textContent = '6';
  } else {
    calcDisplay.textContent += '6';
  }
});

fiveBtn.addEventListener('click', () => {
  if (calcDisplay.textContent == '0') {
    calcDisplay.textContent = '5';
  } else {
    calcDisplay.textContent += '5';
  }
});

fourBtn.addEventListener('click', () => {
  if (calcDisplay.textContent == '0') {
    calcDisplay.textContent = '4';
  } else {
    calcDisplay.textContent += '4';
  }
});

threeBtn.addEventListener('click', () => {
  if (calcDisplay.textContent == '0') {
    calcDisplay.textContent = '3';
  } else {
    calcDisplay.textContent += '3';
  }
});

twoBtn.addEventListener('click', () => {
  if (calcDisplay.textContent == '0') {
    calcDisplay.textContent = '2';
  } else {
    calcDisplay.textContent += '2';
  }
});

oneBtn.addEventListener('click', () => {
  if (calcDisplay.textContent == '0') {
    calcDisplay.textContent = '1';
  } else {
    calcDisplay.textContent += '1';
  }
});

zeroBtn.addEventListener('click', () => {
  if (calcDisplay.textContent == '0') {
    calcDisplay.textContent = '0';
  } else {
    calcDisplay.textContent += '0';
  }
});

clearBtn.addEventListener('click', () => {
  calcDisplay.textContent = '0';
  firstNum = '3';
  secondNum = '5';
  operator = '';
});

addBtn.addEventListener('click', () => {
  let displayValue = calcDisplay.textContent;
  let arr = displayValue.split('');
  count = 0;

  arr.forEach(function(item) {
    if (item == '+' || item == '-' || item == '*' || item == '/') {
      count++;
    }
  });

  if (count > 0) {
    operator = arr.find(item => item == '+' || item == '-' || item == '*' || item == '/');
    let arrOfNums = displayValue.split(operator);
    firstNum = Number(arrOfNums[0]);
    secondNum = Number(arrOfNums[1]);
    calcDisplay.textContent = String(operate(operator, firstNum, secondNum)) + '+';
  } else {
    calcDisplay.textContent += '+';
  }
});

subtractBtn.addEventListener('click', () => {
  let displayValue = calcDisplay.textContent;
  let arr = displayValue.split('');
  count = 0;

  arr.forEach(function(item) {
    if (item == '+' || item == '-' || item == '*' || item == '/') {
      count++;
    }
  });

  if (count > 0) {
    operator = arr.find(item => item == '+' || item == '-' || item == '*' || item == '/');
    let arrOfNums = displayValue.split(operator);
    firstNum = Number(arrOfNums[0]);
    secondNum = Number(arrOfNums[1]);
    calcDisplay.textContent = String(operate(operator, firstNum, secondNum)) + '-';
  } else {
    calcDisplay.textContent += '-';
  }
});

multiplyBtn.addEventListener('click', () => {
  let displayValue = calcDisplay.textContent;
  let arr = displayValue.split('');
  count = 0;

  arr.forEach(function(item) {
    if (item == '+' || item == '-' || item == '*' || item == '/') {
      count++;
    }
  });

  if (count > 0) {
    operator = arr.find(item => item == '+' || item == '-' || item == '*' || item == '/');
    let arrOfNums = displayValue.split(operator);
    firstNum = Number(arrOfNums[0]);
    secondNum = Number(arrOfNums[1]);
    calcDisplay.textContent = String(operate(operator, firstNum, secondNum)) + '*';
  } else {
    calcDisplay.textContent += '*';
  }
});

divideBtn.addEventListener('click', () => {
  let displayValue = calcDisplay.textContent;
  let arr = displayValue.split('');
  count = 0;

  arr.forEach(function(item) {
    if (item == '+' || item == '-' || item == '*' || item == '/') {
      count++;
    }
  });

  if (count > 0) {
    operator = arr.find(item => item == '+' || item == '-' || item == '*' || item == '/');
    let arrOfNums = displayValue.split(operator);
    firstNum = Number(arrOfNums[0]);
    secondNum = Number(arrOfNums[1]);
    calcDisplay.textContent = String(operate(operator, firstNum, secondNum)) + '/';
  } else {
    calcDisplay.textContent += '/';
  }
});

equalBtn.addEventListener('click', () => {
  let displayValue = calcDisplay.textContent;
  let arr = displayValue.split('');
  operator = arr.find(item => item == '+' || item == '-' || item == '*' || item == '/');
  let arrOfNums = displayValue.split(operator);
  firstNum = Number(arrOfNums[0]);
  secondNum = Number(arrOfNums[1]);
  calcDisplay.textContent = String(operate(operator, firstNum, secondNum));
});