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

module.exports = {
    addContact,
    removeContact,
    contactList
}