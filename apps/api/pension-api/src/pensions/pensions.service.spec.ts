import { Test, TestingModule } from '@nestjs/testing';
import { PensionsService } from './pensions.service';

describe('PensionsService', () => {
  let service: PensionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PensionsService],
    }).compile();

    service = module.get<PensionsService>(PensionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
