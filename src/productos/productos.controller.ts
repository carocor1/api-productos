import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductEntity } from 'src/entities/product.entity';
import { DeepPartial } from 'typeorm';
import { ProductosService } from './productos.service';

@Controller('products')
export class ProductosController {
    constructor(private service: ProductosService){}

}
