import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Profile } from "./Profile";

@Entity()
export class ProfileRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    name: string;

    @OneToMany(() => Profile, (profile) => profile.profileRole)
    profile: Profile[];
}