import { HttpException, Injectable } from '@nestjs/common';
import { ProductTypeEntity } from 'src/entities/productType.entity';
import { DeepPartial } from 'typeorm';

@Injectable()
export class ProductTypeService {

    repository = ProductTypeEntity

    async createProductType (productType: DeepPartial<ProductTypeEntity>): Promise <ProductTypeEntity> {
        //usamos un try porque es una funcion asíncrona.
        try{
            //si se ejecuta correctamente, guarda el producto en el repositorio.
            return await this.repository.save(productType);
        } catch(error){
            throw new HttpException('Error en la creación de un product-type', 500)
        }
    }

    async findByID(param: {id: number}){
        try{
            //el where me permite filtrar aquellos productos que tengan de nombre hola
            return await this.repository.find({ where: {
                id: param.id,
            }});
        } catch(error){
            throw new HttpException('Error en la búsqueda de un product-type por ID', 500)
        }
    }
}