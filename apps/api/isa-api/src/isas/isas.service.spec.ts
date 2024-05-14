import { Test, TestingModule } from '@nestjs/testing';
import { IsasService } from './isas.service';

describe('IsasService', () => {
  let service: IsasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IsasService],
    }).compile();

    service = module.get<IsasService>(IsasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
