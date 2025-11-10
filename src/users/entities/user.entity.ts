import { Entity, Column } from "typeorm";
import {BaseEntity} from "../../common/base/base.entity";

@Entity()
export class User extends BaseEntity{
  @Column({ type: 'varchar', length: 200 })
  name: string;
  @Column({ type: 'varchar', length: 200 })
  username: string;
  @Column({ type: 'varchar', length: 200 })
  email: string;
  @Column({ type: 'varchar', length: 200, nullable: true, })
  password: string;
}
