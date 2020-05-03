import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';
import { User } from "./user";

export enum Permission {
    'READ' = 'READ',
    'WRITE' = 'WRITE',
    'DELETE' = 'DELETE',
    'SHARE' = 'SHARE',
    'UPLOAD_FILES' = 'UPLOAD_FILES'
}

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column({
        type:"enum",
        enum: Permission,
        array: true,
        default: [Permission.READ]
    })
    permission: Permission[];

    @ManyToMany(type => User)
    @JoinTable()
    user: User[];
}


