import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Student } from "./Student";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    email: string;

    @Column({ nullable: false})
    password: string;
    
    @OneToMany(() => Student, (student) => student.profile)
    student: Student;
}