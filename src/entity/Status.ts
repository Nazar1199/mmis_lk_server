import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { OrderingReference } from "./OrderingReference";

@Entity()
export class Status {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    name: string;

    @OneToMany(() => OrderingReference, (orderingReference) => orderingReference.status)
    orderingReference: OrderingReference[]
}