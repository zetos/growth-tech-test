import supertest from 'supertest';

import { Server, createServer } from '../src/server';

// let server: SetupServer;

beforeAll(() => {
  const app = createServer();
  global.testRequest = supertest(app);
  // global.testRequest = supertest(Server.getApp());
});

// afterAll(async() => await server.close());
