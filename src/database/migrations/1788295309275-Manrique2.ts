import { MigrationInterface, QueryRunner } from "typeorm";

export class Manrique21788295309275 implements MigrationInterface {
    name = 'Manrique21788295309275'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "email" TO "emailes"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" TO "UQ_3c4f65dabaa96effeac475d25f0"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME CONSTRAINT "UQ_3c4f65dabaa96effeac475d25f0" TO "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "emailes" TO "email"`);
    }

}
