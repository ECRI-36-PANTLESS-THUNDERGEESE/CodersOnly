const request = require('supertest');
const server = 'http://localhost:3000';

describe('Login Verification', () => {
  afterAll(async () => {
    await request(server).delete('/api/blobfish');
  });

  it('Checks if logout functionailty works', () =>
    request(server).delete('/api/blobfish').expect(200));

  it('Responds with True if account is valid', () =>
    request(server)
      .post('/api/verification')
      .send({ username: 'blobfish', password: 123 })
      .then((data) => {
        expect(data.body).toEqual(true);
      }));

  it('Responds with false if account is invalid', () =>
    request(server)
      .post('/api/verification')
      .send({ username: 'fake', password: 'test' })
      .then((data) => {
        expect(data.body).toEqual(false);
      }));
});

describe('Check if cookies are received and Session is created', () => {
  beforeAll(async () => {
    await request(server).delete('/api/Lemur');
  });

  afterAll(async () => {
    await request(server).delete('/api/Lemur');
  });

  it('should check if cookies are received and session is created', async () => {
    const resp = await request(server)
      .post('/api/verification')
      .send({ username: 'Lemur', password: '123' });

    console.log(resp.headers['set-cookie']);

    await request(server)
      .get('/api/checkSession')
      .set('Cookie', resp.headers['set-cookie'])
      .then((res) => {
        expect(res.body).toEqual('Lemur');
      });
  });
});
