import { PartialType } from '@nestjs/mapped-types';
import { CreatePathologyAdminDto } from './create-pathology-admin.dto';

export class UpdatePathologyAdminDto extends PartialType(CreatePathologyAdminDto) {}
