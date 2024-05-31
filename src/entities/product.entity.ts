import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductTypeEntity } from "./productType.entity";


@Entity('products')  //se le pasa el nombre de la tabla.
//baseEntity convierte a la clase en una clase repositorio.
export class ProductEntity extends BaseEntity{

    @PrimaryGeneratedColumn() //la columna ID va a ser la clave primaria y generale una secuencia numérica que vaya aumentando.
    id: number;

    @Column()
    name:string;

    @Column()
    price:number;


    //defino que el atributo que hace referencia es el products de la clase productsType
    @ManyToOne(() => ProductTypeEntity, (productType)=>productType.products)
    productType:ProductTypeEntity;
}

//ProductEntity().create()
//ProducyEntity().reload()