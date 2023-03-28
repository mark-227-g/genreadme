// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
// *****

class ReadmeData {
  // Title section
  title= "";
  description="";
  installInstructions="";
  usageInfo="";
  ContribeGuidelines="";
  testInstructions="";
  license="";
  github=""
  email= "";

}
/*********************************** */
function writeReadme(rspObject) {

  
 fs.writeFile('output/READMEx.md',

`# ${rspObject.title}
## Badges
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
## Description
\`\`\`
${rspObject.description}
\`\`\`
## Table of Contents
\`\`\`
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
\`\`\`

## Installation
\`\`\`
${rspObject.installInstructions}
 \`\`\`
## Usage
\`\`\`
${rspObject.usageInfo}
\`\`\`

${"```md ![alt text](assets/images/screenshot.png)```"}

## Credits
\`\`\`
${rspObject.email}
\`\`\`
## License
\`\`\`
${rspObject.license}
\`\`\`
## Features
\`\`\`
${rspObject.features}
\`\`\`
## How to Contribute
\`\`\`
${rspObject.ContribeGuidelines}
\`\`\`
## Tests
\`\`\`
${rspObject.testInstructions}
\`\`\`
## Feedback
\`\`\`${rspObject.github}

${rspObject.email}
\`\`\`
` ,
 (err) =>
err ? false : true

 )





/*
  rmStream.write(`# ${rspObject.title}`);
  rmStream.write(`## Description`);
  rmStream.write(` ${rspObject.description}`);
  rmStream.write(`## Table of Contents`);
  rmStream.write(` ${rspObject.TOC}`);
  rmStream.write(`## Installation Instructions`);
  rmStream.write(` ${rspObject.installInstructions}`);
  rmStream.write(`## Usage`);
  rmStream.write(` ${rspObject.usageInfo}`);
  rmStream.write(`## License`);
  rmStream.write(` ${rspObject.license}`);
  rmStream.write(`## Contributing`);
  rmStream.write(` ${rspObject.ContribeGuidelines}`);
  rmStream.write(`## Testing`);
  rmStream.write(` ${rspObject.testInstructions}`);
  rmStream.write(`## Feedback`);
  rmStream.write(` ${rspObject.github}`);
  rmStream.write(` ${rspObject.email}`);
  */
 // rmStream.end();
  
  return(true);
}

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "what is your title?"
  },
  {
    type: "input",
    name: "email",
    message: "what is your email?"
  }
]


function askQuestions(){
inquirer
.prompt(questions).then((response) => {
    console.log(response);
    const filename=`${response.title}`
    writeReadme(response)
    /*
    fs.writeFile(filename,JSON.stringify(response,null,'\t')
    , (err) =>
       err ? console.error(err) : console.log('Success!')
    )
    */
  });
  return("done");
};
module.exports = questions;
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
askQuestions();
}

// Function call to initialize app
// jest documents https://jestjs.io/docs/getting-started
//init();

// jest test
function sum(a, b) {
    return a + b;
  }
module.exports={sum,writeReadme};



  