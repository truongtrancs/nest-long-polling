import { Test, TestingModule } from '@nestjs/testing';
import { PollingController } from './polling.controller';
import { PollingService } from './polling.service';

describe('PollingController', () => {
  let controller: PollingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PollingController],
      providers: [PollingService],
    }).compile();

    controller = module.get<PollingController>(PollingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
