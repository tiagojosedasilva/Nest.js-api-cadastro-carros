import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, Matches, minLength } from "class-validator"

export class CreateUserDto{
    
    @IsNotEmpty()
    @IsString()
    firstName: string
    
    @IsNotEmpty()
    @IsString()
    lastName: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsStrongPassword()
    password: string

}