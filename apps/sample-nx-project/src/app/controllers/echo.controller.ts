import { HttpService } from '@nestjs/axios';
import { Controller, Get, Query } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Controller('echo')
export class EchoController {
  constructor(private readonly httpService: HttpService) {}

  @Get()
  async echo(@Query('message') message: string) {
    const response = await firstValueFrom(
      this.httpService.get<string>(`http://0.0.0.0:3001/api/echo?m=${message}`)
    );
    return { echo: response.data };
  }
}
