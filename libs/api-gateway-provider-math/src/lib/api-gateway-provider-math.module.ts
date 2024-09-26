import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  providers: [
    {
      provide: 'MATH',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: { host: '0.0.0.0', port: 3001 },
        });
      },
    },
  ],
  exports: ['MATH'],
})
export class ApiGatewayProviderMathModule {}
