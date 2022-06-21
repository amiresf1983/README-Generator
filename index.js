const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateReadme = require("./util/generateReadme");
const readmePrompts = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "provide a brief description about project?",
  },
  {
    type: "input",
    name: "installation",
    message: "what are the installations required for this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "what is the usage of project?",
  },
  {
    type: "input",
    name: "license",
    message: "what is the required license for this project?",
  },
  {
    type: "input",
    name: "contribution",
    message: "who contributed to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "what is the requirement to test the project?",
  },
  {
    type: "input",
    name: "questions",
    message: "how people can contact if there is any question?",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile("README1.md", data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}

function init() {
  inquirer.prompt(readmePrompts).then(function (data) {
    writeToFile("README1.md", generateReadme(data));
    console.log(data);
  });
}

init();
