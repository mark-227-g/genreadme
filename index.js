// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

function licenseBadge(type)
{
  return `[![${type}](https://img.shields.io/badge/license-${type}-brightgreen.svg?style=flat-square)](LICENSE.md)`;
}
const licenseTypes=[
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

/****************************************
 
 ****************************************/
class TOC {
  constructor(){
  }
  toc =[];
  addEntry(item) {
    this.toc.push(item);
    //console.log("item"+item);
   // console.log(this.toc);
  };
  render(){
    var printTOC="";
    this.toc.forEach(line => {
      printTOC+="- "+line+"\n";
    });
    return(printTOC);
  };
}

/****************************************
This function takes the response object as input
The steps are:
1) Look in the response object for the values
to be added to the readme
2) if the value exists add the value using 
a template literal.
3) add a line to the table of contents object.
 ****************************************/
function writeReadme(rspObject) {
  const toc = new TOC();
 // create readme
 var readMe = 
`# ${rspObject.title}
`;

//*** add description ***//
if(rspObject.description){readMe+=
`
## Description

${rspObject.description}
`;
toc.addEntry("[Description](#description)")};

//*** add toc ***//
if(true){readMe+=
`
## Table of Contents

__TOC__`;}

//*** add install instructions ***//
if(rspObject.installInfo){readMe+=
`
## Installation

${rspObject.installInfo}
`
toc.addEntry("[Installation](#installation)");
}
//***  add usage info ***//
if(rspObject.usageInfo){readMe+=
`
## Usage

${rspObject.usageInfo}
`;
toc.addEntry("[Usage](#usage)")}
//*** add screen shots ***//
if(true){readMe+=
`
### Screenshots
  
md  ![alt text](assets/images/screenshot.png)
`
  toc.addEntry("[Screenshots](#screenshots)");
  }
  
//***  add credits ***//
if(rspObject.credits != undefined){readMe+=
`
## Credits
  
${rspObject.credits}
`;
  toc.addEntry("[Credits](#credits)")}
  
  //***  add license text ***//
if(rspObject.licenseType != undefined){readMe+=
`
## License
  
${rspObject.licenseType}
`;
  toc.addEntry("[License](#license)")}

  //*** add badges ***//
  if((rspObject.licenseType)!=undefined){
    readMe+=
`
${licenseBadge("rspObject.licenseType")}
`
  };


  //***  add features ***//
if(rspObject.features != undefined){readMe+=
`
## Features
  
${rspObject.features}
`;
  toc.addEntry("[Features](#features)")}

  //***  add contrbute guidlines ***//
if(rspObject.contribeGuidelines != undefined){readMe+=
`
## How to Contribute
  
${rspObject.contribeGuidelines}
`;
  toc.addEntry("[How to Contribute](#how to Contribute)")}
  
//***  add test instructions ***//
if(rspObject.testInstructions != undefined){readMe+=
`
## Tests
  
${rspObject.testInstructions}
`;
  toc.addEntry("[Tests](#tests)")};
  
//*** add deployment ***//
if(rspObject.deployment != undefined){readMe+=
`
## Deployment

${rspObject.deployment}
`;
toc.addEntry("[Deployment](#deployment)")
};


//*** add references ***//
if(rspObject.references != undefined){readMe+=
`
## References

${rspObject.references}
${rspObject.email}
`;
toc.addEntry("[References](#references)")}

// add feedback
if(rspObject.feedback != undefined){readMe+=
`
## Feedback

${rspObject.github}
${rspObject.email}
${rspObject.feedback}
`
toc.addEntry("[Feedback](#feedback)")};
/****************************************
 After the readme has been created using the toc
 object replace __TOC__ with the contents
 ****************************************/
//<!—TOC—>
//console.log("sss:"+toc.render());
readMe=readMe.replace("__TOC__",toc.render());
//readMe+=toc.render();
// write readme file

/****************************************
 Write the README.md file to the output folder
 return true if successful otherwise return false
 ****************************************/
fs.writeFile('output/READMEx.md',
 readMe,
 (err) =>
err ? false : true

 )
  return(true);
}

/****************************************
 Create an array of questions for user input
 ****************************************/
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project's title?"
  }
  ,
  {
    type: "input",
    name: "description",
    message: "What is the project's description?"
  }
  ,
  {
    type: "input",
    name: "installInfo",
    message: "What are the install instructions?"
  }
  ,
  {
    type: "input",
    name: "usageInfo",
    message: "Enter usage information?"
  }
  ,
  {
    type: "input",
    name: "contributGuidelines",
    message: "Enter contribution guidelines?"
  }
  ,
  {
    type: "input",
    name: "testInstructions",
    message: "Enter test instructions"
  }
  ,
  {
    type: "input",
    name: "email",
    message: "what is your email?"
  }
  ,
  {
    type: "list",
    name: "licenseType",
    message: "Select your license type",
    choices: licenseTypes
  }
  
];

/****************************************
 Use inquirer to ask the questions
 once successfull make a call to the 
 writeReadme function
 ****************************************/
function askQuestions(){
  console.log("ask");
inquirer
.prompt(questions).then((response) => {
    return(response);
  });

};

/****************************************
 function to initialize app
 ****************************************/
function init() {
 
var rsp=askQuestions();
if(rsp){
  writeReadme(rsp);
}

}

/****************************************
 The init function is run when the process starts
 ****************************************/
init();

/****************************************
 export modules for testing with jest
 ****************************************/
module.exports={writeReadme};



  