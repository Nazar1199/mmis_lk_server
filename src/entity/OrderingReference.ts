import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Status } from "./Status";
import { Reference } from "./Reference";
import { Student } from "./Student";

@Entity()
export class OrderingReference {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Status, (status) => status.orderingReference)
    status: Status;

    @ManyToOne(() => Reference, (reference) => reference.orderingReference)
    reference: Reference;

    @Column('timestamp with time zone', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })  
    date: Date;

    @ManyToOne(() => Student, (student) => student.orderingReference)
    student: Student;
}