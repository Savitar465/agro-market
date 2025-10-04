import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {configService} from "./config/config.service";

@Module({
  imports: [UsersModule, ProductsModule, TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [],
  providers: [],
})
export class AppModule {}
