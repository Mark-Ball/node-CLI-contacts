const chalk = require('chalk');
const inquirer = require('inquirer');

console.log(chalk.blue("Hello World!"));

let contactList = [];

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

let removeContactQuestion = [
    {
        type: "list",
        name: "contact",
        message: "Which contact would you like to remove?",
        choices: contactList
    }
]

function addContact() {
    inquirer.prompt(addContactQuestions)
        .then(answers => {
            contactList.push(answers);
            console.log(contactList);
        })
}

function removeContact() {
    inquirer.prompt(removeContactQuestion)
        .then(answer => {
            console.log(answer);
        })
}

inquirer.prompt([
    {
        type: "list",
        name: "selection",
        message: "What would you like to do?",
        choices: [
            "View contacts",
            "Add a contact",
            "Remove a contact"
        ]
    }
])
    .then(response => {
        console.log(response)
        if (response.selection === "View contacts") {
            console.log(contactList);
        } else if (response.selection === "Add a contact") {
            addContact();
        } else {
            removeContact();
        }
    })

// contactList.length === 0 ? console.log("There are no contacts to remove") : removeContact();