import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { OrderingReference } from "./OrderingReference";

@Entity()
export class Reference {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    name: string;

    @OneToMany(() => OrderingReference, (orderingReference) => orderingReference.reference)
    orderingReference: OrderingReference[]
}