import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards, Req } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('cars')
export class CarsController {
  constructor(
    private readonly carsService: CarsService) {}

  @Post()
  create(@Req() req: Request &{user: {id: string, email: string}},@Body() createCarDto: CreateCarDto) {
    createCarDto.idUser = req.user.id;
    createCarDto.emailUser = req.user.email
    return this.carsService.create(createCarDto);
  }

  @Get()
  findAll(@Req() req: Request &{user: {id: string, email: string}}) {
    console.log(req.user)
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
