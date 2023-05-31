import {Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    
    constructor() {
        
    }

    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.
    }
}
