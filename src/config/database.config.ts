import { registerAs } from '@nestjs/config';
import { config } from 'dotenv';
import { getRootPath } from 'src/utilities/rootpath/path.utils';
import { DataSourceOptions } from 'typeorm';

config();
console.log(getRootPath('src', '**', '*.entity{.ts,.js}'));

export default registerAs('databaseConfig', (): DataSourceOptions => ({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [getRootPath('src', '**', '*.entity{.ts,.js}')],
  synchronize: false,
  migrationsTableName: 'migrations',
  migrations: [getRootPath('db', 'migrations', '*{.ts,.js}')],
}));
