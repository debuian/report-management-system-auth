import { MigrationInterface, QueryRunner } from "typeorm";

export class YourMigrationName1727368227691 implements MigrationInterface {
    name = 'YourMigrationName1727368227691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "PathologyAdmins" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, "number" character varying NOT NULL, CONSTRAINT "UQ_f488419d5e8a0ffc5c238687df8" UNIQUE ("email"), CONSTRAINT "PK_e8f43c13bc446ce23cadccaf236" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "PathologyAdmins"`);
    }

}
