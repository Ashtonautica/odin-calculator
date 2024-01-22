let currentNumber = 0;
let storedNumber = 0;
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

function operate(a, b, operator) {
    switch (operator) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
    }
};

function updateDisplay() {
    let formattedDisplayValue = displayValue;
    if (displayValue.length > 16) {
        formattedDisplayValue = Number(displayValue).toExponential(10).toString();
    }
    else {
        formattedDisplayValue = (Math.round((Number(formattedDisplayValue) * 1e10)) / 1e10).toString();
        console.log(formattedDisplayValue);
    }
    display.textContent = formattedDisplayValue;
};
updateDisplay();

function resetVariables() {
    currentNumber = 0;
    storedNumber = 0;
    operator = "";
    displayValue = "0";
}

numberButtons.forEach(button => button.addEventListener("click", event => {
    if (displayValue.length < 10) {
        currentNumber = Number(currentNumber.toString() + event.target.id);
        displayValue = currentNumber.toString();
        updateDisplay();
    };
}));

clearButton.addEventListener("click", event => {
    resetVariables();
    updateDisplay();
});

operatorButtons.forEach(button => button.addEventListener("click", event => {
    if (operator === "") {
        storedNumber = currentNumber;
    }
    else {
        storedNumber = operate(storedNumber, currentNumber, operator);
    };
    currentNumber = 0;
    operator = event.target.id;
    displayValue = storedNumber.toString();
    updateDisplay();
    displayValue = "0";
}))

equalsButton.addEventListener("click", event => {
    displayValue = operate(storedNumber, currentNumber, operator);
    updateDisplay();
    resetVariables();
})