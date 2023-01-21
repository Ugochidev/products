import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CreateDTO } from './Dto/CreateDTO';
import { ProductService } from './product.service';
import { Product } from './interfaces/product.interface';

@Controller('product')
export class ProductController {
    constructor(private readonly productService : ProductService){}
  @Get()
  findAll(){
    // return this.productService.findAll();
  }

  @Get(':id')
  findAOne(@Param('id') id): string {
    return ;
  }

  @Post()
  create(@Body() createDto: CreateDTO): string {
    return `Name : ${createDto.name} Description : ${createDto.description} Qty : ${createDto.qty}`;
  }

  @Put(':id')
  update(@Body() updateDto: CreateDTO, @Param('id') id): string {
    return `update ${id} Name : ${updateDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `delete ${id}`;
  }
}
