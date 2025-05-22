import { pgTable, serial, text, timestamp, boolean, integer, date } from "drizzle-orm/pg-core";

// Clients table
export const clients = pgTable("clients", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  contactPerson: text("contact_person"),
  email: text("email"),
  phone: text("phone"),
  address: text("address"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Payrolls table
export const payrolls = pgTable("payrolls", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  clientId: integer("client_id").references(() => clients.id),
  frequency: text("frequency").notNull(), // weekly, fortnightly, monthly
  status: text("status").default("active"),
  startDate: date("start_date"),
  endDate: date("end_date"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Payroll dates table
export const payrollDates = pgTable("payroll_dates", {
  id: serial("id").primaryKey(),
  payrollId: integer("payroll_id").references(() => payrolls.id),
  date: date("date").notNull(),
  cutoffDate: date("cutoff_date"),
  paymentDate: date("payment_date"),
  eftDate: date("eft_date"),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Staff table
export const staff = pgTable("staff", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().unique(), // Clerk user ID
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  role: text("role").notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Holidays table
export const holidays = pgTable("holidays", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  date: date("date").notNull(),
  isPublic: boolean("is_public").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Leave table
export const leave = pgTable("leave", {
  id: serial("id").primaryKey(),
  staffId: integer("staff_id").references(() => staff.id),
  startDate: date("start_date").notNull(),
  endDate: date("end_date").notNull(),
  type: text("type").notNull(), // annual, sick, personal, etc.
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Notes table
export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  payrollId: integer("payroll_id").references(() => payrolls.id),
  staffId: integer("staff_id").references(() => staff.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Work schedule table
export const workSchedule = pgTable("work_schedule", {
  id: serial("id").primaryKey(),
  staffId: integer("staff_id").references(() => staff.id),
  dayOfWeek: integer("day_of_week").notNull(), // 0 = Sunday, 6 = Saturday
  startTime: text("start_time"),
  endTime: text("end_time"),
  isWorkDay: boolean("is_work_day").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});