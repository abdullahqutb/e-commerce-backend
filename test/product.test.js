const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../app');

chai.use(chaiHttp);

describe('Product Listing', () => {
  it('should list all products', (done) => {
    chai.request(app)
      .get('/products')
      .end((err, res) => {
        // console.log('res.body', res.body, res);
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
