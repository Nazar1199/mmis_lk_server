import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Teacher } from "./Teacher";
import { Discipline } from "./Discipline";
import { Student } from "./Student";

@Entity()
export class Certification {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Discipline, (discipline) => discipline.certification)
    discipline: Discipline;

    @ManyToOne(() => Student, (student) => student.certification)
    student: Student;

    @ManyToOne(() => Teacher, (teacher) => teacher.certification)
    teacher: Teacher;

    @Column({ nullable: false})
    dateTime: Date;

    @Column({ nullable: false})
    mark: number;

    @Column({ nullable: false})
    numberOfHours: number;
}