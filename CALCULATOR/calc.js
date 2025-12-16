let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

let currentValue = "";
let firstValue = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (!isNaN(value) || value === ".") {
            currentValue += value;
            display.value = currentValue;
        }
        else if (value === "C") {
            currentValue = "";
            firstValue = "";
            operator = "";
            display.value = "";
        }
        else if (value === "=") {
            if (firstValue && operator && currentValue) {
                let result = calculate(
                    parseFloat(firstValue),
                    parseFloat(currentValue),
                    operator
                );
                display.value = result;
                currentValue = result.toString();
                firstValue = "";
                operator = "";
            }
        }
        else {
            if (currentValue !== "") {
                firstValue = currentValue;
                operator = value;
                currentValue = "";
            }
        }
    });
});

function calculate(a, b, op) {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") return b === 0 ? "Error" : a / b;
}

