const inquirer = require('inquirer');

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
        name: "name",
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
        .then(() => run())
}

function removeContact() {
    inquirer.prompt(removeContactQuestion)
        .then(answer => {
            // to delete a contact from the array
            // first identify the index of that contact
            // second splice it from the array
            contactList.forEach((obj, i) => {
                if (obj.name === answer.name) {
                    contactList.splice(i, 1);
                }
            })
        })
        .then(() => run())
}

function run() {
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
            if (response.selection === "View contacts") {
                console.log(contactList);
                run();
            } else if (response.selection === "Add a contact") {
                addContact();
            } else {
                contactList.length === 0 ? console.log("There are no contacts to remove") : removeContact();
            }
        })
}

module.exports = run;