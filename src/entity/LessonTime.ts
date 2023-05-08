import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Timetable } from "./Timetable";

@Entity()
export class LessonTime {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    number: number;

    @Column({ nullable: false})
    startTime: string;

    @Column({ nullable: false})
    endTime: string;

    @OneToMany(() => Timetable, (timetable) => timetable.lessonTime)
    timetable: Timetable[]
}