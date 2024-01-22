let firstNum, secondNum, operator, displayValue = "";
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll("button.number");
const clearButton = document.querySelector("#clear");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
    }
};

function updateDisplay(input) {
    display.textContent = input;
};
updateDisplay(displayValue);

numberButtons.forEach(button => button.addEventListener("click", event => {
    if (displayValue.length < 12) {
        displayValue += event.target.id;
        updateDisplay(displayValue);
    };
}))

clearButton.addEventListener("click", event => {
    firstNum, secondNum, operator, displayValue = "";
    updateDisplay(displayValue);
})