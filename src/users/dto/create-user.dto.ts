import { ApiProperty } from "@nestjs/swagger";
import { IsString,Length,IsEmail } from "class-validator";

export class CreateUserDto{
    
    @ApiProperty({example: 'user@mail.ru', description:'email'})
    @IsString({message: 'must be string'})
    @IsEmail({},{message: 'Incorrect email'})
    readonly email:string;
    @ApiProperty({example: '123456',description: 'password'})
    @Length(4,16,{message: "Must be more 4 symbols and less 16 symbols"})
    @IsString({message: 'must be string'})
    readonly password:string;
}