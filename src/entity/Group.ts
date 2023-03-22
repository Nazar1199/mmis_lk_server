import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import { Timetable } from "./Timetable";
import { Student } from "./Student";
import { Faculty } from "./Faculty";
import { Course } from "./Course";

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    name: string;

    @ManyToOne(() => Faculty, (faculty) => faculty.group)
    faculty: Faculty;

    @ManyToOne(() => Course, (course) => course.group)
    course: Course;

    @OneToMany(() => Student, (student) => student.group)
    student: Student[]

    @OneToMany(() => Timetable, (timetable) => timetable.group)
    timetable: Timetable[]
}