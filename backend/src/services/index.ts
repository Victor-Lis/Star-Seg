import getUserSchema, { type GetUserInput } from "../schemas/getUser";
import createUserSchema, { type CreateUserInput } from "../schemas/createUser";
import updateUserSchema, { type UpdateUserInput } from "../schemas/updateUser";
import deleteUserSchema, { type DeleteUserInput } from "../schemas/deleteUser";

import { eq, sql } from "drizzle-orm";
import { db } from "../config/database";
import { usersTable } from "../models";
import { formatValidationErrors } from "./utils/formatValidationErrors";

export class UserService {
  async getUsers() {
    const result = await db.select().from(usersTable);

    return {
      success: true,
      users: result,
      errors: null,
    };
  }

  async getUserById(data: GetUserInput) {
    const validation = getUserSchema.safeParse(data);

    if (!validation.success) {
      const { success, errors } = formatValidationErrors(validation);
      return {
        success,
        user: null,
        errors,
      };
    }

    const result = await db
      .select()
      .from(usersTable)
      .where(sql`${usersTable.id} = ${data.id}`);

    return {
      success: true,
      user: result[0],
      errors: null,
    };
  }

  async createUser(data: CreateUserInput) {
    const validation = createUserSchema.safeParse(data);

    if (!validation.success) {
      const { success, errors } = formatValidationErrors(validation);
      return {
        success,
        user: null,
        errors,
      };
    }

    const result = await db.insert(usersTable).values(data).returning();

    return {
      success: true,
      user: result[0],
      errors: null,
    };
  }

  async updateUser(data: UpdateUserInput) {
    const validation = updateUserSchema.safeParse(data);

    if (!validation.success) {
      const { success, errors } = formatValidationErrors(validation);
      return {
        success,
        user: null,
        errors,
      };
    }

    const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, data.id))

    if(!user[0]) {
      return {
        success: false,
        user: null,
        errors: "User not found",
      };
    }

    const result = await db
      .update(usersTable)
      .set(data)
      .where(eq(usersTable.id, data.id))
      .returning();

    return {
      success: true,
      user: result[0],
      errors: null,
    };
  }

  async deleteUser(data: DeleteUserInput) {
    const validation = deleteUserSchema.safeParse(data);

    if (!validation.success) {
      const { success, errors } = formatValidationErrors(validation);
      return {
        success,
        user: null,
        errors,
      };
    }

    const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, data.id))

    if(!user[0]) {
      return {
        success: false,
        user: null,
        errors: "User not found",
      };
    }

    const result = await db
      .delete(usersTable)
      .where(eq(usersTable.id, data.id))
      .returning();

    return {
      success: true,
      user: result[0],
      errors: null,
    };
  }
}

const userService = new UserService();

export { userService };
