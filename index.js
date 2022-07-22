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
        type:"",
        name:"",
        input:"",
    },
    {
        type:"",
        name:"",
        input:"",
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
