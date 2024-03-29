import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";
import { Group } from "./Group";
import { Profile } from "./Profile";
import { OrderingReference } from "./OrderingReference";
import { Certification } from "./Certification";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    lastName: string;

    @Column({ nullable: false})
    firstName: string;

    @Column({ nullable: false})
    patronymic: string;

    @Column({ nullable: false})
    reportCard: string;

    @ManyToOne(() => Group, (group) => group.student)
    group: Group;
    
    @Column({ nullable: false})
    phone: string;

    @Column({ nullable: false})
    birthdate: string;

    @Column({ nullable: true})
    photo: string;

    @Column({ nullable: false})
    email: string;

    @OneToMany(() => OrderingReference, (orderingReference) => orderingReference.student)
    orderingReference: OrderingReference[]

    @OneToMany(() => Certification, (certification) => certification.student)
    certification: Certification[]
}
