// src/services/index.ts

import type { GetUserInput } from "../schemas/getUserById";
import { sql } from "drizzle-orm";
import { db } from "../config/database";
import { users } from "../models";

export class UserService {
  async getUserById(data: GetUserInput) {
    const result = await db
      .select()
      .from(users)
      .where(sql`${users.id} = ${data.id}`);
    return result;
  }

  async createUser(data: any) {
    // Implementar a lógica para criar um novo usuário
  }

  // Outros métodos de serviço conforme necessário
}

const userService = new UserService();

export { userService }