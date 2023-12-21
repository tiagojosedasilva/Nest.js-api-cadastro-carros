import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { hashSync } from 'bcrypt'


@Entity()
export class UsersEntity{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @UpdateDateColumn()
    deleteAt: string

    @BeforeInsert()
    hashpassword(){
        this.password = hashSync(this.password, 10);
    }
}