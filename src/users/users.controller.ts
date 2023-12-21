import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserInterceptor } from 'src/interceptors/user.interceptor';

@UseInterceptors(UserInterceptor)
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll(){
        return this.userService.findAll()
    }

    @Post()
    async create(@Body() body: CreateUserDto){
        return this.userService.store(body)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async findById(@Param('id') id: string){
       return this.userService.findOneOrFail(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async update(@Param('id') id, @Body() body: UpdateUserDto){
        return this.userService.update(id, body)
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async destroy(@Param('id') id){
        return this.userService.destroy(id)
    }
}
