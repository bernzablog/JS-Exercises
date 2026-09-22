# JavaScript Grade Evaluator

This project calculates a learner's average score from three test scores and evaluates whether they passed or failed, based on a passing threshold of 75.

## Features

The script includes the following operations:

- **Calculate Average** — computes the average of three scores, rounded to 2 decimal places
- **Evaluate Result** — returns "Passed" if the average is 75 or higher, otherwise "Failed"

## File Structure

js-grade-evaluator/
├── grade-evaluator.js
└── README.md

## How to Run

This project runs with Node.js. Once Node is installed:

    node grade-evaluator.js

## Example Output

With learnerName = "Ana Santos", score1 = 90, score2 = 85, score3 = 88:

    Ana Santos has an average of 87.67 and Passed.

## Notes

The passing threshold is set to 75. Scores below this average will return "Failed".