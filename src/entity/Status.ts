import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { OrderingReferences } from "./OrderingReferences";

@Entity()
export class Status {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => OrderingReferences, (orderingReferences) => orderingReferences.status)
    orderingReferences: OrderingReferences[]
}