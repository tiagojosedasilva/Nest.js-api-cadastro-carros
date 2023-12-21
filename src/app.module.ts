import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { UsersEntity } from './users/usersEntity';
import { AuthModule } from './auth/auth.module';
import { CarsModule } from './cars/cars.module';
import { CarEntity } from './cars/entities/car.entity';

@Module({
  imports: [ 
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // type: 'sqlite',
      // database: 'dev.db',
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname, UsersEntity, CarEntity],
      synchronize: true,
    // }),
    } as TypeOrmModuleOptions),
    UsersModule,
    AuthModule,
    CarsModule
   ],
  controllers: [],
  providers: [],
})

export class AppModule{}
