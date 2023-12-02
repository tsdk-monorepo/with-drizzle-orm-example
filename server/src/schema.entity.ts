// import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(), // 'id' is the column name
  fullName: text("full_name"),
});

export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey(), // 'id' is the column name
  name: text("name"),
  ownerId: integer("owner_id")
    .notNull()
    .references(() => users.id),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;


export type Project = typeof projects.$inferSelect;
export type InsertProject = typeof projects.$inferInsert;


// or
// type SelectUser = typeof users._.$inferSelect;
// type InsertUser = typeof users._.$inferInsert;
// or
// type SelectUser = InferSelectModel<typeof users>;
// type InsertUser = InferInsertModel<typeof users>;
