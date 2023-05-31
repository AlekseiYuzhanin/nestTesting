import { Model } from "sequelize-typescript";
interface UserCreatinAttribute {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreatinAttribute> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
}
export {};
