import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductTypeService } from './product-type.service';
import { ProductTypeEntity } from 'src/entities/productType.entity';
import { DeepPartial } from 'typeorm';

@Controller('products-type')
export class ProductTypeController {
    constructor(private service: ProductTypeService){}

    @Post()
    //funcionalidad, agregar productos a la base de datos
    async createProduct (@Body() product: DeepPartial<ProductTypeEntity>): Promise <ProductTypeEntity> {
        return await this.service.createProductType(product);
    }

    @Get('/:id')
    async findByID(@Param() param:{id:number}){
        return await this.service.findByID(param)
    }
