// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
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
  choices: ['Unlicense','MIT', 'Apache', 'ISC', 'GPLv3', 'AGPLv3'],
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
};

// TODO: Create a function to write README file
const writeToFile = (answers) =>
  `# <${answers.projectTitle}>
  ![Github license](https://img.shields.io/badge/license-${answers.license}-blue.svg)
  ## Description
  ${answers.description}

  ## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${answers.installationIns}

  ## Usage
  ${answers.usageInfo}

  ## License
  ${answers.license}
  
  ---

  ## Contributing
  ${answers.guidelines}

  ## Tests
  ${answers.test}

  ## Questions
  <a href="https://github.com/${answers.username}/">https://github.com/${answers.username}/</a>
  ###How to reach me with additional questions
  <a href="mailto:${answers.email}">${answers.email}</a>  
`;



// TODO: Create a function to initialize app
function init() {
  questions()
    .then((answers) => writeFileAsync('README.md', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();