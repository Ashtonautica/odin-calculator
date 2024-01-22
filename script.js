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

const display = document.querySelector("#display");
function updateDisplay(input) {
    display.textContent = input;
}

let firstNum, secondNum, operator, displayValue = "";
const numberButtons = document.querySelectorAll("button.number");

numberButtons.forEach(button => button.addEventListener("click", event => {
    if (displayValue.length < 12) {
        displayValue += event.target.id;
        updateDisplay(displayValue);
    };
}))