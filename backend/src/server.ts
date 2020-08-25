import express, { Express } from 'express';
import expressPino from 'express-pino-logger';
import cors from 'cors';
import logger from './logger';
import { getUsers, getPosts } from './clients/jsonPlaceHolder';
import { enhancedPost } from './util';

const app = express();

app.get('/', async (_, res) => {
  const postsRes = await getPosts();
  const usersRes = await getUsers();

  const resData = enhancedPost(postsRes.data, usersRes.data);

  res.send(JSON.stringify(resData));
});

export const Server = {
  start: (port = 3000): void => {
    app.use(
      expressPino({
        logger,
      })
    );
    app.use(
      cors({
        origin: '*',
      })
    );
    app.listen(port, () => {
      logger.info(`Server listening on port: ${port}`);
    });
  },
  getApp: (): Express => app,
};
