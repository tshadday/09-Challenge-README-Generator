// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"Title",
        input:"What is the Title of the project?",
    },
    {
        type:"input",
        name:"Description",
        input:"Describe your project",
    },
    {
        type:"input",
        name:"Installation",
        input:"How can people install your project?",
    },
    {
        type:"input",
        name:"Test",
        input:"How can people test your project?",
    },
    {
        type:"input",
        name:"Usage",
        input:"What should the user know about using your product?",
    },
    {
        type:"list",
        name:"License",
        input:"What license does your project have?",
        choices: ["Apache", "MIT", "BSD", "GPL", "None"]
    },
    {
        type:"input",
        name:"Contributing",
        input:"What would you like to tell the people that wish to contribute?",
    },
    {
        type:"input",
        name:"Github",
        input:"Enter your Github username.",
    },
    {
        type:"input",
        name:"Email",
        input:"Enter your email address.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
