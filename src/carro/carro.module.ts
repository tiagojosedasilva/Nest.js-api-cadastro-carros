import { Module } from '@nestjs/common';
import { CarroService } from './carro.service';
import { CarroController } from './carro.controller';
import { PrismaModule } from 'src/infraestrutura/prisma/prisma.module';

@Module({
  imports:[ PrismaModule],
  controllers: [CarroController],
  providers: [CarroService],
  exports: [CarroService]
})
export class CarroModule {}
