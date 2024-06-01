import { Body, HttpException, Injectable, Param } from '@nestjs/common';
import { ProductEntity } from 'src/entities/product.entity';
import { DeepPartial } from 'typeorm';

@Injectable()
export class ProductosService {
    repository = ProductEntity
    async findByID(param: {id: number}){
        try{
            //el where me permite filtrar aquellos productos que tengan de nombre hola
            return await this.repository.find({ where: {
                id: param.id,
            }, 
        relations: {
            //me permite mostrar también el Tipo de Producto
            productType: true,
        }});
        } catch(error){
            throw new HttpException('Producto con ID ingresado no encontrado', 500)
        }
    }

    async actualizarProducto(param: { id: number }, productoActualizado: DeepPartial<ProductEntity>): Promise<ProductEntity> {
        try {
          const producto = await this.repository.findOne({ where: {id: param.id}});
          if (!producto) {
            throw new HttpException('El ID ingresado no corresponde a ningún producto', 404);
          }
          const productoActualizadoEntity = this.repository.merge(producto, productoActualizado);
          return await this.repository.save(productoActualizadoEntity);
        } catch (error) {
          throw new HttpException('Error al actualizar el producto', 500);
        }
      }    async createProduct (product: DeepPartial<ProductEntity>): Promise <ProductEntity> {
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
