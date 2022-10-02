const inquirer = require('inquirer');
const Employee = require ('./lib/Employee');

function createTeam() {
    this.employee;
}
    inquirer
    .prompt ({
        type: 'text',
        name: 'managerName',
        message: "What is your manager's name?"
    .then(({ name }) => {
        this.employee = new Manager(name);
    }),
    type: 'text',
    name: 'ID',
    message: "What is your team manager's ID number?"
    .then(({ id }) => {
        this.employee = new Employee(id);
    }),
    type: 'text',
    name: 'email',
    message: 'What is your email address?'
    .then(({ email }) => {
        this.employee = new Employee(email);
    }),
    type: 'checkbox',
    name: 'role',
    message: 'What is your role?',
    choices: ['Employee', 'Manager', 'Enginer', 'Intern']
    .then(({ role }) => {
        this.employee = new Employee(role);
        if (role === 'Manager') {
        }
    }),
});

module.exports = Team;
