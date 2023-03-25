import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Student } from "./Student";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    email: string;

    @Column({ nullable: false})
    password: string;
    
    @OneToOne(() => Student)
    @JoinColumn()
    student: Student;
}