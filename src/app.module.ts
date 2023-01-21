import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

import keys from "./config/keys"

@Module({
  imports: [ProductModule, MongooseModule.forRoot(keys.mongoURI)],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
