import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Timetable } from "./Timetable";

@Entity()
export class LessonType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    name: string;

    @Column({ nullable: false})
    abbr: string;

    @OneToMany(() => Timetable, (timetable) => timetable.lessonType)
    timetable: Timetable[]
}