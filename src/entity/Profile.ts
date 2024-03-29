import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { Student } from "./Student";
import { ProfileRole } from "./ProfileRole";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    email: string;

    @Column({ nullable: false})
    password: string;
    
    @OneToOne(() => Student)
    @JoinColumn()
    student: Student;

    @ManyToOne(() => ProfileRole, (profileRole) => profileRole.profile)
    profileRole: ProfileRole;
}