import fastify, { type FastifyListenOptions } from "fastify";

import { setRoutes } from "./routes/index";
import { connectToDatabase } from "./config/database";

const app = fastify({ logger: true });

app.register(connectToDatabase);
setRoutes(app);

const start = async () => {
  try {
    const port: FastifyListenOptions = {
      port: 3000,
    };
    app.listen(port);
    app.log.info("Servidor rodando em http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
