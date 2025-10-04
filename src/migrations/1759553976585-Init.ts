import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1759553976585 implements MigrationInterface {
    name = 'Init1759553976585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "password" TO "username"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "username" TO "password"`);
    }

}
