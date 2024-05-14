import { Test, TestingModule } from '@nestjs/testing';
import { IsasResolver } from './isas.resolver';
import { IsasService } from './isas.service';

describe('IsasResolver', () => {
  let resolver: IsasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IsasResolver, IsasService],
    }).compile();

    resolver = module.get<IsasResolver>(IsasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
