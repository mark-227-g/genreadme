const writeReadme = require('../index.js');

var rspObject = {
  title:"My project",
  description:"The project is to generate a readme file",
  installInfo:"Copy to folder",
  usageInfo:"use it to build file",
  credits:"Here are the credits",
  contribeGuidelines:"Contribute by sending email to m@abc.com",
  email:"m@abc.com",
  testInstructions:"Test it by running node index",
  licenseType:"GNU3",
  features:"here are features",
  deployment:"here is deployment",
  feedback:"send me feedback",
  references:"here are references",
  github:"https://github.com/mark-227-g"
};

  describe('test genreadme',() => {
    describe('test writeReadme',() => {
      it('writeReadme should be true',() => {
        expect(writeReadme(rspObject)).toEqual(true);
    })
  })
});



