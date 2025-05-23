WITH 
-- Tables with columns (enhanced with comments)
tables_with_columns AS (
  SELECT 
    t.table_schema,
    t.table_name,
    c.column_name,
    c.data_type,
    c.udt_name,
    c.column_default,
    c.is_nullable,
    c.character_maximum_length,
    c.numeric_precision,
    c.numeric_scale,
    c.datetime_precision,
    c.is_identity,
    c.identity_generation,
    c.is_updatable,
    pg_catalog.col_description(format('%I.%I', t.table_schema, t.table_name)::regclass::oid, c.ordinal_position) AS column_comment,
    obj_description(format('%I.%I', t.table_schema, t.table_name)::regclass::oid, 'pg_class') AS table_comment,
    c.ordinal_position
  FROM 
    information_schema.tables t
    JOIN information_schema.columns c ON t.table_schema = c.table_schema AND t.table_name = c.table_name
  WHERE 
    t.table_schema NOT IN ('pg_catalog', 'information_schema')
    AND t.table_type = 'BASE TABLE'
  ORDER BY 
    t.table_schema, t.table_name, c.ordinal_position
),

-- Foreign keys (enhanced with on delete/update actions)
foreign_keys AS (
  SELECT
    tc.table_schema,
    tc.table_name,
    kcu.column_name,
    ccu.table_schema AS foreign_table_schema,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name,
    tc.constraint_name,
    rc.update_rule,
    rc.delete_rule
  FROM 
    information_schema.table_constraints tc
    JOIN information_schema.key_column_usage kcu ON tc.constraint_name = kcu.constraint_name AND tc.table_schema = kcu.table_schema
    JOIN information_schema.constraint_column_usage ccu ON ccu.constraint_name = tc.constraint_name AND ccu.table_schema = tc.table_schema
    JOIN information_schema.referential_constraints rc ON rc.constraint_name = tc.constraint_name AND rc.constraint_schema = tc.table_schema
  WHERE 
    tc.constraint_type = 'FOREIGN KEY'
    AND tc.table_schema NOT IN ('pg_catalog', 'information_schema')
),

-- Primary keys
primary_keys AS (
  SELECT
    tc.table_schema,
    tc.table_name,
    kcu.column_name,
    tc.constraint_name
  FROM 
    information_schema.table_constraints tc
    JOIN information_schema.key_column_usage kcu ON tc.constraint_name = kcu.constraint_name AND tc.table_schema = kcu.table_schema
  WHERE 
    tc.constraint_type = 'PRIMARY KEY'
    AND tc.table_schema NOT IN ('pg_catalog', 'information_schema')
),

-- Unique constraints
unique_constraints AS (
  SELECT
    tc.table_schema,
    tc.table_name,
    kcu.column_name,
    tc.constraint_name
  FROM 
    information_schema.table_constraints tc
    JOIN information_schema.key_column_usage kcu ON tc.constraint_name = kcu.constraint_name AND tc.table_schema = kcu.table_schema
  WHERE 
    tc.constraint_type = 'UNIQUE'
    AND tc.table_schema NOT IN ('pg_catalog', 'information_schema')
),

-- Check constraints
check_constraints AS (
  SELECT
    tc.table_schema,
    tc.table_name,
    tc.constraint_name,
    cc.check_clause
  FROM
    information_schema.table_constraints tc
    JOIN information_schema.check_constraints cc ON tc.constraint_name = cc.constraint_name AND tc.table_schema = cc.constraint_schema
  WHERE
    tc.constraint_type = 'CHECK'
    AND tc.table_schema NOT IN ('pg_catalog', 'information_schema')
),

-- Indexes
indexes AS (
  SELECT
    schemaname AS schema_name,
    tablename AS table_name,
    indexname AS index_name,
    indexdef AS index_definition
  FROM
    pg_indexes
  WHERE
    schemaname NOT IN ('pg_catalog', 'information_schema')
),

-- Custom types (enums)
enums AS (
  SELECT
    t.typname AS enum_name,
    array_agg(e.enumlabel ORDER BY e.enumsortorder) AS enum_values,
    obj_description(t.oid, 'pg_type') AS enum_comment
  FROM 
    pg_type t
    JOIN pg_enum e ON t.oid = e.enumtypid
    JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace
  WHERE 
    n.nspname NOT IN ('pg_catalog', 'information_schema')
  GROUP BY 
    t.typname, t.oid
),

-- Functions with full details
functions AS (
  SELECT
    n.nspname AS schema_name,
    p.proname AS function_name,
    pg_get_function_arguments(p.oid) AS arguments,
    CASE 
      WHEN p.proretset THEN 'SETOF ' || pg_get_function_result(p.oid)
      ELSE pg_get_function_result(p.oid)
    END AS return_type,
    l.lanname AS language,
    p.prosrc AS source_code,
    p.proacl AS access_privileges,
    p.provolatile AS volatility,
    p.proparallel AS parallel_safety,
    obj_description(p.oid, 'pg_proc') AS function_comment
  FROM 
    pg_proc p
    JOIN pg_namespace n ON p.pronamespace = n.oid
    JOIN pg_language l ON p.prolang = l.oid
  WHERE 
    n.nspname NOT IN ('pg_catalog', 'information_schema')
),

-- Views
views AS (
  SELECT
    schemaname AS schema_name,
    viewname AS view_name,
    definition AS view_definition,
    obj_description(format('%I.%I', schemaname, viewname)::regclass::oid, 'pg_class') AS view_comment
  FROM
    pg_views
  WHERE
    schemaname NOT IN ('pg_catalog', 'information_schema')
),

-- Triggers
triggers AS (
  SELECT
    event_object_schema AS table_schema,
    event_object_table AS table_name,
    trigger_name,
    action_timing,
    event_manipulation,
    action_statement
  FROM
    information_schema.triggers
  WHERE
    event_object_schema NOT IN ('pg_catalog', 'information_schema')
)

-- Main query output
SELECT 
  'TABLE' AS object_type,
  twc.table_schema,
  twc.table_name,
  twc.column_name,
  twc.data_type,
  twc.udt_name,
  twc.column_default,
  twc.is_nullable,
  CASE 
    WHEN pk.column_name IS NOT NULL THEN 'PRIMARY KEY' 
    ELSE NULL 
  END AS key_type,
  CASE 
    WHEN fk.column_name IS NOT NULL THEN 
      fk.foreign_table_schema || '.' || fk.foreign_table_name || '.' || fk.foreign_column_name ||
      ' (ON UPDATE ' || fk.update_rule || ', ON DELETE ' || fk.delete_rule || ')'
    ELSE NULL 
  END AS references,
  CASE 
    WHEN uc.column_name IS NOT NULL THEN 'UNIQUE' 
    ELSE NULL 
  END AS unique_constraint,
  twc.column_comment,
  twc.table_comment,
  twc.character_maximum_length,
  twc.numeric_precision,
  twc.ordinal_position
FROM 
  tables_with_columns twc
  LEFT JOIN primary_keys pk ON twc.table_schema = pk.table_schema AND twc.table_name = pk.table_name AND twc.column_name = pk.column_name
  LEFT JOIN foreign_keys fk ON twc.table_schema = fk.table_schema AND twc.table_name = fk.table_name AND twc.column_name = fk.column_name
  LEFT JOIN unique_constraints uc ON twc.table_schema = uc.table_schema AND twc.table_name = uc.table_name AND twc.column_name = uc.column_name

UNION ALL

SELECT 
  'ENUM' AS object_type,
  'public' AS table_schema,
  e.enum_name AS table_name,
  NULL AS column_name,
  'enum' AS data_type,
  NULL AS udt_name,
  array_to_string(e.enum_values, ', ') AS column_default,
  NULL AS is_nullable,
  NULL AS key_type,
  NULL AS references,
  NULL AS unique_constraint,
  e.enum_comment AS column_comment,
  NULL AS table_comment,
  NULL AS character_maximum_length,
  NULL AS numeric_precision,
  NULL AS ordinal_position
FROM 
  enums e

UNION ALL

SELECT 
  'FUNCTION' AS object_type,
  f.schema_name AS table_schema,
  f.function_name AS table_name,
  f.arguments AS column_name,
  f.return_type AS data_type,
  f.language AS udt_name,
  NULL AS column_default,
  NULL AS is_nullable,
  NULL AS key_type,
  NULL AS references,
  NULL AS unique_constraint,
  f.function_comment AS column_comment,
  NULL AS table_comment,
  NULL AS character_maximum_length,
  NULL AS numeric_precision,
  NULL AS ordinal_position
FROM 
  functions f

UNION ALL

SELECT
  'VIEW' AS object_type,
  v.schema_name AS table_schema,
  v.view_name AS table_name,
  NULL AS column_name,
  'view' AS data_type,
  NULL AS udt_name,
  NULL AS column_default,
  NULL AS is_nullable,
  NULL AS key_type,
  NULL AS references,
  NULL AS unique_constraint,
  v.view_comment AS column_comment,
  NULL AS table_comment,
  NULL AS character_maximum_length,
  NULL AS numeric_precision,
  NULL AS ordinal_position
FROM
  views v

UNION ALL

SELECT
  'TRIGGER' AS object_type,
  t.table_schema,
  t.table_name,
  t.trigger_name AS column_name,
  t.action_timing || ' ' || t.event_manipulation AS data_type,
  NULL AS udt_name,
  t.action_statement AS column_default,
  NULL AS is_nullable,
  NULL AS key_type,
  NULL AS references,
  NULL AS unique_constraint,
  NULL AS column_comment,
  NULL AS table_comment,
  NULL AS character_maximum_length,
  NULL AS numeric_precision,
  NULL AS ordinal_position
FROM
  triggers t

UNION ALL

SELECT
  'INDEX' AS object_type,
  i.schema_name AS table_schema,
  i.table_name,
  i.index_name AS column_name,
  'index' AS data_type,
  NULL AS udt_name,
  i.index_definition AS column_default,
  NULL AS is_nullable,
  NULL AS key_type,
  NULL AS references,
  NULL AS unique_constraint,
  NULL AS column_comment,
  NULL AS table_comment,
  NULL AS character_maximum_length,
  NULL AS numeric_precision,
  NULL AS ordinal_position
FROM
  indexes i

UNION ALL

SELECT
  'CHECK_CONSTRAINT' AS object_type,
  cc.table_schema,
  cc.table_name,
  cc.constraint_name AS column_name,
  'check' AS data_type,
  NULL AS udt_name,
  cc.check_clause AS column_default,
  NULL AS is_nullable,
  NULL AS key_type,
  NULL AS references,
  NULL AS unique_constraint,
  NULL AS column_comment,
  NULL AS table_comment,
  NULL AS character_maximum_length,
  NULL AS numeric_precision,
  NULL AS ordinal_position
FROM
  check_constraints cc

ORDER BY 
  object_type, table_schema, table_name, ordinal_position NULLS FIRST, column_name;