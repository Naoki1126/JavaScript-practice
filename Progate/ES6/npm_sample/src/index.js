// import chalk from "chalk";
// console.log(chalk.bgCyan("これはテストメッセージです"));

import chalk from "chalk";
import readlineSync from "readline-sync";

let input = readlineSync.question("What's your name?: ");
console.log(chalk.magenta.bold.underline(input));