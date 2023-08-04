import { DataSourceOptions, DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Blogs } from './entities/blogs.entity';
config();
export const typeormConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [Blogs],
};

const dataSourceConfig = Object.assign({}, typeormConfig, {
  migrations: ['./src/migrations/*{.ts,.js}'],
});
const connectionSource = new DataSource(dataSourceConfig as DataSourceOptions);

export default connectionSource;
