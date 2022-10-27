const request = require('supertest');
const server = 'http://localhost:3000';
const { MongoClient } = require('mongodb');
const User = require('/Users/rebeccashesser/github/projects/CodersOnly/server/userModel.js');

describe('Route integration', () => {
  describe('/friends', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status', () =>
        request(server).get('/api/friends').expect(200));
    });
  });
});

describe('Match logic', () => {
  describe('/api/Randy/blobfish/yes', () => {
    describe('PATCH', () => {
      it('responds with 200 status', () =>
        request(server).patch('/api/Randy/blobfish/yes').expect(200));
    });
  });
});

describe('Match logic', () => {
  const currUser = 'Randy';
  describe(`/api/${currUser}`, () => {
    describe('GET', () => {
      it('responds with 200 status', () =>
        request(server).get('/api/testuser').expect(201));
    });
  });
});

describe('/api', () => {
  const newUser = {
    username: 'test123',
    password: 'test',
    age: 5,
    location: 'NY',
    proglang: 'javascript',
    matches: {},
    comment: 'test',
    url: 'test',
  };
  describe('POST', () => {
    afterAll(async () => {
      await User.deleteOne({ username: 'test123' });
    });
    it('responds with content-type json/application and status 201', async () => {
      const response = await request(server).post('/api').send(newUser);
      expect(response.type).toBe('application/json');
      expect(response.statusCode).toBe(201);
    });
  });
});
