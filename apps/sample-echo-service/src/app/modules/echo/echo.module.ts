import { Module } from '@nestjs/common';
import { EchoController } from './echo.controller';
import { EchoService } from './echo.service';

@Module({
  imports: [],
  controllers: [EchoController],
  providers: [EchoService],
})
export class EchoModule {}
