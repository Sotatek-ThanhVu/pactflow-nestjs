import { Module } from '@nestjs/common';
import { EchoController } from './echo.controller';
import { HttpModule } from '@nestjs/axios';
// import { ApiGatewayProviderMathModule } from '@sample-nx-project/api-gateway-provider-math';
// import { MathController } from './math.controller';

@Module({
  imports: [HttpModule],
  controllers: [EchoController],
})
export class ApiGatewayModule {}
