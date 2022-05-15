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
    name: "table of content",
    message: "what is the table of content?",
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
    message: "what are the questions related to this project?",
  },
];

fs.writeFile(fileName, data, function (err) {
  console.log(fileName);
  console.log(data);
  if (err) {
    return console.log(err);
  } else {
    console.log("success");
  }
});

function init() {
  inquirer.prompt(readmePrompts).then(function (data) {
    writeToFile("README.md", generateReadme(data));
    console.log(data);
  });
}

init();
