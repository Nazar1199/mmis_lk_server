import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Certification } from "./Certification";

@Entity()
export class TypeControl {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    name: string;

    @OneToMany(() => Certification, (certification) => certification.typeControl)
    certification: Certification[]
}