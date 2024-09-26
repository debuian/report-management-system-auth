import { Test, TestingModule } from '@nestjs/testing';
import { PathologyAdminsController } from './pathology-admins.controller';
import { PathologyAdminsService } from './pathology-admins.service';

describe('PathologyAdminsController', () => {
  let controller: PathologyAdminsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PathologyAdminsController],
      providers: [PathologyAdminsService],
    }).compile();

    controller = module.get<PathologyAdminsController>(PathologyAdminsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
