
let display = document.getElementById("result");

function appendNumber(num) {
    display.value += num;
}

function appendOperator(operator) {
    if (display.value !== "") {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
