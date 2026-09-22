# Simple JavaScript Calculator Arithmetic Functions

This project contains a small collection of basic arithmetic functions written in JavaScript.
It demonstrates how to define functions, perform calculations, and print results using `console.log()`.

## Features

The script includes the following operations:

- **Addition**
- **Subtraction**
- **Multiplication**
- **Division** (with zero-division protection)

Each function accepts two numbers and returns the computed result.

## File Structure

calculator/
├── calculator.js
└── README.md

## How to Run

This project runs with Node.js. Once Node is installed:

    node calculator.js

## Example Output

With firstNumber = 40 and secondNumber = 10:

    Add: 50
    Divide: 4
    Subtract: 30
    Multiply: 400

## Notes

The divide function includes zero-division protection, so dividing by 0 will not crash the program.