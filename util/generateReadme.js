function generateReadme(data) {
  return `


## ${data.title}
https://github.com/amiresf1983

## description
${data.description}

## table of Contents 
- [installation](#installation)
- [usage](#usage)
- [license](#license)
- [contribution](#contribution)
- [tests](#tests)
- [questions](#questions)

## installation 
requied installations for this project as below: ${data.installation}
## usage
to use this project, ${data.usage} 
## license
the project is under ${data.license} license.
## contribution 
the contributors for this project: ${data.contribution}
## tests
requirements for running this project: ${data.tests}
## questions
for any inquiries please contact ${data.user}
`;
}

module.exports = generateReadme;
