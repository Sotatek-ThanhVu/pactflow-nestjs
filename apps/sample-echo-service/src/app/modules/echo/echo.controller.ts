import { Controller, Get, Query } from '@nestjs/common';
import { EchoService } from './echo.service';

@Controller('echo')
export class EchoController {
  constructor(private readonly echoService: EchoService) {}

  @Get()
  echo(@Query('m') message: string) {
    return this.echoService.echo(message);
  }
}
