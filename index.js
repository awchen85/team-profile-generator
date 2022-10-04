const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

//require objects

const Manager = require("./lib/Manager")
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createHtml = require('./src/createHTML');

//Generate HTML Page
const savePath = path.join(__dirname, "dist", "index.html");

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
           case "No more employees":
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
            answers.managerd,
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
    name: 'name',
    message: "What is your Engineer's name?"
    },
    {
    type: 'text',
    name: 'id',
    message: "What is your team engineer's ID number?"
    },
    {
    type: 'text',
    name: 'email',
    message: "What is your engineer's email address?"
    },
    {
        type: 'text',
        name: 'github',
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
name: 'name',
message: "What is your Intern's name?"
},
{
type: 'text',
name: 'id',
message: "What is your team Intern's ID number?"
},
{
type: 'text',
name: 'email',
message: "What is your Intern's email address?"
},
{
    type: 'text',
    name: 'school',
    message: "What is your Intern's School?"
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

function saveHtml() {
    fs.writeFileSync(savePath, createHtml(teamData), "UTF-8");
        }
}

app();