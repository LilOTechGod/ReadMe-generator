// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Your Project Title Here... ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide - What was your motivation? - Why did you build this project? - What problem does it solve?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you prefer.'
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your Linkedin for users to communicate with you?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
            choices: ['MIT', 'ISC', 'GNUPLv3'],
            filter(val) {
                return val.toLowerCase();
            }
        },
    ]).then((response) => {
        const markdownContent = generateMarkdown(response);
        writeToFile("readme.md", markdownContent)
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) console.log(err);
        else {
            console.log(fileName);
            console.log(data);
        }

    })
}