const inquirer = require('inquirer');
const fs = require('fs');

//require objects

const Manager = require("./lib/Manager")
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createHtml = require('./src/createHTML.js');
const { rejects } = require('assert');

//Generate HTML Page


//Store team data
const teamData = [];

function app() {
        function createTeam() {

inquirer
    .prompt ([
    {
        type: 'list',
        message: 'What type of employee would you like to create?',
        name: 'createEmployee',
        choices: ["Manager", "Engineer", "Intern", "No more Employees"],
    },
    ])
    .then(function (choice) {
        switch (choice.createEmployee) {
            case "Manager":
                createManager();
                break;
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
           case "No more Employees":
            saveHtml();
        }
    });
}
    function createManager() {

    inquirer
    .prompt ([
    {
        type: 'text',
        name: 'managerName',
        message: "What is your manager's name?"
    },
    {
    type: 'text',
    name: 'managerId',
    message: "What is your team manager's ID number?"
    },
    {
    type: 'text',
    name: 'managerEmail',
    message: "What is your team manager's email address?"
    },
    {
        type: 'text',
        name: 'managerOfficeNumber',
        message: "What is your manager's office number?"
    },
    ])
    .then((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNumber,
        );
        teamData.push(manager);
        createTeam();
    });
    }

    function createEngineer() {
        inquirer
        .prompt([
    {
    type: 'text',
    name: 'engineerName',
    message: "What is your Engineer's name?"
    },
    {
    type: 'text',
    name: 'engineerId',
    message: "What is your team engineer's ID number?"
    },
    {
    type: 'text',
    name: 'engineerEmail',
    message: "What is your engineer's email address?"
    },
    {
        type: 'text',
        name: 'engineerGithub',
        message: "What is your engineer's github?"
    },
    ])
    .then((answers) => {
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGithub,
        );
        teamData.push(engineer);
        createTeam();
    });
}
function createIntern() {
    inquirer
    .prompt([
{
type: 'text',
name: 'internName',
message: "What is your Intern's name?"
},
{
type: 'text',
name: 'internId',
message: "What is your team Intern's ID number?"
},
{
type: 'text',
name: 'internEmail',
message: "What is your Intern's email address?"
},
{
    type: 'text',
    name: 'internSchool',
    message: "What is your Intern's school?"
},
])
.then((answers) => {
    const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool,
    );
    teamData.push(intern);
    createTeam();
});
}

createTeam();
};

function saveHtml() {
    fs.writeFile('./dist/index.html', createHtml(teamData), (err) => {
        //if there's an error, reject promise and send error
        if (err) {
            rejects(err);
            //return out of function
            return;
        }
    });
    }
app();
