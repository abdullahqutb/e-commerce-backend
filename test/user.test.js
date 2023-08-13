const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../app');

const should = chai.should();

chai.use(chaiHttp);

describe('User Registration', () => {
  it('should register a user', (done) => {
    chai.request(app)
      .post('/register')
      .send({ username: 'h', password: 'b' })
      .end((err, res) => {
        // console.log('res.body', res.body, res);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Registration successful!');
        done();
      });
  });
});
