// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a short description of the project?',
      },
      {
        type: 'input',
        name: 'contents',
        message: 'Create a table of contents.',//links direct you like navbar
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information.',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter the contribution guidelines',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter the test instructions.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',//creates link to profile
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
      },
      {
        type: 'list',
        message: 'Choose a license for your application:',
        name: 'license',
        choices: ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)', '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)', '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'],//creates a badge near the top of the readme file
      },
    ]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const generateREADME = ({title, description, contents, installation, usage, contributing, tests, github, email, license}) =>
`${title} 
ADD LICENSE BADGE
Table of Contents ${contents}
Description ${description}
Installation ${installation}
Usage ${usage}
Contributing ${contributing}
Tests ${tests}
License ${license}
Questions 
If you would like to contact me with questions, you can send me an email to: ${email}
GITHUB: https://github.com/${github}`;
// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)));
        .then(() => console.log('successfully wrote to the readme'));
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();