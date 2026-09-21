let num1 = 143;
let num2 = 123;

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
    if (b != 0) {
        return a / b;
    } else {
        return "Divide by zero error"
    }
}

console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`${num1} x ${num2} = ${multiply(num1, num2)}`);
console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);
![Calculator](calculator/image/calculator.jpg)
