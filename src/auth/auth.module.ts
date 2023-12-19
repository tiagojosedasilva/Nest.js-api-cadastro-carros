import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CarroModule } from 'src/carro/carro.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [ UsersModule ],
  providers: [AuthService]
})
export class AuthModule {}
