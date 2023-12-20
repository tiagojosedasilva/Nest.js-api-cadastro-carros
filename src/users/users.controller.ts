import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Get()
    async findAll(){
        return this.userService.findAll()
    }

    @Post()
    async create(@Body() body: CreateUserDto){
        return this.userService.store(body)
    }
    
    @Get(':id')
    async findById(@Param('id') id: string){
       return this.userService.findOneOrFail(id);
    }

    @Patch(':id')
    async update(@Param('id') id, @Body() body: UpdateUserDto){
        return this.userService.update(id, body)
    }

    @Delete(':id')
    async destroy(@Param('id') id){
        return this.userService.destroy(id)
    }
}
