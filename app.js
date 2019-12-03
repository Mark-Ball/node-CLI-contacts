const chalk = require('chalk');
const inquirer = require('inquirer');
const { addContact, removeContact, contactList } = require ("./functions");

console.log(chalk.blue("Hello World!"));

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