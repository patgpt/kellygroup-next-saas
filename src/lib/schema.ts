// schema.ts
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const contacts = pgTable("contacts", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
