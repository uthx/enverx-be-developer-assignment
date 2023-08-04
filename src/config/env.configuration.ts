import { AppConfig } from './interface';

export default (): AppConfig => ({
  port: parseInt(process.env.APP_PORT),
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    name: process.env.DB_NAME,
  },
});
