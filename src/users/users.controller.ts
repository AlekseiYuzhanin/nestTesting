import {Body, Controller, Post,Get,UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/roles/roles.model';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    
    constructor(private usersService: UsersService) {
        
    }

    @ApiOperation({summary: 'User creation'})
    @ApiResponse({status:200, type:User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({summary: 'User getting'})
    @ApiResponse({status:200, type:[User]})
    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Get()
    getAll(){
        return this.usersService.getAllUsers()
    }

    @ApiOperation({summary: 'Role giving'})
    @ApiResponse({status:200})
    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Get('/role')
    addRole(@Body() dto:AddRoleDto){
        return this.usersService.addRole(dto)
    }

    @ApiOperation({summary: 'ban user'})
    @ApiResponse({status:200})
    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Get('/ban')
    ban(@Body() dto:BanUserDto){
        return this.usersService.ban(dto)
    }
}
