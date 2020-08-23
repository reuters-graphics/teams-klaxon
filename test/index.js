const TeamsKlaxon = require('../dist');
const expect = require('expect.js');

const teamsKlaxon = new TeamsKlaxon();

describe('test TeamsKlaxon', function() {
  this.timeout(10000);

  it('Should return regions', function() {
    expect(teamsKlaxon.run()).to.be('hello world');
  });
});
