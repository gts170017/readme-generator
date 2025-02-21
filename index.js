//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

console.log("README Generator starting...");

//an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
    validate: input => input ? true : "Please enter a project title"
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project:",
    validate: input => input ? true : "Please enter a description"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
    default: "npm install"
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this application?"
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines?"
  },
  {
    type: "input",
    name: "tests",
    message: "What are the test instructions?",
    default: "npm test"
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    validate: input => input ? true : "Please enter your GitHub username"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: input => {
      const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
      return valid ? true : "Please enter a valid email address";
    }
  }
];

//function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("Success! Your README.md file has been generated.");
  });
}

//function to initialize app
function init() {
  console.log("Initializing app...");
  inquirer.prompt(questions)
    .then(answers => {
      console.log("Got answers, generating README...");
      const markdownContent = generateMarkdown(answers);
      writeToFile("README.md", markdownContent);
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
}

// Function call to initialize app
init();