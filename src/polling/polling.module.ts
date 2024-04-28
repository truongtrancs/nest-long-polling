import { Module } from '@nestjs/common';
import { PollingService } from './polling.service';
import { PollingController } from './polling.controller';

@Module({
  controllers: [PollingController],
  providers: [PollingService],
})
export class PollingModule {}
