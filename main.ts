#! /usr/bin/env node

import inquirer from "inquirer";
let todos = [];
let condition = true;

while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your todos?",
        },
        {
            name: 'secondQuestion',
            type: "confirm",
            message: 'Would you like to more in your todos?',
            default: 'yes',
        }
    ])

    todos.push(todoQuestions.firstQuestion)
    console.log(todos);
    condition = todoQuestions.secondQuestion;
}
