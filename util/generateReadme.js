function generateReadme(data) {
  return `


# ${Data.title}
https://github.com/${data.username})/${data.title}

#description
${data.description}

# table of Contents 
* [installation](#installation)
*[usage](#usage)
*[license](#license)
*[contribution](#contribution)
*[tests](#tests)
*[questions](#questions)

# installation 
requied installations for this project as below
# usage
to use this project, ${data.usage} 
# license
the project is under ${data.license} license.
# contribution 
contribution: ${data.contribution}
# tests
requirements for running this project: ${data.tests}
# questions
for any inquiries please contact ${data.user}
`;
}

module.exports = generateReadme;
