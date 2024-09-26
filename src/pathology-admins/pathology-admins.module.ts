import { Module } from '@nestjs/common';
import { PathologyAdminsService } from './pathology-admins.service';
import { PathologyAdminsController } from './pathology-admins.controller';

@Module({
  controllers: [PathologyAdminsController],
  providers: [PathologyAdminsService],
})
export class PathologyAdminsModule {}
