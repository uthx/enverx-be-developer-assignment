import { MigrationInterface, QueryRunner } from "typeorm";

export class Blogs1691149515530 implements MigrationInterface {
    name = 'Blogs1691149515530'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`blogs\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, \`category\` set ('technology', 'politics', 'health', 'business', 'education') NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`blogs\``);
    }

}
