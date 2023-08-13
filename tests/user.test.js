const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
// Path to your Express app file
const should = chai.should();

chai.use(chaiHttp);

describe('User Registration', () => {
  it('should register a user', (done) => {
    chai.request(server)
      .post('/register') // Adjust this if your route is different
      .send({ username: 'testuser', password: 'testpassword' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('User registered successfully');
        done();
      });
  });
});
