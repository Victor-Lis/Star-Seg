import type { FastifyInstance } from 'fastify';
import UserController from "../controllers";

export const setRoutes = (app: FastifyInstance) => {
    const userController = new UserController();

    app.get('/', userController.getUsers);

    app.get('/:id', userController.getUser);

    app.post('/', userController.postData);

    app.patch('/', userController.updateData);

    app.delete('/', userController.deleteData);
};