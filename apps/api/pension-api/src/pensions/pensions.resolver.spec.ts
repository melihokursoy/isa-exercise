import { Test, TestingModule } from '@nestjs/testing';
import { PensionsResolver } from './pensions.resolver';
import { PensionsService } from './pensions.service';

describe('PensionsResolver', () => {
  let resolver: PensionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PensionsResolver, PensionsService],
    }).compile();

    resolver = module.get<PensionsResolver>(PensionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
