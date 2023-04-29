import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Certification } from "./Certification";
import { Timetable } from "./Timetable";

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

    @Column({ nullable: false})
    position: string;

    @OneToMany(() => Timetable, (timetable) => timetable.teacher)
    timetable: Timetable[]

    @OneToMany(() => Certification, (certification) => certification.teacher)
    certification: Certification[]
}