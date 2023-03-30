// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

function licenseBadge(type)
{
  return `[![${type}](https://img.shields.io/badge/license-${type}-brightgreen.svg?style=flat-square)](LICENSE.md)`;
}
lic=[
{id:'APL',name:'Apache License 2.0'},
{id:'GNU3',name:'GNU General Public License v3.0'},
{id:'MIT',name:'MIT License'},
{id:'BSD2',name:'BSD 2-Clause "Simplified" license'},
{id:'BSD3',name:'BSD 3-Clause "New" or "Revised" License'},
{id:'Boost',name:'Boost Software License 1.0'},
{id:'CCZ1',name:'Creative Commons Zero v1.0 Universal'},
{id:'Eclipse',name:'Eclipse Public License 2.0'},
{id:'GNU A3',name:'GNU Affero General Public License v3.0'},
{id:'GNU P3',name:'GNU General Public License v2.0'},
{id:'GNU L2',name:'GNU Lesser General Public License v2.1'},
{id:'Mozilla 2',name:'Mozilla Public License 2.0'},
{id:'Unlicense',name:'The Unlicense'}
];


/*********************************** */
function writeReadme(rspObject) {
  
 // create readme
 var readMe = 
`# ${rspObject.title}

`;
// add badges
if((rspObject.license)!=undefined){
  readMe+=licenseBadge("rspObject.license");
};
if((rspObject.license)='mit'){
  readMe+=licenseBadge("rspObject.license");
};
// add description
if(rspObject.description){readMe+=
`

## Description

${rspObject.description}
`};

// add toc
if(true){readMe+=
`
## Table of Contents

<!—TOC—>
`;}

// add install instructions
if(rspObject.installInstructions){readMe+=
`
## Installation

${rspObject.installInstructions}
`};

// add usage info
if(rspObject.usageInfo){readMe+=
`
## Usage

${rspObject.usageInfo}
`;}

// add deployment
if(rspObject.deployment != undefined){readMe+=
`
### Deployment

${rspObject.deployment}
`;}

// add screen shots
if(true){readMe+=
`
### Screenshots

md  ![alt text](assets/images/screenshot.png)
`};

// add credits
if(rspObject.email != undefined){readMe+=
`
## Credits

${rspObject.email ? 'x' : 'y'}
`;}

// add references
if(rspObject.email != undefined){readMe+=
`
## References

${rspObject.email}
`;}

// add license text
if(rspObject.licenseText != undefined){readMe+=
`
## License

${rspObject.licenseText}
`;}

// add features
if(rspObject.features != undefined){readMe+=
`
## Features

${rspObject.features}
`;}

// add contrbute guidlines
if(rspObject.ContribeGuidelines != undefined){readMe+=
`
## How to Contribute

${rspObject.ContribeGuidelines}
`;}

// add test instructions
if(rspObject.testInstructions != undefined){readMe+=
`
## Tests

${rspObject.testInstructions}
`;}

// add feedback
if(rspObject.github != undefined){readMe+=
`
## Feedback

${rspObject.github}

${rspObject.email}
`};

// write readme file
fs.writeFile('output/READMEx.md',
 readMe,
 (err) =>
err ? false : true

 )
  return(true);
}

/*********************************** */
function writeReadmex(rspObject) {
  var mitlicenseBadge="![(https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)";
  var licenseText="";

  switch(rspObject.license){
    case "mit" : licenseBadge="(https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)"
                 licenseText="mit"

  }
  
 fs.writeFile('output/READMEx.md',

`# ${rspObject.title}

## Badges

[![Software License]${licenseBadge}

## Description

${rspObject.description}

## Table of Contents

<!—TOC—>

## Installation

${rspObject.installInstructions}~~~text

## Usage

${rspObject.usageInfo}

### Deployment

### Screenshots

md  ![alt text](assets/images/screenshot.png)

## Credits

${rspObject.email ? 'x' : 'y'}

## References

${rspObject.email}

## License

${licenseText}

## Features

${rspObject.features}

## How to Contribute

${rspObject.ContribeGuidelines}

## Tests

${rspObject.testInstructions}

## Feedback

${rspObject.github}

${rspObject.email}
` ,
 (err) =>
err ? false : true

 )

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
    
    writeReadme(response);
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



  