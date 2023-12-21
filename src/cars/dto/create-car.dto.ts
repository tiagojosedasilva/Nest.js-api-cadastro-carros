import { IsNotEmpty, IsString } from "class-validator"

export class CreateCarDto {

    
    idUser: string
    emailUser: string
    
    @IsNotEmpty()
    @IsString()
    marca: string

    @IsNotEmpty()
    @IsString()
    modelo: string

    @IsNotEmpty()
    @IsString()
    ano: string
}
