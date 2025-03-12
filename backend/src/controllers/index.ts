import { userService } from '../services';
import type { GetDataParams } from '../@types/userController/getData';
import type { FastifyRequest, FastifyReply } from 'fastify';

class UserController {
    async getUser(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as GetDataParams;

        const users = await userService.getUserById({ id });

        reply.send({ message: "Dados obtidos com sucesso", user: users[0], status: 200 });
    }

    async postData(request: FastifyRequest, reply: FastifyReply) {
        // Lógica para criar novos dados
        reply.send({ message: 'Dados criados com sucesso' });
    }

    async updateData(request: FastifyRequest, reply: FastifyReply) {
        // Lógica para atualizar dados existentes
        reply.send({ message: 'Dados atualizados com sucesso' });
    }

    async deleteData(request: FastifyRequest, reply: FastifyReply) {
        // Lógica para deletar dados
        reply.send({ message: 'Dados deletados com sucesso' });
    }
}

export default UserController;