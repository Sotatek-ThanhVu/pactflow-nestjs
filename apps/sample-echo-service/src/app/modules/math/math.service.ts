import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  async sum(data: number[]) {
    return (data || []).reduce((a, b) => a + b);
  }
}
