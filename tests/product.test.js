describe('Product Listing', () => {
  it('should list all products', (done) => {
    chai.request(server)
      .get('/products') // Adjust if your route is different
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
