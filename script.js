let currentNumber = "0";
let previousNumber = "0";
let operator = "";
let displayValue = "0";
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const clearButton = document.querySelector("#clear");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case "add":
            return add(firstNum, secondNum);
        case "subtract":
            return subtract(firstNum, secondNum);
        case "multiply":
            return multiply(firstNum, secondNum);
        case "divide":
            return divide(firstNum, secondNum);
    }
};

function updateDisplay() {
    display.textContent = displayValue;
};
updateDisplay();

numberButtons.forEach(button => button.addEventListener("click", event => {
    if (displayValue.length < 12) {
        if (currentNumber === "0") currentNumber = "";
        currentNumber += event.target.id;
        displayValue = currentNumber;
        updateDisplay();
    };
}));

clearButton.addEventListener("click", event => {
    currentNumber = "0";
    previousNumber = "0";
    operator = "";
    displayValue = "0";
    updateDisplay();
});