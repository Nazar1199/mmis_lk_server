import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Teacher } from "./Teacher";

@Entity()
export class Position {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    name: string;

    @OneToMany(() => Teacher, (teacher) => teacher.position)
    teacher: Teacher[]
}