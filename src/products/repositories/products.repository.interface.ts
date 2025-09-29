import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';

export interface IProductRepository {
  create(dto: CreateProductDto): Product;
  findAll(): Product[];
  findOne(id: number): Product;
  update(id: number, dto: UpdateProductDto): Product;
  remove(id: number): void;
}
