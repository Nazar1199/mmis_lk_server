import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Student } from "./Student";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    email: string;

    @Column({ nullable: false})
    password: string;
    
    @ManyToOne(() => Student, (student) => student.profile)
    student: Student;
}