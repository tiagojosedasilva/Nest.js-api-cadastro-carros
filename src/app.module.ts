import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarroModule } from './carro/carro.module';
import { AuthModule } from './auth/auth.module';
import { CarroService } from './carro/carro.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CarroModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
