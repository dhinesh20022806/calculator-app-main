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
  console.log(display.value);
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
       inputDigits(value);
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
    console.log(displayValue);
    calculator.displayValue =
    displayValue === "0" ? digit : displayValue + digit;
    console.log(displayValue);
  }
  updateDisplay();
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

// first inputOperator

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;

  const inputValue = parseFloat(displayValue);
  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
    console.log(calculator.firstOperand);
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
  console.log(calculator.operator, !!calculator.operator);
  if(calculator.operator && calculator.waitingForSecondOperand === true){
    console.log('working');
    calculator.firstOperand = null;
  calculator.operator  = null;
    calculator.waitingForSecondOperand = false;
    calculator.displayValue = calculator.displayValue.slice(0, -1);
    updateDisplay();
    // calculator.firstOperand += calculator.displayValue;
  //   calculator.waitingForSecondOperand = false;

  }
  // else if(calculator.secondOperand){
  //   calculator.displayValue = numToStr.slice(0, -1);
  //   calculator.secondOperand = calculator.displayValue
    
  // }
  else{
    
    calculator.displayValue = calculator.displayValue.slice(0, -1);
    updateDisplay();
  }

  

  // let dis = numToStr.slice(0,-1)
  // calculator.secondOperand = null;
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



