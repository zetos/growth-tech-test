# Growthtech test

**The test description**:

*Uma empresa deseja realizar um monitoramento de outros grupos empresariais em um site X para analisar seus posts. Sua tarefa é criar uma simples API que captura apenas os usuários (http://jsonplaceholder.typicode.com/users) os quais a empresa em que trabalham fazem parte de um grupo e exiba seus posts (http://jsonplaceholder.typicode.com/posts) unido do nome do funcionário e sua empresa. Além disso criar uma tela para facilitar a leitura desses posts.*

## Running projects

> First make sure that you are not using the ports: `3000` and `3001`.

Go to the backend folder and execute:

```sh
 $ npm i
npm: packages installed.
 $ npm run prod
{"level":30,"time":1598412520935,"pid":5416,"hostname":"LOVELACE-3301","msg":"Server listening on port: 3001"}
```

You should see a json formated success log generated by `pino`:

```json
    {"level":30,"time":1598412520935,"pid":5416,"hostname":"LOVELACE-3301","msg":"Server listening on port: 3001"}
```

Now go to the frontend folder and run:

```sh
 $ npm i
npm: packages installed.
 $ npm run build
next: built.
 $ npm start
ready - started server on http://localhost:3000
```

Go to the `http://localhost:3000` to see the front end.

## Additional Features

* **SSR**: Implemented with NextJs.
* **Accessibility**: With chakra UI.
* **Graceful Shutdown**: Listening to node exceptions & signals to exit.
* **unit tests**: Implemented on the backend with Jest.
* **e2e tests**: Implemented on the backend with Jest, Supertest e Nock.
* **JSON formated Logger**: Implemented with Pino.
* **CI**: With Github actions.
* **FP Paradigm for the data processing**: Although using the Express framework with the imperative format, the data processing is implemented in a declarative way with RamdaJS free of state or mutations.
