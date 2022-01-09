// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-lightgrey.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license == 'MIT') {  
    return "https://opensource.org/licenses/MIT";
  } if (license == 'Mozilla-Public') {
    return "https://opensource.org/licenses/MPL-2.0";
  } if (license == 'Apache') {
    return "https://opensource.org/licenses/Apache-2.0";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `## License 
  
  Distributed under the ${license} License.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const githubLink = `https://github.com/${data.username}`
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


  ## Description
    ${data.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${renderLicenseSection(data.license)}

    ## Contributing
    Contributers: ${data.contributing}


    ## Tests
    Run '${data.tests}' to start project

    ## Questions
    GitHub Profile: ${githubLink}
    Reach me at ${data.email} with additional questions
 
  `;
}


module.exports = generateMarkdown;
