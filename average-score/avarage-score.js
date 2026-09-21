const scores = [86, 92, 78, 88, 83];
let total = 0;
let average = 0;

scores.forEach(number => {
    total += number;
})

average = total / scores.length;

console.log(`Scores  = ${scores}\nTotal   = ${total}\nAverage = ${average}`);