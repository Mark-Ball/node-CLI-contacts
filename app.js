const chalk = require('chalk');
const inquirer = require('inquirer');
const run = require ("./functions");
const fs = require('fs');

console.log(chalk.blue("Hello World!"));

let contactList = [
    { name: "Mark", phone: "0431321341" },
    { name: "Ellie", phone: "0433453123" }
]

// fs.writeFile('contacts.json', JSON.stringify(contactList, null, 2), function(err) {
//     if (err) throw err;
//     console.log("Contacts updated");
// })

// fs.readFile('contacts.json', 'utf-8', function(err, data) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     let parsedData = JSON.parse(data);
//     console.log(parsedData);
// });

run();