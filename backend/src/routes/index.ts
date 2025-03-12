import type { FastifyInstance } from 'fastify';
import UserController from "../controllers";

export const setRoutes = (app: FastifyInstance) => {
    const userController = new UserController();

    app.get('/:id', userController.getUser);
    // Adicione outras rotas conforme necessário
};