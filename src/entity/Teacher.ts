import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Certification } from "./Certification";
import { Timetable } from "./Timetable";
import { Position } from "./Position";
import { Department } from "./Department";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    lastName: string;

    @Column({ nullable: false})
    firstName: string;

    @Column({ nullable: false})
    patronymic: string;

    @Column({ nullable: true})
    photo: string;

    @Column({ nullable: false})
    email: string;

    @Column({ nullable: false})
    phone: string;

    @ManyToOne(() => Position, (position) => position.teacher)
    position: Teacher;

    @ManyToOne(() => Department, (department) => department.teacher)
    department: Teacher;

    @OneToMany(() => Timetable, (timetable) => timetable.teacher)
    timetable: Timetable[]

    @OneToMany(() => Certification, (certification) => certification.teacher)
    certification: Certification[]
}