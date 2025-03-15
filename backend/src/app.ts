import fastify, { type FastifyListenOptions } from "fastify";

import { setRoutes } from "./routes/index";

import cors from '@fastify/cors'
import { connectToDatabase } from "./config/database";

const app = fastify({ logger: true });

app.register(cors, connectToDatabase);
setRoutes(app);

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3000;
    const host = process.env.HOST || '0.0.0.0';

    const options: FastifyListenOptions = {
      port,
      host,
    };

    console.log(options)

    await app.listen(options);
    app.log.info("Servidor rodando em http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
