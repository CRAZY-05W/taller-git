import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1788291473116 implements MigrationInterface {
    name = 'InitialMigration1788291473116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "test" TO "quitian"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "quitian" TO "test"`);
    }

}
