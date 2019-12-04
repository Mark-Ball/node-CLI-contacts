const inquirer = require('inquirer');
const fs = require('fs');

let contactList = [];

let searchContactQuestion = [
    {
        type: "input",
        name: "name",
        message: "Name:"
    }
]

let addContactQuestions = [
    {
        type: "input",
        name: "name",
        message: "Name:",
        default: () => { return "Johnny No-name" }
    },
    {
        type: "input",
        name: "phone",
        message: "Phone number:"
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

function searchContacts() {
    inquirer.prompt(searchContactQuestion)
        .then(answer => {
            for (contact of contactList) {
                if (contact.name === answer.name) {
                    console.log(contact.phone);
                    break;
                }
            }
        })
        .then(() => run())
}

function addContact() {
    inquirer.prompt(addContactQuestions)
        .then(answers => {
            contactList.push(answers);
            console.log(contactList);
            writeContacts();
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

function noContactToRemove() {
    console.log("There are no contacts to remove");
    run();
}

function writeContacts() {
    fs.writeFile('contacts.json', JSON.stringify(contactList, null, 2), function(err) {
        if (err) throw err;
        console.log("Contacts updated");
    })
}

function readContacts() {
    fs.readFile('contacts.json', 'utf-8', function(err, data) {
        if (err) {
            console.log(err);
            return;
        }
        contactList = JSON.parse(data);
    });
}

function run() {
    readContacts();
    inquirer.prompt([
        {
            type: "list",
            name: "selection",
            message: "What would you like to do?",
            choices: [
                "View all contacts",
                "Search for a contact",
                "Add a contact",
                "Remove a contact",
                "Quit"
            ]
        }
    ])
        .then(response => {
            if (response.selection === "View all contacts") {
                console.log(contactList);
                run();
            } else if (response.selection === "Search for a contact") {
                searchContacts();
            } else if (response.selection === "Add a contact") {
                addContact();
            } else if (response.selection === "Remove a contact") {
                contactList.length === 0 ? noContactToRemove() : removeContact();
            } else {
                return
            }
        })
}

module.exports = run;