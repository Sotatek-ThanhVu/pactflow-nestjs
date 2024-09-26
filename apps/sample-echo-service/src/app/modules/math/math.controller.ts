import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MathService } from './math.service';

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @MessagePattern('sum')
  sum(data: number[]) {
    return this.mathService.sum(data);
  }
}
