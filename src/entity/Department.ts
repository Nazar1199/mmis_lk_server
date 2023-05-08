import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Teacher } from "./Teacher";

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    name: string;

    @OneToMany(() => Teacher, (teacher) => teacher.department)
    teacher: Teacher[]
}