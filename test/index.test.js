const {writeReadme} = require('../index.js');

/*
test('Write README', () => {
  const readme = new Readme;
  expect(readme.writeReadme()).toBe(true);
});
*/
var rspObject = {
  title:"My project",
  description:"The project is to generate a readme file",
  installInfo:"Copy to folder",
  usageInfo:"use it to build file",
  credits:"Here are the credits",
  contributeGuidelines:"Contribute by sending email",
  email:"m@abc.com",
  testInstructions:"Test it by running node index",
  licenceType:"MIT License",
  features:"here are features",
  deployment:"here is deployment",
  feedback:"enter feedback",
  references:"here are references",
  github:"my github"

}
describe('test genreadme',() => {
  describe('test writeReadme',() => {
    it('writeReadme should be true',() => {
            //const readmeData = new ReadmeData;
    expect(writeReadme(rspObject)).toEqual(true);
  })
})
});



