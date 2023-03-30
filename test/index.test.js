const {writeReadme} = require('../index.js');

/*
test('Write README', () => {
  const readme = new Readme;
  expect(readme.writeReadme()).toBe(true);
});
*/
var rspObject = {
  title:"my project",
  description:"project description",
  email:"mark"

}
describe('test genreadme',() => {
  describe('test writeReadme',() => {
    it('writeReadme should be true',() => {
            //const readmeData = new ReadmeData;
    expect(writeReadme(rspObject)).toEqual(true);
  })
})
});


