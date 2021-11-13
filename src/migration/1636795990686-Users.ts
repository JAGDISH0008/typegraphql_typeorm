import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1636795990686 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "users",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true
        },
        {
          name: "firstName",
          type: "varchar",
        },
        {
          name: "lastName",
          type: "varchar",
        },
        {
          name: "age",
          type: "int",
        }
      ]
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }

}
