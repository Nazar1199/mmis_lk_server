import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Teacher } from "./Teacher";
import { Discipline } from "./Discipline";
import { Group } from "./Group";

@Entity()
export class Timetable {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Teacher, (teacher) => teacher.timetable)
    teacher: Teacher;

    @ManyToOne(() => Discipline, (discipline) => discipline.timetable)
    discipline: Discipline;

    @Column()
    dateTime: Date;

    @Column()
    auditorium: number;

    @ManyToOne(() => Group, (group) => group.timetable)
    group: Group;
}