import { Body, HttpException, Injectable, Param } from '@nestjs/common';
import { ProductEntity } from 'src/entities/product.entity';
import { DeepPartial } from 'typeorm';

@Injectable()
export class ProductosService {
    repository = ProductEntity

}
