import supertest from 'supertest';

import { Server } from '../src/server';

// let server: SetupServer;

beforeAll(async () => {
  Server.start(3000);
  global.testRequest = supertest(Server.getApp());
});

// afterAll(async() => await server.close());
