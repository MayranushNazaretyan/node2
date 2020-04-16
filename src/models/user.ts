import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    login: string;

    @Column()
    password: string;

    @Column()
    age: number;

    @Column()
    isDeleted: boolean;
}
