import { Matchers, Pact } from '@pact-foundation/pact';
import axios from 'axios';
import path from 'path';

const provider = new Pact({
  consumer: 'sample-nx-project',
  provider: 'sample-echo-service',
  dir: path.resolve(process.cwd(), 'pacts'),
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  logLevel: 'info',
  port: 1234,
});

describe('EchoService Consumer', () => {
  let baseUrl: string;

  beforeAll(async () => {
    const { port } = await provider.setup();
    baseUrl = 'http://localhost:' + port;
  });
  afterEach(() => provider.verify());
  afterAll(() => provider.finalize());

  it('Echo', async () => {
    await provider.addInteraction({
      state: 'Echo message',
      uponReceiving: 'A request to echo service',
      withRequest: {
        method: 'GET',
        path: '/api/echo',
        query: {
          m: 'Hello',
        },
      },
      willRespondWith: {
        status: 200,
        body: Matchers.like({ echo: 'Hello' }),
      },
    });

    const response = await axios.get(baseUrl + '/api/echo', {
      params: { m: 'Hello' },
    });
    expect(response.status).toEqual(200);
    expect(response.data).toEqual({ echo: 'Hello' });
  });
});
