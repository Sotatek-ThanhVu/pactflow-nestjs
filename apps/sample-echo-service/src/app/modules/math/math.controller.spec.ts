import { INestApplication } from '@nestjs/common';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';
import { MathModule } from './math.module';

describe('Test', () => {
  let app: INestApplication;
  let client: ClientProxy;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        MathModule,
        ClientsModule.register([
          { name: 'MathService', transport: Transport.TCP },
        ]),
      ],
    }).compile();
    app = moduleRef.createNestApplication();
    app.connectMicroservice({ transport: Transport.TCP });
    await app.startAllMicroservices();
    await app.init();

    client = app.get('MathService');
    await client.connect();
  });
  afterAll(async () => {
    await app.close();
    await client.close();
  });

  it('Test sum', (done) => {
    const response = client.send('sum', [1, 3, 5]);
    response.subscribe((sum) => {
      console.log(sum);
      done();
    });
  });
});
