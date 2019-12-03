const inquirer = require('inquirer');

let contactList = [
    { name: "Mark", phone: '0431321341' },
    { name: "Ellie", phone: '0421567321' },
    { name: "Ricky", phone: '0481942422' }
];

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
}

module.exports = {
    addContact,
    removeContact,
    contactList
}