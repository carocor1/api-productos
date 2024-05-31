import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities';
import { ProductTypeModule } from './product-type/product-type.module';
import { ProductTypeModule } from './product-type/product-type.module';

@Module({
  imports: [ProductosModule, ProductTypeModule, TypeOrmModule.forRoot({
    type:'sqlite', 
    database:'productos.db',
    entities,
    synchronize:true, //me permite actualizar.
  }), ProductTypeModule],

  controllers: [AppController],
  providers: [AppService, ProductTypeModule],
})
export class AppModule {}
