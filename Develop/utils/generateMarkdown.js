// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Linkedin](#linkedin)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Linkedin

${data.linkedin}

## Credits

${data.credits}

## License

![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)
`;


} module.exports = generateMarkdown;
