import nock from 'nock';
import postsWithUserInfo from '../mockedData/postsWithUserInfo.json';

describe('Posts integration tests', () => {
  it('should return a list of posts with the user name & company.', async () => {
    // nock.recorder.rec(); // intercept requests
    nock('http://jsonplaceholder.typicode.com:80', { encodedQueryParams: true })
      .get('/posts')
      .reply(
        200,
        [
          {
            userId: 1,
            id: 1,
            title:
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body:
              'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
          },
          {
            userId: 1,
            id: 2,
            title: 'qui est esse',
            body:
              'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
          },
          {
            userId: 2,
            id: 17,
            title: 'fugit voluptas sed molestias voluptatem provident',
            body:
              'eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo',
          },
        ],
        [
          'Date',
          'Wed, 26 Aug 2020 02:05:55 GMT',
          'Content-Type',
          'application/json; charset=utf-8',
          'Transfer-Encoding',
          'chunked',
          'Connection',
          'close',
          'Set-Cookie',
          '__cfduid=db3e2230ae4850eb6bde6dbd9b8a973641598407555; expires=Fri, 25-Sep-20 02:05:55 GMT; path=/; domain=.typicode.com; HttpOnly; SameSite=Lax',
          'X-Powered-By',
          'Express',
          'X-Ratelimit-Limit',
          '1000',
          'X-Ratelimit-Remaining',
          '999',
          'X-Ratelimit-Reset',
          '1598402214',
          'Vary',
          'Origin, Accept-Encoding',
          'Access-Control-Allow-Credentials',
          'true',
          'Cache-Control',
          'max-age=43200',
          'Pragma',
          'no-cache',
          'Expires',
          '-1',
          'X-Content-Type-Options',
          'nosniff',
          'Etag',
          'W/"6b80-Ybsq/K6GwwqrYkAsFxqDXGC7DoM"',
          'Via',
          '1.1 vegur',
          'CF-Cache-Status',
          'HIT',
          'Age',
          '5346',
          'cf-request-id',
          '04ca1cd3140000156fc8990200000001',
          'Server',
          'cloudflare',
          'CF-RAY',
          '5c89fd982b9a156f-EWR',
        ]
      );

    nock('http://jsonplaceholder.typicode.com:80', { encodedQueryParams: true })
      .get('/users')
      .reply(
        200,
        [
          {
            id: 1,
            name: 'Anton LaVey',
            username: 'lavey666',
            email: 'lavey@satan.com',
            address: {
              street: 'Kulas Light',
              suite: 'Apt. 556',
              city: 'Gwenborough',
              zipcode: '92998-3874',
              geo: { lat: '-37.3159', lng: '81.1496' },
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
              name: 'Church of Satan Group',
              catchPhrase: 'Ave Satanas',
              bs: 'a religious organization',
            },
          },
          {
            id: 2,
            name: 'Ada Lovelace',
            username: 'lovelace',
            email: 'Shanna@melissa.tv',
            address: {
              street: 'Victor Plains',
              suite: 'Suite 879',
              city: 'Wisokyburgh',
              zipcode: '90566-7771',
              geo: { lat: '-43.9509', lng: '-34.4618' },
            },
            phone: '010-692-6593 x09125',
            website: 'anastasia.net',
            company: {
              name: 'Mathematician Group',
              catchPhrase: 'Badass ppl',
              bs: 'mother of computers',
            },
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            address: {
              street: 'Douglas Extension',
              suite: 'Suite 847',
              city: 'McKenziehaven',
              zipcode: '59590-4157',
              geo: { lat: '-68.6102', lng: '-47.0653' },
            },
            phone: '1-463-123-4447',
            website: 'ramiro.info',
            company: {
              name: 'Romaguera-Jacobson',
              catchPhrase: 'Face to face bifurcated interface',
              bs: 'e-enable strategic applications',
            },
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            address: {
              street: 'Hoeger Mall',
              suite: 'Apt. 692',
              city: 'South Elvis',
              zipcode: '53919-4257',
              geo: { lat: '29.4572', lng: '-164.2990' },
            },
            phone: '493-170-9623 x156',
            website: 'kale.biz',
            company: {
              name: 'Robel-Corkery',
              catchPhrase: 'Multi-tiered zero tolerance productivity',
              bs: 'transition cutting-edge web services',
            },
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            address: {
              street: 'Skiles Walks',
              suite: 'Suite 351',
              city: 'Roscoeview',
              zipcode: '33263',
              geo: { lat: '-31.8129', lng: '62.5342' },
            },
            phone: '(254)954-1289',
            website: 'demarco.info',
            company: {
              name: 'Keebler LLC',
              catchPhrase: 'User-centric fault-tolerant solution',
              bs: 'revolutionize end-to-end systems',
            },
          },
        ],
        [
          'Date',
          'Wed, 26 Aug 2020 02:05:56 GMT',
          'Content-Type',
          'application/json; charset=utf-8',
          'Transfer-Encoding',
          'chunked',
          'Connection',
          'close',
          'Set-Cookie',
          '__cfduid=de4abf5fa6ead96b518f151153171d27d1598407556; expires=Fri, 25-Sep-20 02:05:56 GMT; path=/; domain=.typicode.com; HttpOnly; SameSite=Lax',
          'X-Powered-By',
          'Express',
          'X-Ratelimit-Limit',
          '10',
          'X-Ratelimit-Remaining',
          '9',
          'X-Ratelimit-Reset',
          '1593853985',
          'Vary',
          'Origin, Accept-Encoding',
          'Access-Control-Allow-Credentials',
          'true',
          'Cache-Control',
          'max-age=43200',
          'Pragma',
          'no-cache',
          'Expires',
          '-1',
          'X-Content-Type-Options',
          'nosniff',
          'Etag',
          'W/"160d-1eMSsxeJRfnVLRBmYJSbCiJZ1qQ"',
          'Via',
          '1.1 vegur',
          'CF-Cache-Status',
          'HIT',
          'Age',
          '10564',
          'cf-request-id',
          '04ca1cd41d00001546a51cf200000001',
          'Server',
          'cloudflare',
          'CF-RAY',
          '5c89fd99c9371546-EWR',
        ]
      );

    const { body, status } = await global.testRequest.get('/posts');
    expect(status).toBe(200);
    expect(body).toEqual(postsWithUserInfo);
  });

  it('should return 404 for the wrong request method.', async () => {
    const { status } = await global.testRequest.post('/posts');
    expect(status).toBe(404);
  });
});
