import { Injectable } from '@nestjs/common';

@Injectable()
export class EchoService {
  async echo(message: string) {
    return { echo: message };
  }
}
