import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

import { drizzle } from "drizzle-orm/node-postgres";

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

export const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log('Conectado ao banco de dados PostgreSQL');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados', error);
        throw error;
    }
};

export const disconnectFromDatabase = async () => {
    try {
        await client.end();
        console.log('Desconectado do banco de dados PostgreSQL');
    } catch (error) {
        console.error('Erro ao desconectar do banco de dados', error);
        throw error;
    }
};

export default client;
export const db = drizzle(process.env.DATABASE_URL);
