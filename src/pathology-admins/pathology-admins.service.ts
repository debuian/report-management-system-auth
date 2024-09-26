import { Injectable } from '@nestjs/common';
import { CreatePathologyAdminDto } from './dto/create-pathology-admin.dto';
import { UpdatePathologyAdminDto } from './dto/update-pathology-admin.dto';

@Injectable()
export class PathologyAdminsService {
  create(createPathologyAdminDto: CreatePathologyAdminDto) {
    return 'This action adds a new pathologyAdmin';
  }

  findAll() {
    return `This action returns all pathologyAdmins`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pathologyAdmin`;
  }

  update(id: number, updatePathologyAdminDto: UpdatePathologyAdminDto) {
    return `This action updates a #${id} pathologyAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} pathologyAdmin`;
  }
}
