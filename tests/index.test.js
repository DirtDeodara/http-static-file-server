const app = require('../lib/app');
const request = require('supertest');

describe('tests', () => {
  it('retuns the content of index.html', () => {
    return request(app)
      .get('/index.html')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('Welcome!'));
      });
  });

  it('retuns the content of harvey.html', () => {
    return request(app)
      .get('/harvey.html')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('page'));
      });
  });

});
