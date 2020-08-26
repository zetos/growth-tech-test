import express, { Application } from 'express';
import expressPino from 'express-pino-logger';
import cors from 'cors';
import logger from './logger';
import { getUsers, getPosts } from './clients/jsonPlaceHolder';
import { enhancedPost } from './util';

export const createServer = (): Application => {
  const app = express();
  app.use(
    expressPino({
      logger,
    })
  );
  app.use(cors());
  app.use(express.json());

  app.get('/posts', async (_, res) => {
    const postsRes = await getPosts();
    const usersRes = await getUsers();
    const resData = enhancedPost(postsRes.data, usersRes.data);

    res.send(resData);
  });

  app.get('/', async (_, res) => {
    res.send({ success: true });
  });
  return app;
};

export const Server = {
  start: (port = 3001): void => {
    createServer().listen(port, () => {
      logger.info(`Server listening on port: ${port}`);
    });
  },
};
