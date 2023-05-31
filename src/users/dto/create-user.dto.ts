import { ApiProperty } from "@nestjs/swagger";
import { appendFile } from "fs";

export class CreateUserDto{
    
    @ApiProperty({example: 'user@mail.ru', description:'email'})
    readonly email:string;
    @ApiProperty({example: '123456',description: 'password'})
    readonly password:string;
}