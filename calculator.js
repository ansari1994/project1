import { sum } from "./add.js";
import { sub } from "./subtract.js";
import { mutiply } from "./multiply.js";
import { divide } from "./divide.js";
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "num1",
        message: "Enter Your First Number:",
        type: "number",
    },
    {
        name: "num2",
        message: "Enter Your Second Number:",
        type: "number",
    },
    {
        name: "operator",
        message: "Select Operator:",
        type: "list",
        choices: ["+", "-", "*", "/"],
    },
]);
let { num1, num2, operator } = answers;
let result = 0;
if (num1 !== undefined && num2 !== undefined && operator) {
    switch (operator) {
        case "+":
            result = sum(num1, num2);
            break;
        case "-":
            result = sub(num1, num2);
            break;
        case "*":
            result = mutiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            console.log("Invalid operator.");
    }
    console.log("Result is", result);
}
else {
    console.log("Invalid input.");
}
;
