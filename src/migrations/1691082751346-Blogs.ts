import { MigrationInterface, QueryRunner } from "typeorm";

export class Blogs1691082751346 implements MigrationInterface {
    name = 'Blogs1691082751346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`blogs\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`category\` set ('technology', 'politics', 'health', 'business', 'education') NOT NULL, \`created_at\` datetime NOT NULL, \`updated_at\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`blogs\``);
    }

}
