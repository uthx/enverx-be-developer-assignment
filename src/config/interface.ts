export interface DbConfig {
  user: string;
  name: string;
  port: number;
  host: string;
  password: string;
}
export interface AppConfig {
  port: number;
  db: DbConfig;
}
