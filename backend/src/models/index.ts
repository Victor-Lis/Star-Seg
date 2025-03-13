import { pgTable, text, varchar, integer, timestamp, uuid } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid().defaultRandom().primaryKey(),

  name: varchar("name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 13 }).notNull(), 
  email: varchar("email", { length: 255 }).notNull().unique(),

  cep: varchar("cep", { length: 8 }).notNull(), 
  state: varchar("state", { length: 2 }).notNull(), 
  city: varchar("city", { length: 100 }).notNull(),
  neighborhood: varchar("neighborhood", { length: 100 }).notNull(),
  street: varchar("street", { length: 100 }).notNull(),
  number: integer("number").notNull(),

  complement: text("complement").default(""),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});
