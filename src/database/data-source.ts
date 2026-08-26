import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const url = process.env.DATABASE_URL;

export default new DataSource(
  url
    ? {
        type: 'postgres',
        url,
        ssl: { rejectUnauthorized: false },
        entities: ['src/**/*.entity.ts'],
        migrations: ['src/database/migrations/*.ts'],
      }
    : {
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: ['src/**/*.entity.ts'],
        migrations: ['src/database/migrations/*.ts'],
      },
);