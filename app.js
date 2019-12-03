const chalk = require('chalk');
const inquirer = require('inquirer');

console.log(chalk.blue("Hello World!"));

let addContactQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
        default: () => { return "Johnny No-name" }
    },
    {
        type: "input",
        name: "phone",
        message: "What is your phone number?"
    }
]

function addContact() {
    let personalDetails = [];
    inquirer.prompt(addContactQuestions)
        .then(answers => {
            personalDetails.push(answers);
            console.log(personalDetails);
        })
}

addContact();