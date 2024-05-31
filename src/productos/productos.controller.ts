import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductEntity } from 'src/entities/product.entity';
import { DeepPartial } from 'typeorm';
import { ProductosService } from './productos.service';

@Controller('products')
export class ProductosController {
    constructor(private service: ProductosService){}
    @Get('/:id')
    async findByID(@Param() param:{id:number}){
        return await this.service.findByID(param)
    }

    @Put('/:id')
    async actualizarProducto(@Param() param: {id:number}, @Body() productoActualizado: DeepPartial<ProductEntity>): Promise <ProductEntity>{
        return await this.service.actualizarProducto(param, productoActualizado);
    }
}
