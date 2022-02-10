function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      break;
  }
}

//get our buttons from the DOM
const buttonNumber = document.querySelectorAll('.btn-number');
const buttonOperator = document.querySelectorAll('.btn-operator');
const equalsButton = document.querySelector('.btn-equals');
const display = document.querySelector('.display');
const clearButton = document.querySelector('.btn-clear');
// set displayData to empty string
let displayData = '';

// loop over the number buttons
let buttonNumberValueForCalc1 = '';
let buttonNumberValueForCalc2 = '';
buttonNumber.forEach((buttonNumber) => {
  //for each number button, we want to add a "click" event listener
  buttonNumber.addEventListener('click', () => {
    // get the value of the clicked button from the attribute
    const buttonNumberValue = buttonNumber.getAttribute('data-num');
    buttonNumberValueForCalc1 += buttonNumberValue;
    buttonNumberValueForCalc2 += buttonNumberValue;
    // update our displayData variable with the value of the clicked button
    displayData += buttonNumberValue;
    //output the displayData value to the display element
    display.textContent = displayData;
  });
});

// loop over the operator buttons
let buttonOperatorValueForCalc = '';
buttonOperator.forEach((buttonOperator) => {
  // for each operator button, we want to add a "click" event listener
  buttonOperator.addEventListener('click', () => {
    displayData = '';
    buttonNumberValueForCalc2 = '';
    // get the value of the clicked button from the attribute
    const buttonOperatorValue = buttonOperator.getAttribute('data-num');
    buttonOperatorValueForCalc += buttonOperatorValue;
    // update our displayData variable with the value of the clicked button
    displayData = buttonOperatorValue;
    //output the displayData value to the display element
    display.textContent = displayData;
    displayData = '';
  });
});

// add an event listener to the equals button
equalsButton.addEventListener('click', () => {
  // use operate() function to evaluate the expression and output it to the display

  displayData = operate(
    buttonOperatorValueForCalc,
    Number(
      (sepNumbers = buttonNumberValueForCalc1.replace(
        buttonNumberValueForCalc2,
        ''
      ))
    ),
    Number(buttonNumberValueForCalc2)
  );
  display.textContent = displayData;
});

// add an event listener to the clear button
clearButton.addEventListener('click', () => {
  // set variable to empty string and then update the display
  buttonOperatorValueForCalc = '';
  buttonNumberValueForCalc1 = '';
  buttonNumberValueForCalc2 = '';
  displayData = '';
  display.textContent = displayData;
});
