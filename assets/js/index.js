const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    message: 'Project title:',
    name: 'projectTitle',
  },
  {
    type: 'input',
    message: 'Description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Installation instructions:',
    name: 'installationIns',
  },
  {
    type: 'input',
    message: 'Usage information:',
    name: 'usageInfo',
  },
  {
    type: 'input',
    message: 'Contribution guidelines:',
    name: 'guidelines',
  },
  {
    type: 'input',
    message: 'Test instructions:',
    name: 'test',
  },
  {
    type: 'list',
    message: 'Choose the license:',
    name: 'license',
    choices: ['A', 'B', 'C'],
  },
  {
    type: 'input',
    message: 'What is your user name?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
]);
