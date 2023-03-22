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

    @Column()
    dateTime: Date;

    @Column()
    mark: number;

    @Column()
    numberOfHours: number;
}