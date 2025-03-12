import { Client } from 'pg';
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

const client = new Client({
    connectionString: 'postgres://neondb_owner:npg_1TROXYA4JsyI@ep-rough-queen-acp0r5we-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require',
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
export const db = drizzle('postgres://neondb_owner:npg_1TROXYA4JsyI@ep-rough-queen-acp0r5we-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require');
