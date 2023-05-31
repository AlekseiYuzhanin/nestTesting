import {ApiProperty } from "@nestjs/swagger";
import { Column,DataType ,Table,Model } from "sequelize-typescript";

interface UserCreatinAttribute{
    email: string;
    password:string;
}

@Table({tableName:'users'})
export class User extends Model<User,UserCreatinAttribute>  {
    
    @ApiProperty({example: '1',description:'Unique key'})
    @Column({type: DataType.INTEGER,unique:true,autoIncrement:true, primaryKey:true})
    id: number;

    @ApiProperty({example:'user@mail.ru', description: 'Post box'})
    @Column({type: DataType.STRING, unique:true, allowNull:false})
    email: string;

    @ApiProperty({example: '123456', description: 'password user'})
    @Column({type: DataType.STRING, allowNull:false})
    password:string;

    @ApiProperty({example: true, description: 'banned or not?'})
    @Column({type: DataType.BOOLEAN, defaultValue:false})
    banned: boolean;
    
    @ApiProperty({example: 'dont be bully', description: 'Ban reason'})
    @Column({type: DataType.STRING, allowNull:true})
    banReason:string;
}