import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Group } from "./Group";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    name: string;

    @Column({ nullable: false})
    number: number;

    @OneToMany(() => Group, (group) => group.course)
    group: Group[]
}