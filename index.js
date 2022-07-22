// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the Title of the project?",
    },
    {
        type:"input",
        name:"description",
        message:"Describe your project",
    },
    {
        type:"input",
        name:"installation",
        message:"How can people install your project?",
    },
    {
        type:"input",
        name:"test",
        message:"How can people test your project?",
    },
    {
        type:"input",
        name:"usage",
        message:"What should the user know about using your product?",
    },
    {
        type:"list",
        name:"license",
        message:"What license does your project have?",
        choices: ["Apache", "MIT", "BSD", "GPL", "None"]
    },
    {
        type:"input",
        name:"contributing",
        message:"What would you like to tell the people that wish to contribute?",
    },
    {
        type:"input",
        name:"github",
        message:"Enter your Github username.",
    },
    {
        type:"input",
        name:"email",
        message:"Enter your email address.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        writeToFile("README.md", generateMarkdown(response));
    });
};

// Function call to initialize app
init();
