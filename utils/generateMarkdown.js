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
  return `
  # ${data.title}
  ADD LICENSE BADGE
  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [license](#license)
  * [Questions](#questions)
  ## Description 
  ${data.description}
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Contributing 
  ${data.contributing}
  ## Tests 
  ${data.tests}
  ## License 
  ${data.license}
  ## Questions 
  If you would like to contact me directly with questions, you can send me an email to: ${data.email}
  You can find my GitHub profile at: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
