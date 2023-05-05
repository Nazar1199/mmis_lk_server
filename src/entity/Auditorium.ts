import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Timetable } from "./Timetable";

@Entity()
export class Auditorium {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    name: string;

    @OneToMany(() => Timetable, (timetable) => timetable.auditorium)
    timetable: Timetable[]
}