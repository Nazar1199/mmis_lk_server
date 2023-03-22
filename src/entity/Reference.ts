import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { OrderingReferences } from "./OrderingReferences";

@Entity()
export class Reference {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => OrderingReferences, (orderingReferences) => orderingReferences.reference)
    orderingReferences: OrderingReferences[]
}