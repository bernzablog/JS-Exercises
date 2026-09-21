let score = 86;

if (score < 0 || score > 100) {
    console.log(`Score [${score}] is invalid`);
} else if (score > 75) {
    console.log(`Score [${score}] passed`);
} else {
    console.log(`Score [${score}] failed`);
}
