import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {ProductsModule} from './products/products.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {configService} from "./config/config.service";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, ProductsModule, TypeOrmModule.forRoot(configService.getTypeOrmConfig()), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
