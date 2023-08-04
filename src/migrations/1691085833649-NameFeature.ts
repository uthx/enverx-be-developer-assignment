import { MigrationInterface, QueryRunner } from 'typeorm';

export class NameFeature1691085833649 implements MigrationInterface {
  name = 'NameFeature1691085833649';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`blogs\` CHANGE \`created_at\` \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`blogs\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`blogs\` CHANGE \`updated_at\` \`updated_at\` datetime(0) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`blogs\` CHANGE \`created_at\` \`created_at\` datetime(0) NOT NULL`,
    );
  }
}
