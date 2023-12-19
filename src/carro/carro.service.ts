import { Injectable } from '@nestjs/common';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { PrismaService } from 'src/infraestrutura/prisma/prisma.service';

@Injectable()
export class CarroService {

  constructor(private prisma: PrismaService){}

  async create(carro: CreateCarroDto) {
    return this.prisma.carro.create({
      data: {
        marca: carro.marca,
        modelo: carro.modelo,
        ano: carro.ano
      }
    })
  }

  async findAll() {
    return this.prisma.carro.findMany();
  }

  async findOne(id: number) {
    return this.prisma.carro.findFirst({
      where: {
        id
      }
    });
  }

  async update(id: number, carro: UpdateCarroDto) {
    return this.prisma.carro.update({
      where: {id},
      data:{
        marca: carro.marca,
        modelo: carro.modelo,
        ano: carro.ano
      }
    });
  }

  async remove(id: number) {
    return this.prisma.carro.delete({
      where: {
        id
      }
    })
  }
}
