import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('math')
export class MathController {
  constructor(
    @Inject('MATH') private readonly mathServiceClient: ClientProxy
  ) {}

  @Get('sum')
  sum() {
    return this.mathServiceClient.send('sum', [1, 3, 5]);
  }
}
