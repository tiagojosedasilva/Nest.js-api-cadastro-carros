import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {

    constructor(private userService: UsersService){}

    async validateUser(nome: string, senha: string): Promise<any>{
        //const user = await this.userService.findOne(nome);
    }
}
