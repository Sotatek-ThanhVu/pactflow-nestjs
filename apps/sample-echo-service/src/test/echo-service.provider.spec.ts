import { Test } from '@nestjs/testing';
import { AppModule } from '../app/app.module';
import { INestApplication } from '@nestjs/common';
import { Verifier } from '@pact-foundation/pact';

describe('EchoService Provider', () => {
  let app: INestApplication;
  let appUrl: string;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
    await app.listen(3000);
    appUrl = await app.getUrl();

    console.log(appUrl);
  });
  afterAll(() => app.close());

  it('Validate EchoService', async () => {
    const verifier = new Verifier({
      provider: 'sample-echo-service',
      providerBaseUrl: appUrl,
      pactBrokerUrl: process.env.PACT_BROKER_BASE_URL,
      pactBrokerToken: process.env.PACT_BROKER_TOKEN,
      providerVersion: 'main',
      providerVersionBranch: 'main',
      consumerVersionSelectors: [{ latest: true }],
      // publishVerificationResult: true,
      // enablePending: true,
    });
    const result = await verifier.verifyProvider();
    console.log(result);
  });
});
