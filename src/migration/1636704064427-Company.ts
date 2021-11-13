import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Company1636704064427 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "company",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true
        },
        {
          name: "name",
          type: "varchar",
        }
      ]
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("company");
  }

}
