import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Status } from "./Status";
import { Reference } from "./Reference";
import { Student } from "./Student";

@Entity()
export class OrderingReferences {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Status, (status) => status.orderingReferences)
    status: Status;

    @ManyToOne(() => Reference, (reference) => reference.orderingReferences)
    reference: Reference;

    @Column({ nullable: false})
    date: Date;

    @ManyToOne(() => Student, (student) => student.orderingReferences)
    student: Student;
}