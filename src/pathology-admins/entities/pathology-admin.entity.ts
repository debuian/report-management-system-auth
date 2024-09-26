import { BaseEntity } from "src/utilities/baseEntity/base.entity.utils";
import { Column, Entity, Unique } from "typeorm";


@Entity({name:"PathologyAdmins"})
@Unique(['email'])
export class PathologyAdmin extends BaseEntity{
    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    role:pathologyRole;

    @Column()
    number:string;
}

export enum pathologyRole {
    ADMIN  = "amdin",
    RECEPTION = "reception"
}