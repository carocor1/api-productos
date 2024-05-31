import { Body, HttpException, Injectable, Param } from '@nestjs/common';
import { ProductEntity } from 'src/entities/product.entity';
import { DeepPartial } from 'typeorm';

@Injectable()
export class ProductosService {
    repository = ProductEntity
    async createProduct (product: DeepPartial<ProductEntity>): Promise <ProductEntity> {
        try{
            return await this.repository.save(product);
        } catch(error){
            throw new HttpException('Error en la creación del producto', 500)
        }
    }

    async findAll(){
        return await this.repository.find()
    }

}
