import {ApiProperty } from "@nestjs/swagger";
import { Column,DataType ,Table,Model, BelongsToMany } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreatinAttribute{
    value: string;
    description:string;
}

@Table({tableName:'roles'})
export class Role extends Model<Role,RoleCreatinAttribute>  {
    
    @ApiProperty({example: '1',description:'Unique key'})
    @Column({type: DataType.INTEGER,unique:true,autoIncrement:true, primaryKey:true})
    id: number;

    @ApiProperty({example:'ADMIN', description: 'User roles'})
    @Column({type: DataType.STRING, unique:true, allowNull:false})
    value: string;

    @ApiProperty({example: 'Administrator', description: 'role description'})
    @Column({type: DataType.STRING, allowNull:false})
    description:string;

    @BelongsToMany(()=> User, () => UserRoles)
    users: User[]
}
