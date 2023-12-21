import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class CarEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    idUser: string

    @Column()
    emailUser: string

    @Column()
    marca: string

    @Column()
    modelo: string

    @Column()
    ano: string

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string
}
