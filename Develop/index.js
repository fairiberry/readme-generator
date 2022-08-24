// TODO: Include packages needed for this application
const fs = require("fs/promises");
const inquirer = require("inquirer");
const path = require("path");
const generateMD = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
console.log("");
console.log("");
console.log("☆.。.:*。・°☆.。.:*・°☆.。.:*。・°☆.。.:*。・°☆.。.:*・°☆.。.:*・°☆");
console.log("⁺˚*•̩̩͙✩•̩̩͙*˚⁺‧͙⁺˚*•̩̩͙⋆⁺₊⋆Welcome to my README Generator!⋆⁺₊⋆•̩̩͙*˚⁺‧͙⁺˚*•̩̩͙✩•̩̩͙*˚⁺‧͙");
console.log("☆.。.:*。・°☆.。.:*・°☆.。.:*。・°☆.。.:*。・°☆.。.:*・°☆.。.:*・°☆");
console.log("");
console.log("");

const questions = [
    {
        type: "input",
        name: "name",
        message: ".。.:*。・°☆ Hello! What is your name?"
    },
    {
        type: "input",
        name: "githubUsername",
        message: ".。.:*。・°☆ What's your GitHub username?"
    },
    {
        type: "input",
        name: "emailAddress",
        message: ".。.:*。・°☆ What is your email?"
    },
    {
        type: "input",
        name: "projectName",
        message: ".。.:*。・°☆ What is the name of your project?"
    },
    {
        type: "input",
        name: "projectDescription",
        message: ".。.:*。・°☆ Please describe your project. Why did you make this project, and what is its purpose?"
    },
    {
        type: "list",
        name: "license",
        message: ".。.:*。・°☆ What licenses does your project need?",
        choices: ["MIT", "GPL", "Apache", "GNU", "Other/None"]
    },
    {
        type: "input",
        name: "projectInstallation",
        message: ".。.:*。・°☆ What command needs to be ran to install dependencies?",
    },
    {
        type: "input",
        name: "projectUsage",
        message: ".。.:*。・°☆ What needs to be known about using this repository?",
    }, 
];

// TODO: Create a function to write README file
function createREADME(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        console.log("");
        console.log("");
        console.log("☆.。.:*・°☆.。.:*。・°☆.。.:*。・°☆.。.:*・°☆.。.:*・°☆");
        console.log("⁺˚*•̩̩͙✩•̩̩͙*˚⁺‧͙⁺˚*•̩̩͙⋆⁺₊⋆Generating README.md⋆⁺₊⋆•̩̩͙*˚⁺‧͙⁺˚*•̩̩͙✩•̩̩͙*˚⁺‧͙");
        console.log("☆.。.:*・°☆.。.:*。・°☆.。.:*。・°☆.。.:*・°☆.。.:*・°☆");
        console.log("");
        console.log("");
        createREADME("README.md", generateMD(responses))
    })
}

// Function call to initialize app
init();

// I don't think I have to do anything down here for this, not entirely sure though @__@
