import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarroService } from './carro.service';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';

@Controller('carro')
export class CarroController {
  constructor(private readonly carroService: CarroService) {}

  @Post()
  async create(@Body() createCarroDto: CreateCarroDto) {
    return this.carroService.create(createCarroDto);
  }

  @Get()
  async findAll() {
    return this.carroService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.carroService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCarroDto: UpdateCarroDto) {
    return this.carroService.update(+id, updateCarroDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.carroService.remove(+id);
  }
}
