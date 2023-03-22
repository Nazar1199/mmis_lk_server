import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Group } from "./Group";

@Entity()
export class Faculty {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    name: string;

    @OneToMany(() => Group, (group) => group.faculty)
    group: Group[]
}