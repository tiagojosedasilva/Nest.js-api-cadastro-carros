import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersEntity } from './usersEntity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ 
    TypeOrmModule.forFeature([
      UsersEntity
  ])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [ UsersService ],
})
export class UsersModule {}
