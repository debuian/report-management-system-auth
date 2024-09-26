import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PathologyAdminsService } from './pathology-admins.service';
import { CreatePathologyAdminDto } from './dto/create-pathology-admin.dto';
import { UpdatePathologyAdminDto } from './dto/update-pathology-admin.dto';

@Controller('pathology-admins')
export class PathologyAdminsController {
  constructor(private readonly pathologyAdminsService: PathologyAdminsService) {}

  @Post()
  create(@Body() createPathologyAdminDto: CreatePathologyAdminDto) {
    return this.pathologyAdminsService.create(createPathologyAdminDto);
  }

  @Get()
  findAll() {
    return this.pathologyAdminsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pathologyAdminsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePathologyAdminDto: UpdatePathologyAdminDto) {
    return this.pathologyAdminsService.update(+id, updatePathologyAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pathologyAdminsService.remove(+id);
  }
}
