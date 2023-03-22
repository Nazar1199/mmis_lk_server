import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Timetable } from "./Timetable";
import { Certification } from "./Certification";

@Entity()
export class Discipline {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    field: string;

    @OneToMany(() => Timetable, (timetable) => timetable.discipline)
    timetable: Timetable[]

    @OneToMany(() => Certification, (certification) => certification.discipline)
    certification: Certification[]
}