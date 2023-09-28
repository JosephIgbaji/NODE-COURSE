const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("How are are you: ", (age) => {
  age >= 18
    ? console.log("You are qualified")
    : console.log("You below privilege");
  rl.close();
});
