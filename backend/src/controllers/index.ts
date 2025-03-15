import { userService } from "../services";

import type { GetDataParams } from "../@types/userController/getData";
import type { PostDataBody } from "../@types/userController/postData";
import type { PatchDataBody } from "../@types/userController/patchData";
import type { DeleteDataBody } from "../@types/userController/deleteData";

import type { FastifyRequest, FastifyReply } from "fastify";

class UserController {
  async getUsers(request: FastifyRequest, reply: FastifyReply) {
    const { users, success, errors } = await userService.getUsers();

    if (!success || !users.length) {
      reply.send({
        message: "Erro!",
        status: 400,
        errors,
      });
      return;
    }

    reply.send({
      message: "Dados obtidos com sucesso",
      users,
      status: 200,
    });
  }

  async getUser(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as GetDataParams;

    const { user, success, errors } = await userService.getUserById({ id });

    if (!success || !user) {
      reply.send({
        message: "Dados inválidos!",
        status: 400,
        errors,
      });
      return;
    }

    reply.send({
      message: "Dados obtidos com sucesso",
      user,
      status: 200,
    });
  }

  async postData(request: FastifyRequest, reply: FastifyReply) {
    const requirements = [
      "name",
      "phone",
      "email",
      "cep",
      "state",
      "city",
      "neighborhood",
      "street",
      "number",
    ];
    const keys = Object.keys(request.body ? request.body : {});
    const missingKeys = requirements.filter(
      (requirement) => !keys.includes(requirement)
    );

    if (missingKeys.length) {
      reply.send({
        message: "Dados inválidos!",
        status: 400,
        requirements: missingKeys,
      });
      return;
    }

    const {
      name,
      phone,
      email,
      cep,
      state,
      city,
      neighborhood,
      street,
      number,
      complement,
      profilePicture,
    } = request?.body as PostDataBody;

    const { user, success, errors } = await userService.createUser({
      name,
      phone,
      email,
      cep,
      state,
      city,
      neighborhood,
      street,
      number,
      complement,
      profilePicture,
    });

    if (!success || !user) {
      reply.send({
        message: "Dados inválidos!",
        status: 400,
        errors,
      });
      return;
    }

    reply.send({
      message: "Dados criados com sucesso",
      user: user,
      status: 201,
    });
  }

  async updateData(request: FastifyRequest, reply: FastifyReply) {
    const body = request?.body as PatchDataBody;
    if (!body || !body?.id) {
      reply.send({
        message: "Dados inválidos!",
        status: 400,
        requirements: ["id"],
      });
      return;
    }

    const { success, errors, user } = await userService.updateUser(body);

    reply.send({ message: success ? "Dados alterados com sucesso" : "Não foi possível deletar o usuário", status: success ? 200 : 404, success, errors, user });
  }

  async deleteData(request: FastifyRequest, reply: FastifyReply) {
    const body = request?.body as DeleteDataBody;
    if (!body || !body?.id) {
      reply.send({
        message: "Dados inválidos!",
        status: 400,
        requirements: ["id"],
      });
      return;
    }

    const { id } = body;

    const { success, errors, user } = await userService.deleteUser({ id });

    reply.send({ message: success ? "Dados deletados com sucesso" : "Não foi possível deletar o usuário", status: success ? 200 : 404, success, errors, user });
  }
}

export default UserController;
