import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions, Repository} from 'typeorm';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './usersEntity';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>
        ){}
     
    async findAll(){
        return this.usersRepository.find()
    }

    async findOneOrFail(id: string){
        return this.usersRepository.findOneOrFail({where: {id}})
    }

    async findOneOrFailEmail(email: string){
        return this.usersRepository.findOneOrFail({where: {email}})
    }


    async store(user: CreateUserDto){
        const newUser = this.usersRepository.create(user)
        newUser.hashpassword()
        return this.usersRepository.save(newUser)

    }

    async update(id: string, data){
        const user = await this.findOneOrFail(id);
        this.usersRepository.merge(user, data)
        return this.usersRepository.save(user)
    }

    async destroy(id: string){
        await this.findOneOrFail(id)
        this.usersRepository.delete(id)
    }
}
