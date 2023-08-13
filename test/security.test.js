const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../app');

const { expect } = chai;

chai.use(chaiHttp);

describe('SQL Injection Protection', () => {
  it('should not allow SQL injection in the username field', (done) => {
    const maliciousPayload = "admin'; DROP TABLE users; --";
    chai.request(app)
      .post('/login')
      .send({ username: maliciousPayload, password: 'somepassword' })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.text).to.equal('Invalid input');
        done();
      });
  });
});
