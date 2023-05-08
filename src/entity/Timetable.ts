import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Teacher } from "./Teacher";
import { Discipline } from "./Discipline";
import { Group } from "./Group";
import { Auditorium } from "./Auditorium";
import { LessonType } from "./LessonType";

@Entity()
export class Timetable {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Teacher, (teacher) => teacher.timetable)
    teacher: Teacher;

    @ManyToOne(() => Discipline, (discipline) => discipline.timetable)
    discipline: Discipline;

    @Column({ nullable: false})
    dateTime: Date;

    @ManyToOne(() => Auditorium, (auditorium) => auditorium.timetable)
    auditorium: Auditorium;

    @ManyToOne(() => LessonType, (lessonType) => lessonType.timetable)
    lessonType: LessonType;

    @ManyToOne(() => Group, (group) => group.timetable)
    group: Group;
}