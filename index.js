// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is a description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions packages?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the project used for?",
        name: "usage",
    },
    {
        type: "list",
        message: "What type of licence do you have?",
        name: "license",
        choices: ["MIT", "Apache2.0", "BSD3", "ISC", "none"]
    },
    {
        type: "input",
        message: "Did anyone help with contributing?",
        name: "contribution",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    }    
]

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {
 //   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
//}


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Md created");
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response)
        writeToFile("README.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();
