import { Test, TestingModule } from '@nestjs/testing';
import { PathologyAdminsService } from './pathology-admins.service';

describe('PathologyAdminsService', () => {
  let service: PathologyAdminsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PathologyAdminsService],
    }).compile();

    service = module.get<PathologyAdminsService>(PathologyAdminsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
