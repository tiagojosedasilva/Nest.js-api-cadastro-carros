import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Repository } from 'typeorm';
import { CarEntity } from './entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CarsService {

  constructor(
    @InjectRepository(CarEntity)
    private carRepository: Repository<CarEntity>
  ){}

  create(createCarDto: CreateCarDto) {
    const car = this.carRepository.create(createCarDto)
    return this.carRepository.save(car)
  }

  findAll() {
    return this.carRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
