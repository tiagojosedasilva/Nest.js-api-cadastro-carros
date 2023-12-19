import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/infraestrutura/prisma/prisma.service';

@Injectable()
export class UsersService {

  constructor(private readonly prismaService: PrismaService){}

  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: {
        nome: createUserDto.nome,
        email: createUserDto.email,
        senha: createUserDto.senha
      }
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: number) {
    return this.prismaService.user.findFirst({
      where: {
        id
      }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: {
        id
      }, data: updateUserDto
    })
  }

  remove(id: number) {
    return this.prismaService.user.delete({where: {id}});
  }
}
