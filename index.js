#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Your first number", type: "number", name: "A" },
    { message: "Enter Your second number", type: "number", name: "B" },
    {
        message: "what u choose to calculate",
        type: "list",
        choices: ["add", "sub", "mult", "divide"],
        name: "operator",
    },
]);
if (answer.operator === "add") {
    console.log(answer.A + answer.B);
}
else if (answer.operator === "sub") {
    console.log(answer.A - answer.B);
}
else if (answer.operator === "mult") {
    console.log(answer.A * answer.B);
}
else if (answer.operator === "divide") {
    console.log(answer.A / answer.B);
}
else {
    ("the value is invalid");
}
