"use strict";

const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

const updateDisplay = () => {
  const display = document.querySelector(".display-output");
  display.value = calculator.displayValue;
};
updateDisplay();

const keys = document.querySelector(".buttons");

keys.addEventListener("click", (event) => {
  const { target } = event;
  const { value } = target;
  // console.log(target);

  if (!target.matches("button")) {
    return;
  }
  switch (value) {
    case "+":
    case "x":
    case "-":
    case "=":
    case "/":
      handleOperator(value);

      break;
    case ".":
      inputDecimal(value);
      break;
    case "reset":
      clear();
      break;
    case 'del':
      del();
      break;

    default:
      if (Number.isInteger(parseFloat(value))) inputDigits(value);
      break;
  }
  updateDisplay();
});

const inputDigits = function (digit) {
  const { displayValue, waitingForSecondOperand } = calculator;
  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
};
// dot function
function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = "0.";
    calculator.waitingForSecondOperand = false;
    return;
  }
  if (!calculator.displayValue.includes(".")) {
    calculator.displayValue += dot;
  }
}

// frist inputOperator

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;

  const inputValue = parseFloat(displayValue);
  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calc(firstOperand, inputValue, operator);
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = result;
  }
  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

function calc(firstOperand, secondOperand, operator) {
  if (operator === "+") {
    // calculator.displayValue += '+';
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } else if (operator === "*") {
    return firstOperand * secondOperand;
  } else if (operator === "/") {
    return firstOperand / secondOperand;
  }
  return secondOperand;
}
// clear

function clear() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.operator = null;
  calculator.waitingForSecondOperand = false;
}

function del() {
  const numToStr = calculator.displayValue.toString();
  calculator.displayValue = numToStr.slice(0, -1);
  // let dis = numToStr.slice(0,-1)
  calculator.firstOperand = null;
  calculator.operator = null;
  calculator.secondOperand = null;
  //  calculator.waitingForSecondOperand = false;
  // if (calculator.waitingForSecondOperand === true) {
  //   console.log("2nd is true");
  //   calculator.displayValue = calculator.waitingForSecondOperand
  //     .toString()
  //     .slice(0, -1);
  // }

  if (calculator.displayValue === "") {
    calculator.operator = null;
    clear();
    console.log("empty");
  }
  // if(!calculator.operator === null ){
  //   console.log("operator is null");

  // }
}
