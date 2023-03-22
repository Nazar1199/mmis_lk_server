import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Group } from "./Group";
import { Profile } from "./Profile";
import { OrderingReferences } from "./OrderingReferences";
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
    reportCard: number;

    @ManyToOne(() => Group, (group) => group.student)
    group: Group;
    
    @Column({ nullable: false})
    phone: string;

    @Column({ nullable: false})
    birthdate: Date;

    @Column({ nullable: false})
    email: string;

    @OneToMany(() => OrderingReferences, (orderingReferences) => orderingReferences.student)
    orderingReferences: OrderingReferences[]

    @OneToMany(() => Profile, (profile) => profile.student)
    profile: Profile[]

    @OneToMany(() => Certification, (certification) => certification.student)
    certification: Certification[]
}
