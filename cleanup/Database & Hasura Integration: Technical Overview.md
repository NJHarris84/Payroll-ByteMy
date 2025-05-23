# PostgreSQL Database Overview

This document describes the structure, relationships, and core logic of the production-grade database integrated with Hasura.

## Schemas

- `public`: Core application tables
- `neon_auth`: External authentication sync (e.g., Clerk, Auth0)

## Key Tables

- `users`
- `payrolls`
- `payroll_dates`
- `adjustment_rules`
- `leave`
- `clients`
- `client_external_systems`
- `external_systems`
- `feature_flags`
- `holidays`
- `notes`
- `work_schedule`
- `app_settings`
- `permission_overrides`
- `permission_audit_log`
- `users_sync`

## Relationships

- `payrolls.client_id` → `clients.id`
- `payrolls.primary_consultant_user_id` → `users.id`
- `client_external_systems.client_id` → `clients.id`
- `client_external_systems.system_id` → `external_systems.id`
- `notes.entity_id` → `clients` or `payrolls` based on `entity_type`

## Enum Types

- `user_role`: `admin`, `org_admin`, `manager`, `consultant`, `viewer`
- `payroll_status`: `Active`, `Implementation`, `Inactive`
- `leave_status_enum`: `Pending`, `Approved`, `Rejected`

## Functions

- `is_business_day(date)`: Checks whether a date is a valid business day (not a weekend or public holiday).
- `adjust_for_non_business_day(date, rule)`: Adjusts a date forward/backward to the nearest business day based on a rule.
- `subtract_business_days(date, count)`: Subtracts a specified number of business days from a given date.
- `generate_payroll_dates(payroll_id, start_date, end_date, max)`: Generates payroll dates based on a payroll’s configuration.
- `update_payroll_dates()`: Trigger: regenerates payroll dates when a payroll’s cycle/type is updated.
- `update_modified_column()`: Trigger: updates `updated_at` column on row modification.
- `enforce_staff_roles()`: Trigger: ensures consultants/managers are flagged as staff.
- `enforce_entity_relation()`: Trigger: ensures `notes.entity_id` matches the correct type (payroll/client).
- `prevent_duplicate_workday_insert()`: Trigger: prevents duplicate entries in `work_schedule`.

## Security and RLS Notes

- Permissions are enforced per-role with Hasura RLS
- All updates/checks restrict row-level changes to user-owned or assigned records
- Org admins have full access
- Enum and trigger constraints ensure valid and consistent data entry

Absolutely! Here is a **more detailed technical document** for your Hasura/PostgreSQL database, including detailed table descriptions, core business logic, function walkthroughs, and the security/RLS implementation philosophy. You can use this as a production reference, for onboarding, or to support external audits.

---

# Database & Hasura Integration: Technical Overview

This document provides an in-depth description of the database schema, data flow, key functions, and permission (RLS) strategy for your Hasura-powered payroll/consulting system.
**Context:** This database is intended for a multi-tenant consulting/payroll platform with explicit role-based access, auditable change history, and robust scheduling/business logic.

---

## 1. Schema Structure

### Schemas Used

* **public**: Primary application data (payroll, clients, users, etc.)
* **neon\_auth**: Holds external user syncs (`users_sync`) for SSO/integration (e.g., Clerk/Auth0).

---

## 2. Core Tables and Their Roles

### **User and Auth Tables**

* **users**:

  * Fields: `id`, `name`, `email`, `role` (`user_role` enum), `is_staff`, `manager_id`, etc.
  * Purpose: Master user/consultant/manager/org admin records.
* **users\_sync** (*neon\_auth*):

  * Fields: `raw_json`, `id`, `name`, `email`, etc.
  * Purpose: Mirrors external identity providers for provisioning and audit.

### **Client and System Integration**

* **clients**:

  * Fields: `id`, `name`, `contact_person`, `active`, etc.
  * Purpose: Stores client/company details.
* **external\_systems**:

  * Fields: `id`, `name`, `url`, etc.
  * Purpose: Registry of third-party integration endpoints.
* **client\_external\_systems**:

  * Fields: `id`, `client_id`, `system_id`, etc.
  * Purpose: Maps clients to external systems (e.g., for payroll exports/API sync).

### **Payroll & Scheduling**

* **payrolls**:

  * Fields: `id`, `client_id`, `name`, `cycle_id`, `date_type_id`, `primary_consultant_user_id`, `backup_consultant_user_id`, `manager_user_id`, `processing_days_before_eft`, `status` (enum), etc.
  * Purpose: Core payroll configuration object, includes all consultant/manager assignments.
* **payroll\_dates**:

  * Fields: `id`, `payroll_id`, `original_eft_date`, `adjusted_eft_date`, `processing_date`, `notes`, etc.
  * Purpose: Stores calculated payroll events/dates, with adjustments for holidays/business rules.
* **adjustment\_rules**:

  * Fields: `id`, `cycle_id`, `date_type_id`, `rule_description`, `rule_code`.
  * Purpose: Custom business day adjustment logic (e.g., "shift to previous/next business day").

### **Other Core Data**

* **holidays**:

  * Fields: `id`, `date`, `local_name`, `country_code`, `region`, `is_fixed`, etc.
  * Purpose: Public holiday master table for accurate payroll scheduling.
* **feature\_flags**:

  * Fields: `id`, `feature_name`, `is_enabled`, `allowed_roles` (JSON).
  * Purpose: Toggles and controls for experimental or restricted platform features.
* **leave**:

  * Fields: `id`, `user_id`, `start_date`, `end_date`, `leave_type`, `status`, etc.
  * Purpose: Consultant leave management with business-logic checks (no overlaps, valid types).

### **Notes, Logs & Settings**

* **notes**:

  * Fields: `id`, `entity_type` (`payroll`/`client`), `entity_id`, `user_id`, `content`, etc.
  * Purpose: Attachable user notes for clients or payrolls, checked by a trigger for referential integrity.
* **work\_schedule**:

  * Fields: `id`, `user_id`, `work_day`, `work_hours`.
  * Purpose: User/consultant rostered working days.
* **app\_settings**:

  * Key/value store for platform-wide settings.
* **permission\_audit\_log**:

  * Records all changes to permission state for audit/compliance.
* **permission\_overrides**:

  * Manual adjustments to role/resource access, with expiry and reason-tracking.

---

## 3. Key Relationships and Foreign Keys

* `payrolls.client_id` → `clients.id`
* `payrolls.primary_consultant_user_id`, `backup_consultant_user_id`, `manager_user_id` → `users.id`
* `client_external_systems.client_id` → `clients.id`
* `client_external_systems.system_id` → `external_systems.id`
* `notes.entity_id` → `clients.id` or `payrolls.id` (validated by trigger against `entity_type`)
* `leave.user_id` → `users.id`
* `payroll_dates.payroll_id` → `payrolls.id`

> **Referential integrity** is further enforced via triggers (e.g., for notes) and constraints.

---

## 4. Enum Types and Usage

* **user\_role**: Controls access and UI (`admin`, `org_admin`, `manager`, `consultant`, `viewer`)
* **payroll\_status**: Tracks payroll lifecycle (`Active`, `Implementation`, `Inactive`)
* **leave\_status\_enum**: Leave request approval states (`Pending`, `Approved`, `Rejected`)
* **payroll\_cycle\_type**: Recurrence logic (`weekly`, `fortnightly`, `bi_monthly`, `monthly`, `quarterly`)
* **payroll\_date\_type**: Date-logic (`fixed_date`, `eom`, `som`, `week_a`, `week_b`, `dow`)

---

## 5. Database Functions and Business Logic

### **Scheduling & Payroll Calculation**

* **`is_business_day(date)`**

  * Returns true if date is a weekday and not a public holiday.
* **`adjust_for_non_business_day(date, rule)`**

  * Shifts a date forward/backward/nearest business day according to the rule, e.g. to avoid weekends/holidays.
* **`subtract_business_days(date, n)`**

  * Moves n business days back from a given date (uses `is_business_day` internally).
* **`generate_payroll_dates(payroll_id, start_date, end_date, max_dates)`**

  * Generates all future payroll events for a given payroll configuration.
  * Applies rules for frequency (weekly, monthly, etc.), holiday adjustments, and processing lag.
* **`update_payroll_dates()`** *(Trigger)*

  * Auto-recomputes payroll dates if the payroll's configuration changes.

### **Data Integrity Triggers**

* **`update_modified_column()`**

  * Updates the `updated_at` timestamp for auditability.
* **`enforce_staff_roles()`**

  * Ensures only staff-flagged users are assigned as consultants or managers.
* **`enforce_entity_relation()`**

  * Prevents orphaned notes by ensuring referenced `entity_id` exists on the target table (client/payroll).
* **`prevent_duplicate_workday_insert()`**

  * Prevents multiple schedule rows for the same user/day.

---

## 6. Security and Row-Level Permissions (RLS)

### **Permission Design**

* **Org Admin**: Full read/write/delete across all tables, including permissions.
* **Manager**: Read/write for clients, payrolls, and assignments they supervise.
* **Consultant**: Can read/write/update their own records (e.g., leave, notes), payrolls where they are assigned, and see clients they work with.
* **Viewer**: Strictly read-only, with minimal column exposure.
* **Audit Logging**: All permission changes are written to `permission_audit_log`.

### **Best Practices Implemented**

* **RLS enforced at the row-level** with Hasura permission rules and relevant field-based checks (`user_id`, `manager_user_id`, etc.).
* **UPDATE/DELETE checks** always match `filter` to prevent privilege escalation (users can only change their rows).
* **Insertions validated** via check constraints, triggers, and enums (no bad data or invalid assignments).
* **No hardcoded credentials:** All connections use `{ "from_env": "DATABASE_URL" }`.
* **Prepared statements enabled** for SQL injection prevention.

---

## 7. Data Flow & Business Operations

1. **User login/session**: External auth (e.g. Clerk) syncs to `users_sync` and provisions in `users`.
2. **Client & Payroll creation**: Managers/org admins create clients, payrolls, and assign staff.
3. **Payroll calendar generation**: Payrolls use cycle/type config; system generates compliant dates using stored logic and functions, always respecting business day rules and holidays.
4. **Leave submission/approval**: Consultants submit leave; managers/org admins review and update status.
5. **Notes & audit**: Any table can be annotated, with referential triggers to ensure integrity. Permission/audit tables log changes for later review.
6. **Feature flags**: Org admin can toggle new features for certain roles only.

---

## 8. Operational Reliability

* **Triggers** ensure up-to-date scheduling, correct assignment, and audit traceability.
* **Functions** encapsulate all complex logic (e.g., payroll calculations, business day computations).
* **Enum/Check constraints** enforce all data consistency rules at the DB level.

---


Table users {
  id uuid [pk]
  name varchar
  email varchar
  role user_role
  is_staff boolean
  manager_id uuid [ref: > users.id]
  created_at timestamptz
  updated_at timestamptz
  username varchar
  image text
  clerk_user_id text
}

Table users_sync as neon_auth_users_sync {
  id text [pk]
  name text
  email text
  created_at timestamptz
  updated_at timestamptz
  deleted_at timestamptz
}

Table clients {
  id uuid [pk]
  name varchar
  contact_person varchar
  contact_email varchar
  contact_phone varchar
  active boolean
  created_at timestamptz
  updated_at timestamptz
}

Table external_systems {
  id uuid [pk]
  name varchar
  url text
  description text
  icon varchar
  created_at timestamptz
  updated_at timestamptz
}

Table client_external_systems {
  id uuid [pk]
  client_id uuid [ref: > clients.id]
  system_id uuid [ref: > external_systems.id]
  system_client_id varchar
  created_at timestamptz
  updated_at timestamptz
}

Table payroll_cycles {
  id uuid [pk]
  name payroll_cycle_type
  description text
  created_at timestamptz
  updated_at timestamptz
}

Table payroll_date_types {
  id uuid [pk]
  name payroll_date_type
  description text
  created_at timestamptz
  updated_at timestamptz
}

Table payrolls {
  id uuid [pk]
  client_id uuid [ref: > clients.id]
  name varchar
  cycle_id uuid [ref: > payroll_cycles.id]
  date_type_id uuid [ref: > payroll_date_types.id]
  date_value integer
  primary_consultant_user_id uuid [ref: > users.id]
  backup_consultant_user_id uuid [ref: > users.id]
  manager_user_id uuid [ref: > users.id]
  processing_days_before_eft integer
  payroll_system varchar
  status payroll_status
  processing_time integer
  employee_count integer
  created_at timestamptz
  updated_at timestamptz
}

Table payroll_dates {
  id uuid [pk]
  payroll_id uuid [ref: > payrolls.id]
  original_eft_date date
  adjusted_eft_date date
  processing_date date
  notes text
  created_at timestamptz
  updated_at timestamptz
}

Table adjustment_rules {
  id uuid [pk]
  cycle_id uuid [ref: > payroll_cycles.id]
  date_type_id uuid [ref: > payroll_date_types.id]
  rule_description text
  rule_code text
  created_at timestamptz
  updated_at timestamptz
}

Table holidays {
  id uuid [pk]
  date date
  local_name text
  name text
  country_code char(2)
  region text[]
  is_fixed boolean
  is_global boolean
  launch_year integer
  types text[]
  created_at timestamptz
  updated_at timestamptz
}

Table leave {
  id uuid [pk]
  user_id uuid [ref: > users.id]
  start_date date
  end_date date
  leave_type varchar
  reason text
  status leave_status_enum
}

Table notes {
  id uuid [pk]
  entity_type text
  entity_id uuid
  user_id uuid [ref: > users.id]
  content text
  is_important boolean
  created_at timestamp
  updated_at timestamp
}

Table work_schedule {
  id uuid [pk]
  user_id uuid [ref: > users.id]
  work_day varchar
  work_hours numeric
  created_at timestamp
  updated_at timestamp
}

Table feature_flags {
  id uuid [pk]
  feature_name text
  is_enabled boolean
  allowed_roles jsonb
  updated_at timestamptz
}

Table app_settings {
  id text [pk]
  permissions jsonb
}

Table permission_audit_log {
  id uuid [pk]
  user_id uuid
  target_user_id uuid
  target_role user_role
  resource text
  operation text
  action text
  previous_value jsonb
  new_value jsonb
  reason text
  created_at timestamptz
}

Table permission_overrides {
  id uuid [pk]
  user_id uuid
  role user_role
  resource text
  operation text
  granted boolean
  conditions jsonb
  created_at timestamp
  created_by uuid
  expires_at timestamp
}
