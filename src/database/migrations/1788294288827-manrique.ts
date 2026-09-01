import { MigrationInterface, QueryRunner } from "typeorm";

export class Manrique1788294288827 implements MigrationInterface {
    name = 'Manrique1788294288827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "quitian" TO "Manrique"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "Manrique" TO "quitian"`);
    }

}
