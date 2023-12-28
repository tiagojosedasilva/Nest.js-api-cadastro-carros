import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService){}

    async login(user){
        const payload = {sub: user.id, email: user.email}
        
        console.log(this.jwtService)
        return {
            token: this.jwtService.sign(payload)
        }
        // return payload;
    }

    async validateUser(email: string, password: string){
        let user

        try {
            user = await this.userService.findOneOrFailEmail(email)
        } catch (error) {
            return null
        }

        const validPassword = bcrypt.compare(password, user.password);
        if(validPassword){
            // console.log(validPassword)
            return user
        }
        // console.log( 'log ' + validPassword)
        // console.log(user)
        return null;
    }
}
