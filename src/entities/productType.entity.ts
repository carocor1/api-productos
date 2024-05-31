import { BaseEntity, Column, Entity,  OneToMany,  PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('productTypes') //se le pasa el nombre de la tabla.
export class ProductTypeEntity extends BaseEntity {

    @PrimaryGeneratedColumn() //la columna ID va a ser la clave primaria y generale una secuencia numérica que vaya aumentando.
    id: number;

    @Column()
    name:string;

    @OneToMany(() => ProductEntity, (product) => product.productType)
    products:ProductEntity[];
}

