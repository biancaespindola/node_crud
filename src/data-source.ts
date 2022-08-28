import 'dotenv/config'
import 'reflect-metadata'

import { DataSource } from "typeorm"

const port = process.env.DB_HOST as number | undefined;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    subscribers: [],
    migrations: [],
})