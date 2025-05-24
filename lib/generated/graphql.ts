import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Scalar _Any */
  _Any: { input: any; output: any; }
  bpchar: { input: any; output: any; }
  date: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  leave_status_enum: { input: any; output: any; }
  numeric: { input: any; output: any; }
  payroll_cycle_type: { input: any; output: any; }
  payroll_date_type: { input: any; output: any; }
  payroll_status: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  user_role: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** A union of all types that use the @key directive */
export type _Entity = Adjustment_Rules | Client_External_Systems | Clients | External_Systems | Holidays | Leave | Notes | Payroll_Cycles | Payroll_Date_Types | Payroll_Dates | Payrolls | Users | Work_Schedule;

export type _Service = {
  __typename?: '_Service';
  /** SDL representation of schema */
  sdl: Scalars['String']['output'];
};

/** columns and relationships of "adjustment_rules" */
export type Adjustment_Rules = {
  __typename?: 'adjustment_rules';
  /** Timestamp when the rule was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Reference to the payroll cycle this rule applies to */
  cycle_id: Scalars['uuid']['output'];
  /** Reference to the payroll date type this rule affects */
  date_type_id: Scalars['uuid']['output'];
  /** Unique identifier for the adjustment rule */
  id: Scalars['uuid']['output'];
  /** An object relationship */
  payroll_cycle: Payroll_Cycles;
  /** An object relationship */
  payroll_date_type: Payroll_Date_Types;
  /** Code/formula used to calculate date adjustments */
  rule_code: Scalars['String']['output'];
  /** Human-readable description of the adjustment rule */
  rule_description: Scalars['String']['output'];
  /** Timestamp when the rule was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "adjustment_rules" */
export type Adjustment_Rules_Aggregate = {
  __typename?: 'adjustment_rules_aggregate';
  aggregate?: Maybe<Adjustment_Rules_Aggregate_Fields>;
  nodes: Array<Adjustment_Rules>;
};

export type Adjustment_Rules_Aggregate_Bool_Exp = {
  count?: InputMaybe<Adjustment_Rules_Aggregate_Bool_Exp_Count>;
};

export type Adjustment_Rules_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Adjustment_Rules_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Adjustment_Rules_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "adjustment_rules" */
export type Adjustment_Rules_Aggregate_Fields = {
  __typename?: 'adjustment_rules_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Adjustment_Rules_Max_Fields>;
  min?: Maybe<Adjustment_Rules_Min_Fields>;
};


/** aggregate fields of "adjustment_rules" */
export type Adjustment_Rules_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Adjustment_Rules_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "adjustment_rules" */
export type Adjustment_Rules_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Adjustment_Rules_Max_Order_By>;
  min?: InputMaybe<Adjustment_Rules_Min_Order_By>;
};

/** input type for inserting array relation for remote table "adjustment_rules" */
export type Adjustment_Rules_Arr_Rel_Insert_Input = {
  data: Array<Adjustment_Rules_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Adjustment_Rules_On_Conflict>;
};

/** Boolean expression to filter rows from the table "adjustment_rules". All fields are combined with a logical 'AND'. */
export type Adjustment_Rules_Bool_Exp = {
  _and?: InputMaybe<Array<Adjustment_Rules_Bool_Exp>>;
  _not?: InputMaybe<Adjustment_Rules_Bool_Exp>;
  _or?: InputMaybe<Array<Adjustment_Rules_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  cycle_id?: InputMaybe<Uuid_Comparison_Exp>;
  date_type_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  payroll_cycle?: InputMaybe<Payroll_Cycles_Bool_Exp>;
  payroll_date_type?: InputMaybe<Payroll_Date_Types_Bool_Exp>;
  rule_code?: InputMaybe<String_Comparison_Exp>;
  rule_description?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "adjustment_rules" */
export enum Adjustment_Rules_Constraint {
  /** unique or primary key constraint on columns "date_type_id", "cycle_id" */
  AdjustmentRulesCycleIdDateTypeIdKey = 'adjustment_rules_cycle_id_date_type_id_key',
  /** unique or primary key constraint on columns "id" */
  AdjustmentRulesPkey = 'adjustment_rules_pkey'
}

/** input type for inserting data into table "adjustment_rules" */
export type Adjustment_Rules_Insert_Input = {
  /** Timestamp when the rule was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Reference to the payroll cycle this rule applies to */
  cycle_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Reference to the payroll date type this rule affects */
  date_type_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Unique identifier for the adjustment rule */
  id?: InputMaybe<Scalars['uuid']['input']>;
  payroll_cycle?: InputMaybe<Payroll_Cycles_Obj_Rel_Insert_Input>;
  payroll_date_type?: InputMaybe<Payroll_Date_Types_Obj_Rel_Insert_Input>;
  /** Code/formula used to calculate date adjustments */
  rule_code?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable description of the adjustment rule */
  rule_description?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the rule was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Adjustment_Rules_Max_Fields = {
  __typename?: 'adjustment_rules_max_fields';
  /** Timestamp when the rule was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Reference to the payroll cycle this rule applies to */
  cycle_id?: Maybe<Scalars['uuid']['output']>;
  /** Reference to the payroll date type this rule affects */
  date_type_id?: Maybe<Scalars['uuid']['output']>;
  /** Unique identifier for the adjustment rule */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Code/formula used to calculate date adjustments */
  rule_code?: Maybe<Scalars['String']['output']>;
  /** Human-readable description of the adjustment rule */
  rule_description?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the rule was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "adjustment_rules" */
export type Adjustment_Rules_Max_Order_By = {
  /** Timestamp when the rule was created */
  created_at?: InputMaybe<Order_By>;
  /** Reference to the payroll cycle this rule applies to */
  cycle_id?: InputMaybe<Order_By>;
  /** Reference to the payroll date type this rule affects */
  date_type_id?: InputMaybe<Order_By>;
  /** Unique identifier for the adjustment rule */
  id?: InputMaybe<Order_By>;
  /** Code/formula used to calculate date adjustments */
  rule_code?: InputMaybe<Order_By>;
  /** Human-readable description of the adjustment rule */
  rule_description?: InputMaybe<Order_By>;
  /** Timestamp when the rule was last updated */
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Adjustment_Rules_Min_Fields = {
  __typename?: 'adjustment_rules_min_fields';
  /** Timestamp when the rule was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Reference to the payroll cycle this rule applies to */
  cycle_id?: Maybe<Scalars['uuid']['output']>;
  /** Reference to the payroll date type this rule affects */
  date_type_id?: Maybe<Scalars['uuid']['output']>;
  /** Unique identifier for the adjustment rule */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Code/formula used to calculate date adjustments */
  rule_code?: Maybe<Scalars['String']['output']>;
  /** Human-readable description of the adjustment rule */
  rule_description?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the rule was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "adjustment_rules" */
export type Adjustment_Rules_Min_Order_By = {
  /** Timestamp when the rule was created */
  created_at?: InputMaybe<Order_By>;
  /** Reference to the payroll cycle this rule applies to */
  cycle_id?: InputMaybe<Order_By>;
  /** Reference to the payroll date type this rule affects */
  date_type_id?: InputMaybe<Order_By>;
  /** Unique identifier for the adjustment rule */
  id?: InputMaybe<Order_By>;
  /** Code/formula used to calculate date adjustments */
  rule_code?: InputMaybe<Order_By>;
  /** Human-readable description of the adjustment rule */
  rule_description?: InputMaybe<Order_By>;
  /** Timestamp when the rule was last updated */
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "adjustment_rules" */
export type Adjustment_Rules_Mutation_Response = {
  __typename?: 'adjustment_rules_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Adjustment_Rules>;
};

/** on_conflict condition type for table "adjustment_rules" */
export type Adjustment_Rules_On_Conflict = {
  constraint: Adjustment_Rules_Constraint;
  update_columns?: Array<Adjustment_Rules_Update_Column>;
  where?: InputMaybe<Adjustment_Rules_Bool_Exp>;
};

/** Ordering options when selecting data from "adjustment_rules". */
export type Adjustment_Rules_Order_By = {
  created_at?: InputMaybe<Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  date_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payroll_cycle?: InputMaybe<Payroll_Cycles_Order_By>;
  payroll_date_type?: InputMaybe<Payroll_Date_Types_Order_By>;
  rule_code?: InputMaybe<Order_By>;
  rule_description?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: adjustment_rules */
export type Adjustment_Rules_Pk_Columns_Input = {
  /** Unique identifier for the adjustment rule */
  id: Scalars['uuid']['input'];
};

/** select columns of table "adjustment_rules" */
export enum Adjustment_Rules_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CycleId = 'cycle_id',
  /** column name */
  DateTypeId = 'date_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  RuleCode = 'rule_code',
  /** column name */
  RuleDescription = 'rule_description',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "adjustment_rules" */
export type Adjustment_Rules_Set_Input = {
  /** Timestamp when the rule was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Reference to the payroll cycle this rule applies to */
  cycle_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Reference to the payroll date type this rule affects */
  date_type_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Unique identifier for the adjustment rule */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Code/formula used to calculate date adjustments */
  rule_code?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable description of the adjustment rule */
  rule_description?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the rule was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "adjustment_rules" */
export type Adjustment_Rules_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Adjustment_Rules_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Adjustment_Rules_Stream_Cursor_Value_Input = {
  /** Timestamp when the rule was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Reference to the payroll cycle this rule applies to */
  cycle_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Reference to the payroll date type this rule affects */
  date_type_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Unique identifier for the adjustment rule */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Code/formula used to calculate date adjustments */
  rule_code?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable description of the adjustment rule */
  rule_description?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the rule was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "adjustment_rules" */
export enum Adjustment_Rules_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CycleId = 'cycle_id',
  /** column name */
  DateTypeId = 'date_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  RuleCode = 'rule_code',
  /** column name */
  RuleDescription = 'rule_description',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Adjustment_Rules_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Adjustment_Rules_Set_Input>;
  /** filter the rows which have to be updated */
  where: Adjustment_Rules_Bool_Exp;
};

/** columns and relationships of "app_settings" */
export type App_Settings = {
  __typename?: 'app_settings';
  /** Unique identifier for application setting */
  id: Scalars['String']['output'];
  /** JSON structure containing application permission configurations */
  permissions?: Maybe<Scalars['jsonb']['output']>;
};


/** columns and relationships of "app_settings" */
export type App_SettingsPermissionsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "app_settings" */
export type App_Settings_Aggregate = {
  __typename?: 'app_settings_aggregate';
  aggregate?: Maybe<App_Settings_Aggregate_Fields>;
  nodes: Array<App_Settings>;
};

/** aggregate fields of "app_settings" */
export type App_Settings_Aggregate_Fields = {
  __typename?: 'app_settings_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<App_Settings_Max_Fields>;
  min?: Maybe<App_Settings_Min_Fields>;
};


/** aggregate fields of "app_settings" */
export type App_Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type App_Settings_Append_Input = {
  /** JSON structure containing application permission configurations */
  permissions?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "app_settings". All fields are combined with a logical 'AND'. */
export type App_Settings_Bool_Exp = {
  _and?: InputMaybe<Array<App_Settings_Bool_Exp>>;
  _not?: InputMaybe<App_Settings_Bool_Exp>;
  _or?: InputMaybe<Array<App_Settings_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  permissions?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "app_settings" */
export enum App_Settings_Constraint {
  /** unique or primary key constraint on columns "id" */
  AppSettingsPkey = 'app_settings_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type App_Settings_Delete_At_Path_Input = {
  /** JSON structure containing application permission configurations */
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type App_Settings_Delete_Elem_Input = {
  /** JSON structure containing application permission configurations */
  permissions?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type App_Settings_Delete_Key_Input = {
  /** JSON structure containing application permission configurations */
  permissions?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "app_settings" */
export type App_Settings_Insert_Input = {
  /** Unique identifier for application setting */
  id?: InputMaybe<Scalars['String']['input']>;
  /** JSON structure containing application permission configurations */
  permissions?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type App_Settings_Max_Fields = {
  __typename?: 'app_settings_max_fields';
  /** Unique identifier for application setting */
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type App_Settings_Min_Fields = {
  __typename?: 'app_settings_min_fields';
  /** Unique identifier for application setting */
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "app_settings" */
export type App_Settings_Mutation_Response = {
  __typename?: 'app_settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<App_Settings>;
};

/** on_conflict condition type for table "app_settings" */
export type App_Settings_On_Conflict = {
  constraint: App_Settings_Constraint;
  update_columns?: Array<App_Settings_Update_Column>;
  where?: InputMaybe<App_Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "app_settings". */
export type App_Settings_Order_By = {
  id?: InputMaybe<Order_By>;
  permissions?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app_settings */
export type App_Settings_Pk_Columns_Input = {
  /** Unique identifier for application setting */
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type App_Settings_Prepend_Input = {
  /** JSON structure containing application permission configurations */
  permissions?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "app_settings" */
export enum App_Settings_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Permissions = 'permissions'
}

/** input type for updating data in table "app_settings" */
export type App_Settings_Set_Input = {
  /** Unique identifier for application setting */
  id?: InputMaybe<Scalars['String']['input']>;
  /** JSON structure containing application permission configurations */
  permissions?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "app_settings" */
export type App_Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_Settings_Stream_Cursor_Value_Input = {
  /** Unique identifier for application setting */
  id?: InputMaybe<Scalars['String']['input']>;
  /** JSON structure containing application permission configurations */
  permissions?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "app_settings" */
export enum App_Settings_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Permissions = 'permissions'
}

export type App_Settings_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<App_Settings_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<App_Settings_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<App_Settings_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<App_Settings_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<App_Settings_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_Settings_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_Settings_Bool_Exp;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']['input']>;
  _gt?: InputMaybe<Scalars['bpchar']['input']>;
  _gte?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']['input']>;
  _in?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']['input']>;
  _lt?: InputMaybe<Scalars['bpchar']['input']>;
  _lte?: InputMaybe<Scalars['bpchar']['input']>;
  _neq?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']['input']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']['input']>;
};

/** columns and relationships of "client_external_systems" */
export type Client_External_Systems = {
  __typename?: 'client_external_systems';
  /** An object relationship */
  client: Clients;
  /** Reference to the client */
  client_id: Scalars['uuid']['output'];
  /** Timestamp when the mapping was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  external_system: External_Systems;
  /** Unique identifier for the client-system mapping */
  id: Scalars['uuid']['output'];
  /** Client identifier in the external system */
  system_client_id?: Maybe<Scalars['String']['output']>;
  /** Reference to the external system */
  system_id: Scalars['uuid']['output'];
  /** Timestamp when the mapping was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "client_external_systems" */
export type Client_External_Systems_Aggregate = {
  __typename?: 'client_external_systems_aggregate';
  aggregate?: Maybe<Client_External_Systems_Aggregate_Fields>;
  nodes: Array<Client_External_Systems>;
};

export type Client_External_Systems_Aggregate_Bool_Exp = {
  count?: InputMaybe<Client_External_Systems_Aggregate_Bool_Exp_Count>;
};

export type Client_External_Systems_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Client_External_Systems_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Client_External_Systems_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "client_external_systems" */
export type Client_External_Systems_Aggregate_Fields = {
  __typename?: 'client_external_systems_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Client_External_Systems_Max_Fields>;
  min?: Maybe<Client_External_Systems_Min_Fields>;
};


/** aggregate fields of "client_external_systems" */
export type Client_External_Systems_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Client_External_Systems_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "client_external_systems" */
export type Client_External_Systems_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Client_External_Systems_Max_Order_By>;
  min?: InputMaybe<Client_External_Systems_Min_Order_By>;
};

/** input type for inserting array relation for remote table "client_external_systems" */
export type Client_External_Systems_Arr_Rel_Insert_Input = {
  data: Array<Client_External_Systems_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Client_External_Systems_On_Conflict>;
};

/** Boolean expression to filter rows from the table "client_external_systems". All fields are combined with a logical 'AND'. */
export type Client_External_Systems_Bool_Exp = {
  _and?: InputMaybe<Array<Client_External_Systems_Bool_Exp>>;
  _not?: InputMaybe<Client_External_Systems_Bool_Exp>;
  _or?: InputMaybe<Array<Client_External_Systems_Bool_Exp>>;
  client?: InputMaybe<Clients_Bool_Exp>;
  client_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  external_system?: InputMaybe<External_Systems_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  system_client_id?: InputMaybe<String_Comparison_Exp>;
  system_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "client_external_systems" */
export enum Client_External_Systems_Constraint {
  /** unique or primary key constraint on columns "client_id", "system_id" */
  ClientExternalSystemsClientIdSystemIdKey = 'client_external_systems_client_id_system_id_key',
  /** unique or primary key constraint on columns "id" */
  ClientExternalSystemsPkey = 'client_external_systems_pkey'
}

/** input type for inserting data into table "client_external_systems" */
export type Client_External_Systems_Insert_Input = {
  client?: InputMaybe<Clients_Obj_Rel_Insert_Input>;
  /** Reference to the client */
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Timestamp when the mapping was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  external_system?: InputMaybe<External_Systems_Obj_Rel_Insert_Input>;
  /** Unique identifier for the client-system mapping */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Client identifier in the external system */
  system_client_id?: InputMaybe<Scalars['String']['input']>;
  /** Reference to the external system */
  system_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Timestamp when the mapping was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Client_External_Systems_Max_Fields = {
  __typename?: 'client_external_systems_max_fields';
  /** Reference to the client */
  client_id?: Maybe<Scalars['uuid']['output']>;
  /** Timestamp when the mapping was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique identifier for the client-system mapping */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Client identifier in the external system */
  system_client_id?: Maybe<Scalars['String']['output']>;
  /** Reference to the external system */
  system_id?: Maybe<Scalars['uuid']['output']>;
  /** Timestamp when the mapping was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "client_external_systems" */
export type Client_External_Systems_Max_Order_By = {
  /** Reference to the client */
  client_id?: InputMaybe<Order_By>;
  /** Timestamp when the mapping was created */
  created_at?: InputMaybe<Order_By>;
  /** Unique identifier for the client-system mapping */
  id?: InputMaybe<Order_By>;
  /** Client identifier in the external system */
  system_client_id?: InputMaybe<Order_By>;
  /** Reference to the external system */
  system_id?: InputMaybe<Order_By>;
  /** Timestamp when the mapping was last updated */
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Client_External_Systems_Min_Fields = {
  __typename?: 'client_external_systems_min_fields';
  /** Reference to the client */
  client_id?: Maybe<Scalars['uuid']['output']>;
  /** Timestamp when the mapping was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique identifier for the client-system mapping */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Client identifier in the external system */
  system_client_id?: Maybe<Scalars['String']['output']>;
  /** Reference to the external system */
  system_id?: Maybe<Scalars['uuid']['output']>;
  /** Timestamp when the mapping was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "client_external_systems" */
export type Client_External_Systems_Min_Order_By = {
  /** Reference to the client */
  client_id?: InputMaybe<Order_By>;
  /** Timestamp when the mapping was created */
  created_at?: InputMaybe<Order_By>;
  /** Unique identifier for the client-system mapping */
  id?: InputMaybe<Order_By>;
  /** Client identifier in the external system */
  system_client_id?: InputMaybe<Order_By>;
  /** Reference to the external system */
  system_id?: InputMaybe<Order_By>;
  /** Timestamp when the mapping was last updated */
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "client_external_systems" */
export type Client_External_Systems_Mutation_Response = {
  __typename?: 'client_external_systems_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Client_External_Systems>;
};

/** on_conflict condition type for table "client_external_systems" */
export type Client_External_Systems_On_Conflict = {
  constraint: Client_External_Systems_Constraint;
  update_columns?: Array<Client_External_Systems_Update_Column>;
  where?: InputMaybe<Client_External_Systems_Bool_Exp>;
};

/** Ordering options when selecting data from "client_external_systems". */
export type Client_External_Systems_Order_By = {
  client?: InputMaybe<Clients_Order_By>;
  client_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  external_system?: InputMaybe<External_Systems_Order_By>;
  id?: InputMaybe<Order_By>;
  system_client_id?: InputMaybe<Order_By>;
  system_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: client_external_systems */
export type Client_External_Systems_Pk_Columns_Input = {
  /** Unique identifier for the client-system mapping */
  id: Scalars['uuid']['input'];
};

/** select columns of table "client_external_systems" */
export enum Client_External_Systems_Select_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SystemClientId = 'system_client_id',
  /** column name */
  SystemId = 'system_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "client_external_systems" */
export type Client_External_Systems_Set_Input = {
  /** Reference to the client */
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Timestamp when the mapping was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique identifier for the client-system mapping */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Client identifier in the external system */
  system_client_id?: InputMaybe<Scalars['String']['input']>;
  /** Reference to the external system */
  system_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Timestamp when the mapping was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "client_external_systems" */
export type Client_External_Systems_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Client_External_Systems_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Client_External_Systems_Stream_Cursor_Value_Input = {
  /** Reference to the client */
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Timestamp when the mapping was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique identifier for the client-system mapping */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Client identifier in the external system */
  system_client_id?: InputMaybe<Scalars['String']['input']>;
  /** Reference to the external system */
  system_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Timestamp when the mapping was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "client_external_systems" */
export enum Client_External_Systems_Update_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SystemClientId = 'system_client_id',
  /** column name */
  SystemId = 'system_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Client_External_Systems_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Client_External_Systems_Set_Input>;
  /** filter the rows which have to be updated */
  where: Client_External_Systems_Bool_Exp;
};

/** columns and relationships of "clients" */
export type Clients = {
  __typename?: 'clients';
  /** Whether the client is currently active */
  active?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  client_external_systems: Array<Client_External_Systems>;
  /** An aggregate relationship */
  client_external_systems_aggregate: Client_External_Systems_Aggregate;
  /** Email address for the client contact */
  contact_email?: Maybe<Scalars['String']['output']>;
  /** Primary contact person at the client */
  contact_person?: Maybe<Scalars['String']['output']>;
  /** Phone number for the client contact */
  contact_phone?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the client was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique identifier for the client */
  id: Scalars['uuid']['output'];
  /** Client company name */
  name: Scalars['String']['output'];
  /** An array relationship */
  payrolls: Array<Payrolls>;
  /** An aggregate relationship */
  payrolls_aggregate: Payrolls_Aggregate;
  /** Timestamp when the client was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "clients" */
export type ClientsClient_External_SystemsArgs = {
  distinct_on?: InputMaybe<Array<Client_External_Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_External_Systems_Order_By>>;
  where?: InputMaybe<Client_External_Systems_Bool_Exp>;
};


/** columns and relationships of "clients" */
export type ClientsClient_External_Systems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_External_Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_External_Systems_Order_By>>;
  where?: InputMaybe<Client_External_Systems_Bool_Exp>;
};


/** columns and relationships of "clients" */
export type ClientsPayrollsArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


/** columns and relationships of "clients" */
export type ClientsPayrolls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};

/** aggregated selection of "clients" */
export type Clients_Aggregate = {
  __typename?: 'clients_aggregate';
  aggregate?: Maybe<Clients_Aggregate_Fields>;
  nodes: Array<Clients>;
};

export type Clients_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Clients_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Clients_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Clients_Aggregate_Bool_Exp_Count>;
};

export type Clients_Aggregate_Bool_Exp_Bool_And = {
  arguments: Clients_Select_Column_Clients_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Clients_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Clients_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Clients_Select_Column_Clients_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Clients_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Clients_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Clients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Clients_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "clients" */
export type Clients_Aggregate_Fields = {
  __typename?: 'clients_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Clients_Max_Fields>;
  min?: Maybe<Clients_Min_Fields>;
};


/** aggregate fields of "clients" */
export type Clients_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Clients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "clients" */
export type Clients_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Clients_Max_Order_By>;
  min?: InputMaybe<Clients_Min_Order_By>;
};

/** input type for inserting array relation for remote table "clients" */
export type Clients_Arr_Rel_Insert_Input = {
  data: Array<Clients_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Clients_On_Conflict>;
};

/** Boolean expression to filter rows from the table "clients". All fields are combined with a logical 'AND'. */
export type Clients_Bool_Exp = {
  _and?: InputMaybe<Array<Clients_Bool_Exp>>;
  _not?: InputMaybe<Clients_Bool_Exp>;
  _or?: InputMaybe<Array<Clients_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  client_external_systems?: InputMaybe<Client_External_Systems_Bool_Exp>;
  client_external_systems_aggregate?: InputMaybe<Client_External_Systems_Aggregate_Bool_Exp>;
  contact_email?: InputMaybe<String_Comparison_Exp>;
  contact_person?: InputMaybe<String_Comparison_Exp>;
  contact_phone?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  payrolls?: InputMaybe<Payrolls_Bool_Exp>;
  payrolls_aggregate?: InputMaybe<Payrolls_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "clients" */
export enum Clients_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClientsPkey = 'clients_pkey'
}

/** input type for inserting data into table "clients" */
export type Clients_Insert_Input = {
  /** Whether the client is currently active */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  client_external_systems?: InputMaybe<Client_External_Systems_Arr_Rel_Insert_Input>;
  /** Email address for the client contact */
  contact_email?: InputMaybe<Scalars['String']['input']>;
  /** Primary contact person at the client */
  contact_person?: InputMaybe<Scalars['String']['input']>;
  /** Phone number for the client contact */
  contact_phone?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the client was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique identifier for the client */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Client company name */
  name?: InputMaybe<Scalars['String']['input']>;
  payrolls?: InputMaybe<Payrolls_Arr_Rel_Insert_Input>;
  /** Timestamp when the client was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Clients_Max_Fields = {
  __typename?: 'clients_max_fields';
  /** Email address for the client contact */
  contact_email?: Maybe<Scalars['String']['output']>;
  /** Primary contact person at the client */
  contact_person?: Maybe<Scalars['String']['output']>;
  /** Phone number for the client contact */
  contact_phone?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the client was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique identifier for the client */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Client company name */
  name?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the client was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "clients" */
export type Clients_Max_Order_By = {
  /** Email address for the client contact */
  contact_email?: InputMaybe<Order_By>;
  /** Primary contact person at the client */
  contact_person?: InputMaybe<Order_By>;
  /** Phone number for the client contact */
  contact_phone?: InputMaybe<Order_By>;
  /** Timestamp when the client was created */
  created_at?: InputMaybe<Order_By>;
  /** Unique identifier for the client */
  id?: InputMaybe<Order_By>;
  /** Client company name */
  name?: InputMaybe<Order_By>;
  /** Timestamp when the client was last updated */
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Clients_Min_Fields = {
  __typename?: 'clients_min_fields';
  /** Email address for the client contact */
  contact_email?: Maybe<Scalars['String']['output']>;
  /** Primary contact person at the client */
  contact_person?: Maybe<Scalars['String']['output']>;
  /** Phone number for the client contact */
  contact_phone?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the client was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique identifier for the client */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Client company name */
  name?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the client was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "clients" */
export type Clients_Min_Order_By = {
  /** Email address for the client contact */
  contact_email?: InputMaybe<Order_By>;
  /** Primary contact person at the client */
  contact_person?: InputMaybe<Order_By>;
  /** Phone number for the client contact */
  contact_phone?: InputMaybe<Order_By>;
  /** Timestamp when the client was created */
  created_at?: InputMaybe<Order_By>;
  /** Unique identifier for the client */
  id?: InputMaybe<Order_By>;
  /** Client company name */
  name?: InputMaybe<Order_By>;
  /** Timestamp when the client was last updated */
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "clients" */
export type Clients_Mutation_Response = {
  __typename?: 'clients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Clients>;
};

/** input type for inserting object relation for remote table "clients" */
export type Clients_Obj_Rel_Insert_Input = {
  data: Clients_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Clients_On_Conflict>;
};

/** on_conflict condition type for table "clients" */
export type Clients_On_Conflict = {
  constraint: Clients_Constraint;
  update_columns?: Array<Clients_Update_Column>;
  where?: InputMaybe<Clients_Bool_Exp>;
};

/** Ordering options when selecting data from "clients". */
export type Clients_Order_By = {
  active?: InputMaybe<Order_By>;
  client_external_systems_aggregate?: InputMaybe<Client_External_Systems_Aggregate_Order_By>;
  contact_email?: InputMaybe<Order_By>;
  contact_person?: InputMaybe<Order_By>;
  contact_phone?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  payrolls_aggregate?: InputMaybe<Payrolls_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: clients */
export type Clients_Pk_Columns_Input = {
  /** Unique identifier for the client */
  id: Scalars['uuid']['input'];
};

/** select columns of table "clients" */
export enum Clients_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  ContactEmail = 'contact_email',
  /** column name */
  ContactPerson = 'contact_person',
  /** column name */
  ContactPhone = 'contact_phone',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "clients_aggregate_bool_exp_bool_and_arguments_columns" columns of table "clients" */
export enum Clients_Select_Column_Clients_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "clients_aggregate_bool_exp_bool_or_arguments_columns" columns of table "clients" */
export enum Clients_Select_Column_Clients_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** input type for updating data in table "clients" */
export type Clients_Set_Input = {
  /** Whether the client is currently active */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Email address for the client contact */
  contact_email?: InputMaybe<Scalars['String']['input']>;
  /** Primary contact person at the client */
  contact_person?: InputMaybe<Scalars['String']['input']>;
  /** Phone number for the client contact */
  contact_phone?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the client was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique identifier for the client */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Client company name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the client was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "clients" */
export type Clients_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Clients_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Clients_Stream_Cursor_Value_Input = {
  /** Whether the client is currently active */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Email address for the client contact */
  contact_email?: InputMaybe<Scalars['String']['input']>;
  /** Primary contact person at the client */
  contact_person?: InputMaybe<Scalars['String']['input']>;
  /** Phone number for the client contact */
  contact_phone?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the client was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique identifier for the client */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Client company name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the client was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "clients" */
export enum Clients_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  ContactEmail = 'contact_email',
  /** column name */
  ContactPerson = 'contact_person',
  /** column name */
  ContactPhone = 'contact_phone',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Clients_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Clients_Set_Input>;
  /** filter the rows which have to be updated */
  where: Clients_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "external_systems" */
export type External_Systems = {
  __typename?: 'external_systems';
  /** An array relationship */
  client_external_systems: Array<Client_External_Systems>;
  /** An aggregate relationship */
  client_external_systems_aggregate: Client_External_Systems_Aggregate;
  /** Timestamp when the system was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Description of the external system and its purpose */
  description?: Maybe<Scalars['String']['output']>;
  /** Path or reference to the system icon */
  icon?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the external system */
  id: Scalars['uuid']['output'];
  /** Name of the external system */
  name: Scalars['String']['output'];
  /** Timestamp when the system was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** URL endpoint for the external system */
  url: Scalars['String']['output'];
};


/** columns and relationships of "external_systems" */
export type External_SystemsClient_External_SystemsArgs = {
  distinct_on?: InputMaybe<Array<Client_External_Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_External_Systems_Order_By>>;
  where?: InputMaybe<Client_External_Systems_Bool_Exp>;
};


/** columns and relationships of "external_systems" */
export type External_SystemsClient_External_Systems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_External_Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_External_Systems_Order_By>>;
  where?: InputMaybe<Client_External_Systems_Bool_Exp>;
};

/** aggregated selection of "external_systems" */
export type External_Systems_Aggregate = {
  __typename?: 'external_systems_aggregate';
  aggregate?: Maybe<External_Systems_Aggregate_Fields>;
  nodes: Array<External_Systems>;
};

/** aggregate fields of "external_systems" */
export type External_Systems_Aggregate_Fields = {
  __typename?: 'external_systems_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<External_Systems_Max_Fields>;
  min?: Maybe<External_Systems_Min_Fields>;
};


/** aggregate fields of "external_systems" */
export type External_Systems_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<External_Systems_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "external_systems". All fields are combined with a logical 'AND'. */
export type External_Systems_Bool_Exp = {
  _and?: InputMaybe<Array<External_Systems_Bool_Exp>>;
  _not?: InputMaybe<External_Systems_Bool_Exp>;
  _or?: InputMaybe<Array<External_Systems_Bool_Exp>>;
  client_external_systems?: InputMaybe<Client_External_Systems_Bool_Exp>;
  client_external_systems_aggregate?: InputMaybe<Client_External_Systems_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "external_systems" */
export enum External_Systems_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExternalSystemsPkey = 'external_systems_pkey'
}

/** input type for inserting data into table "external_systems" */
export type External_Systems_Insert_Input = {
  client_external_systems?: InputMaybe<Client_External_Systems_Arr_Rel_Insert_Input>;
  /** Timestamp when the system was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Description of the external system and its purpose */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Path or reference to the system icon */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the external system */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Name of the external system */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the system was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** URL endpoint for the external system */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type External_Systems_Max_Fields = {
  __typename?: 'external_systems_max_fields';
  /** Timestamp when the system was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Description of the external system and its purpose */
  description?: Maybe<Scalars['String']['output']>;
  /** Path or reference to the system icon */
  icon?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the external system */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Name of the external system */
  name?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the system was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** URL endpoint for the external system */
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type External_Systems_Min_Fields = {
  __typename?: 'external_systems_min_fields';
  /** Timestamp when the system was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Description of the external system and its purpose */
  description?: Maybe<Scalars['String']['output']>;
  /** Path or reference to the system icon */
  icon?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the external system */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Name of the external system */
  name?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the system was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** URL endpoint for the external system */
  url?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "external_systems" */
export type External_Systems_Mutation_Response = {
  __typename?: 'external_systems_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<External_Systems>;
};

/** input type for inserting object relation for remote table "external_systems" */
export type External_Systems_Obj_Rel_Insert_Input = {
  data: External_Systems_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<External_Systems_On_Conflict>;
};

/** on_conflict condition type for table "external_systems" */
export type External_Systems_On_Conflict = {
  constraint: External_Systems_Constraint;
  update_columns?: Array<External_Systems_Update_Column>;
  where?: InputMaybe<External_Systems_Bool_Exp>;
};

/** Ordering options when selecting data from "external_systems". */
export type External_Systems_Order_By = {
  client_external_systems_aggregate?: InputMaybe<Client_External_Systems_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: external_systems */
export type External_Systems_Pk_Columns_Input = {
  /** Unique identifier for the external system */
  id: Scalars['uuid']['input'];
};

/** select columns of table "external_systems" */
export enum External_Systems_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "external_systems" */
export type External_Systems_Set_Input = {
  /** Timestamp when the system was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Description of the external system and its purpose */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Path or reference to the system icon */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the external system */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Name of the external system */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the system was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** URL endpoint for the external system */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "external_systems" */
export type External_Systems_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: External_Systems_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type External_Systems_Stream_Cursor_Value_Input = {
  /** Timestamp when the system was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Description of the external system and its purpose */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Path or reference to the system icon */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the external system */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Name of the external system */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the system was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** URL endpoint for the external system */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "external_systems" */
export enum External_Systems_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

export type External_Systems_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<External_Systems_Set_Input>;
  /** filter the rows which have to be updated */
  where: External_Systems_Bool_Exp;
};

/** columns and relationships of "feature_flags" */
export type Feature_Flags = {
  __typename?: 'feature_flags';
  /** JSON array of roles that can access this feature */
  allowed_roles: Scalars['jsonb']['output'];
  /** Name of the feature controlled by this flag */
  feature_name: Scalars['String']['output'];
  /** Unique identifier for the feature flag */
  id: Scalars['uuid']['output'];
  /** Whether the feature is currently enabled */
  is_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Timestamp when the feature flag was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "feature_flags" */
export type Feature_FlagsAllowed_RolesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "feature_flags" */
export type Feature_Flags_Aggregate = {
  __typename?: 'feature_flags_aggregate';
  aggregate?: Maybe<Feature_Flags_Aggregate_Fields>;
  nodes: Array<Feature_Flags>;
};

/** aggregate fields of "feature_flags" */
export type Feature_Flags_Aggregate_Fields = {
  __typename?: 'feature_flags_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Feature_Flags_Max_Fields>;
  min?: Maybe<Feature_Flags_Min_Fields>;
};


/** aggregate fields of "feature_flags" */
export type Feature_Flags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Feature_Flags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Feature_Flags_Append_Input = {
  /** JSON array of roles that can access this feature */
  allowed_roles?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "feature_flags". All fields are combined with a logical 'AND'. */
export type Feature_Flags_Bool_Exp = {
  _and?: InputMaybe<Array<Feature_Flags_Bool_Exp>>;
  _not?: InputMaybe<Feature_Flags_Bool_Exp>;
  _or?: InputMaybe<Array<Feature_Flags_Bool_Exp>>;
  allowed_roles?: InputMaybe<Jsonb_Comparison_Exp>;
  feature_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_enabled?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "feature_flags" */
export enum Feature_Flags_Constraint {
  /** unique or primary key constraint on columns "feature_name" */
  FeatureFlagsFeatureNameKey = 'feature_flags_feature_name_key',
  /** unique or primary key constraint on columns "id" */
  FeatureFlagsPkey = 'feature_flags_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Feature_Flags_Delete_At_Path_Input = {
  /** JSON array of roles that can access this feature */
  allowed_roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Feature_Flags_Delete_Elem_Input = {
  /** JSON array of roles that can access this feature */
  allowed_roles?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Feature_Flags_Delete_Key_Input = {
  /** JSON array of roles that can access this feature */
  allowed_roles?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "feature_flags" */
export type Feature_Flags_Insert_Input = {
  /** JSON array of roles that can access this feature */
  allowed_roles?: InputMaybe<Scalars['jsonb']['input']>;
  /** Name of the feature controlled by this flag */
  feature_name?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the feature flag */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Whether the feature is currently enabled */
  is_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Timestamp when the feature flag was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Feature_Flags_Max_Fields = {
  __typename?: 'feature_flags_max_fields';
  /** Name of the feature controlled by this flag */
  feature_name?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the feature flag */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Timestamp when the feature flag was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Feature_Flags_Min_Fields = {
  __typename?: 'feature_flags_min_fields';
  /** Name of the feature controlled by this flag */
  feature_name?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the feature flag */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Timestamp when the feature flag was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "feature_flags" */
export type Feature_Flags_Mutation_Response = {
  __typename?: 'feature_flags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Feature_Flags>;
};

/** on_conflict condition type for table "feature_flags" */
export type Feature_Flags_On_Conflict = {
  constraint: Feature_Flags_Constraint;
  update_columns?: Array<Feature_Flags_Update_Column>;
  where?: InputMaybe<Feature_Flags_Bool_Exp>;
};

/** Ordering options when selecting data from "feature_flags". */
export type Feature_Flags_Order_By = {
  allowed_roles?: InputMaybe<Order_By>;
  feature_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_enabled?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feature_flags */
export type Feature_Flags_Pk_Columns_Input = {
  /** Unique identifier for the feature flag */
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Feature_Flags_Prepend_Input = {
  /** JSON array of roles that can access this feature */
  allowed_roles?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "feature_flags" */
export enum Feature_Flags_Select_Column {
  /** column name */
  AllowedRoles = 'allowed_roles',
  /** column name */
  FeatureName = 'feature_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsEnabled = 'is_enabled',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "feature_flags" */
export type Feature_Flags_Set_Input = {
  /** JSON array of roles that can access this feature */
  allowed_roles?: InputMaybe<Scalars['jsonb']['input']>;
  /** Name of the feature controlled by this flag */
  feature_name?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the feature flag */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Whether the feature is currently enabled */
  is_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Timestamp when the feature flag was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "feature_flags" */
export type Feature_Flags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Feature_Flags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Feature_Flags_Stream_Cursor_Value_Input = {
  /** JSON array of roles that can access this feature */
  allowed_roles?: InputMaybe<Scalars['jsonb']['input']>;
  /** Name of the feature controlled by this flag */
  feature_name?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the feature flag */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Whether the feature is currently enabled */
  is_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Timestamp when the feature flag was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "feature_flags" */
export enum Feature_Flags_Update_Column {
  /** column name */
  AllowedRoles = 'allowed_roles',
  /** column name */
  FeatureName = 'feature_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsEnabled = 'is_enabled',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Feature_Flags_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Feature_Flags_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Feature_Flags_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Feature_Flags_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Feature_Flags_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Feature_Flags_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Feature_Flags_Set_Input>;
  /** filter the rows which have to be updated */
  where: Feature_Flags_Bool_Exp;
};

export type Generate_Payroll_Dates_Args = {
  p_end_date?: InputMaybe<Scalars['date']['input']>;
  p_max_dates?: InputMaybe<Scalars['Int']['input']>;
  p_payroll_id?: InputMaybe<Scalars['uuid']['input']>;
  p_start_date?: InputMaybe<Scalars['date']['input']>;
};

/** columns and relationships of "holidays" */
export type Holidays = {
  __typename?: 'holidays';
  /** ISO country code where the holiday is observed */
  country_code: Scalars['bpchar']['output'];
  /** Timestamp when the holiday record was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Date of the holiday */
  date: Scalars['date']['output'];
  /** Unique identifier for the holiday */
  id: Scalars['uuid']['output'];
  /** Whether the holiday occurs on the same date each year */
  is_fixed?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the holiday is observed globally */
  is_global?: Maybe<Scalars['Boolean']['output']>;
  /** First year when the holiday was observed */
  launch_year?: Maybe<Scalars['Int']['output']>;
  /** Name of the holiday in local language */
  local_name: Scalars['String']['output'];
  /** Name of the holiday in English */
  name: Scalars['String']['output'];
  /** Array of regions within the country where the holiday applies */
  region?: Maybe<Array<Scalars['String']['output']>>;
  /** Array of holiday types (e.g., public, bank, religious) */
  types: Array<Scalars['String']['output']>;
  /** Timestamp when the holiday record was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "holidays" */
export type Holidays_Aggregate = {
  __typename?: 'holidays_aggregate';
  aggregate?: Maybe<Holidays_Aggregate_Fields>;
  nodes: Array<Holidays>;
};

/** aggregate fields of "holidays" */
export type Holidays_Aggregate_Fields = {
  __typename?: 'holidays_aggregate_fields';
  avg?: Maybe<Holidays_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Holidays_Max_Fields>;
  min?: Maybe<Holidays_Min_Fields>;
  stddev?: Maybe<Holidays_Stddev_Fields>;
  stddev_pop?: Maybe<Holidays_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Holidays_Stddev_Samp_Fields>;
  sum?: Maybe<Holidays_Sum_Fields>;
  var_pop?: Maybe<Holidays_Var_Pop_Fields>;
  var_samp?: Maybe<Holidays_Var_Samp_Fields>;
  variance?: Maybe<Holidays_Variance_Fields>;
};


/** aggregate fields of "holidays" */
export type Holidays_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Holidays_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Holidays_Avg_Fields = {
  __typename?: 'holidays_avg_fields';
  /** First year when the holiday was observed */
  launch_year?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "holidays". All fields are combined with a logical 'AND'. */
export type Holidays_Bool_Exp = {
  _and?: InputMaybe<Array<Holidays_Bool_Exp>>;
  _not?: InputMaybe<Holidays_Bool_Exp>;
  _or?: InputMaybe<Array<Holidays_Bool_Exp>>;
  country_code?: InputMaybe<Bpchar_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_fixed?: InputMaybe<Boolean_Comparison_Exp>;
  is_global?: InputMaybe<Boolean_Comparison_Exp>;
  launch_year?: InputMaybe<Int_Comparison_Exp>;
  local_name?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  region?: InputMaybe<String_Array_Comparison_Exp>;
  types?: InputMaybe<String_Array_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "holidays" */
export enum Holidays_Constraint {
  /** unique or primary key constraint on columns "id" */
  HolidaysPkey = 'holidays_pkey'
}

/** input type for incrementing numeric columns in table "holidays" */
export type Holidays_Inc_Input = {
  /** First year when the holiday was observed */
  launch_year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "holidays" */
export type Holidays_Insert_Input = {
  /** ISO country code where the holiday is observed */
  country_code?: InputMaybe<Scalars['bpchar']['input']>;
  /** Timestamp when the holiday record was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Date of the holiday */
  date?: InputMaybe<Scalars['date']['input']>;
  /** Unique identifier for the holiday */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Whether the holiday occurs on the same date each year */
  is_fixed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the holiday is observed globally */
  is_global?: InputMaybe<Scalars['Boolean']['input']>;
  /** First year when the holiday was observed */
  launch_year?: InputMaybe<Scalars['Int']['input']>;
  /** Name of the holiday in local language */
  local_name?: InputMaybe<Scalars['String']['input']>;
  /** Name of the holiday in English */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Array of regions within the country where the holiday applies */
  region?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Array of holiday types (e.g., public, bank, religious) */
  types?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Timestamp when the holiday record was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Holidays_Max_Fields = {
  __typename?: 'holidays_max_fields';
  /** ISO country code where the holiday is observed */
  country_code?: Maybe<Scalars['bpchar']['output']>;
  /** Timestamp when the holiday record was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Date of the holiday */
  date?: Maybe<Scalars['date']['output']>;
  /** Unique identifier for the holiday */
  id?: Maybe<Scalars['uuid']['output']>;
  /** First year when the holiday was observed */
  launch_year?: Maybe<Scalars['Int']['output']>;
  /** Name of the holiday in local language */
  local_name?: Maybe<Scalars['String']['output']>;
  /** Name of the holiday in English */
  name?: Maybe<Scalars['String']['output']>;
  /** Array of regions within the country where the holiday applies */
  region?: Maybe<Array<Scalars['String']['output']>>;
  /** Array of holiday types (e.g., public, bank, religious) */
  types?: Maybe<Array<Scalars['String']['output']>>;
  /** Timestamp when the holiday record was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Holidays_Min_Fields = {
  __typename?: 'holidays_min_fields';
  /** ISO country code where the holiday is observed */
  country_code?: Maybe<Scalars['bpchar']['output']>;
  /** Timestamp when the holiday record was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Date of the holiday */
  date?: Maybe<Scalars['date']['output']>;
  /** Unique identifier for the holiday */
  id?: Maybe<Scalars['uuid']['output']>;
  /** First year when the holiday was observed */
  launch_year?: Maybe<Scalars['Int']['output']>;
  /** Name of the holiday in local language */
  local_name?: Maybe<Scalars['String']['output']>;
  /** Name of the holiday in English */
  name?: Maybe<Scalars['String']['output']>;
  /** Array of regions within the country where the holiday applies */
  region?: Maybe<Array<Scalars['String']['output']>>;
  /** Array of holiday types (e.g., public, bank, religious) */
  types?: Maybe<Array<Scalars['String']['output']>>;
  /** Timestamp when the holiday record was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "holidays" */
export type Holidays_Mutation_Response = {
  __typename?: 'holidays_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Holidays>;
};

/** on_conflict condition type for table "holidays" */
export type Holidays_On_Conflict = {
  constraint: Holidays_Constraint;
  update_columns?: Array<Holidays_Update_Column>;
  where?: InputMaybe<Holidays_Bool_Exp>;
};

/** Ordering options when selecting data from "holidays". */
export type Holidays_Order_By = {
  country_code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_fixed?: InputMaybe<Order_By>;
  is_global?: InputMaybe<Order_By>;
  launch_year?: InputMaybe<Order_By>;
  local_name?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  types?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: holidays */
export type Holidays_Pk_Columns_Input = {
  /** Unique identifier for the holiday */
  id: Scalars['uuid']['input'];
};

/** select columns of table "holidays" */
export enum Holidays_Select_Column {
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  IsFixed = 'is_fixed',
  /** column name */
  IsGlobal = 'is_global',
  /** column name */
  LaunchYear = 'launch_year',
  /** column name */
  LocalName = 'local_name',
  /** column name */
  Name = 'name',
  /** column name */
  Region = 'region',
  /** column name */
  Types = 'types',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "holidays" */
export type Holidays_Set_Input = {
  /** ISO country code where the holiday is observed */
  country_code?: InputMaybe<Scalars['bpchar']['input']>;
  /** Timestamp when the holiday record was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Date of the holiday */
  date?: InputMaybe<Scalars['date']['input']>;
  /** Unique identifier for the holiday */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Whether the holiday occurs on the same date each year */
  is_fixed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the holiday is observed globally */
  is_global?: InputMaybe<Scalars['Boolean']['input']>;
  /** First year when the holiday was observed */
  launch_year?: InputMaybe<Scalars['Int']['input']>;
  /** Name of the holiday in local language */
  local_name?: InputMaybe<Scalars['String']['input']>;
  /** Name of the holiday in English */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Array of regions within the country where the holiday applies */
  region?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Array of holiday types (e.g., public, bank, religious) */
  types?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Timestamp when the holiday record was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Holidays_Stddev_Fields = {
  __typename?: 'holidays_stddev_fields';
  /** First year when the holiday was observed */
  launch_year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Holidays_Stddev_Pop_Fields = {
  __typename?: 'holidays_stddev_pop_fields';
  /** First year when the holiday was observed */
  launch_year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Holidays_Stddev_Samp_Fields = {
  __typename?: 'holidays_stddev_samp_fields';
  /** First year when the holiday was observed */
  launch_year?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "holidays" */
export type Holidays_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Holidays_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Holidays_Stream_Cursor_Value_Input = {
  /** ISO country code where the holiday is observed */
  country_code?: InputMaybe<Scalars['bpchar']['input']>;
  /** Timestamp when the holiday record was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Date of the holiday */
  date?: InputMaybe<Scalars['date']['input']>;
  /** Unique identifier for the holiday */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Whether the holiday occurs on the same date each year */
  is_fixed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the holiday is observed globally */
  is_global?: InputMaybe<Scalars['Boolean']['input']>;
  /** First year when the holiday was observed */
  launch_year?: InputMaybe<Scalars['Int']['input']>;
  /** Name of the holiday in local language */
  local_name?: InputMaybe<Scalars['String']['input']>;
  /** Name of the holiday in English */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Array of regions within the country where the holiday applies */
  region?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Array of holiday types (e.g., public, bank, religious) */
  types?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Timestamp when the holiday record was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Holidays_Sum_Fields = {
  __typename?: 'holidays_sum_fields';
  /** First year when the holiday was observed */
  launch_year?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "holidays" */
export enum Holidays_Update_Column {
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  IsFixed = 'is_fixed',
  /** column name */
  IsGlobal = 'is_global',
  /** column name */
  LaunchYear = 'launch_year',
  /** column name */
  LocalName = 'local_name',
  /** column name */
  Name = 'name',
  /** column name */
  Region = 'region',
  /** column name */
  Types = 'types',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Holidays_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Holidays_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Holidays_Set_Input>;
  /** filter the rows which have to be updated */
  where: Holidays_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Holidays_Var_Pop_Fields = {
  __typename?: 'holidays_var_pop_fields';
  /** First year when the holiday was observed */
  launch_year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Holidays_Var_Samp_Fields = {
  __typename?: 'holidays_var_samp_fields';
  /** First year when the holiday was observed */
  launch_year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Holidays_Variance_Fields = {
  __typename?: 'holidays_variance_fields';
  /** First year when the holiday was observed */
  launch_year?: Maybe<Scalars['Float']['output']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "leave" */
export type Leave = {
  __typename?: 'leave';
  /** Last day of the leave period */
  end_date: Scalars['date']['output'];
  /** Unique identifier for the leave record */
  id: Scalars['uuid']['output'];
  /** Type of leave (vacation, sick, personal, etc.) */
  leave_type: Scalars['String']['output'];
  /** An object relationship */
  leave_user: Users;
  /** Reason provided for the leave request */
  reason?: Maybe<Scalars['String']['output']>;
  /** First day of the leave period */
  start_date: Scalars['date']['output'];
  /** Current status of the leave request (Pending, Approved, Denied) */
  status?: Maybe<Scalars['leave_status_enum']['output']>;
  /** An object relationship */
  user: Users;
  /** Reference to the user taking leave */
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "leave" */
export type Leave_Aggregate = {
  __typename?: 'leave_aggregate';
  aggregate?: Maybe<Leave_Aggregate_Fields>;
  nodes: Array<Leave>;
};

export type Leave_Aggregate_Bool_Exp = {
  count?: InputMaybe<Leave_Aggregate_Bool_Exp_Count>;
};

export type Leave_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Leave_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Leave_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "leave" */
export type Leave_Aggregate_Fields = {
  __typename?: 'leave_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Leave_Max_Fields>;
  min?: Maybe<Leave_Min_Fields>;
};


/** aggregate fields of "leave" */
export type Leave_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Leave_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "leave" */
export type Leave_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Leave_Max_Order_By>;
  min?: InputMaybe<Leave_Min_Order_By>;
};

/** input type for inserting array relation for remote table "leave" */
export type Leave_Arr_Rel_Insert_Input = {
  data: Array<Leave_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Leave_On_Conflict>;
};

/** Boolean expression to filter rows from the table "leave". All fields are combined with a logical 'AND'. */
export type Leave_Bool_Exp = {
  _and?: InputMaybe<Array<Leave_Bool_Exp>>;
  _not?: InputMaybe<Leave_Bool_Exp>;
  _or?: InputMaybe<Array<Leave_Bool_Exp>>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  leave_type?: InputMaybe<String_Comparison_Exp>;
  leave_user?: InputMaybe<Users_Bool_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  status?: InputMaybe<Leave_Status_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "leave" */
export enum Leave_Constraint {
  /** unique or primary key constraint on columns "id" */
  LeavePkey = 'leave_pkey'
}

/** input type for inserting data into table "leave" */
export type Leave_Insert_Input = {
  /** Last day of the leave period */
  end_date?: InputMaybe<Scalars['date']['input']>;
  /** Unique identifier for the leave record */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Type of leave (vacation, sick, personal, etc.) */
  leave_type?: InputMaybe<Scalars['String']['input']>;
  leave_user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** Reason provided for the leave request */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** First day of the leave period */
  start_date?: InputMaybe<Scalars['date']['input']>;
  /** Current status of the leave request (Pending, Approved, Denied) */
  status?: InputMaybe<Scalars['leave_status_enum']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** Reference to the user taking leave */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Leave_Max_Fields = {
  __typename?: 'leave_max_fields';
  /** Last day of the leave period */
  end_date?: Maybe<Scalars['date']['output']>;
  /** Unique identifier for the leave record */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Type of leave (vacation, sick, personal, etc.) */
  leave_type?: Maybe<Scalars['String']['output']>;
  /** Reason provided for the leave request */
  reason?: Maybe<Scalars['String']['output']>;
  /** First day of the leave period */
  start_date?: Maybe<Scalars['date']['output']>;
  /** Current status of the leave request (Pending, Approved, Denied) */
  status?: Maybe<Scalars['leave_status_enum']['output']>;
  /** Reference to the user taking leave */
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "leave" */
export type Leave_Max_Order_By = {
  /** Last day of the leave period */
  end_date?: InputMaybe<Order_By>;
  /** Unique identifier for the leave record */
  id?: InputMaybe<Order_By>;
  /** Type of leave (vacation, sick, personal, etc.) */
  leave_type?: InputMaybe<Order_By>;
  /** Reason provided for the leave request */
  reason?: InputMaybe<Order_By>;
  /** First day of the leave period */
  start_date?: InputMaybe<Order_By>;
  /** Current status of the leave request (Pending, Approved, Denied) */
  status?: InputMaybe<Order_By>;
  /** Reference to the user taking leave */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Leave_Min_Fields = {
  __typename?: 'leave_min_fields';
  /** Last day of the leave period */
  end_date?: Maybe<Scalars['date']['output']>;
  /** Unique identifier for the leave record */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Type of leave (vacation, sick, personal, etc.) */
  leave_type?: Maybe<Scalars['String']['output']>;
  /** Reason provided for the leave request */
  reason?: Maybe<Scalars['String']['output']>;
  /** First day of the leave period */
  start_date?: Maybe<Scalars['date']['output']>;
  /** Current status of the leave request (Pending, Approved, Denied) */
  status?: Maybe<Scalars['leave_status_enum']['output']>;
  /** Reference to the user taking leave */
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "leave" */
export type Leave_Min_Order_By = {
  /** Last day of the leave period */
  end_date?: InputMaybe<Order_By>;
  /** Unique identifier for the leave record */
  id?: InputMaybe<Order_By>;
  /** Type of leave (vacation, sick, personal, etc.) */
  leave_type?: InputMaybe<Order_By>;
  /** Reason provided for the leave request */
  reason?: InputMaybe<Order_By>;
  /** First day of the leave period */
  start_date?: InputMaybe<Order_By>;
  /** Current status of the leave request (Pending, Approved, Denied) */
  status?: InputMaybe<Order_By>;
  /** Reference to the user taking leave */
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "leave" */
export type Leave_Mutation_Response = {
  __typename?: 'leave_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Leave>;
};

/** on_conflict condition type for table "leave" */
export type Leave_On_Conflict = {
  constraint: Leave_Constraint;
  update_columns?: Array<Leave_Update_Column>;
  where?: InputMaybe<Leave_Bool_Exp>;
};

/** Ordering options when selecting data from "leave". */
export type Leave_Order_By = {
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  leave_type?: InputMaybe<Order_By>;
  leave_user?: InputMaybe<Users_Order_By>;
  reason?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: leave */
export type Leave_Pk_Columns_Input = {
  /** Unique identifier for the leave record */
  id: Scalars['uuid']['input'];
};

/** select columns of table "leave" */
export enum Leave_Select_Column {
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  LeaveType = 'leave_type',
  /** column name */
  Reason = 'reason',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "leave" */
export type Leave_Set_Input = {
  /** Last day of the leave period */
  end_date?: InputMaybe<Scalars['date']['input']>;
  /** Unique identifier for the leave record */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Type of leave (vacation, sick, personal, etc.) */
  leave_type?: InputMaybe<Scalars['String']['input']>;
  /** Reason provided for the leave request */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** First day of the leave period */
  start_date?: InputMaybe<Scalars['date']['input']>;
  /** Current status of the leave request (Pending, Approved, Denied) */
  status?: InputMaybe<Scalars['leave_status_enum']['input']>;
  /** Reference to the user taking leave */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Boolean expression to compare columns of type "leave_status_enum". All fields are combined with logical 'AND'. */
export type Leave_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['leave_status_enum']['input']>;
  _gt?: InputMaybe<Scalars['leave_status_enum']['input']>;
  _gte?: InputMaybe<Scalars['leave_status_enum']['input']>;
  _in?: InputMaybe<Array<Scalars['leave_status_enum']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['leave_status_enum']['input']>;
  _lte?: InputMaybe<Scalars['leave_status_enum']['input']>;
  _neq?: InputMaybe<Scalars['leave_status_enum']['input']>;
  _nin?: InputMaybe<Array<Scalars['leave_status_enum']['input']>>;
};

/** Streaming cursor of the table "leave" */
export type Leave_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Leave_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Leave_Stream_Cursor_Value_Input = {
  /** Last day of the leave period */
  end_date?: InputMaybe<Scalars['date']['input']>;
  /** Unique identifier for the leave record */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Type of leave (vacation, sick, personal, etc.) */
  leave_type?: InputMaybe<Scalars['String']['input']>;
  /** Reason provided for the leave request */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** First day of the leave period */
  start_date?: InputMaybe<Scalars['date']['input']>;
  /** Current status of the leave request (Pending, Approved, Denied) */
  status?: InputMaybe<Scalars['leave_status_enum']['input']>;
  /** Reference to the user taking leave */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "leave" */
export enum Leave_Update_Column {
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  LeaveType = 'leave_type',
  /** column name */
  Reason = 'reason',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

export type Leave_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Leave_Set_Input>;
  /** filter the rows which have to be updated */
  where: Leave_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "adjustment_rules" */
  delete_adjustment_rules?: Maybe<Adjustment_Rules_Mutation_Response>;
  /** delete single row from the table: "adjustment_rules" */
  delete_adjustment_rules_by_pk?: Maybe<Adjustment_Rules>;
  /** delete data from the table: "app_settings" */
  delete_app_settings?: Maybe<App_Settings_Mutation_Response>;
  /** delete single row from the table: "app_settings" */
  delete_app_settings_by_pk?: Maybe<App_Settings>;
  /** delete data from the table: "client_external_systems" */
  delete_client_external_systems?: Maybe<Client_External_Systems_Mutation_Response>;
  /** delete single row from the table: "client_external_systems" */
  delete_client_external_systems_by_pk?: Maybe<Client_External_Systems>;
  /** delete data from the table: "clients" */
  delete_clients?: Maybe<Clients_Mutation_Response>;
  /** delete single row from the table: "clients" */
  delete_clients_by_pk?: Maybe<Clients>;
  /** delete data from the table: "external_systems" */
  delete_external_systems?: Maybe<External_Systems_Mutation_Response>;
  /** delete single row from the table: "external_systems" */
  delete_external_systems_by_pk?: Maybe<External_Systems>;
  /** delete data from the table: "feature_flags" */
  delete_feature_flags?: Maybe<Feature_Flags_Mutation_Response>;
  /** delete single row from the table: "feature_flags" */
  delete_feature_flags_by_pk?: Maybe<Feature_Flags>;
  /** delete data from the table: "holidays" */
  delete_holidays?: Maybe<Holidays_Mutation_Response>;
  /** delete single row from the table: "holidays" */
  delete_holidays_by_pk?: Maybe<Holidays>;
  /** delete data from the table: "leave" */
  delete_leave?: Maybe<Leave_Mutation_Response>;
  /** delete single row from the table: "leave" */
  delete_leave_by_pk?: Maybe<Leave>;
  /** delete data from the table: "neon_auth.users_sync" */
  delete_neon_auth_users_sync?: Maybe<Neon_Auth_Users_Sync_Mutation_Response>;
  /** delete single row from the table: "neon_auth.users_sync" */
  delete_neon_auth_users_sync_by_pk?: Maybe<Neon_Auth_Users_Sync>;
  /** delete data from the table: "notes" */
  delete_notes?: Maybe<Notes_Mutation_Response>;
  /** delete single row from the table: "notes" */
  delete_notes_by_pk?: Maybe<Notes>;
  /** delete data from the table: "payroll_cycles" */
  delete_payroll_cycles?: Maybe<Payroll_Cycles_Mutation_Response>;
  /** delete single row from the table: "payroll_cycles" */
  delete_payroll_cycles_by_pk?: Maybe<Payroll_Cycles>;
  /** delete data from the table: "payroll_date_types" */
  delete_payroll_date_types?: Maybe<Payroll_Date_Types_Mutation_Response>;
  /** delete single row from the table: "payroll_date_types" */
  delete_payroll_date_types_by_pk?: Maybe<Payroll_Date_Types>;
  /** delete data from the table: "payroll_dates" */
  delete_payroll_dates?: Maybe<Payroll_Dates_Mutation_Response>;
  /** delete single row from the table: "payroll_dates" */
  delete_payroll_dates_by_pk?: Maybe<Payroll_Dates>;
  /** delete data from the table: "payrolls" */
  delete_payrolls?: Maybe<Payrolls_Mutation_Response>;
  /** delete single row from the table: "payrolls" */
  delete_payrolls_by_pk?: Maybe<Payrolls>;
  /** delete data from the table: "permission_audit_log" */
  delete_permission_audit_log?: Maybe<Permission_Audit_Log_Mutation_Response>;
  /** delete single row from the table: "permission_audit_log" */
  delete_permission_audit_log_by_pk?: Maybe<Permission_Audit_Log>;
  /** delete data from the table: "permission_overrides" */
  delete_permission_overrides?: Maybe<Permission_Overrides_Mutation_Response>;
  /** delete single row from the table: "permission_overrides" */
  delete_permission_overrides_by_pk?: Maybe<Permission_Overrides>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "work_schedule" */
  delete_work_schedule?: Maybe<Work_Schedule_Mutation_Response>;
  /** delete single row from the table: "work_schedule" */
  delete_work_schedule_by_pk?: Maybe<Work_Schedule>;
  /** insert data into the table: "adjustment_rules" */
  insert_adjustment_rules?: Maybe<Adjustment_Rules_Mutation_Response>;
  /** insert a single row into the table: "adjustment_rules" */
  insert_adjustment_rules_one?: Maybe<Adjustment_Rules>;
  /** insert data into the table: "app_settings" */
  insert_app_settings?: Maybe<App_Settings_Mutation_Response>;
  /** insert a single row into the table: "app_settings" */
  insert_app_settings_one?: Maybe<App_Settings>;
  /** insert data into the table: "client_external_systems" */
  insert_client_external_systems?: Maybe<Client_External_Systems_Mutation_Response>;
  /** insert a single row into the table: "client_external_systems" */
  insert_client_external_systems_one?: Maybe<Client_External_Systems>;
  /** insert data into the table: "clients" */
  insert_clients?: Maybe<Clients_Mutation_Response>;
  /** insert a single row into the table: "clients" */
  insert_clients_one?: Maybe<Clients>;
  /** insert data into the table: "external_systems" */
  insert_external_systems?: Maybe<External_Systems_Mutation_Response>;
  /** insert a single row into the table: "external_systems" */
  insert_external_systems_one?: Maybe<External_Systems>;
  /** insert data into the table: "feature_flags" */
  insert_feature_flags?: Maybe<Feature_Flags_Mutation_Response>;
  /** insert a single row into the table: "feature_flags" */
  insert_feature_flags_one?: Maybe<Feature_Flags>;
  /** insert data into the table: "holidays" */
  insert_holidays?: Maybe<Holidays_Mutation_Response>;
  /** insert a single row into the table: "holidays" */
  insert_holidays_one?: Maybe<Holidays>;
  /** insert data into the table: "leave" */
  insert_leave?: Maybe<Leave_Mutation_Response>;
  /** insert a single row into the table: "leave" */
  insert_leave_one?: Maybe<Leave>;
  /** insert data into the table: "neon_auth.users_sync" */
  insert_neon_auth_users_sync?: Maybe<Neon_Auth_Users_Sync_Mutation_Response>;
  /** insert a single row into the table: "neon_auth.users_sync" */
  insert_neon_auth_users_sync_one?: Maybe<Neon_Auth_Users_Sync>;
  /** insert data into the table: "notes" */
  insert_notes?: Maybe<Notes_Mutation_Response>;
  /** insert a single row into the table: "notes" */
  insert_notes_one?: Maybe<Notes>;
  /** insert data into the table: "payroll_cycles" */
  insert_payroll_cycles?: Maybe<Payroll_Cycles_Mutation_Response>;
  /** insert a single row into the table: "payroll_cycles" */
  insert_payroll_cycles_one?: Maybe<Payroll_Cycles>;
  /** insert data into the table: "payroll_date_types" */
  insert_payroll_date_types?: Maybe<Payroll_Date_Types_Mutation_Response>;
  /** insert a single row into the table: "payroll_date_types" */
  insert_payroll_date_types_one?: Maybe<Payroll_Date_Types>;
  /** insert data into the table: "payroll_dates" */
  insert_payroll_dates?: Maybe<Payroll_Dates_Mutation_Response>;
  /** insert a single row into the table: "payroll_dates" */
  insert_payroll_dates_one?: Maybe<Payroll_Dates>;
  /** insert data into the table: "payrolls" */
  insert_payrolls?: Maybe<Payrolls_Mutation_Response>;
  /** insert a single row into the table: "payrolls" */
  insert_payrolls_one?: Maybe<Payrolls>;
  /** insert data into the table: "permission_audit_log" */
  insert_permission_audit_log?: Maybe<Permission_Audit_Log_Mutation_Response>;
  /** insert a single row into the table: "permission_audit_log" */
  insert_permission_audit_log_one?: Maybe<Permission_Audit_Log>;
  /** insert data into the table: "permission_overrides" */
  insert_permission_overrides?: Maybe<Permission_Overrides_Mutation_Response>;
  /** insert a single row into the table: "permission_overrides" */
  insert_permission_overrides_one?: Maybe<Permission_Overrides>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "work_schedule" */
  insert_work_schedule?: Maybe<Work_Schedule_Mutation_Response>;
  /** insert a single row into the table: "work_schedule" */
  insert_work_schedule_one?: Maybe<Work_Schedule>;
  /** update data of the table: "adjustment_rules" */
  update_adjustment_rules?: Maybe<Adjustment_Rules_Mutation_Response>;
  /** update single row of the table: "adjustment_rules" */
  update_adjustment_rules_by_pk?: Maybe<Adjustment_Rules>;
  /** update multiples rows of table: "adjustment_rules" */
  update_adjustment_rules_many?: Maybe<Array<Maybe<Adjustment_Rules_Mutation_Response>>>;
  /** update data of the table: "app_settings" */
  update_app_settings?: Maybe<App_Settings_Mutation_Response>;
  /** update single row of the table: "app_settings" */
  update_app_settings_by_pk?: Maybe<App_Settings>;
  /** update multiples rows of table: "app_settings" */
  update_app_settings_many?: Maybe<Array<Maybe<App_Settings_Mutation_Response>>>;
  /** update data of the table: "client_external_systems" */
  update_client_external_systems?: Maybe<Client_External_Systems_Mutation_Response>;
  /** update single row of the table: "client_external_systems" */
  update_client_external_systems_by_pk?: Maybe<Client_External_Systems>;
  /** update multiples rows of table: "client_external_systems" */
  update_client_external_systems_many?: Maybe<Array<Maybe<Client_External_Systems_Mutation_Response>>>;
  /** update data of the table: "clients" */
  update_clients?: Maybe<Clients_Mutation_Response>;
  /** update single row of the table: "clients" */
  update_clients_by_pk?: Maybe<Clients>;
  /** update multiples rows of table: "clients" */
  update_clients_many?: Maybe<Array<Maybe<Clients_Mutation_Response>>>;
  /** update data of the table: "external_systems" */
  update_external_systems?: Maybe<External_Systems_Mutation_Response>;
  /** update single row of the table: "external_systems" */
  update_external_systems_by_pk?: Maybe<External_Systems>;
  /** update multiples rows of table: "external_systems" */
  update_external_systems_many?: Maybe<Array<Maybe<External_Systems_Mutation_Response>>>;
  /** update data of the table: "feature_flags" */
  update_feature_flags?: Maybe<Feature_Flags_Mutation_Response>;
  /** update single row of the table: "feature_flags" */
  update_feature_flags_by_pk?: Maybe<Feature_Flags>;
  /** update multiples rows of table: "feature_flags" */
  update_feature_flags_many?: Maybe<Array<Maybe<Feature_Flags_Mutation_Response>>>;
  /** update data of the table: "holidays" */
  update_holidays?: Maybe<Holidays_Mutation_Response>;
  /** update single row of the table: "holidays" */
  update_holidays_by_pk?: Maybe<Holidays>;
  /** update multiples rows of table: "holidays" */
  update_holidays_many?: Maybe<Array<Maybe<Holidays_Mutation_Response>>>;
  /** update data of the table: "leave" */
  update_leave?: Maybe<Leave_Mutation_Response>;
  /** update single row of the table: "leave" */
  update_leave_by_pk?: Maybe<Leave>;
  /** update multiples rows of table: "leave" */
  update_leave_many?: Maybe<Array<Maybe<Leave_Mutation_Response>>>;
  /** update data of the table: "neon_auth.users_sync" */
  update_neon_auth_users_sync?: Maybe<Neon_Auth_Users_Sync_Mutation_Response>;
  /** update single row of the table: "neon_auth.users_sync" */
  update_neon_auth_users_sync_by_pk?: Maybe<Neon_Auth_Users_Sync>;
  /** update multiples rows of table: "neon_auth.users_sync" */
  update_neon_auth_users_sync_many?: Maybe<Array<Maybe<Neon_Auth_Users_Sync_Mutation_Response>>>;
  /** update data of the table: "notes" */
  update_notes?: Maybe<Notes_Mutation_Response>;
  /** update single row of the table: "notes" */
  update_notes_by_pk?: Maybe<Notes>;
  /** update multiples rows of table: "notes" */
  update_notes_many?: Maybe<Array<Maybe<Notes_Mutation_Response>>>;
  /** update data of the table: "payroll_cycles" */
  update_payroll_cycles?: Maybe<Payroll_Cycles_Mutation_Response>;
  /** update single row of the table: "payroll_cycles" */
  update_payroll_cycles_by_pk?: Maybe<Payroll_Cycles>;
  /** update multiples rows of table: "payroll_cycles" */
  update_payroll_cycles_many?: Maybe<Array<Maybe<Payroll_Cycles_Mutation_Response>>>;
  /** update data of the table: "payroll_date_types" */
  update_payroll_date_types?: Maybe<Payroll_Date_Types_Mutation_Response>;
  /** update single row of the table: "payroll_date_types" */
  update_payroll_date_types_by_pk?: Maybe<Payroll_Date_Types>;
  /** update multiples rows of table: "payroll_date_types" */
  update_payroll_date_types_many?: Maybe<Array<Maybe<Payroll_Date_Types_Mutation_Response>>>;
  /** update data of the table: "payroll_dates" */
  update_payroll_dates?: Maybe<Payroll_Dates_Mutation_Response>;
  /** update single row of the table: "payroll_dates" */
  update_payroll_dates_by_pk?: Maybe<Payroll_Dates>;
  /** update multiples rows of table: "payroll_dates" */
  update_payroll_dates_many?: Maybe<Array<Maybe<Payroll_Dates_Mutation_Response>>>;
  /** update data of the table: "payrolls" */
  update_payrolls?: Maybe<Payrolls_Mutation_Response>;
  /** update single row of the table: "payrolls" */
  update_payrolls_by_pk?: Maybe<Payrolls>;
  /** update multiples rows of table: "payrolls" */
  update_payrolls_many?: Maybe<Array<Maybe<Payrolls_Mutation_Response>>>;
  /** update data of the table: "permission_audit_log" */
  update_permission_audit_log?: Maybe<Permission_Audit_Log_Mutation_Response>;
  /** update single row of the table: "permission_audit_log" */
  update_permission_audit_log_by_pk?: Maybe<Permission_Audit_Log>;
  /** update multiples rows of table: "permission_audit_log" */
  update_permission_audit_log_many?: Maybe<Array<Maybe<Permission_Audit_Log_Mutation_Response>>>;
  /** update data of the table: "permission_overrides" */
  update_permission_overrides?: Maybe<Permission_Overrides_Mutation_Response>;
  /** update single row of the table: "permission_overrides" */
  update_permission_overrides_by_pk?: Maybe<Permission_Overrides>;
  /** update multiples rows of table: "permission_overrides" */
  update_permission_overrides_many?: Maybe<Array<Maybe<Permission_Overrides_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "work_schedule" */
  update_work_schedule?: Maybe<Work_Schedule_Mutation_Response>;
  /** update single row of the table: "work_schedule" */
  update_work_schedule_by_pk?: Maybe<Work_Schedule>;
  /** update multiples rows of table: "work_schedule" */
  update_work_schedule_many?: Maybe<Array<Maybe<Work_Schedule_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Adjustment_RulesArgs = {
  where: Adjustment_Rules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Adjustment_Rules_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_App_SettingsArgs = {
  where: App_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_Settings_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Client_External_SystemsArgs = {
  where: Client_External_Systems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Client_External_Systems_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ClientsArgs = {
  where: Clients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Clients_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_External_SystemsArgs = {
  where: External_Systems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_External_Systems_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Feature_FlagsArgs = {
  where: Feature_Flags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feature_Flags_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_HolidaysArgs = {
  where: Holidays_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Holidays_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LeaveArgs = {
  where: Leave_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Leave_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Neon_Auth_Users_SyncArgs = {
  where: Neon_Auth_Users_Sync_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Neon_Auth_Users_Sync_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_NotesArgs = {
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Payroll_CyclesArgs = {
  where: Payroll_Cycles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payroll_Cycles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Payroll_Date_TypesArgs = {
  where: Payroll_Date_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payroll_Date_Types_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Payroll_DatesArgs = {
  where: Payroll_Dates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payroll_Dates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PayrollsArgs = {
  where: Payrolls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payrolls_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Permission_Audit_LogArgs = {
  where: Permission_Audit_Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Permission_Audit_Log_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Permission_OverridesArgs = {
  where: Permission_Overrides_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Permission_Overrides_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Work_ScheduleArgs = {
  where: Work_Schedule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_Schedule_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Adjustment_RulesArgs = {
  objects: Array<Adjustment_Rules_Insert_Input>;
  on_conflict?: InputMaybe<Adjustment_Rules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Adjustment_Rules_OneArgs = {
  object: Adjustment_Rules_Insert_Input;
  on_conflict?: InputMaybe<Adjustment_Rules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_SettingsArgs = {
  objects: Array<App_Settings_Insert_Input>;
  on_conflict?: InputMaybe<App_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_Settings_OneArgs = {
  object: App_Settings_Insert_Input;
  on_conflict?: InputMaybe<App_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Client_External_SystemsArgs = {
  objects: Array<Client_External_Systems_Insert_Input>;
  on_conflict?: InputMaybe<Client_External_Systems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Client_External_Systems_OneArgs = {
  object: Client_External_Systems_Insert_Input;
  on_conflict?: InputMaybe<Client_External_Systems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ClientsArgs = {
  objects: Array<Clients_Insert_Input>;
  on_conflict?: InputMaybe<Clients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Clients_OneArgs = {
  object: Clients_Insert_Input;
  on_conflict?: InputMaybe<Clients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_External_SystemsArgs = {
  objects: Array<External_Systems_Insert_Input>;
  on_conflict?: InputMaybe<External_Systems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_External_Systems_OneArgs = {
  object: External_Systems_Insert_Input;
  on_conflict?: InputMaybe<External_Systems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feature_FlagsArgs = {
  objects: Array<Feature_Flags_Insert_Input>;
  on_conflict?: InputMaybe<Feature_Flags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feature_Flags_OneArgs = {
  object: Feature_Flags_Insert_Input;
  on_conflict?: InputMaybe<Feature_Flags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HolidaysArgs = {
  objects: Array<Holidays_Insert_Input>;
  on_conflict?: InputMaybe<Holidays_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Holidays_OneArgs = {
  object: Holidays_Insert_Input;
  on_conflict?: InputMaybe<Holidays_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LeaveArgs = {
  objects: Array<Leave_Insert_Input>;
  on_conflict?: InputMaybe<Leave_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Leave_OneArgs = {
  object: Leave_Insert_Input;
  on_conflict?: InputMaybe<Leave_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Neon_Auth_Users_SyncArgs = {
  objects: Array<Neon_Auth_Users_Sync_Insert_Input>;
  on_conflict?: InputMaybe<Neon_Auth_Users_Sync_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Neon_Auth_Users_Sync_OneArgs = {
  object: Neon_Auth_Users_Sync_Insert_Input;
  on_conflict?: InputMaybe<Neon_Auth_Users_Sync_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotesArgs = {
  objects: Array<Notes_Insert_Input>;
  on_conflict?: InputMaybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_OneArgs = {
  object: Notes_Insert_Input;
  on_conflict?: InputMaybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payroll_CyclesArgs = {
  objects: Array<Payroll_Cycles_Insert_Input>;
  on_conflict?: InputMaybe<Payroll_Cycles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payroll_Cycles_OneArgs = {
  object: Payroll_Cycles_Insert_Input;
  on_conflict?: InputMaybe<Payroll_Cycles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payroll_Date_TypesArgs = {
  objects: Array<Payroll_Date_Types_Insert_Input>;
  on_conflict?: InputMaybe<Payroll_Date_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payroll_Date_Types_OneArgs = {
  object: Payroll_Date_Types_Insert_Input;
  on_conflict?: InputMaybe<Payroll_Date_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payroll_DatesArgs = {
  objects: Array<Payroll_Dates_Insert_Input>;
  on_conflict?: InputMaybe<Payroll_Dates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payroll_Dates_OneArgs = {
  object: Payroll_Dates_Insert_Input;
  on_conflict?: InputMaybe<Payroll_Dates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PayrollsArgs = {
  objects: Array<Payrolls_Insert_Input>;
  on_conflict?: InputMaybe<Payrolls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payrolls_OneArgs = {
  object: Payrolls_Insert_Input;
  on_conflict?: InputMaybe<Payrolls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Permission_Audit_LogArgs = {
  objects: Array<Permission_Audit_Log_Insert_Input>;
  on_conflict?: InputMaybe<Permission_Audit_Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Permission_Audit_Log_OneArgs = {
  object: Permission_Audit_Log_Insert_Input;
  on_conflict?: InputMaybe<Permission_Audit_Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Permission_OverridesArgs = {
  objects: Array<Permission_Overrides_Insert_Input>;
  on_conflict?: InputMaybe<Permission_Overrides_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Permission_Overrides_OneArgs = {
  object: Permission_Overrides_Insert_Input;
  on_conflict?: InputMaybe<Permission_Overrides_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_ScheduleArgs = {
  objects: Array<Work_Schedule_Insert_Input>;
  on_conflict?: InputMaybe<Work_Schedule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Schedule_OneArgs = {
  object: Work_Schedule_Insert_Input;
  on_conflict?: InputMaybe<Work_Schedule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Adjustment_RulesArgs = {
  _set?: InputMaybe<Adjustment_Rules_Set_Input>;
  where: Adjustment_Rules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Adjustment_Rules_By_PkArgs = {
  _set?: InputMaybe<Adjustment_Rules_Set_Input>;
  pk_columns: Adjustment_Rules_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Adjustment_Rules_ManyArgs = {
  updates: Array<Adjustment_Rules_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_App_SettingsArgs = {
  _append?: InputMaybe<App_Settings_Append_Input>;
  _delete_at_path?: InputMaybe<App_Settings_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<App_Settings_Delete_Elem_Input>;
  _delete_key?: InputMaybe<App_Settings_Delete_Key_Input>;
  _prepend?: InputMaybe<App_Settings_Prepend_Input>;
  _set?: InputMaybe<App_Settings_Set_Input>;
  where: App_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_Settings_By_PkArgs = {
  _append?: InputMaybe<App_Settings_Append_Input>;
  _delete_at_path?: InputMaybe<App_Settings_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<App_Settings_Delete_Elem_Input>;
  _delete_key?: InputMaybe<App_Settings_Delete_Key_Input>;
  _prepend?: InputMaybe<App_Settings_Prepend_Input>;
  _set?: InputMaybe<App_Settings_Set_Input>;
  pk_columns: App_Settings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_Settings_ManyArgs = {
  updates: Array<App_Settings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Client_External_SystemsArgs = {
  _set?: InputMaybe<Client_External_Systems_Set_Input>;
  where: Client_External_Systems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Client_External_Systems_By_PkArgs = {
  _set?: InputMaybe<Client_External_Systems_Set_Input>;
  pk_columns: Client_External_Systems_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Client_External_Systems_ManyArgs = {
  updates: Array<Client_External_Systems_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ClientsArgs = {
  _set?: InputMaybe<Clients_Set_Input>;
  where: Clients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Clients_By_PkArgs = {
  _set?: InputMaybe<Clients_Set_Input>;
  pk_columns: Clients_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Clients_ManyArgs = {
  updates: Array<Clients_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_External_SystemsArgs = {
  _set?: InputMaybe<External_Systems_Set_Input>;
  where: External_Systems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_External_Systems_By_PkArgs = {
  _set?: InputMaybe<External_Systems_Set_Input>;
  pk_columns: External_Systems_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_External_Systems_ManyArgs = {
  updates: Array<External_Systems_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_FlagsArgs = {
  _append?: InputMaybe<Feature_Flags_Append_Input>;
  _delete_at_path?: InputMaybe<Feature_Flags_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Feature_Flags_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Feature_Flags_Delete_Key_Input>;
  _prepend?: InputMaybe<Feature_Flags_Prepend_Input>;
  _set?: InputMaybe<Feature_Flags_Set_Input>;
  where: Feature_Flags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_Flags_By_PkArgs = {
  _append?: InputMaybe<Feature_Flags_Append_Input>;
  _delete_at_path?: InputMaybe<Feature_Flags_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Feature_Flags_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Feature_Flags_Delete_Key_Input>;
  _prepend?: InputMaybe<Feature_Flags_Prepend_Input>;
  _set?: InputMaybe<Feature_Flags_Set_Input>;
  pk_columns: Feature_Flags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_Flags_ManyArgs = {
  updates: Array<Feature_Flags_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HolidaysArgs = {
  _inc?: InputMaybe<Holidays_Inc_Input>;
  _set?: InputMaybe<Holidays_Set_Input>;
  where: Holidays_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Holidays_By_PkArgs = {
  _inc?: InputMaybe<Holidays_Inc_Input>;
  _set?: InputMaybe<Holidays_Set_Input>;
  pk_columns: Holidays_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Holidays_ManyArgs = {
  updates: Array<Holidays_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LeaveArgs = {
  _set?: InputMaybe<Leave_Set_Input>;
  where: Leave_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Leave_By_PkArgs = {
  _set?: InputMaybe<Leave_Set_Input>;
  pk_columns: Leave_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Leave_ManyArgs = {
  updates: Array<Leave_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Neon_Auth_Users_SyncArgs = {
  _append?: InputMaybe<Neon_Auth_Users_Sync_Append_Input>;
  _delete_at_path?: InputMaybe<Neon_Auth_Users_Sync_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Neon_Auth_Users_Sync_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Neon_Auth_Users_Sync_Delete_Key_Input>;
  _prepend?: InputMaybe<Neon_Auth_Users_Sync_Prepend_Input>;
  _set?: InputMaybe<Neon_Auth_Users_Sync_Set_Input>;
  where: Neon_Auth_Users_Sync_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Neon_Auth_Users_Sync_By_PkArgs = {
  _append?: InputMaybe<Neon_Auth_Users_Sync_Append_Input>;
  _delete_at_path?: InputMaybe<Neon_Auth_Users_Sync_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Neon_Auth_Users_Sync_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Neon_Auth_Users_Sync_Delete_Key_Input>;
  _prepend?: InputMaybe<Neon_Auth_Users_Sync_Prepend_Input>;
  _set?: InputMaybe<Neon_Auth_Users_Sync_Set_Input>;
  pk_columns: Neon_Auth_Users_Sync_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Neon_Auth_Users_Sync_ManyArgs = {
  updates: Array<Neon_Auth_Users_Sync_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NotesArgs = {
  _set?: InputMaybe<Notes_Set_Input>;
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_By_PkArgs = {
  _set?: InputMaybe<Notes_Set_Input>;
  pk_columns: Notes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_ManyArgs = {
  updates: Array<Notes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Payroll_CyclesArgs = {
  _set?: InputMaybe<Payroll_Cycles_Set_Input>;
  where: Payroll_Cycles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payroll_Cycles_By_PkArgs = {
  _set?: InputMaybe<Payroll_Cycles_Set_Input>;
  pk_columns: Payroll_Cycles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payroll_Cycles_ManyArgs = {
  updates: Array<Payroll_Cycles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Payroll_Date_TypesArgs = {
  _set?: InputMaybe<Payroll_Date_Types_Set_Input>;
  where: Payroll_Date_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payroll_Date_Types_By_PkArgs = {
  _set?: InputMaybe<Payroll_Date_Types_Set_Input>;
  pk_columns: Payroll_Date_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payroll_Date_Types_ManyArgs = {
  updates: Array<Payroll_Date_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Payroll_DatesArgs = {
  _set?: InputMaybe<Payroll_Dates_Set_Input>;
  where: Payroll_Dates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payroll_Dates_By_PkArgs = {
  _set?: InputMaybe<Payroll_Dates_Set_Input>;
  pk_columns: Payroll_Dates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payroll_Dates_ManyArgs = {
  updates: Array<Payroll_Dates_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PayrollsArgs = {
  _inc?: InputMaybe<Payrolls_Inc_Input>;
  _set?: InputMaybe<Payrolls_Set_Input>;
  where: Payrolls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payrolls_By_PkArgs = {
  _inc?: InputMaybe<Payrolls_Inc_Input>;
  _set?: InputMaybe<Payrolls_Set_Input>;
  pk_columns: Payrolls_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payrolls_ManyArgs = {
  updates: Array<Payrolls_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Permission_Audit_LogArgs = {
  _append?: InputMaybe<Permission_Audit_Log_Append_Input>;
  _delete_at_path?: InputMaybe<Permission_Audit_Log_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Permission_Audit_Log_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Permission_Audit_Log_Delete_Key_Input>;
  _prepend?: InputMaybe<Permission_Audit_Log_Prepend_Input>;
  _set?: InputMaybe<Permission_Audit_Log_Set_Input>;
  where: Permission_Audit_Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Permission_Audit_Log_By_PkArgs = {
  _append?: InputMaybe<Permission_Audit_Log_Append_Input>;
  _delete_at_path?: InputMaybe<Permission_Audit_Log_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Permission_Audit_Log_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Permission_Audit_Log_Delete_Key_Input>;
  _prepend?: InputMaybe<Permission_Audit_Log_Prepend_Input>;
  _set?: InputMaybe<Permission_Audit_Log_Set_Input>;
  pk_columns: Permission_Audit_Log_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Permission_Audit_Log_ManyArgs = {
  updates: Array<Permission_Audit_Log_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Permission_OverridesArgs = {
  _append?: InputMaybe<Permission_Overrides_Append_Input>;
  _delete_at_path?: InputMaybe<Permission_Overrides_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Permission_Overrides_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Permission_Overrides_Delete_Key_Input>;
  _prepend?: InputMaybe<Permission_Overrides_Prepend_Input>;
  _set?: InputMaybe<Permission_Overrides_Set_Input>;
  where: Permission_Overrides_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Permission_Overrides_By_PkArgs = {
  _append?: InputMaybe<Permission_Overrides_Append_Input>;
  _delete_at_path?: InputMaybe<Permission_Overrides_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Permission_Overrides_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Permission_Overrides_Delete_Key_Input>;
  _prepend?: InputMaybe<Permission_Overrides_Prepend_Input>;
  _set?: InputMaybe<Permission_Overrides_Set_Input>;
  pk_columns: Permission_Overrides_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Permission_Overrides_ManyArgs = {
  updates: Array<Permission_Overrides_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Work_ScheduleArgs = {
  _inc?: InputMaybe<Work_Schedule_Inc_Input>;
  _set?: InputMaybe<Work_Schedule_Set_Input>;
  where: Work_Schedule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Schedule_By_PkArgs = {
  _inc?: InputMaybe<Work_Schedule_Inc_Input>;
  _set?: InputMaybe<Work_Schedule_Set_Input>;
  pk_columns: Work_Schedule_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Schedule_ManyArgs = {
  updates: Array<Work_Schedule_Updates>;
};

/** columns and relationships of "neon_auth.users_sync" */
export type Neon_Auth_Users_Sync = {
  __typename?: 'neon_auth_users_sync';
  /** Timestamp when the user was created in the auth system */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Timestamp when the user was deleted in the auth system */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** User's email address from authentication provider */
  email?: Maybe<Scalars['String']['output']>;
  /** Unique identifier from the authentication provider */
  id: Scalars['String']['output'];
  /** User's full name from authentication provider */
  name?: Maybe<Scalars['String']['output']>;
  /** Complete JSON data from the authentication provider */
  raw_json: Scalars['jsonb']['output'];
  /** Timestamp when the user was last updated in the auth system */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "neon_auth.users_sync" */
export type Neon_Auth_Users_SyncRaw_JsonArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "neon_auth.users_sync" */
export type Neon_Auth_Users_Sync_Aggregate = {
  __typename?: 'neon_auth_users_sync_aggregate';
  aggregate?: Maybe<Neon_Auth_Users_Sync_Aggregate_Fields>;
  nodes: Array<Neon_Auth_Users_Sync>;
};

/** aggregate fields of "neon_auth.users_sync" */
export type Neon_Auth_Users_Sync_Aggregate_Fields = {
  __typename?: 'neon_auth_users_sync_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Neon_Auth_Users_Sync_Max_Fields>;
  min?: Maybe<Neon_Auth_Users_Sync_Min_Fields>;
};


/** aggregate fields of "neon_auth.users_sync" */
export type Neon_Auth_Users_Sync_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Neon_Auth_Users_Sync_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Neon_Auth_Users_Sync_Append_Input = {
  /** Complete JSON data from the authentication provider */
  raw_json?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "neon_auth.users_sync". All fields are combined with a logical 'AND'. */
export type Neon_Auth_Users_Sync_Bool_Exp = {
  _and?: InputMaybe<Array<Neon_Auth_Users_Sync_Bool_Exp>>;
  _not?: InputMaybe<Neon_Auth_Users_Sync_Bool_Exp>;
  _or?: InputMaybe<Array<Neon_Auth_Users_Sync_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  raw_json?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "neon_auth.users_sync" */
export enum Neon_Auth_Users_Sync_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersSyncPkey = 'users_sync_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Neon_Auth_Users_Sync_Delete_At_Path_Input = {
  /** Complete JSON data from the authentication provider */
  raw_json?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Neon_Auth_Users_Sync_Delete_Elem_Input = {
  /** Complete JSON data from the authentication provider */
  raw_json?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Neon_Auth_Users_Sync_Delete_Key_Input = {
  /** Complete JSON data from the authentication provider */
  raw_json?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "neon_auth.users_sync" */
export type Neon_Auth_Users_Sync_Insert_Input = {
  /** Timestamp when the user was deleted in the auth system */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Complete JSON data from the authentication provider */
  raw_json?: InputMaybe<Scalars['jsonb']['input']>;
  /** Timestamp when the user was last updated in the auth system */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Neon_Auth_Users_Sync_Max_Fields = {
  __typename?: 'neon_auth_users_sync_max_fields';
  /** Timestamp when the user was created in the auth system */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Timestamp when the user was deleted in the auth system */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** User's email address from authentication provider */
  email?: Maybe<Scalars['String']['output']>;
  /** Unique identifier from the authentication provider */
  id?: Maybe<Scalars['String']['output']>;
  /** User's full name from authentication provider */
  name?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the user was last updated in the auth system */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Neon_Auth_Users_Sync_Min_Fields = {
  __typename?: 'neon_auth_users_sync_min_fields';
  /** Timestamp when the user was created in the auth system */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Timestamp when the user was deleted in the auth system */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** User's email address from authentication provider */
  email?: Maybe<Scalars['String']['output']>;
  /** Unique identifier from the authentication provider */
  id?: Maybe<Scalars['String']['output']>;
  /** User's full name from authentication provider */
  name?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the user was last updated in the auth system */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "neon_auth.users_sync" */
export type Neon_Auth_Users_Sync_Mutation_Response = {
  __typename?: 'neon_auth_users_sync_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Neon_Auth_Users_Sync>;
};

/** on_conflict condition type for table "neon_auth.users_sync" */
export type Neon_Auth_Users_Sync_On_Conflict = {
  constraint: Neon_Auth_Users_Sync_Constraint;
  update_columns?: Array<Neon_Auth_Users_Sync_Update_Column>;
  where?: InputMaybe<Neon_Auth_Users_Sync_Bool_Exp>;
};

/** Ordering options when selecting data from "neon_auth.users_sync". */
export type Neon_Auth_Users_Sync_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  raw_json?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: neon_auth.users_sync */
export type Neon_Auth_Users_Sync_Pk_Columns_Input = {
  /** Unique identifier from the authentication provider */
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Neon_Auth_Users_Sync_Prepend_Input = {
  /** Complete JSON data from the authentication provider */
  raw_json?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "neon_auth.users_sync" */
export enum Neon_Auth_Users_Sync_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RawJson = 'raw_json',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "neon_auth.users_sync" */
export type Neon_Auth_Users_Sync_Set_Input = {
  /** Timestamp when the user was deleted in the auth system */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Complete JSON data from the authentication provider */
  raw_json?: InputMaybe<Scalars['jsonb']['input']>;
  /** Timestamp when the user was last updated in the auth system */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "neon_auth_users_sync" */
export type Neon_Auth_Users_Sync_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Neon_Auth_Users_Sync_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Neon_Auth_Users_Sync_Stream_Cursor_Value_Input = {
  /** Timestamp when the user was created in the auth system */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Timestamp when the user was deleted in the auth system */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** User's email address from authentication provider */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier from the authentication provider */
  id?: InputMaybe<Scalars['String']['input']>;
  /** User's full name from authentication provider */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Complete JSON data from the authentication provider */
  raw_json?: InputMaybe<Scalars['jsonb']['input']>;
  /** Timestamp when the user was last updated in the auth system */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "neon_auth.users_sync" */
export enum Neon_Auth_Users_Sync_Update_Column {
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  RawJson = 'raw_json',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Neon_Auth_Users_Sync_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Neon_Auth_Users_Sync_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Neon_Auth_Users_Sync_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Neon_Auth_Users_Sync_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Neon_Auth_Users_Sync_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Neon_Auth_Users_Sync_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Neon_Auth_Users_Sync_Set_Input>;
  /** filter the rows which have to be updated */
  where: Neon_Auth_Users_Sync_Bool_Exp;
};

/** columns and relationships of "notes" */
export type Notes = {
  __typename?: 'notes';
  /** Content of the note */
  content: Scalars['String']['output'];
  /** Timestamp when the note was created */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Identifier of the entity this note is attached to */
  entity_id: Scalars['uuid']['output'];
  /** Type of entity this note is attached to (client, payroll, etc.) */
  entity_type: Scalars['String']['output'];
  /** Unique identifier for the note */
  id: Scalars['uuid']['output'];
  /** Whether the note is flagged as important */
  is_important?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  notes_by_client: Array<Clients>;
  /** An aggregate relationship */
  notes_by_client_aggregate: Clients_Aggregate;
  /** An array relationship */
  notes_by_payroll: Array<Payrolls>;
  /** An aggregate relationship */
  notes_by_payroll_aggregate: Payrolls_Aggregate;
  /** Timestamp when the note was last updated */
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  /** User who created the note */
  user_id?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "notes" */
export type NotesNotes_By_ClientArgs = {
  distinct_on?: InputMaybe<Array<Clients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clients_Order_By>>;
  where?: InputMaybe<Clients_Bool_Exp>;
};


/** columns and relationships of "notes" */
export type NotesNotes_By_Client_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Clients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clients_Order_By>>;
  where?: InputMaybe<Clients_Bool_Exp>;
};


/** columns and relationships of "notes" */
export type NotesNotes_By_PayrollArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


/** columns and relationships of "notes" */
export type NotesNotes_By_Payroll_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};

/** aggregated selection of "notes" */
export type Notes_Aggregate = {
  __typename?: 'notes_aggregate';
  aggregate?: Maybe<Notes_Aggregate_Fields>;
  nodes: Array<Notes>;
};

export type Notes_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Notes_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Notes_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Notes_Aggregate_Bool_Exp_Count>;
};

export type Notes_Aggregate_Bool_Exp_Bool_And = {
  arguments: Notes_Select_Column_Notes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Notes_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Notes_Select_Column_Notes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Notes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Notes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "notes" */
export type Notes_Aggregate_Fields = {
  __typename?: 'notes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Notes_Max_Fields>;
  min?: Maybe<Notes_Min_Fields>;
};


/** aggregate fields of "notes" */
export type Notes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "notes" */
export type Notes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Notes_Max_Order_By>;
  min?: InputMaybe<Notes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "notes" */
export type Notes_Arr_Rel_Insert_Input = {
  data: Array<Notes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Notes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "notes". All fields are combined with a logical 'AND'. */
export type Notes_Bool_Exp = {
  _and?: InputMaybe<Array<Notes_Bool_Exp>>;
  _not?: InputMaybe<Notes_Bool_Exp>;
  _or?: InputMaybe<Array<Notes_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  entity_id?: InputMaybe<Uuid_Comparison_Exp>;
  entity_type?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_important?: InputMaybe<Boolean_Comparison_Exp>;
  notes_by_client?: InputMaybe<Clients_Bool_Exp>;
  notes_by_client_aggregate?: InputMaybe<Clients_Aggregate_Bool_Exp>;
  notes_by_payroll?: InputMaybe<Payrolls_Bool_Exp>;
  notes_by_payroll_aggregate?: InputMaybe<Payrolls_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "notes" */
export enum Notes_Constraint {
  /** unique or primary key constraint on columns "id" */
  NotesPkey = 'notes_pkey'
}

/** input type for inserting data into table "notes" */
export type Notes_Insert_Input = {
  /** Content of the note */
  content?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the note was created */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Identifier of the entity this note is attached to */
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Type of entity this note is attached to (client, payroll, etc.) */
  entity_type?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the note */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Whether the note is flagged as important */
  is_important?: InputMaybe<Scalars['Boolean']['input']>;
  notes_by_client?: InputMaybe<Clients_Arr_Rel_Insert_Input>;
  notes_by_payroll?: InputMaybe<Payrolls_Arr_Rel_Insert_Input>;
  /** Timestamp when the note was last updated */
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** User who created the note */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Notes_Max_Fields = {
  __typename?: 'notes_max_fields';
  /** Content of the note */
  content?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the note was created */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Identifier of the entity this note is attached to */
  entity_id?: Maybe<Scalars['uuid']['output']>;
  /** Type of entity this note is attached to (client, payroll, etc.) */
  entity_type?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the note */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Timestamp when the note was last updated */
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** User who created the note */
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "notes" */
export type Notes_Max_Order_By = {
  /** Content of the note */
  content?: InputMaybe<Order_By>;
  /** Timestamp when the note was created */
  created_at?: InputMaybe<Order_By>;
  /** Identifier of the entity this note is attached to */
  entity_id?: InputMaybe<Order_By>;
  /** Type of entity this note is attached to (client, payroll, etc.) */
  entity_type?: InputMaybe<Order_By>;
  /** Unique identifier for the note */
  id?: InputMaybe<Order_By>;
  /** Timestamp when the note was last updated */
  updated_at?: InputMaybe<Order_By>;
  /** User who created the note */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Notes_Min_Fields = {
  __typename?: 'notes_min_fields';
  /** Content of the note */
  content?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the note was created */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Identifier of the entity this note is attached to */
  entity_id?: Maybe<Scalars['uuid']['output']>;
  /** Type of entity this note is attached to (client, payroll, etc.) */
  entity_type?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the note */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Timestamp when the note was last updated */
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** User who created the note */
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "notes" */
export type Notes_Min_Order_By = {
  /** Content of the note */
  content?: InputMaybe<Order_By>;
  /** Timestamp when the note was created */
  created_at?: InputMaybe<Order_By>;
  /** Identifier of the entity this note is attached to */
  entity_id?: InputMaybe<Order_By>;
  /** Type of entity this note is attached to (client, payroll, etc.) */
  entity_type?: InputMaybe<Order_By>;
  /** Unique identifier for the note */
  id?: InputMaybe<Order_By>;
  /** Timestamp when the note was last updated */
  updated_at?: InputMaybe<Order_By>;
  /** User who created the note */
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "notes" */
export type Notes_Mutation_Response = {
  __typename?: 'notes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notes>;
};

/** on_conflict condition type for table "notes" */
export type Notes_On_Conflict = {
  constraint: Notes_Constraint;
  update_columns?: Array<Notes_Update_Column>;
  where?: InputMaybe<Notes_Bool_Exp>;
};

/** Ordering options when selecting data from "notes". */
export type Notes_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  entity_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_important?: InputMaybe<Order_By>;
  notes_by_client_aggregate?: InputMaybe<Clients_Aggregate_Order_By>;
  notes_by_payroll_aggregate?: InputMaybe<Payrolls_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notes */
export type Notes_Pk_Columns_Input = {
  /** Unique identifier for the note */
  id: Scalars['uuid']['input'];
};

/** select columns of table "notes" */
export enum Notes_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  EntityType = 'entity_type',
  /** column name */
  Id = 'id',
  /** column name */
  IsImportant = 'is_important',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "notes_aggregate_bool_exp_bool_and_arguments_columns" columns of table "notes" */
export enum Notes_Select_Column_Notes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsImportant = 'is_important'
}

/** select "notes_aggregate_bool_exp_bool_or_arguments_columns" columns of table "notes" */
export enum Notes_Select_Column_Notes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsImportant = 'is_important'
}

/** input type for updating data in table "notes" */
export type Notes_Set_Input = {
  /** Content of the note */
  content?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the note was created */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Identifier of the entity this note is attached to */
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Type of entity this note is attached to (client, payroll, etc.) */
  entity_type?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the note */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Whether the note is flagged as important */
  is_important?: InputMaybe<Scalars['Boolean']['input']>;
  /** Timestamp when the note was last updated */
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** User who created the note */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "notes" */
export type Notes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notes_Stream_Cursor_Value_Input = {
  /** Content of the note */
  content?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the note was created */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Identifier of the entity this note is attached to */
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Type of entity this note is attached to (client, payroll, etc.) */
  entity_type?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the note */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Whether the note is flagged as important */
  is_important?: InputMaybe<Scalars['Boolean']['input']>;
  /** Timestamp when the note was last updated */
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** User who created the note */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "notes" */
export enum Notes_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  EntityType = 'entity_type',
  /** column name */
  Id = 'id',
  /** column name */
  IsImportant = 'is_important',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Notes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notes_Bool_Exp;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Boolean expression to compare columns of type "payroll_cycle_type". All fields are combined with logical 'AND'. */
export type Payroll_Cycle_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['payroll_cycle_type']['input']>;
  _gt?: InputMaybe<Scalars['payroll_cycle_type']['input']>;
  _gte?: InputMaybe<Scalars['payroll_cycle_type']['input']>;
  _in?: InputMaybe<Array<Scalars['payroll_cycle_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['payroll_cycle_type']['input']>;
  _lte?: InputMaybe<Scalars['payroll_cycle_type']['input']>;
  _neq?: InputMaybe<Scalars['payroll_cycle_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['payroll_cycle_type']['input']>>;
};

/** columns and relationships of "payroll_cycles" */
export type Payroll_Cycles = {
  __typename?: 'payroll_cycles';
  /** An array relationship */
  adjustment_rules: Array<Adjustment_Rules>;
  /** An aggregate relationship */
  adjustment_rules_aggregate: Adjustment_Rules_Aggregate;
  /** Timestamp when the cycle was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Detailed description of the payroll cycle */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the payroll cycle */
  id: Scalars['uuid']['output'];
  /** Name of the payroll cycle (Weekly, Biweekly, Monthly, etc.) */
  name: Scalars['payroll_cycle_type']['output'];
  /** An array relationship */
  payrolls: Array<Payrolls>;
  /** An aggregate relationship */
  payrolls_aggregate: Payrolls_Aggregate;
  /** Timestamp when the cycle was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "payroll_cycles" */
export type Payroll_CyclesAdjustment_RulesArgs = {
  distinct_on?: InputMaybe<Array<Adjustment_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Adjustment_Rules_Order_By>>;
  where?: InputMaybe<Adjustment_Rules_Bool_Exp>;
};


/** columns and relationships of "payroll_cycles" */
export type Payroll_CyclesAdjustment_Rules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Adjustment_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Adjustment_Rules_Order_By>>;
  where?: InputMaybe<Adjustment_Rules_Bool_Exp>;
};


/** columns and relationships of "payroll_cycles" */
export type Payroll_CyclesPayrollsArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


/** columns and relationships of "payroll_cycles" */
export type Payroll_CyclesPayrolls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};

/** aggregated selection of "payroll_cycles" */
export type Payroll_Cycles_Aggregate = {
  __typename?: 'payroll_cycles_aggregate';
  aggregate?: Maybe<Payroll_Cycles_Aggregate_Fields>;
  nodes: Array<Payroll_Cycles>;
};

/** aggregate fields of "payroll_cycles" */
export type Payroll_Cycles_Aggregate_Fields = {
  __typename?: 'payroll_cycles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Payroll_Cycles_Max_Fields>;
  min?: Maybe<Payroll_Cycles_Min_Fields>;
};


/** aggregate fields of "payroll_cycles" */
export type Payroll_Cycles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payroll_Cycles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "payroll_cycles". All fields are combined with a logical 'AND'. */
export type Payroll_Cycles_Bool_Exp = {
  _and?: InputMaybe<Array<Payroll_Cycles_Bool_Exp>>;
  _not?: InputMaybe<Payroll_Cycles_Bool_Exp>;
  _or?: InputMaybe<Array<Payroll_Cycles_Bool_Exp>>;
  adjustment_rules?: InputMaybe<Adjustment_Rules_Bool_Exp>;
  adjustment_rules_aggregate?: InputMaybe<Adjustment_Rules_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<Payroll_Cycle_Type_Comparison_Exp>;
  payrolls?: InputMaybe<Payrolls_Bool_Exp>;
  payrolls_aggregate?: InputMaybe<Payrolls_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "payroll_cycles" */
export enum Payroll_Cycles_Constraint {
  /** unique or primary key constraint on columns "name" */
  PayrollCyclesNameKey = 'payroll_cycles_name_key',
  /** unique or primary key constraint on columns "id" */
  PayrollCyclesPkey = 'payroll_cycles_pkey'
}

/** input type for inserting data into table "payroll_cycles" */
export type Payroll_Cycles_Insert_Input = {
  adjustment_rules?: InputMaybe<Adjustment_Rules_Arr_Rel_Insert_Input>;
  /** Timestamp when the cycle was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed description of the payroll cycle */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the payroll cycle */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Name of the payroll cycle (Weekly, Biweekly, Monthly, etc.) */
  name?: InputMaybe<Scalars['payroll_cycle_type']['input']>;
  payrolls?: InputMaybe<Payrolls_Arr_Rel_Insert_Input>;
  /** Timestamp when the cycle was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Payroll_Cycles_Max_Fields = {
  __typename?: 'payroll_cycles_max_fields';
  /** Timestamp when the cycle was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Detailed description of the payroll cycle */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the payroll cycle */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Name of the payroll cycle (Weekly, Biweekly, Monthly, etc.) */
  name?: Maybe<Scalars['payroll_cycle_type']['output']>;
  /** Timestamp when the cycle was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Payroll_Cycles_Min_Fields = {
  __typename?: 'payroll_cycles_min_fields';
  /** Timestamp when the cycle was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Detailed description of the payroll cycle */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the payroll cycle */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Name of the payroll cycle (Weekly, Biweekly, Monthly, etc.) */
  name?: Maybe<Scalars['payroll_cycle_type']['output']>;
  /** Timestamp when the cycle was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "payroll_cycles" */
export type Payroll_Cycles_Mutation_Response = {
  __typename?: 'payroll_cycles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payroll_Cycles>;
};

/** input type for inserting object relation for remote table "payroll_cycles" */
export type Payroll_Cycles_Obj_Rel_Insert_Input = {
  data: Payroll_Cycles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Payroll_Cycles_On_Conflict>;
};

/** on_conflict condition type for table "payroll_cycles" */
export type Payroll_Cycles_On_Conflict = {
  constraint: Payroll_Cycles_Constraint;
  update_columns?: Array<Payroll_Cycles_Update_Column>;
  where?: InputMaybe<Payroll_Cycles_Bool_Exp>;
};

/** Ordering options when selecting data from "payroll_cycles". */
export type Payroll_Cycles_Order_By = {
  adjustment_rules_aggregate?: InputMaybe<Adjustment_Rules_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  payrolls_aggregate?: InputMaybe<Payrolls_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payroll_cycles */
export type Payroll_Cycles_Pk_Columns_Input = {
  /** Unique identifier for the payroll cycle */
  id: Scalars['uuid']['input'];
};

/** select columns of table "payroll_cycles" */
export enum Payroll_Cycles_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "payroll_cycles" */
export type Payroll_Cycles_Set_Input = {
  /** Timestamp when the cycle was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed description of the payroll cycle */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the payroll cycle */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Name of the payroll cycle (Weekly, Biweekly, Monthly, etc.) */
  name?: InputMaybe<Scalars['payroll_cycle_type']['input']>;
  /** Timestamp when the cycle was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "payroll_cycles" */
export type Payroll_Cycles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payroll_Cycles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payroll_Cycles_Stream_Cursor_Value_Input = {
  /** Timestamp when the cycle was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed description of the payroll cycle */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the payroll cycle */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Name of the payroll cycle (Weekly, Biweekly, Monthly, etc.) */
  name?: InputMaybe<Scalars['payroll_cycle_type']['input']>;
  /** Timestamp when the cycle was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "payroll_cycles" */
export enum Payroll_Cycles_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Payroll_Cycles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payroll_Cycles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payroll_Cycles_Bool_Exp;
};

/** Boolean expression to compare columns of type "payroll_date_type". All fields are combined with logical 'AND'. */
export type Payroll_Date_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['payroll_date_type']['input']>;
  _gt?: InputMaybe<Scalars['payroll_date_type']['input']>;
  _gte?: InputMaybe<Scalars['payroll_date_type']['input']>;
  _in?: InputMaybe<Array<Scalars['payroll_date_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['payroll_date_type']['input']>;
  _lte?: InputMaybe<Scalars['payroll_date_type']['input']>;
  _neq?: InputMaybe<Scalars['payroll_date_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['payroll_date_type']['input']>>;
};

/** columns and relationships of "payroll_date_types" */
export type Payroll_Date_Types = {
  __typename?: 'payroll_date_types';
  /** An array relationship */
  adjustment_rules: Array<Adjustment_Rules>;
  /** An aggregate relationship */
  adjustment_rules_aggregate: Adjustment_Rules_Aggregate;
  /** Timestamp when the date type was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Detailed description of how this date type works */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the payroll date type */
  id: Scalars['uuid']['output'];
  /** Name of the date type (Fixed, Last Working Day, etc.) */
  name: Scalars['payroll_date_type']['output'];
  /** An array relationship */
  payrolls: Array<Payrolls>;
  /** An aggregate relationship */
  payrolls_aggregate: Payrolls_Aggregate;
  /** Timestamp when the date type was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "payroll_date_types" */
export type Payroll_Date_TypesAdjustment_RulesArgs = {
  distinct_on?: InputMaybe<Array<Adjustment_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Adjustment_Rules_Order_By>>;
  where?: InputMaybe<Adjustment_Rules_Bool_Exp>;
};


/** columns and relationships of "payroll_date_types" */
export type Payroll_Date_TypesAdjustment_Rules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Adjustment_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Adjustment_Rules_Order_By>>;
  where?: InputMaybe<Adjustment_Rules_Bool_Exp>;
};


/** columns and relationships of "payroll_date_types" */
export type Payroll_Date_TypesPayrollsArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


/** columns and relationships of "payroll_date_types" */
export type Payroll_Date_TypesPayrolls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};

/** aggregated selection of "payroll_date_types" */
export type Payroll_Date_Types_Aggregate = {
  __typename?: 'payroll_date_types_aggregate';
  aggregate?: Maybe<Payroll_Date_Types_Aggregate_Fields>;
  nodes: Array<Payroll_Date_Types>;
};

/** aggregate fields of "payroll_date_types" */
export type Payroll_Date_Types_Aggregate_Fields = {
  __typename?: 'payroll_date_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Payroll_Date_Types_Max_Fields>;
  min?: Maybe<Payroll_Date_Types_Min_Fields>;
};


/** aggregate fields of "payroll_date_types" */
export type Payroll_Date_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payroll_Date_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "payroll_date_types". All fields are combined with a logical 'AND'. */
export type Payroll_Date_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Payroll_Date_Types_Bool_Exp>>;
  _not?: InputMaybe<Payroll_Date_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Payroll_Date_Types_Bool_Exp>>;
  adjustment_rules?: InputMaybe<Adjustment_Rules_Bool_Exp>;
  adjustment_rules_aggregate?: InputMaybe<Adjustment_Rules_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<Payroll_Date_Type_Comparison_Exp>;
  payrolls?: InputMaybe<Payrolls_Bool_Exp>;
  payrolls_aggregate?: InputMaybe<Payrolls_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "payroll_date_types" */
export enum Payroll_Date_Types_Constraint {
  /** unique or primary key constraint on columns "name" */
  PayrollDateTypesNameKey = 'payroll_date_types_name_key',
  /** unique or primary key constraint on columns "id" */
  PayrollDateTypesPkey = 'payroll_date_types_pkey'
}

/** input type for inserting data into table "payroll_date_types" */
export type Payroll_Date_Types_Insert_Input = {
  adjustment_rules?: InputMaybe<Adjustment_Rules_Arr_Rel_Insert_Input>;
  /** Timestamp when the date type was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed description of how this date type works */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the payroll date type */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Name of the date type (Fixed, Last Working Day, etc.) */
  name?: InputMaybe<Scalars['payroll_date_type']['input']>;
  payrolls?: InputMaybe<Payrolls_Arr_Rel_Insert_Input>;
  /** Timestamp when the date type was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Payroll_Date_Types_Max_Fields = {
  __typename?: 'payroll_date_types_max_fields';
  /** Timestamp when the date type was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Detailed description of how this date type works */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the payroll date type */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Name of the date type (Fixed, Last Working Day, etc.) */
  name?: Maybe<Scalars['payroll_date_type']['output']>;
  /** Timestamp when the date type was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Payroll_Date_Types_Min_Fields = {
  __typename?: 'payroll_date_types_min_fields';
  /** Timestamp when the date type was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Detailed description of how this date type works */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the payroll date type */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Name of the date type (Fixed, Last Working Day, etc.) */
  name?: Maybe<Scalars['payroll_date_type']['output']>;
  /** Timestamp when the date type was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "payroll_date_types" */
export type Payroll_Date_Types_Mutation_Response = {
  __typename?: 'payroll_date_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payroll_Date_Types>;
};

/** input type for inserting object relation for remote table "payroll_date_types" */
export type Payroll_Date_Types_Obj_Rel_Insert_Input = {
  data: Payroll_Date_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Payroll_Date_Types_On_Conflict>;
};

/** on_conflict condition type for table "payroll_date_types" */
export type Payroll_Date_Types_On_Conflict = {
  constraint: Payroll_Date_Types_Constraint;
  update_columns?: Array<Payroll_Date_Types_Update_Column>;
  where?: InputMaybe<Payroll_Date_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "payroll_date_types". */
export type Payroll_Date_Types_Order_By = {
  adjustment_rules_aggregate?: InputMaybe<Adjustment_Rules_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  payrolls_aggregate?: InputMaybe<Payrolls_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payroll_date_types */
export type Payroll_Date_Types_Pk_Columns_Input = {
  /** Unique identifier for the payroll date type */
  id: Scalars['uuid']['input'];
};

/** select columns of table "payroll_date_types" */
export enum Payroll_Date_Types_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "payroll_date_types" */
export type Payroll_Date_Types_Set_Input = {
  /** Timestamp when the date type was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed description of how this date type works */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the payroll date type */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Name of the date type (Fixed, Last Working Day, etc.) */
  name?: InputMaybe<Scalars['payroll_date_type']['input']>;
  /** Timestamp when the date type was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "payroll_date_types" */
export type Payroll_Date_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payroll_Date_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payroll_Date_Types_Stream_Cursor_Value_Input = {
  /** Timestamp when the date type was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed description of how this date type works */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the payroll date type */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Name of the date type (Fixed, Last Working Day, etc.) */
  name?: InputMaybe<Scalars['payroll_date_type']['input']>;
  /** Timestamp when the date type was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "payroll_date_types" */
export enum Payroll_Date_Types_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Payroll_Date_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payroll_Date_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payroll_Date_Types_Bool_Exp;
};

/** columns and relationships of "payroll_dates" */
export type Payroll_Dates = {
  __typename?: 'payroll_dates';
  /** Final EFT date after holiday and weekend adjustments */
  adjusted_eft_date: Scalars['date']['output'];
  /** Timestamp when the date record was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique identifier for the payroll date */
  id: Scalars['uuid']['output'];
  /** Additional notes about this payroll date */
  notes?: Maybe<Scalars['String']['output']>;
  /** Originally calculated EFT date before adjustments */
  original_eft_date: Scalars['date']['output'];
  /** An object relationship */
  payroll: Payrolls;
  /** Reference to the payroll this date belongs to */
  payroll_id: Scalars['uuid']['output'];
  /** Date when payroll processing must be completed */
  processing_date: Scalars['date']['output'];
  /** Timestamp when the date record was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "payroll_dates" */
export type Payroll_Dates_Aggregate = {
  __typename?: 'payroll_dates_aggregate';
  aggregate?: Maybe<Payroll_Dates_Aggregate_Fields>;
  nodes: Array<Payroll_Dates>;
};

export type Payroll_Dates_Aggregate_Bool_Exp = {
  count?: InputMaybe<Payroll_Dates_Aggregate_Bool_Exp_Count>;
};

export type Payroll_Dates_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Payroll_Dates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payroll_Dates_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "payroll_dates" */
export type Payroll_Dates_Aggregate_Fields = {
  __typename?: 'payroll_dates_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Payroll_Dates_Max_Fields>;
  min?: Maybe<Payroll_Dates_Min_Fields>;
};


/** aggregate fields of "payroll_dates" */
export type Payroll_Dates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payroll_Dates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "payroll_dates" */
export type Payroll_Dates_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Payroll_Dates_Max_Order_By>;
  min?: InputMaybe<Payroll_Dates_Min_Order_By>;
};

/** input type for inserting array relation for remote table "payroll_dates" */
export type Payroll_Dates_Arr_Rel_Insert_Input = {
  data: Array<Payroll_Dates_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Payroll_Dates_On_Conflict>;
};

/** Boolean expression to filter rows from the table "payroll_dates". All fields are combined with a logical 'AND'. */
export type Payroll_Dates_Bool_Exp = {
  _and?: InputMaybe<Array<Payroll_Dates_Bool_Exp>>;
  _not?: InputMaybe<Payroll_Dates_Bool_Exp>;
  _or?: InputMaybe<Array<Payroll_Dates_Bool_Exp>>;
  adjusted_eft_date?: InputMaybe<Date_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  original_eft_date?: InputMaybe<Date_Comparison_Exp>;
  payroll?: InputMaybe<Payrolls_Bool_Exp>;
  payroll_id?: InputMaybe<Uuid_Comparison_Exp>;
  processing_date?: InputMaybe<Date_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "payroll_dates" */
export enum Payroll_Dates_Constraint {
  /** unique or primary key constraint on columns "original_eft_date", "payroll_id" */
  IdxUniquePayrollDate = 'idx_unique_payroll_date',
  /** unique or primary key constraint on columns "id" */
  PayrollDatesPkey = 'payroll_dates_pkey'
}

/** input type for inserting data into table "payroll_dates" */
export type Payroll_Dates_Insert_Input = {
  /** Final EFT date after holiday and weekend adjustments */
  adjusted_eft_date?: InputMaybe<Scalars['date']['input']>;
  /** Timestamp when the date record was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique identifier for the payroll date */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Additional notes about this payroll date */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** Originally calculated EFT date before adjustments */
  original_eft_date?: InputMaybe<Scalars['date']['input']>;
  payroll?: InputMaybe<Payrolls_Obj_Rel_Insert_Input>;
  /** Reference to the payroll this date belongs to */
  payroll_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Date when payroll processing must be completed */
  processing_date?: InputMaybe<Scalars['date']['input']>;
  /** Timestamp when the date record was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Payroll_Dates_Max_Fields = {
  __typename?: 'payroll_dates_max_fields';
  /** Final EFT date after holiday and weekend adjustments */
  adjusted_eft_date?: Maybe<Scalars['date']['output']>;
  /** Timestamp when the date record was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique identifier for the payroll date */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Additional notes about this payroll date */
  notes?: Maybe<Scalars['String']['output']>;
  /** Originally calculated EFT date before adjustments */
  original_eft_date?: Maybe<Scalars['date']['output']>;
  /** Reference to the payroll this date belongs to */
  payroll_id?: Maybe<Scalars['uuid']['output']>;
  /** Date when payroll processing must be completed */
  processing_date?: Maybe<Scalars['date']['output']>;
  /** Timestamp when the date record was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "payroll_dates" */
export type Payroll_Dates_Max_Order_By = {
  /** Final EFT date after holiday and weekend adjustments */
  adjusted_eft_date?: InputMaybe<Order_By>;
  /** Timestamp when the date record was created */
  created_at?: InputMaybe<Order_By>;
  /** Unique identifier for the payroll date */
  id?: InputMaybe<Order_By>;
  /** Additional notes about this payroll date */
  notes?: InputMaybe<Order_By>;
  /** Originally calculated EFT date before adjustments */
  original_eft_date?: InputMaybe<Order_By>;
  /** Reference to the payroll this date belongs to */
  payroll_id?: InputMaybe<Order_By>;
  /** Date when payroll processing must be completed */
  processing_date?: InputMaybe<Order_By>;
  /** Timestamp when the date record was last updated */
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Payroll_Dates_Min_Fields = {
  __typename?: 'payroll_dates_min_fields';
  /** Final EFT date after holiday and weekend adjustments */
  adjusted_eft_date?: Maybe<Scalars['date']['output']>;
  /** Timestamp when the date record was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique identifier for the payroll date */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Additional notes about this payroll date */
  notes?: Maybe<Scalars['String']['output']>;
  /** Originally calculated EFT date before adjustments */
  original_eft_date?: Maybe<Scalars['date']['output']>;
  /** Reference to the payroll this date belongs to */
  payroll_id?: Maybe<Scalars['uuid']['output']>;
  /** Date when payroll processing must be completed */
  processing_date?: Maybe<Scalars['date']['output']>;
  /** Timestamp when the date record was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "payroll_dates" */
export type Payroll_Dates_Min_Order_By = {
  /** Final EFT date after holiday and weekend adjustments */
  adjusted_eft_date?: InputMaybe<Order_By>;
  /** Timestamp when the date record was created */
  created_at?: InputMaybe<Order_By>;
  /** Unique identifier for the payroll date */
  id?: InputMaybe<Order_By>;
  /** Additional notes about this payroll date */
  notes?: InputMaybe<Order_By>;
  /** Originally calculated EFT date before adjustments */
  original_eft_date?: InputMaybe<Order_By>;
  /** Reference to the payroll this date belongs to */
  payroll_id?: InputMaybe<Order_By>;
  /** Date when payroll processing must be completed */
  processing_date?: InputMaybe<Order_By>;
  /** Timestamp when the date record was last updated */
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "payroll_dates" */
export type Payroll_Dates_Mutation_Response = {
  __typename?: 'payroll_dates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payroll_Dates>;
};

/** on_conflict condition type for table "payroll_dates" */
export type Payroll_Dates_On_Conflict = {
  constraint: Payroll_Dates_Constraint;
  update_columns?: Array<Payroll_Dates_Update_Column>;
  where?: InputMaybe<Payroll_Dates_Bool_Exp>;
};

/** Ordering options when selecting data from "payroll_dates". */
export type Payroll_Dates_Order_By = {
  adjusted_eft_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  original_eft_date?: InputMaybe<Order_By>;
  payroll?: InputMaybe<Payrolls_Order_By>;
  payroll_id?: InputMaybe<Order_By>;
  processing_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payroll_dates */
export type Payroll_Dates_Pk_Columns_Input = {
  /** Unique identifier for the payroll date */
  id: Scalars['uuid']['input'];
};

/** select columns of table "payroll_dates" */
export enum Payroll_Dates_Select_Column {
  /** column name */
  AdjustedEftDate = 'adjusted_eft_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  OriginalEftDate = 'original_eft_date',
  /** column name */
  PayrollId = 'payroll_id',
  /** column name */
  ProcessingDate = 'processing_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "payroll_dates" */
export type Payroll_Dates_Set_Input = {
  /** Final EFT date after holiday and weekend adjustments */
  adjusted_eft_date?: InputMaybe<Scalars['date']['input']>;
  /** Timestamp when the date record was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique identifier for the payroll date */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Additional notes about this payroll date */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** Originally calculated EFT date before adjustments */
  original_eft_date?: InputMaybe<Scalars['date']['input']>;
  /** Reference to the payroll this date belongs to */
  payroll_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Date when payroll processing must be completed */
  processing_date?: InputMaybe<Scalars['date']['input']>;
  /** Timestamp when the date record was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "payroll_dates" */
export type Payroll_Dates_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payroll_Dates_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payroll_Dates_Stream_Cursor_Value_Input = {
  /** Final EFT date after holiday and weekend adjustments */
  adjusted_eft_date?: InputMaybe<Scalars['date']['input']>;
  /** Timestamp when the date record was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique identifier for the payroll date */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Additional notes about this payroll date */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** Originally calculated EFT date before adjustments */
  original_eft_date?: InputMaybe<Scalars['date']['input']>;
  /** Reference to the payroll this date belongs to */
  payroll_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Date when payroll processing must be completed */
  processing_date?: InputMaybe<Scalars['date']['input']>;
  /** Timestamp when the date record was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "payroll_dates" */
export enum Payroll_Dates_Update_Column {
  /** column name */
  AdjustedEftDate = 'adjusted_eft_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  OriginalEftDate = 'original_eft_date',
  /** column name */
  PayrollId = 'payroll_id',
  /** column name */
  ProcessingDate = 'processing_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Payroll_Dates_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payroll_Dates_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payroll_Dates_Bool_Exp;
};

/** Boolean expression to compare columns of type "payroll_status". All fields are combined with logical 'AND'. */
export type Payroll_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['payroll_status']['input']>;
  _gt?: InputMaybe<Scalars['payroll_status']['input']>;
  _gte?: InputMaybe<Scalars['payroll_status']['input']>;
  _in?: InputMaybe<Array<Scalars['payroll_status']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['payroll_status']['input']>;
  _lte?: InputMaybe<Scalars['payroll_status']['input']>;
  _neq?: InputMaybe<Scalars['payroll_status']['input']>;
  _nin?: InputMaybe<Array<Scalars['payroll_status']['input']>>;
};

/** columns and relationships of "payrolls" */
export type Payrolls = {
  __typename?: 'payrolls';
  /** Backup consultant for this payroll */
  backup_consultant_user_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  client: Clients;
  /** Reference to the client this payroll belongs to */
  client_id: Scalars['uuid']['output'];
  /** Timestamp when the payroll was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Reference to the payroll cycle */
  cycle_id: Scalars['uuid']['output'];
  /** Reference to the payroll date type */
  date_type_id: Scalars['uuid']['output'];
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: Maybe<Scalars['Int']['output']>;
  /** Number of employees in this payroll */
  employee_count?: Maybe<Scalars['Int']['output']>;
  /** The date when the payroll went live in the system */
  go_live_date?: Maybe<Scalars['date']['output']>;
  /** Unique identifier for the payroll */
  id: Scalars['uuid']['output'];
  /** Manager overseeing this payroll */
  manager_user_id?: Maybe<Scalars['uuid']['output']>;
  /** Name of the payroll */
  name: Scalars['String']['output'];
  /** An object relationship */
  payroll_cycle: Payroll_Cycles;
  /** An object relationship */
  payroll_date_type: Payroll_Date_Types;
  /** An array relationship */
  payroll_dates: Array<Payroll_Dates>;
  /** An aggregate relationship */
  payroll_dates_aggregate: Payroll_Dates_Aggregate;
  /** External payroll system used for this client */
  payroll_system?: Maybe<Scalars['String']['output']>;
  /** Primary consultant responsible for this payroll */
  primary_consultant_user_id?: Maybe<Scalars['uuid']['output']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft: Scalars['Int']['output'];
  /** Number of hours required to process this payroll */
  processing_time: Scalars['Int']['output'];
  /** Current status of the payroll (Implementation, Active, Inactive) */
  status: Scalars['payroll_status']['output'];
  /** Timestamp when the payroll was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  userByBackupConsultantUserId?: Maybe<Users>;
  /** An object relationship */
  userByManagerUserId?: Maybe<Users>;
  /** An object relationship */
  userByPrimaryConsultantUserId?: Maybe<Users>;
};


/** columns and relationships of "payrolls" */
export type PayrollsPayroll_DatesArgs = {
  distinct_on?: InputMaybe<Array<Payroll_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Dates_Order_By>>;
  where?: InputMaybe<Payroll_Dates_Bool_Exp>;
};


/** columns and relationships of "payrolls" */
export type PayrollsPayroll_Dates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payroll_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Dates_Order_By>>;
  where?: InputMaybe<Payroll_Dates_Bool_Exp>;
};

/** aggregated selection of "payrolls" */
export type Payrolls_Aggregate = {
  __typename?: 'payrolls_aggregate';
  aggregate?: Maybe<Payrolls_Aggregate_Fields>;
  nodes: Array<Payrolls>;
};

export type Payrolls_Aggregate_Bool_Exp = {
  count?: InputMaybe<Payrolls_Aggregate_Bool_Exp_Count>;
};

export type Payrolls_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Payrolls_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payrolls_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "payrolls" */
export type Payrolls_Aggregate_Fields = {
  __typename?: 'payrolls_aggregate_fields';
  avg?: Maybe<Payrolls_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Payrolls_Max_Fields>;
  min?: Maybe<Payrolls_Min_Fields>;
  stddev?: Maybe<Payrolls_Stddev_Fields>;
  stddev_pop?: Maybe<Payrolls_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payrolls_Stddev_Samp_Fields>;
  sum?: Maybe<Payrolls_Sum_Fields>;
  var_pop?: Maybe<Payrolls_Var_Pop_Fields>;
  var_samp?: Maybe<Payrolls_Var_Samp_Fields>;
  variance?: Maybe<Payrolls_Variance_Fields>;
};


/** aggregate fields of "payrolls" */
export type Payrolls_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payrolls_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "payrolls" */
export type Payrolls_Aggregate_Order_By = {
  avg?: InputMaybe<Payrolls_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Payrolls_Max_Order_By>;
  min?: InputMaybe<Payrolls_Min_Order_By>;
  stddev?: InputMaybe<Payrolls_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Payrolls_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Payrolls_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Payrolls_Sum_Order_By>;
  var_pop?: InputMaybe<Payrolls_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Payrolls_Var_Samp_Order_By>;
  variance?: InputMaybe<Payrolls_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "payrolls" */
export type Payrolls_Arr_Rel_Insert_Input = {
  data: Array<Payrolls_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Payrolls_On_Conflict>;
};

/** aggregate avg on columns */
export type Payrolls_Avg_Fields = {
  __typename?: 'payrolls_avg_fields';
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: Maybe<Scalars['Float']['output']>;
  /** Number of employees in this payroll */
  employee_count?: Maybe<Scalars['Float']['output']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: Maybe<Scalars['Float']['output']>;
  /** Number of hours required to process this payroll */
  processing_time?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "payrolls" */
export type Payrolls_Avg_Order_By = {
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: InputMaybe<Order_By>;
  /** Number of employees in this payroll */
  employee_count?: InputMaybe<Order_By>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: InputMaybe<Order_By>;
  /** Number of hours required to process this payroll */
  processing_time?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "payrolls". All fields are combined with a logical 'AND'. */
export type Payrolls_Bool_Exp = {
  _and?: InputMaybe<Array<Payrolls_Bool_Exp>>;
  _not?: InputMaybe<Payrolls_Bool_Exp>;
  _or?: InputMaybe<Array<Payrolls_Bool_Exp>>;
  backup_consultant_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  client?: InputMaybe<Clients_Bool_Exp>;
  client_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  cycle_id?: InputMaybe<Uuid_Comparison_Exp>;
  date_type_id?: InputMaybe<Uuid_Comparison_Exp>;
  date_value?: InputMaybe<Int_Comparison_Exp>;
  employee_count?: InputMaybe<Int_Comparison_Exp>;
  go_live_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  manager_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  payroll_cycle?: InputMaybe<Payroll_Cycles_Bool_Exp>;
  payroll_date_type?: InputMaybe<Payroll_Date_Types_Bool_Exp>;
  payroll_dates?: InputMaybe<Payroll_Dates_Bool_Exp>;
  payroll_dates_aggregate?: InputMaybe<Payroll_Dates_Aggregate_Bool_Exp>;
  payroll_system?: InputMaybe<String_Comparison_Exp>;
  primary_consultant_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  processing_days_before_eft?: InputMaybe<Int_Comparison_Exp>;
  processing_time?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Payroll_Status_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  userByBackupConsultantUserId?: InputMaybe<Users_Bool_Exp>;
  userByManagerUserId?: InputMaybe<Users_Bool_Exp>;
  userByPrimaryConsultantUserId?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "payrolls" */
export enum Payrolls_Constraint {
  /** unique or primary key constraint on columns "id" */
  PayrollsPkey = 'payrolls_pkey'
}

/** input type for incrementing numeric columns in table "payrolls" */
export type Payrolls_Inc_Input = {
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: InputMaybe<Scalars['Int']['input']>;
  /** Number of employees in this payroll */
  employee_count?: InputMaybe<Scalars['Int']['input']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: InputMaybe<Scalars['Int']['input']>;
  /** Number of hours required to process this payroll */
  processing_time?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "payrolls" */
export type Payrolls_Insert_Input = {
  /** Backup consultant for this payroll */
  backup_consultant_user_id?: InputMaybe<Scalars['uuid']['input']>;
  client?: InputMaybe<Clients_Obj_Rel_Insert_Input>;
  /** Reference to the client this payroll belongs to */
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Timestamp when the payroll was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Reference to the payroll cycle */
  cycle_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Reference to the payroll date type */
  date_type_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: InputMaybe<Scalars['Int']['input']>;
  /** Number of employees in this payroll */
  employee_count?: InputMaybe<Scalars['Int']['input']>;
  /** The date when the payroll went live in the system */
  go_live_date?: InputMaybe<Scalars['date']['input']>;
  /** Unique identifier for the payroll */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Manager overseeing this payroll */
  manager_user_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Name of the payroll */
  name?: InputMaybe<Scalars['String']['input']>;
  payroll_cycle?: InputMaybe<Payroll_Cycles_Obj_Rel_Insert_Input>;
  payroll_date_type?: InputMaybe<Payroll_Date_Types_Obj_Rel_Insert_Input>;
  payroll_dates?: InputMaybe<Payroll_Dates_Arr_Rel_Insert_Input>;
  /** External payroll system used for this client */
  payroll_system?: InputMaybe<Scalars['String']['input']>;
  /** Primary consultant responsible for this payroll */
  primary_consultant_user_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: InputMaybe<Scalars['Int']['input']>;
  /** Number of hours required to process this payroll */
  processing_time?: InputMaybe<Scalars['Int']['input']>;
  /** Current status of the payroll (Implementation, Active, Inactive) */
  status?: InputMaybe<Scalars['payroll_status']['input']>;
  /** Timestamp when the payroll was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  userByBackupConsultantUserId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByManagerUserId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByPrimaryConsultantUserId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Payrolls_Max_Fields = {
  __typename?: 'payrolls_max_fields';
  /** Backup consultant for this payroll */
  backup_consultant_user_id?: Maybe<Scalars['uuid']['output']>;
  /** Reference to the client this payroll belongs to */
  client_id?: Maybe<Scalars['uuid']['output']>;
  /** Timestamp when the payroll was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Reference to the payroll cycle */
  cycle_id?: Maybe<Scalars['uuid']['output']>;
  /** Reference to the payroll date type */
  date_type_id?: Maybe<Scalars['uuid']['output']>;
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: Maybe<Scalars['Int']['output']>;
  /** Number of employees in this payroll */
  employee_count?: Maybe<Scalars['Int']['output']>;
  /** The date when the payroll went live in the system */
  go_live_date?: Maybe<Scalars['date']['output']>;
  /** Unique identifier for the payroll */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Manager overseeing this payroll */
  manager_user_id?: Maybe<Scalars['uuid']['output']>;
  /** Name of the payroll */
  name?: Maybe<Scalars['String']['output']>;
  /** External payroll system used for this client */
  payroll_system?: Maybe<Scalars['String']['output']>;
  /** Primary consultant responsible for this payroll */
  primary_consultant_user_id?: Maybe<Scalars['uuid']['output']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: Maybe<Scalars['Int']['output']>;
  /** Number of hours required to process this payroll */
  processing_time?: Maybe<Scalars['Int']['output']>;
  /** Current status of the payroll (Implementation, Active, Inactive) */
  status?: Maybe<Scalars['payroll_status']['output']>;
  /** Timestamp when the payroll was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "payrolls" */
export type Payrolls_Max_Order_By = {
  /** Backup consultant for this payroll */
  backup_consultant_user_id?: InputMaybe<Order_By>;
  /** Reference to the client this payroll belongs to */
  client_id?: InputMaybe<Order_By>;
  /** Timestamp when the payroll was created */
  created_at?: InputMaybe<Order_By>;
  /** Reference to the payroll cycle */
  cycle_id?: InputMaybe<Order_By>;
  /** Reference to the payroll date type */
  date_type_id?: InputMaybe<Order_By>;
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: InputMaybe<Order_By>;
  /** Number of employees in this payroll */
  employee_count?: InputMaybe<Order_By>;
  /** The date when the payroll went live in the system */
  go_live_date?: InputMaybe<Order_By>;
  /** Unique identifier for the payroll */
  id?: InputMaybe<Order_By>;
  /** Manager overseeing this payroll */
  manager_user_id?: InputMaybe<Order_By>;
  /** Name of the payroll */
  name?: InputMaybe<Order_By>;
  /** External payroll system used for this client */
  payroll_system?: InputMaybe<Order_By>;
  /** Primary consultant responsible for this payroll */
  primary_consultant_user_id?: InputMaybe<Order_By>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: InputMaybe<Order_By>;
  /** Number of hours required to process this payroll */
  processing_time?: InputMaybe<Order_By>;
  /** Current status of the payroll (Implementation, Active, Inactive) */
  status?: InputMaybe<Order_By>;
  /** Timestamp when the payroll was last updated */
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Payrolls_Min_Fields = {
  __typename?: 'payrolls_min_fields';
  /** Backup consultant for this payroll */
  backup_consultant_user_id?: Maybe<Scalars['uuid']['output']>;
  /** Reference to the client this payroll belongs to */
  client_id?: Maybe<Scalars['uuid']['output']>;
  /** Timestamp when the payroll was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Reference to the payroll cycle */
  cycle_id?: Maybe<Scalars['uuid']['output']>;
  /** Reference to the payroll date type */
  date_type_id?: Maybe<Scalars['uuid']['output']>;
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: Maybe<Scalars['Int']['output']>;
  /** Number of employees in this payroll */
  employee_count?: Maybe<Scalars['Int']['output']>;
  /** The date when the payroll went live in the system */
  go_live_date?: Maybe<Scalars['date']['output']>;
  /** Unique identifier for the payroll */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Manager overseeing this payroll */
  manager_user_id?: Maybe<Scalars['uuid']['output']>;
  /** Name of the payroll */
  name?: Maybe<Scalars['String']['output']>;
  /** External payroll system used for this client */
  payroll_system?: Maybe<Scalars['String']['output']>;
  /** Primary consultant responsible for this payroll */
  primary_consultant_user_id?: Maybe<Scalars['uuid']['output']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: Maybe<Scalars['Int']['output']>;
  /** Number of hours required to process this payroll */
  processing_time?: Maybe<Scalars['Int']['output']>;
  /** Current status of the payroll (Implementation, Active, Inactive) */
  status?: Maybe<Scalars['payroll_status']['output']>;
  /** Timestamp when the payroll was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "payrolls" */
export type Payrolls_Min_Order_By = {
  /** Backup consultant for this payroll */
  backup_consultant_user_id?: InputMaybe<Order_By>;
  /** Reference to the client this payroll belongs to */
  client_id?: InputMaybe<Order_By>;
  /** Timestamp when the payroll was created */
  created_at?: InputMaybe<Order_By>;
  /** Reference to the payroll cycle */
  cycle_id?: InputMaybe<Order_By>;
  /** Reference to the payroll date type */
  date_type_id?: InputMaybe<Order_By>;
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: InputMaybe<Order_By>;
  /** Number of employees in this payroll */
  employee_count?: InputMaybe<Order_By>;
  /** The date when the payroll went live in the system */
  go_live_date?: InputMaybe<Order_By>;
  /** Unique identifier for the payroll */
  id?: InputMaybe<Order_By>;
  /** Manager overseeing this payroll */
  manager_user_id?: InputMaybe<Order_By>;
  /** Name of the payroll */
  name?: InputMaybe<Order_By>;
  /** External payroll system used for this client */
  payroll_system?: InputMaybe<Order_By>;
  /** Primary consultant responsible for this payroll */
  primary_consultant_user_id?: InputMaybe<Order_By>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: InputMaybe<Order_By>;
  /** Number of hours required to process this payroll */
  processing_time?: InputMaybe<Order_By>;
  /** Current status of the payroll (Implementation, Active, Inactive) */
  status?: InputMaybe<Order_By>;
  /** Timestamp when the payroll was last updated */
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "payrolls" */
export type Payrolls_Mutation_Response = {
  __typename?: 'payrolls_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payrolls>;
};

/** input type for inserting object relation for remote table "payrolls" */
export type Payrolls_Obj_Rel_Insert_Input = {
  data: Payrolls_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Payrolls_On_Conflict>;
};

/** on_conflict condition type for table "payrolls" */
export type Payrolls_On_Conflict = {
  constraint: Payrolls_Constraint;
  update_columns?: Array<Payrolls_Update_Column>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};

/** Ordering options when selecting data from "payrolls". */
export type Payrolls_Order_By = {
  backup_consultant_user_id?: InputMaybe<Order_By>;
  client?: InputMaybe<Clients_Order_By>;
  client_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  date_type_id?: InputMaybe<Order_By>;
  date_value?: InputMaybe<Order_By>;
  employee_count?: InputMaybe<Order_By>;
  go_live_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manager_user_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  payroll_cycle?: InputMaybe<Payroll_Cycles_Order_By>;
  payroll_date_type?: InputMaybe<Payroll_Date_Types_Order_By>;
  payroll_dates_aggregate?: InputMaybe<Payroll_Dates_Aggregate_Order_By>;
  payroll_system?: InputMaybe<Order_By>;
  primary_consultant_user_id?: InputMaybe<Order_By>;
  processing_days_before_eft?: InputMaybe<Order_By>;
  processing_time?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userByBackupConsultantUserId?: InputMaybe<Users_Order_By>;
  userByManagerUserId?: InputMaybe<Users_Order_By>;
  userByPrimaryConsultantUserId?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: payrolls */
export type Payrolls_Pk_Columns_Input = {
  /** Unique identifier for the payroll */
  id: Scalars['uuid']['input'];
};

/** select columns of table "payrolls" */
export enum Payrolls_Select_Column {
  /** column name */
  BackupConsultantUserId = 'backup_consultant_user_id',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CycleId = 'cycle_id',
  /** column name */
  DateTypeId = 'date_type_id',
  /** column name */
  DateValue = 'date_value',
  /** column name */
  EmployeeCount = 'employee_count',
  /** column name */
  GoLiveDate = 'go_live_date',
  /** column name */
  Id = 'id',
  /** column name */
  ManagerUserId = 'manager_user_id',
  /** column name */
  Name = 'name',
  /** column name */
  PayrollSystem = 'payroll_system',
  /** column name */
  PrimaryConsultantUserId = 'primary_consultant_user_id',
  /** column name */
  ProcessingDaysBeforeEft = 'processing_days_before_eft',
  /** column name */
  ProcessingTime = 'processing_time',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "payrolls" */
export type Payrolls_Set_Input = {
  /** Backup consultant for this payroll */
  backup_consultant_user_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Reference to the client this payroll belongs to */
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Timestamp when the payroll was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Reference to the payroll cycle */
  cycle_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Reference to the payroll date type */
  date_type_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: InputMaybe<Scalars['Int']['input']>;
  /** Number of employees in this payroll */
  employee_count?: InputMaybe<Scalars['Int']['input']>;
  /** The date when the payroll went live in the system */
  go_live_date?: InputMaybe<Scalars['date']['input']>;
  /** Unique identifier for the payroll */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Manager overseeing this payroll */
  manager_user_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Name of the payroll */
  name?: InputMaybe<Scalars['String']['input']>;
  /** External payroll system used for this client */
  payroll_system?: InputMaybe<Scalars['String']['input']>;
  /** Primary consultant responsible for this payroll */
  primary_consultant_user_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: InputMaybe<Scalars['Int']['input']>;
  /** Number of hours required to process this payroll */
  processing_time?: InputMaybe<Scalars['Int']['input']>;
  /** Current status of the payroll (Implementation, Active, Inactive) */
  status?: InputMaybe<Scalars['payroll_status']['input']>;
  /** Timestamp when the payroll was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Payrolls_Stddev_Fields = {
  __typename?: 'payrolls_stddev_fields';
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: Maybe<Scalars['Float']['output']>;
  /** Number of employees in this payroll */
  employee_count?: Maybe<Scalars['Float']['output']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: Maybe<Scalars['Float']['output']>;
  /** Number of hours required to process this payroll */
  processing_time?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "payrolls" */
export type Payrolls_Stddev_Order_By = {
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: InputMaybe<Order_By>;
  /** Number of employees in this payroll */
  employee_count?: InputMaybe<Order_By>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: InputMaybe<Order_By>;
  /** Number of hours required to process this payroll */
  processing_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Payrolls_Stddev_Pop_Fields = {
  __typename?: 'payrolls_stddev_pop_fields';
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: Maybe<Scalars['Float']['output']>;
  /** Number of employees in this payroll */
  employee_count?: Maybe<Scalars['Float']['output']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: Maybe<Scalars['Float']['output']>;
  /** Number of hours required to process this payroll */
  processing_time?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "payrolls" */
export type Payrolls_Stddev_Pop_Order_By = {
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: InputMaybe<Order_By>;
  /** Number of employees in this payroll */
  employee_count?: InputMaybe<Order_By>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: InputMaybe<Order_By>;
  /** Number of hours required to process this payroll */
  processing_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Payrolls_Stddev_Samp_Fields = {
  __typename?: 'payrolls_stddev_samp_fields';
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: Maybe<Scalars['Float']['output']>;
  /** Number of employees in this payroll */
  employee_count?: Maybe<Scalars['Float']['output']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: Maybe<Scalars['Float']['output']>;
  /** Number of hours required to process this payroll */
  processing_time?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "payrolls" */
export type Payrolls_Stddev_Samp_Order_By = {
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: InputMaybe<Order_By>;
  /** Number of employees in this payroll */
  employee_count?: InputMaybe<Order_By>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: InputMaybe<Order_By>;
  /** Number of hours required to process this payroll */
  processing_time?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "payrolls" */
export type Payrolls_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payrolls_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payrolls_Stream_Cursor_Value_Input = {
  /** Backup consultant for this payroll */
  backup_consultant_user_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Reference to the client this payroll belongs to */
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Timestamp when the payroll was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Reference to the payroll cycle */
  cycle_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Reference to the payroll date type */
  date_type_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: InputMaybe<Scalars['Int']['input']>;
  /** Number of employees in this payroll */
  employee_count?: InputMaybe<Scalars['Int']['input']>;
  /** The date when the payroll went live in the system */
  go_live_date?: InputMaybe<Scalars['date']['input']>;
  /** Unique identifier for the payroll */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Manager overseeing this payroll */
  manager_user_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Name of the payroll */
  name?: InputMaybe<Scalars['String']['input']>;
  /** External payroll system used for this client */
  payroll_system?: InputMaybe<Scalars['String']['input']>;
  /** Primary consultant responsible for this payroll */
  primary_consultant_user_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: InputMaybe<Scalars['Int']['input']>;
  /** Number of hours required to process this payroll */
  processing_time?: InputMaybe<Scalars['Int']['input']>;
  /** Current status of the payroll (Implementation, Active, Inactive) */
  status?: InputMaybe<Scalars['payroll_status']['input']>;
  /** Timestamp when the payroll was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Payrolls_Sum_Fields = {
  __typename?: 'payrolls_sum_fields';
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: Maybe<Scalars['Int']['output']>;
  /** Number of employees in this payroll */
  employee_count?: Maybe<Scalars['Int']['output']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: Maybe<Scalars['Int']['output']>;
  /** Number of hours required to process this payroll */
  processing_time?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "payrolls" */
export type Payrolls_Sum_Order_By = {
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: InputMaybe<Order_By>;
  /** Number of employees in this payroll */
  employee_count?: InputMaybe<Order_By>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: InputMaybe<Order_By>;
  /** Number of hours required to process this payroll */
  processing_time?: InputMaybe<Order_By>;
};

/** update columns of table "payrolls" */
export enum Payrolls_Update_Column {
  /** column name */
  BackupConsultantUserId = 'backup_consultant_user_id',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CycleId = 'cycle_id',
  /** column name */
  DateTypeId = 'date_type_id',
  /** column name */
  DateValue = 'date_value',
  /** column name */
  EmployeeCount = 'employee_count',
  /** column name */
  GoLiveDate = 'go_live_date',
  /** column name */
  Id = 'id',
  /** column name */
  ManagerUserId = 'manager_user_id',
  /** column name */
  Name = 'name',
  /** column name */
  PayrollSystem = 'payroll_system',
  /** column name */
  PrimaryConsultantUserId = 'primary_consultant_user_id',
  /** column name */
  ProcessingDaysBeforeEft = 'processing_days_before_eft',
  /** column name */
  ProcessingTime = 'processing_time',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Payrolls_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Payrolls_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payrolls_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payrolls_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Payrolls_Var_Pop_Fields = {
  __typename?: 'payrolls_var_pop_fields';
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: Maybe<Scalars['Float']['output']>;
  /** Number of employees in this payroll */
  employee_count?: Maybe<Scalars['Float']['output']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: Maybe<Scalars['Float']['output']>;
  /** Number of hours required to process this payroll */
  processing_time?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "payrolls" */
export type Payrolls_Var_Pop_Order_By = {
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: InputMaybe<Order_By>;
  /** Number of employees in this payroll */
  employee_count?: InputMaybe<Order_By>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: InputMaybe<Order_By>;
  /** Number of hours required to process this payroll */
  processing_time?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Payrolls_Var_Samp_Fields = {
  __typename?: 'payrolls_var_samp_fields';
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: Maybe<Scalars['Float']['output']>;
  /** Number of employees in this payroll */
  employee_count?: Maybe<Scalars['Float']['output']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: Maybe<Scalars['Float']['output']>;
  /** Number of hours required to process this payroll */
  processing_time?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "payrolls" */
export type Payrolls_Var_Samp_Order_By = {
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: InputMaybe<Order_By>;
  /** Number of employees in this payroll */
  employee_count?: InputMaybe<Order_By>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: InputMaybe<Order_By>;
  /** Number of hours required to process this payroll */
  processing_time?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Payrolls_Variance_Fields = {
  __typename?: 'payrolls_variance_fields';
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: Maybe<Scalars['Float']['output']>;
  /** Number of employees in this payroll */
  employee_count?: Maybe<Scalars['Float']['output']>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: Maybe<Scalars['Float']['output']>;
  /** Number of hours required to process this payroll */
  processing_time?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "payrolls" */
export type Payrolls_Variance_Order_By = {
  /** Specific value for date calculation (e.g., day of month) */
  date_value?: InputMaybe<Order_By>;
  /** Number of employees in this payroll */
  employee_count?: InputMaybe<Order_By>;
  /** Number of days before EFT that processing must complete */
  processing_days_before_eft?: InputMaybe<Order_By>;
  /** Number of hours required to process this payroll */
  processing_time?: InputMaybe<Order_By>;
};

/** columns and relationships of "permission_audit_log" */
export type Permission_Audit_Log = {
  __typename?: 'permission_audit_log';
  /** Specific action taken on the resource */
  action: Scalars['String']['output'];
  /** Timestamp when the audit log entry was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique identifier for the audit log entry */
  id: Scalars['uuid']['output'];
  /** New state after the change */
  new_value?: Maybe<Scalars['jsonb']['output']>;
  /** Type of operation performed (create, read, update, delete) */
  operation: Scalars['String']['output'];
  /** An object relationship */
  performed_by_user?: Maybe<Users>;
  /** Previous state before the change */
  previous_value?: Maybe<Scalars['jsonb']['output']>;
  /** Reason provided for the permission change */
  reason?: Maybe<Scalars['String']['output']>;
  /** Resource that was accessed or modified */
  resource: Scalars['String']['output'];
  /** Role affected by the permission change */
  target_role?: Maybe<Scalars['user_role']['output']>;
  /** An object relationship */
  target_user?: Maybe<Users>;
  /** User affected by the permission change */
  target_user_id?: Maybe<Scalars['uuid']['output']>;
  /** User who performed the action */
  user_id?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "permission_audit_log" */
export type Permission_Audit_LogNew_ValueArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "permission_audit_log" */
export type Permission_Audit_LogPrevious_ValueArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "permission_audit_log" */
export type Permission_Audit_Log_Aggregate = {
  __typename?: 'permission_audit_log_aggregate';
  aggregate?: Maybe<Permission_Audit_Log_Aggregate_Fields>;
  nodes: Array<Permission_Audit_Log>;
};

export type Permission_Audit_Log_Aggregate_Bool_Exp = {
  count?: InputMaybe<Permission_Audit_Log_Aggregate_Bool_Exp_Count>;
};

export type Permission_Audit_Log_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Permission_Audit_Log_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Permission_Audit_Log_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "permission_audit_log" */
export type Permission_Audit_Log_Aggregate_Fields = {
  __typename?: 'permission_audit_log_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Permission_Audit_Log_Max_Fields>;
  min?: Maybe<Permission_Audit_Log_Min_Fields>;
};


/** aggregate fields of "permission_audit_log" */
export type Permission_Audit_Log_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Permission_Audit_Log_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "permission_audit_log" */
export type Permission_Audit_Log_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Permission_Audit_Log_Max_Order_By>;
  min?: InputMaybe<Permission_Audit_Log_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Permission_Audit_Log_Append_Input = {
  /** New state after the change */
  new_value?: InputMaybe<Scalars['jsonb']['input']>;
  /** Previous state before the change */
  previous_value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "permission_audit_log" */
export type Permission_Audit_Log_Arr_Rel_Insert_Input = {
  data: Array<Permission_Audit_Log_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Permission_Audit_Log_On_Conflict>;
};

/** Boolean expression to filter rows from the table "permission_audit_log". All fields are combined with a logical 'AND'. */
export type Permission_Audit_Log_Bool_Exp = {
  _and?: InputMaybe<Array<Permission_Audit_Log_Bool_Exp>>;
  _not?: InputMaybe<Permission_Audit_Log_Bool_Exp>;
  _or?: InputMaybe<Array<Permission_Audit_Log_Bool_Exp>>;
  action?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  new_value?: InputMaybe<Jsonb_Comparison_Exp>;
  operation?: InputMaybe<String_Comparison_Exp>;
  performed_by_user?: InputMaybe<Users_Bool_Exp>;
  previous_value?: InputMaybe<Jsonb_Comparison_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
  resource?: InputMaybe<String_Comparison_Exp>;
  target_role?: InputMaybe<User_Role_Comparison_Exp>;
  target_user?: InputMaybe<Users_Bool_Exp>;
  target_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "permission_audit_log" */
export enum Permission_Audit_Log_Constraint {
  /** unique or primary key constraint on columns "id" */
  PermissionAuditLogPkey = 'permission_audit_log_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Permission_Audit_Log_Delete_At_Path_Input = {
  /** New state after the change */
  new_value?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Previous state before the change */
  previous_value?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Permission_Audit_Log_Delete_Elem_Input = {
  /** New state after the change */
  new_value?: InputMaybe<Scalars['Int']['input']>;
  /** Previous state before the change */
  previous_value?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Permission_Audit_Log_Delete_Key_Input = {
  /** New state after the change */
  new_value?: InputMaybe<Scalars['String']['input']>;
  /** Previous state before the change */
  previous_value?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "permission_audit_log" */
export type Permission_Audit_Log_Insert_Input = {
  /** Specific action taken on the resource */
  action?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the audit log entry was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique identifier for the audit log entry */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** New state after the change */
  new_value?: InputMaybe<Scalars['jsonb']['input']>;
  /** Type of operation performed (create, read, update, delete) */
  operation?: InputMaybe<Scalars['String']['input']>;
  performed_by_user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** Previous state before the change */
  previous_value?: InputMaybe<Scalars['jsonb']['input']>;
  /** Reason provided for the permission change */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** Resource that was accessed or modified */
  resource?: InputMaybe<Scalars['String']['input']>;
  /** Role affected by the permission change */
  target_role?: InputMaybe<Scalars['user_role']['input']>;
  target_user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** User affected by the permission change */
  target_user_id?: InputMaybe<Scalars['uuid']['input']>;
  /** User who performed the action */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Permission_Audit_Log_Max_Fields = {
  __typename?: 'permission_audit_log_max_fields';
  /** Specific action taken on the resource */
  action?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the audit log entry was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique identifier for the audit log entry */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Type of operation performed (create, read, update, delete) */
  operation?: Maybe<Scalars['String']['output']>;
  /** Reason provided for the permission change */
  reason?: Maybe<Scalars['String']['output']>;
  /** Resource that was accessed or modified */
  resource?: Maybe<Scalars['String']['output']>;
  /** Role affected by the permission change */
  target_role?: Maybe<Scalars['user_role']['output']>;
  /** User affected by the permission change */
  target_user_id?: Maybe<Scalars['uuid']['output']>;
  /** User who performed the action */
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "permission_audit_log" */
export type Permission_Audit_Log_Max_Order_By = {
  /** Specific action taken on the resource */
  action?: InputMaybe<Order_By>;
  /** Timestamp when the audit log entry was created */
  created_at?: InputMaybe<Order_By>;
  /** Unique identifier for the audit log entry */
  id?: InputMaybe<Order_By>;
  /** Type of operation performed (create, read, update, delete) */
  operation?: InputMaybe<Order_By>;
  /** Reason provided for the permission change */
  reason?: InputMaybe<Order_By>;
  /** Resource that was accessed or modified */
  resource?: InputMaybe<Order_By>;
  /** Role affected by the permission change */
  target_role?: InputMaybe<Order_By>;
  /** User affected by the permission change */
  target_user_id?: InputMaybe<Order_By>;
  /** User who performed the action */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Permission_Audit_Log_Min_Fields = {
  __typename?: 'permission_audit_log_min_fields';
  /** Specific action taken on the resource */
  action?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the audit log entry was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique identifier for the audit log entry */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Type of operation performed (create, read, update, delete) */
  operation?: Maybe<Scalars['String']['output']>;
  /** Reason provided for the permission change */
  reason?: Maybe<Scalars['String']['output']>;
  /** Resource that was accessed or modified */
  resource?: Maybe<Scalars['String']['output']>;
  /** Role affected by the permission change */
  target_role?: Maybe<Scalars['user_role']['output']>;
  /** User affected by the permission change */
  target_user_id?: Maybe<Scalars['uuid']['output']>;
  /** User who performed the action */
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "permission_audit_log" */
export type Permission_Audit_Log_Min_Order_By = {
  /** Specific action taken on the resource */
  action?: InputMaybe<Order_By>;
  /** Timestamp when the audit log entry was created */
  created_at?: InputMaybe<Order_By>;
  /** Unique identifier for the audit log entry */
  id?: InputMaybe<Order_By>;
  /** Type of operation performed (create, read, update, delete) */
  operation?: InputMaybe<Order_By>;
  /** Reason provided for the permission change */
  reason?: InputMaybe<Order_By>;
  /** Resource that was accessed or modified */
  resource?: InputMaybe<Order_By>;
  /** Role affected by the permission change */
  target_role?: InputMaybe<Order_By>;
  /** User affected by the permission change */
  target_user_id?: InputMaybe<Order_By>;
  /** User who performed the action */
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "permission_audit_log" */
export type Permission_Audit_Log_Mutation_Response = {
  __typename?: 'permission_audit_log_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Permission_Audit_Log>;
};

/** on_conflict condition type for table "permission_audit_log" */
export type Permission_Audit_Log_On_Conflict = {
  constraint: Permission_Audit_Log_Constraint;
  update_columns?: Array<Permission_Audit_Log_Update_Column>;
  where?: InputMaybe<Permission_Audit_Log_Bool_Exp>;
};

/** Ordering options when selecting data from "permission_audit_log". */
export type Permission_Audit_Log_Order_By = {
  action?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  new_value?: InputMaybe<Order_By>;
  operation?: InputMaybe<Order_By>;
  performed_by_user?: InputMaybe<Users_Order_By>;
  previous_value?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  resource?: InputMaybe<Order_By>;
  target_role?: InputMaybe<Order_By>;
  target_user?: InputMaybe<Users_Order_By>;
  target_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: permission_audit_log */
export type Permission_Audit_Log_Pk_Columns_Input = {
  /** Unique identifier for the audit log entry */
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Permission_Audit_Log_Prepend_Input = {
  /** New state after the change */
  new_value?: InputMaybe<Scalars['jsonb']['input']>;
  /** Previous state before the change */
  previous_value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "permission_audit_log" */
export enum Permission_Audit_Log_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NewValue = 'new_value',
  /** column name */
  Operation = 'operation',
  /** column name */
  PreviousValue = 'previous_value',
  /** column name */
  Reason = 'reason',
  /** column name */
  Resource = 'resource',
  /** column name */
  TargetRole = 'target_role',
  /** column name */
  TargetUserId = 'target_user_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "permission_audit_log" */
export type Permission_Audit_Log_Set_Input = {
  /** Specific action taken on the resource */
  action?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the audit log entry was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique identifier for the audit log entry */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** New state after the change */
  new_value?: InputMaybe<Scalars['jsonb']['input']>;
  /** Type of operation performed (create, read, update, delete) */
  operation?: InputMaybe<Scalars['String']['input']>;
  /** Previous state before the change */
  previous_value?: InputMaybe<Scalars['jsonb']['input']>;
  /** Reason provided for the permission change */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** Resource that was accessed or modified */
  resource?: InputMaybe<Scalars['String']['input']>;
  /** Role affected by the permission change */
  target_role?: InputMaybe<Scalars['user_role']['input']>;
  /** User affected by the permission change */
  target_user_id?: InputMaybe<Scalars['uuid']['input']>;
  /** User who performed the action */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "permission_audit_log" */
export type Permission_Audit_Log_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Permission_Audit_Log_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Permission_Audit_Log_Stream_Cursor_Value_Input = {
  /** Specific action taken on the resource */
  action?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the audit log entry was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique identifier for the audit log entry */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** New state after the change */
  new_value?: InputMaybe<Scalars['jsonb']['input']>;
  /** Type of operation performed (create, read, update, delete) */
  operation?: InputMaybe<Scalars['String']['input']>;
  /** Previous state before the change */
  previous_value?: InputMaybe<Scalars['jsonb']['input']>;
  /** Reason provided for the permission change */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** Resource that was accessed or modified */
  resource?: InputMaybe<Scalars['String']['input']>;
  /** Role affected by the permission change */
  target_role?: InputMaybe<Scalars['user_role']['input']>;
  /** User affected by the permission change */
  target_user_id?: InputMaybe<Scalars['uuid']['input']>;
  /** User who performed the action */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "permission_audit_log" */
export enum Permission_Audit_Log_Update_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NewValue = 'new_value',
  /** column name */
  Operation = 'operation',
  /** column name */
  PreviousValue = 'previous_value',
  /** column name */
  Reason = 'reason',
  /** column name */
  Resource = 'resource',
  /** column name */
  TargetRole = 'target_role',
  /** column name */
  TargetUserId = 'target_user_id',
  /** column name */
  UserId = 'user_id'
}

export type Permission_Audit_Log_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Permission_Audit_Log_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Permission_Audit_Log_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Permission_Audit_Log_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Permission_Audit_Log_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Permission_Audit_Log_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Permission_Audit_Log_Set_Input>;
  /** filter the rows which have to be updated */
  where: Permission_Audit_Log_Bool_Exp;
};

/** columns and relationships of "permission_overrides" */
export type Permission_Overrides = {
  __typename?: 'permission_overrides';
  /** JSON with additional conditions for the override */
  conditions?: Maybe<Scalars['jsonb']['output']>;
  /** Timestamp when the override was created */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** User who created this override */
  created_by?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  created_by_user?: Maybe<Users>;
  /** Timestamp when this override expires */
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  /** Whether the permission is granted (true) or denied (false) */
  granted: Scalars['Boolean']['output'];
  /** Unique identifier for the permission override */
  id: Scalars['uuid']['output'];
  /** Operation being permitted or restricted */
  operation: Scalars['String']['output'];
  /** An object relationship */
  override_user?: Maybe<Users>;
  /** Resource affected by this override */
  resource: Scalars['String']['output'];
  /** Role this override applies to */
  role?: Maybe<Scalars['user_role']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  /** User receiving the permission override */
  user_id?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "permission_overrides" */
export type Permission_OverridesConditionsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "permission_overrides" */
export type Permission_Overrides_Aggregate = {
  __typename?: 'permission_overrides_aggregate';
  aggregate?: Maybe<Permission_Overrides_Aggregate_Fields>;
  nodes: Array<Permission_Overrides>;
};

export type Permission_Overrides_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Permission_Overrides_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Permission_Overrides_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Permission_Overrides_Aggregate_Bool_Exp_Count>;
};

export type Permission_Overrides_Aggregate_Bool_Exp_Bool_And = {
  arguments: Permission_Overrides_Select_Column_Permission_Overrides_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Permission_Overrides_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Permission_Overrides_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Permission_Overrides_Select_Column_Permission_Overrides_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Permission_Overrides_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Permission_Overrides_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Permission_Overrides_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Permission_Overrides_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "permission_overrides" */
export type Permission_Overrides_Aggregate_Fields = {
  __typename?: 'permission_overrides_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Permission_Overrides_Max_Fields>;
  min?: Maybe<Permission_Overrides_Min_Fields>;
};


/** aggregate fields of "permission_overrides" */
export type Permission_Overrides_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Permission_Overrides_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "permission_overrides" */
export type Permission_Overrides_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Permission_Overrides_Max_Order_By>;
  min?: InputMaybe<Permission_Overrides_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Permission_Overrides_Append_Input = {
  /** JSON with additional conditions for the override */
  conditions?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "permission_overrides" */
export type Permission_Overrides_Arr_Rel_Insert_Input = {
  data: Array<Permission_Overrides_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Permission_Overrides_On_Conflict>;
};

/** Boolean expression to filter rows from the table "permission_overrides". All fields are combined with a logical 'AND'. */
export type Permission_Overrides_Bool_Exp = {
  _and?: InputMaybe<Array<Permission_Overrides_Bool_Exp>>;
  _not?: InputMaybe<Permission_Overrides_Bool_Exp>;
  _or?: InputMaybe<Array<Permission_Overrides_Bool_Exp>>;
  conditions?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  created_by_user?: InputMaybe<Users_Bool_Exp>;
  expires_at?: InputMaybe<Timestamp_Comparison_Exp>;
  granted?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  operation?: InputMaybe<String_Comparison_Exp>;
  override_user?: InputMaybe<Users_Bool_Exp>;
  resource?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<User_Role_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "permission_overrides" */
export enum Permission_Overrides_Constraint {
  /** unique or primary key constraint on columns "id" */
  PermissionOverridesPkey = 'permission_overrides_pkey',
  /** unique or primary key constraint on columns "operation", "resource", "role" */
  UniqueRoleResourceOperation = 'unique_role_resource_operation',
  /** unique or primary key constraint on columns "operation", "user_id", "resource" */
  UniqueUserResourceOperation = 'unique_user_resource_operation'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Permission_Overrides_Delete_At_Path_Input = {
  /** JSON with additional conditions for the override */
  conditions?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Permission_Overrides_Delete_Elem_Input = {
  /** JSON with additional conditions for the override */
  conditions?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Permission_Overrides_Delete_Key_Input = {
  /** JSON with additional conditions for the override */
  conditions?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "permission_overrides" */
export type Permission_Overrides_Insert_Input = {
  /** JSON with additional conditions for the override */
  conditions?: InputMaybe<Scalars['jsonb']['input']>;
  /** Timestamp when the override was created */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** User who created this override */
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  created_by_user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** Timestamp when this override expires */
  expires_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Whether the permission is granted (true) or denied (false) */
  granted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Unique identifier for the permission override */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Operation being permitted or restricted */
  operation?: InputMaybe<Scalars['String']['input']>;
  override_user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** Resource affected by this override */
  resource?: InputMaybe<Scalars['String']['input']>;
  /** Role this override applies to */
  role?: InputMaybe<Scalars['user_role']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** User receiving the permission override */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Permission_Overrides_Max_Fields = {
  __typename?: 'permission_overrides_max_fields';
  /** Timestamp when the override was created */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** User who created this override */
  created_by?: Maybe<Scalars['uuid']['output']>;
  /** Timestamp when this override expires */
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  /** Unique identifier for the permission override */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Operation being permitted or restricted */
  operation?: Maybe<Scalars['String']['output']>;
  /** Resource affected by this override */
  resource?: Maybe<Scalars['String']['output']>;
  /** Role this override applies to */
  role?: Maybe<Scalars['user_role']['output']>;
  /** User receiving the permission override */
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "permission_overrides" */
export type Permission_Overrides_Max_Order_By = {
  /** Timestamp when the override was created */
  created_at?: InputMaybe<Order_By>;
  /** User who created this override */
  created_by?: InputMaybe<Order_By>;
  /** Timestamp when this override expires */
  expires_at?: InputMaybe<Order_By>;
  /** Unique identifier for the permission override */
  id?: InputMaybe<Order_By>;
  /** Operation being permitted or restricted */
  operation?: InputMaybe<Order_By>;
  /** Resource affected by this override */
  resource?: InputMaybe<Order_By>;
  /** Role this override applies to */
  role?: InputMaybe<Order_By>;
  /** User receiving the permission override */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Permission_Overrides_Min_Fields = {
  __typename?: 'permission_overrides_min_fields';
  /** Timestamp when the override was created */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** User who created this override */
  created_by?: Maybe<Scalars['uuid']['output']>;
  /** Timestamp when this override expires */
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  /** Unique identifier for the permission override */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Operation being permitted or restricted */
  operation?: Maybe<Scalars['String']['output']>;
  /** Resource affected by this override */
  resource?: Maybe<Scalars['String']['output']>;
  /** Role this override applies to */
  role?: Maybe<Scalars['user_role']['output']>;
  /** User receiving the permission override */
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "permission_overrides" */
export type Permission_Overrides_Min_Order_By = {
  /** Timestamp when the override was created */
  created_at?: InputMaybe<Order_By>;
  /** User who created this override */
  created_by?: InputMaybe<Order_By>;
  /** Timestamp when this override expires */
  expires_at?: InputMaybe<Order_By>;
  /** Unique identifier for the permission override */
  id?: InputMaybe<Order_By>;
  /** Operation being permitted or restricted */
  operation?: InputMaybe<Order_By>;
  /** Resource affected by this override */
  resource?: InputMaybe<Order_By>;
  /** Role this override applies to */
  role?: InputMaybe<Order_By>;
  /** User receiving the permission override */
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "permission_overrides" */
export type Permission_Overrides_Mutation_Response = {
  __typename?: 'permission_overrides_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Permission_Overrides>;
};

/** on_conflict condition type for table "permission_overrides" */
export type Permission_Overrides_On_Conflict = {
  constraint: Permission_Overrides_Constraint;
  update_columns?: Array<Permission_Overrides_Update_Column>;
  where?: InputMaybe<Permission_Overrides_Bool_Exp>;
};

/** Ordering options when selecting data from "permission_overrides". */
export type Permission_Overrides_Order_By = {
  conditions?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  created_by_user?: InputMaybe<Users_Order_By>;
  expires_at?: InputMaybe<Order_By>;
  granted?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  operation?: InputMaybe<Order_By>;
  override_user?: InputMaybe<Users_Order_By>;
  resource?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: permission_overrides */
export type Permission_Overrides_Pk_Columns_Input = {
  /** Unique identifier for the permission override */
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Permission_Overrides_Prepend_Input = {
  /** JSON with additional conditions for the override */
  conditions?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "permission_overrides" */
export enum Permission_Overrides_Select_Column {
  /** column name */
  Conditions = 'conditions',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Granted = 'granted',
  /** column name */
  Id = 'id',
  /** column name */
  Operation = 'operation',
  /** column name */
  Resource = 'resource',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id'
}

/** select "permission_overrides_aggregate_bool_exp_bool_and_arguments_columns" columns of table "permission_overrides" */
export enum Permission_Overrides_Select_Column_Permission_Overrides_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Granted = 'granted'
}

/** select "permission_overrides_aggregate_bool_exp_bool_or_arguments_columns" columns of table "permission_overrides" */
export enum Permission_Overrides_Select_Column_Permission_Overrides_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Granted = 'granted'
}

/** input type for updating data in table "permission_overrides" */
export type Permission_Overrides_Set_Input = {
  /** JSON with additional conditions for the override */
  conditions?: InputMaybe<Scalars['jsonb']['input']>;
  /** Timestamp when the override was created */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** User who created this override */
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  /** Timestamp when this override expires */
  expires_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Whether the permission is granted (true) or denied (false) */
  granted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Unique identifier for the permission override */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Operation being permitted or restricted */
  operation?: InputMaybe<Scalars['String']['input']>;
  /** Resource affected by this override */
  resource?: InputMaybe<Scalars['String']['input']>;
  /** Role this override applies to */
  role?: InputMaybe<Scalars['user_role']['input']>;
  /** User receiving the permission override */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "permission_overrides" */
export type Permission_Overrides_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Permission_Overrides_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Permission_Overrides_Stream_Cursor_Value_Input = {
  /** JSON with additional conditions for the override */
  conditions?: InputMaybe<Scalars['jsonb']['input']>;
  /** Timestamp when the override was created */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** User who created this override */
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  /** Timestamp when this override expires */
  expires_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Whether the permission is granted (true) or denied (false) */
  granted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Unique identifier for the permission override */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Operation being permitted or restricted */
  operation?: InputMaybe<Scalars['String']['input']>;
  /** Resource affected by this override */
  resource?: InputMaybe<Scalars['String']['input']>;
  /** Role this override applies to */
  role?: InputMaybe<Scalars['user_role']['input']>;
  /** User receiving the permission override */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "permission_overrides" */
export enum Permission_Overrides_Update_Column {
  /** column name */
  Conditions = 'conditions',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Granted = 'granted',
  /** column name */
  Id = 'id',
  /** column name */
  Operation = 'operation',
  /** column name */
  Resource = 'resource',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id'
}

export type Permission_Overrides_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Permission_Overrides_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Permission_Overrides_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Permission_Overrides_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Permission_Overrides_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Permission_Overrides_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Permission_Overrides_Set_Input>;
  /** filter the rows which have to be updated */
  where: Permission_Overrides_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** query _Entity union */
  _entities?: Maybe<_Entity>;
  _service: _Service;
  /** An array relationship */
  adjustment_rules: Array<Adjustment_Rules>;
  /** An aggregate relationship */
  adjustment_rules_aggregate: Adjustment_Rules_Aggregate;
  /** fetch data from the table: "adjustment_rules" using primary key columns */
  adjustment_rules_by_pk?: Maybe<Adjustment_Rules>;
  /** fetch data from the table: "app_settings" */
  app_settings: Array<App_Settings>;
  /** fetch aggregated fields from the table: "app_settings" */
  app_settings_aggregate: App_Settings_Aggregate;
  /** fetch data from the table: "app_settings" using primary key columns */
  app_settings_by_pk?: Maybe<App_Settings>;
  /** An array relationship */
  client_external_systems: Array<Client_External_Systems>;
  /** An aggregate relationship */
  client_external_systems_aggregate: Client_External_Systems_Aggregate;
  /** fetch data from the table: "client_external_systems" using primary key columns */
  client_external_systems_by_pk?: Maybe<Client_External_Systems>;
  /** fetch data from the table: "clients" */
  clients: Array<Clients>;
  /** fetch aggregated fields from the table: "clients" */
  clients_aggregate: Clients_Aggregate;
  /** fetch data from the table: "clients" using primary key columns */
  clients_by_pk?: Maybe<Clients>;
  /** fetch data from the table: "external_systems" */
  external_systems: Array<External_Systems>;
  /** fetch aggregated fields from the table: "external_systems" */
  external_systems_aggregate: External_Systems_Aggregate;
  /** fetch data from the table: "external_systems" using primary key columns */
  external_systems_by_pk?: Maybe<External_Systems>;
  /** fetch data from the table: "feature_flags" */
  feature_flags: Array<Feature_Flags>;
  /** fetch aggregated fields from the table: "feature_flags" */
  feature_flags_aggregate: Feature_Flags_Aggregate;
  /** fetch data from the table: "feature_flags" using primary key columns */
  feature_flags_by_pk?: Maybe<Feature_Flags>;
  /** execute function "generate_payroll_dates" which returns "payroll_dates" */
  generate_payroll_dates: Array<Payroll_Dates>;
  /** execute function "generate_payroll_dates" and query aggregates on result of table type "payroll_dates" */
  generate_payroll_dates_aggregate: Payroll_Dates_Aggregate;
  /** fetch data from the table: "holidays" */
  holidays: Array<Holidays>;
  /** fetch aggregated fields from the table: "holidays" */
  holidays_aggregate: Holidays_Aggregate;
  /** fetch data from the table: "holidays" using primary key columns */
  holidays_by_pk?: Maybe<Holidays>;
  /** fetch data from the table: "leave" */
  leave: Array<Leave>;
  /** fetch aggregated fields from the table: "leave" */
  leave_aggregate: Leave_Aggregate;
  /** fetch data from the table: "leave" using primary key columns */
  leave_by_pk?: Maybe<Leave>;
  /** fetch data from the table: "neon_auth.users_sync" */
  neon_auth_users_sync: Array<Neon_Auth_Users_Sync>;
  /** fetch aggregated fields from the table: "neon_auth.users_sync" */
  neon_auth_users_sync_aggregate: Neon_Auth_Users_Sync_Aggregate;
  /** fetch data from the table: "neon_auth.users_sync" using primary key columns */
  neon_auth_users_sync_by_pk?: Maybe<Neon_Auth_Users_Sync>;
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** fetch aggregated fields from the table: "notes" */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** fetch data from the table: "payroll_cycles" */
  payroll_cycles: Array<Payroll_Cycles>;
  /** fetch aggregated fields from the table: "payroll_cycles" */
  payroll_cycles_aggregate: Payroll_Cycles_Aggregate;
  /** fetch data from the table: "payroll_cycles" using primary key columns */
  payroll_cycles_by_pk?: Maybe<Payroll_Cycles>;
  /** fetch data from the table: "payroll_date_types" */
  payroll_date_types: Array<Payroll_Date_Types>;
  /** fetch aggregated fields from the table: "payroll_date_types" */
  payroll_date_types_aggregate: Payroll_Date_Types_Aggregate;
  /** fetch data from the table: "payroll_date_types" using primary key columns */
  payroll_date_types_by_pk?: Maybe<Payroll_Date_Types>;
  /** An array relationship */
  payroll_dates: Array<Payroll_Dates>;
  /** An aggregate relationship */
  payroll_dates_aggregate: Payroll_Dates_Aggregate;
  /** fetch data from the table: "payroll_dates" using primary key columns */
  payroll_dates_by_pk?: Maybe<Payroll_Dates>;
  /** An array relationship */
  payrolls: Array<Payrolls>;
  /** An aggregate relationship */
  payrolls_aggregate: Payrolls_Aggregate;
  /** fetch data from the table: "payrolls" using primary key columns */
  payrolls_by_pk?: Maybe<Payrolls>;
  /** fetch data from the table: "permission_audit_log" */
  permission_audit_log: Array<Permission_Audit_Log>;
  /** fetch aggregated fields from the table: "permission_audit_log" */
  permission_audit_log_aggregate: Permission_Audit_Log_Aggregate;
  /** fetch data from the table: "permission_audit_log" using primary key columns */
  permission_audit_log_by_pk?: Maybe<Permission_Audit_Log>;
  /** fetch data from the table: "permission_overrides" */
  permission_overrides: Array<Permission_Overrides>;
  /** fetch aggregated fields from the table: "permission_overrides" */
  permission_overrides_aggregate: Permission_Overrides_Aggregate;
  /** fetch data from the table: "permission_overrides" using primary key columns */
  permission_overrides_by_pk?: Maybe<Permission_Overrides>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "work_schedule" */
  work_schedule: Array<Work_Schedule>;
  /** fetch aggregated fields from the table: "work_schedule" */
  work_schedule_aggregate: Work_Schedule_Aggregate;
  /** fetch data from the table: "work_schedule" using primary key columns */
  work_schedule_by_pk?: Maybe<Work_Schedule>;
};


export type Query_Root_EntitiesArgs = {
  representations: Array<Scalars['_Any']['input']>;
};


export type Query_RootAdjustment_RulesArgs = {
  distinct_on?: InputMaybe<Array<Adjustment_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Adjustment_Rules_Order_By>>;
  where?: InputMaybe<Adjustment_Rules_Bool_Exp>;
};


export type Query_RootAdjustment_Rules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Adjustment_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Adjustment_Rules_Order_By>>;
  where?: InputMaybe<Adjustment_Rules_Bool_Exp>;
};


export type Query_RootAdjustment_Rules_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootApp_SettingsArgs = {
  distinct_on?: InputMaybe<Array<App_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<App_Settings_Order_By>>;
  where?: InputMaybe<App_Settings_Bool_Exp>;
};


export type Query_RootApp_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<App_Settings_Order_By>>;
  where?: InputMaybe<App_Settings_Bool_Exp>;
};


export type Query_RootApp_Settings_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootClient_External_SystemsArgs = {
  distinct_on?: InputMaybe<Array<Client_External_Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_External_Systems_Order_By>>;
  where?: InputMaybe<Client_External_Systems_Bool_Exp>;
};


export type Query_RootClient_External_Systems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_External_Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_External_Systems_Order_By>>;
  where?: InputMaybe<Client_External_Systems_Bool_Exp>;
};


export type Query_RootClient_External_Systems_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootClientsArgs = {
  distinct_on?: InputMaybe<Array<Clients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clients_Order_By>>;
  where?: InputMaybe<Clients_Bool_Exp>;
};


export type Query_RootClients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Clients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clients_Order_By>>;
  where?: InputMaybe<Clients_Bool_Exp>;
};


export type Query_RootClients_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootExternal_SystemsArgs = {
  distinct_on?: InputMaybe<Array<External_Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Systems_Order_By>>;
  where?: InputMaybe<External_Systems_Bool_Exp>;
};


export type Query_RootExternal_Systems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<External_Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Systems_Order_By>>;
  where?: InputMaybe<External_Systems_Bool_Exp>;
};


export type Query_RootExternal_Systems_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFeature_FlagsArgs = {
  distinct_on?: InputMaybe<Array<Feature_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Flags_Order_By>>;
  where?: InputMaybe<Feature_Flags_Bool_Exp>;
};


export type Query_RootFeature_Flags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feature_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Flags_Order_By>>;
  where?: InputMaybe<Feature_Flags_Bool_Exp>;
};


export type Query_RootFeature_Flags_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGenerate_Payroll_DatesArgs = {
  args: Generate_Payroll_Dates_Args;
  distinct_on?: InputMaybe<Array<Payroll_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Dates_Order_By>>;
  where?: InputMaybe<Payroll_Dates_Bool_Exp>;
};


export type Query_RootGenerate_Payroll_Dates_AggregateArgs = {
  args: Generate_Payroll_Dates_Args;
  distinct_on?: InputMaybe<Array<Payroll_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Dates_Order_By>>;
  where?: InputMaybe<Payroll_Dates_Bool_Exp>;
};


export type Query_RootHolidaysArgs = {
  distinct_on?: InputMaybe<Array<Holidays_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Holidays_Order_By>>;
  where?: InputMaybe<Holidays_Bool_Exp>;
};


export type Query_RootHolidays_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Holidays_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Holidays_Order_By>>;
  where?: InputMaybe<Holidays_Bool_Exp>;
};


export type Query_RootHolidays_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLeaveArgs = {
  distinct_on?: InputMaybe<Array<Leave_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Order_By>>;
  where?: InputMaybe<Leave_Bool_Exp>;
};


export type Query_RootLeave_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Leave_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Order_By>>;
  where?: InputMaybe<Leave_Bool_Exp>;
};


export type Query_RootLeave_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNeon_Auth_Users_SyncArgs = {
  distinct_on?: InputMaybe<Array<Neon_Auth_Users_Sync_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Neon_Auth_Users_Sync_Order_By>>;
  where?: InputMaybe<Neon_Auth_Users_Sync_Bool_Exp>;
};


export type Query_RootNeon_Auth_Users_Sync_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Neon_Auth_Users_Sync_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Neon_Auth_Users_Sync_Order_By>>;
  where?: InputMaybe<Neon_Auth_Users_Sync_Bool_Exp>;
};


export type Query_RootNeon_Auth_Users_Sync_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootNotesArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPayroll_CyclesArgs = {
  distinct_on?: InputMaybe<Array<Payroll_Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Cycles_Order_By>>;
  where?: InputMaybe<Payroll_Cycles_Bool_Exp>;
};


export type Query_RootPayroll_Cycles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payroll_Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Cycles_Order_By>>;
  where?: InputMaybe<Payroll_Cycles_Bool_Exp>;
};


export type Query_RootPayroll_Cycles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPayroll_Date_TypesArgs = {
  distinct_on?: InputMaybe<Array<Payroll_Date_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Date_Types_Order_By>>;
  where?: InputMaybe<Payroll_Date_Types_Bool_Exp>;
};


export type Query_RootPayroll_Date_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payroll_Date_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Date_Types_Order_By>>;
  where?: InputMaybe<Payroll_Date_Types_Bool_Exp>;
};


export type Query_RootPayroll_Date_Types_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPayroll_DatesArgs = {
  distinct_on?: InputMaybe<Array<Payroll_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Dates_Order_By>>;
  where?: InputMaybe<Payroll_Dates_Bool_Exp>;
};


export type Query_RootPayroll_Dates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payroll_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Dates_Order_By>>;
  where?: InputMaybe<Payroll_Dates_Bool_Exp>;
};


export type Query_RootPayroll_Dates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPayrollsArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


export type Query_RootPayrolls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


export type Query_RootPayrolls_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPermission_Audit_LogArgs = {
  distinct_on?: InputMaybe<Array<Permission_Audit_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Audit_Log_Order_By>>;
  where?: InputMaybe<Permission_Audit_Log_Bool_Exp>;
};


export type Query_RootPermission_Audit_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Audit_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Audit_Log_Order_By>>;
  where?: InputMaybe<Permission_Audit_Log_Bool_Exp>;
};


export type Query_RootPermission_Audit_Log_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPermission_OverridesArgs = {
  distinct_on?: InputMaybe<Array<Permission_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Overrides_Order_By>>;
  where?: InputMaybe<Permission_Overrides_Bool_Exp>;
};


export type Query_RootPermission_Overrides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Overrides_Order_By>>;
  where?: InputMaybe<Permission_Overrides_Bool_Exp>;
};


export type Query_RootPermission_Overrides_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWork_ScheduleArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_Schedule_Order_By>>;
  where?: InputMaybe<Work_Schedule_Bool_Exp>;
};


export type Query_RootWork_Schedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_Schedule_Order_By>>;
  where?: InputMaybe<Work_Schedule_Bool_Exp>;
};


export type Query_RootWork_Schedule_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  adjustment_rules: Array<Adjustment_Rules>;
  /** An aggregate relationship */
  adjustment_rules_aggregate: Adjustment_Rules_Aggregate;
  /** fetch data from the table: "adjustment_rules" using primary key columns */
  adjustment_rules_by_pk?: Maybe<Adjustment_Rules>;
  /** fetch data from the table in a streaming manner: "adjustment_rules" */
  adjustment_rules_stream: Array<Adjustment_Rules>;
  /** fetch data from the table: "app_settings" */
  app_settings: Array<App_Settings>;
  /** fetch aggregated fields from the table: "app_settings" */
  app_settings_aggregate: App_Settings_Aggregate;
  /** fetch data from the table: "app_settings" using primary key columns */
  app_settings_by_pk?: Maybe<App_Settings>;
  /** fetch data from the table in a streaming manner: "app_settings" */
  app_settings_stream: Array<App_Settings>;
  /** An array relationship */
  client_external_systems: Array<Client_External_Systems>;
  /** An aggregate relationship */
  client_external_systems_aggregate: Client_External_Systems_Aggregate;
  /** fetch data from the table: "client_external_systems" using primary key columns */
  client_external_systems_by_pk?: Maybe<Client_External_Systems>;
  /** fetch data from the table in a streaming manner: "client_external_systems" */
  client_external_systems_stream: Array<Client_External_Systems>;
  /** fetch data from the table: "clients" */
  clients: Array<Clients>;
  /** fetch aggregated fields from the table: "clients" */
  clients_aggregate: Clients_Aggregate;
  /** fetch data from the table: "clients" using primary key columns */
  clients_by_pk?: Maybe<Clients>;
  /** fetch data from the table in a streaming manner: "clients" */
  clients_stream: Array<Clients>;
  /** fetch data from the table: "external_systems" */
  external_systems: Array<External_Systems>;
  /** fetch aggregated fields from the table: "external_systems" */
  external_systems_aggregate: External_Systems_Aggregate;
  /** fetch data from the table: "external_systems" using primary key columns */
  external_systems_by_pk?: Maybe<External_Systems>;
  /** fetch data from the table in a streaming manner: "external_systems" */
  external_systems_stream: Array<External_Systems>;
  /** fetch data from the table: "feature_flags" */
  feature_flags: Array<Feature_Flags>;
  /** fetch aggregated fields from the table: "feature_flags" */
  feature_flags_aggregate: Feature_Flags_Aggregate;
  /** fetch data from the table: "feature_flags" using primary key columns */
  feature_flags_by_pk?: Maybe<Feature_Flags>;
  /** fetch data from the table in a streaming manner: "feature_flags" */
  feature_flags_stream: Array<Feature_Flags>;
  /** execute function "generate_payroll_dates" which returns "payroll_dates" */
  generate_payroll_dates: Array<Payroll_Dates>;
  /** execute function "generate_payroll_dates" and query aggregates on result of table type "payroll_dates" */
  generate_payroll_dates_aggregate: Payroll_Dates_Aggregate;
  /** fetch data from the table: "holidays" */
  holidays: Array<Holidays>;
  /** fetch aggregated fields from the table: "holidays" */
  holidays_aggregate: Holidays_Aggregate;
  /** fetch data from the table: "holidays" using primary key columns */
  holidays_by_pk?: Maybe<Holidays>;
  /** fetch data from the table in a streaming manner: "holidays" */
  holidays_stream: Array<Holidays>;
  /** fetch data from the table: "leave" */
  leave: Array<Leave>;
  /** fetch aggregated fields from the table: "leave" */
  leave_aggregate: Leave_Aggregate;
  /** fetch data from the table: "leave" using primary key columns */
  leave_by_pk?: Maybe<Leave>;
  /** fetch data from the table in a streaming manner: "leave" */
  leave_stream: Array<Leave>;
  /** fetch data from the table: "neon_auth.users_sync" */
  neon_auth_users_sync: Array<Neon_Auth_Users_Sync>;
  /** fetch aggregated fields from the table: "neon_auth.users_sync" */
  neon_auth_users_sync_aggregate: Neon_Auth_Users_Sync_Aggregate;
  /** fetch data from the table: "neon_auth.users_sync" using primary key columns */
  neon_auth_users_sync_by_pk?: Maybe<Neon_Auth_Users_Sync>;
  /** fetch data from the table in a streaming manner: "neon_auth.users_sync" */
  neon_auth_users_sync_stream: Array<Neon_Auth_Users_Sync>;
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** fetch aggregated fields from the table: "notes" */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** fetch data from the table in a streaming manner: "notes" */
  notes_stream: Array<Notes>;
  /** fetch data from the table: "payroll_cycles" */
  payroll_cycles: Array<Payroll_Cycles>;
  /** fetch aggregated fields from the table: "payroll_cycles" */
  payroll_cycles_aggregate: Payroll_Cycles_Aggregate;
  /** fetch data from the table: "payroll_cycles" using primary key columns */
  payroll_cycles_by_pk?: Maybe<Payroll_Cycles>;
  /** fetch data from the table in a streaming manner: "payroll_cycles" */
  payroll_cycles_stream: Array<Payroll_Cycles>;
  /** fetch data from the table: "payroll_date_types" */
  payroll_date_types: Array<Payroll_Date_Types>;
  /** fetch aggregated fields from the table: "payroll_date_types" */
  payroll_date_types_aggregate: Payroll_Date_Types_Aggregate;
  /** fetch data from the table: "payroll_date_types" using primary key columns */
  payroll_date_types_by_pk?: Maybe<Payroll_Date_Types>;
  /** fetch data from the table in a streaming manner: "payroll_date_types" */
  payroll_date_types_stream: Array<Payroll_Date_Types>;
  /** An array relationship */
  payroll_dates: Array<Payroll_Dates>;
  /** An aggregate relationship */
  payroll_dates_aggregate: Payroll_Dates_Aggregate;
  /** fetch data from the table: "payroll_dates" using primary key columns */
  payroll_dates_by_pk?: Maybe<Payroll_Dates>;
  /** fetch data from the table in a streaming manner: "payroll_dates" */
  payroll_dates_stream: Array<Payroll_Dates>;
  /** An array relationship */
  payrolls: Array<Payrolls>;
  /** An aggregate relationship */
  payrolls_aggregate: Payrolls_Aggregate;
  /** fetch data from the table: "payrolls" using primary key columns */
  payrolls_by_pk?: Maybe<Payrolls>;
  /** fetch data from the table in a streaming manner: "payrolls" */
  payrolls_stream: Array<Payrolls>;
  /** fetch data from the table: "permission_audit_log" */
  permission_audit_log: Array<Permission_Audit_Log>;
  /** fetch aggregated fields from the table: "permission_audit_log" */
  permission_audit_log_aggregate: Permission_Audit_Log_Aggregate;
  /** fetch data from the table: "permission_audit_log" using primary key columns */
  permission_audit_log_by_pk?: Maybe<Permission_Audit_Log>;
  /** fetch data from the table in a streaming manner: "permission_audit_log" */
  permission_audit_log_stream: Array<Permission_Audit_Log>;
  /** fetch data from the table: "permission_overrides" */
  permission_overrides: Array<Permission_Overrides>;
  /** fetch aggregated fields from the table: "permission_overrides" */
  permission_overrides_aggregate: Permission_Overrides_Aggregate;
  /** fetch data from the table: "permission_overrides" using primary key columns */
  permission_overrides_by_pk?: Maybe<Permission_Overrides>;
  /** fetch data from the table in a streaming manner: "permission_overrides" */
  permission_overrides_stream: Array<Permission_Overrides>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "work_schedule" */
  work_schedule: Array<Work_Schedule>;
  /** fetch aggregated fields from the table: "work_schedule" */
  work_schedule_aggregate: Work_Schedule_Aggregate;
  /** fetch data from the table: "work_schedule" using primary key columns */
  work_schedule_by_pk?: Maybe<Work_Schedule>;
  /** fetch data from the table in a streaming manner: "work_schedule" */
  work_schedule_stream: Array<Work_Schedule>;
};


export type Subscription_RootAdjustment_RulesArgs = {
  distinct_on?: InputMaybe<Array<Adjustment_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Adjustment_Rules_Order_By>>;
  where?: InputMaybe<Adjustment_Rules_Bool_Exp>;
};


export type Subscription_RootAdjustment_Rules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Adjustment_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Adjustment_Rules_Order_By>>;
  where?: InputMaybe<Adjustment_Rules_Bool_Exp>;
};


export type Subscription_RootAdjustment_Rules_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAdjustment_Rules_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Adjustment_Rules_Stream_Cursor_Input>>;
  where?: InputMaybe<Adjustment_Rules_Bool_Exp>;
};


export type Subscription_RootApp_SettingsArgs = {
  distinct_on?: InputMaybe<Array<App_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<App_Settings_Order_By>>;
  where?: InputMaybe<App_Settings_Bool_Exp>;
};


export type Subscription_RootApp_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<App_Settings_Order_By>>;
  where?: InputMaybe<App_Settings_Bool_Exp>;
};


export type Subscription_RootApp_Settings_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootApp_Settings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<App_Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<App_Settings_Bool_Exp>;
};


export type Subscription_RootClient_External_SystemsArgs = {
  distinct_on?: InputMaybe<Array<Client_External_Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_External_Systems_Order_By>>;
  where?: InputMaybe<Client_External_Systems_Bool_Exp>;
};


export type Subscription_RootClient_External_Systems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_External_Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_External_Systems_Order_By>>;
  where?: InputMaybe<Client_External_Systems_Bool_Exp>;
};


export type Subscription_RootClient_External_Systems_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClient_External_Systems_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Client_External_Systems_Stream_Cursor_Input>>;
  where?: InputMaybe<Client_External_Systems_Bool_Exp>;
};


export type Subscription_RootClientsArgs = {
  distinct_on?: InputMaybe<Array<Clients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clients_Order_By>>;
  where?: InputMaybe<Clients_Bool_Exp>;
};


export type Subscription_RootClients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Clients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clients_Order_By>>;
  where?: InputMaybe<Clients_Bool_Exp>;
};


export type Subscription_RootClients_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClients_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Clients_Stream_Cursor_Input>>;
  where?: InputMaybe<Clients_Bool_Exp>;
};


export type Subscription_RootExternal_SystemsArgs = {
  distinct_on?: InputMaybe<Array<External_Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Systems_Order_By>>;
  where?: InputMaybe<External_Systems_Bool_Exp>;
};


export type Subscription_RootExternal_Systems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<External_Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Systems_Order_By>>;
  where?: InputMaybe<External_Systems_Bool_Exp>;
};


export type Subscription_RootExternal_Systems_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootExternal_Systems_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<External_Systems_Stream_Cursor_Input>>;
  where?: InputMaybe<External_Systems_Bool_Exp>;
};


export type Subscription_RootFeature_FlagsArgs = {
  distinct_on?: InputMaybe<Array<Feature_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Flags_Order_By>>;
  where?: InputMaybe<Feature_Flags_Bool_Exp>;
};


export type Subscription_RootFeature_Flags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feature_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Flags_Order_By>>;
  where?: InputMaybe<Feature_Flags_Bool_Exp>;
};


export type Subscription_RootFeature_Flags_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFeature_Flags_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Feature_Flags_Stream_Cursor_Input>>;
  where?: InputMaybe<Feature_Flags_Bool_Exp>;
};


export type Subscription_RootGenerate_Payroll_DatesArgs = {
  args: Generate_Payroll_Dates_Args;
  distinct_on?: InputMaybe<Array<Payroll_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Dates_Order_By>>;
  where?: InputMaybe<Payroll_Dates_Bool_Exp>;
};


export type Subscription_RootGenerate_Payroll_Dates_AggregateArgs = {
  args: Generate_Payroll_Dates_Args;
  distinct_on?: InputMaybe<Array<Payroll_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Dates_Order_By>>;
  where?: InputMaybe<Payroll_Dates_Bool_Exp>;
};


export type Subscription_RootHolidaysArgs = {
  distinct_on?: InputMaybe<Array<Holidays_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Holidays_Order_By>>;
  where?: InputMaybe<Holidays_Bool_Exp>;
};


export type Subscription_RootHolidays_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Holidays_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Holidays_Order_By>>;
  where?: InputMaybe<Holidays_Bool_Exp>;
};


export type Subscription_RootHolidays_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootHolidays_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Holidays_Stream_Cursor_Input>>;
  where?: InputMaybe<Holidays_Bool_Exp>;
};


export type Subscription_RootLeaveArgs = {
  distinct_on?: InputMaybe<Array<Leave_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Order_By>>;
  where?: InputMaybe<Leave_Bool_Exp>;
};


export type Subscription_RootLeave_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Leave_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Order_By>>;
  where?: InputMaybe<Leave_Bool_Exp>;
};


export type Subscription_RootLeave_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLeave_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Leave_Stream_Cursor_Input>>;
  where?: InputMaybe<Leave_Bool_Exp>;
};


export type Subscription_RootNeon_Auth_Users_SyncArgs = {
  distinct_on?: InputMaybe<Array<Neon_Auth_Users_Sync_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Neon_Auth_Users_Sync_Order_By>>;
  where?: InputMaybe<Neon_Auth_Users_Sync_Bool_Exp>;
};


export type Subscription_RootNeon_Auth_Users_Sync_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Neon_Auth_Users_Sync_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Neon_Auth_Users_Sync_Order_By>>;
  where?: InputMaybe<Neon_Auth_Users_Sync_Bool_Exp>;
};


export type Subscription_RootNeon_Auth_Users_Sync_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootNeon_Auth_Users_Sync_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Neon_Auth_Users_Sync_Stream_Cursor_Input>>;
  where?: InputMaybe<Neon_Auth_Users_Sync_Bool_Exp>;
};


export type Subscription_RootNotesArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNotes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notes_Stream_Cursor_Input>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Subscription_RootPayroll_CyclesArgs = {
  distinct_on?: InputMaybe<Array<Payroll_Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Cycles_Order_By>>;
  where?: InputMaybe<Payroll_Cycles_Bool_Exp>;
};


export type Subscription_RootPayroll_Cycles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payroll_Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Cycles_Order_By>>;
  where?: InputMaybe<Payroll_Cycles_Bool_Exp>;
};


export type Subscription_RootPayroll_Cycles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPayroll_Cycles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payroll_Cycles_Stream_Cursor_Input>>;
  where?: InputMaybe<Payroll_Cycles_Bool_Exp>;
};


export type Subscription_RootPayroll_Date_TypesArgs = {
  distinct_on?: InputMaybe<Array<Payroll_Date_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Date_Types_Order_By>>;
  where?: InputMaybe<Payroll_Date_Types_Bool_Exp>;
};


export type Subscription_RootPayroll_Date_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payroll_Date_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Date_Types_Order_By>>;
  where?: InputMaybe<Payroll_Date_Types_Bool_Exp>;
};


export type Subscription_RootPayroll_Date_Types_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPayroll_Date_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payroll_Date_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Payroll_Date_Types_Bool_Exp>;
};


export type Subscription_RootPayroll_DatesArgs = {
  distinct_on?: InputMaybe<Array<Payroll_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Dates_Order_By>>;
  where?: InputMaybe<Payroll_Dates_Bool_Exp>;
};


export type Subscription_RootPayroll_Dates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payroll_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payroll_Dates_Order_By>>;
  where?: InputMaybe<Payroll_Dates_Bool_Exp>;
};


export type Subscription_RootPayroll_Dates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPayroll_Dates_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payroll_Dates_Stream_Cursor_Input>>;
  where?: InputMaybe<Payroll_Dates_Bool_Exp>;
};


export type Subscription_RootPayrollsArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


export type Subscription_RootPayrolls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


export type Subscription_RootPayrolls_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPayrolls_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payrolls_Stream_Cursor_Input>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


export type Subscription_RootPermission_Audit_LogArgs = {
  distinct_on?: InputMaybe<Array<Permission_Audit_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Audit_Log_Order_By>>;
  where?: InputMaybe<Permission_Audit_Log_Bool_Exp>;
};


export type Subscription_RootPermission_Audit_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Audit_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Audit_Log_Order_By>>;
  where?: InputMaybe<Permission_Audit_Log_Bool_Exp>;
};


export type Subscription_RootPermission_Audit_Log_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPermission_Audit_Log_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Permission_Audit_Log_Stream_Cursor_Input>>;
  where?: InputMaybe<Permission_Audit_Log_Bool_Exp>;
};


export type Subscription_RootPermission_OverridesArgs = {
  distinct_on?: InputMaybe<Array<Permission_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Overrides_Order_By>>;
  where?: InputMaybe<Permission_Overrides_Bool_Exp>;
};


export type Subscription_RootPermission_Overrides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Overrides_Order_By>>;
  where?: InputMaybe<Permission_Overrides_Bool_Exp>;
};


export type Subscription_RootPermission_Overrides_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPermission_Overrides_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Permission_Overrides_Stream_Cursor_Input>>;
  where?: InputMaybe<Permission_Overrides_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootWork_ScheduleArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_Schedule_Order_By>>;
  where?: InputMaybe<Work_Schedule_Bool_Exp>;
};


export type Subscription_RootWork_Schedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_Schedule_Order_By>>;
  where?: InputMaybe<Work_Schedule_Bool_Exp>;
};


export type Subscription_RootWork_Schedule_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWork_Schedule_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Work_Schedule_Stream_Cursor_Input>>;
  where?: InputMaybe<Work_Schedule_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "user_role". All fields are combined with logical 'AND'. */
export type User_Role_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['user_role']['input']>;
  _gt?: InputMaybe<Scalars['user_role']['input']>;
  _gte?: InputMaybe<Scalars['user_role']['input']>;
  _in?: InputMaybe<Array<Scalars['user_role']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['user_role']['input']>;
  _lte?: InputMaybe<Scalars['user_role']['input']>;
  _neq?: InputMaybe<Scalars['user_role']['input']>;
  _nin?: InputMaybe<Array<Scalars['user_role']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  audit_logs_performed: Array<Permission_Audit_Log>;
  /** An aggregate relationship */
  audit_logs_performed_aggregate: Permission_Audit_Log_Aggregate;
  /** An array relationship */
  audit_logs_targeted: Array<Permission_Audit_Log>;
  /** An aggregate relationship */
  audit_logs_targeted_aggregate: Permission_Audit_Log_Aggregate;
  /** External identifier from Clerk authentication service */
  clerk_user_id?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the user was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** User's email address (unique) */
  email: Scalars['String']['output'];
  /** Unique identifier for the user */
  id: Scalars['uuid']['output'];
  /** URL to the user's profile image */
  image?: Maybe<Scalars['String']['output']>;
  /** Whether the user is a staff member (vs. external user) */
  is_staff?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  leaves: Array<Leave>;
  /** An aggregate relationship */
  leaves_aggregate: Leave_Aggregate;
  /** An object relationship */
  manager?: Maybe<Users>;
  /** Reference to the user's manager */
  manager_id?: Maybe<Scalars['uuid']['output']>;
  /** User's full name */
  name: Scalars['String']['output'];
  /** An array relationship */
  notes_written: Array<Notes>;
  /** An aggregate relationship */
  notes_written_aggregate: Notes_Aggregate;
  /** An array relationship */
  overrides_assigned: Array<Permission_Overrides>;
  /** An aggregate relationship */
  overrides_assigned_aggregate: Permission_Overrides_Aggregate;
  /** An array relationship */
  overrides_created: Array<Permission_Overrides>;
  /** An aggregate relationship */
  overrides_created_aggregate: Permission_Overrides_Aggregate;
  /** An array relationship */
  payrollsByBackupConsultantUserId: Array<Payrolls>;
  /** An aggregate relationship */
  payrollsByBackupConsultantUserId_aggregate: Payrolls_Aggregate;
  /** An array relationship */
  payrollsByManagerUserId: Array<Payrolls>;
  /** An aggregate relationship */
  payrollsByManagerUserId_aggregate: Payrolls_Aggregate;
  /** An array relationship */
  payrollsByPrimaryConsultantUserId: Array<Payrolls>;
  /** An aggregate relationship */
  payrollsByPrimaryConsultantUserId_aggregate: Payrolls_Aggregate;
  /** User's system role (viewer, consultant, manager, org_admin) */
  role: Scalars['user_role']['output'];
  /** An array relationship */
  staffByManager: Array<Users>;
  /** An aggregate relationship */
  staffByManager_aggregate: Users_Aggregate;
  /** Timestamp when the user was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** User's unique username for login */
  username?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  usersManager: Array<Users>;
  /** An aggregate relationship */
  usersManager_aggregate: Users_Aggregate;
  /** An array relationship */
  work_schedules: Array<Work_Schedule>;
  /** An aggregate relationship */
  work_schedules_aggregate: Work_Schedule_Aggregate;
};


/** columns and relationships of "users" */
export type UsersAudit_Logs_PerformedArgs = {
  distinct_on?: InputMaybe<Array<Permission_Audit_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Audit_Log_Order_By>>;
  where?: InputMaybe<Permission_Audit_Log_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAudit_Logs_Performed_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Audit_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Audit_Log_Order_By>>;
  where?: InputMaybe<Permission_Audit_Log_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAudit_Logs_TargetedArgs = {
  distinct_on?: InputMaybe<Array<Permission_Audit_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Audit_Log_Order_By>>;
  where?: InputMaybe<Permission_Audit_Log_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAudit_Logs_Targeted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Audit_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Audit_Log_Order_By>>;
  where?: InputMaybe<Permission_Audit_Log_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLeavesArgs = {
  distinct_on?: InputMaybe<Array<Leave_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Order_By>>;
  where?: InputMaybe<Leave_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLeaves_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Leave_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Order_By>>;
  where?: InputMaybe<Leave_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNotes_WrittenArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNotes_Written_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOverrides_AssignedArgs = {
  distinct_on?: InputMaybe<Array<Permission_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Overrides_Order_By>>;
  where?: InputMaybe<Permission_Overrides_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOverrides_Assigned_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Overrides_Order_By>>;
  where?: InputMaybe<Permission_Overrides_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOverrides_CreatedArgs = {
  distinct_on?: InputMaybe<Array<Permission_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Overrides_Order_By>>;
  where?: InputMaybe<Permission_Overrides_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOverrides_Created_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Overrides_Order_By>>;
  where?: InputMaybe<Permission_Overrides_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPayrollsByBackupConsultantUserIdArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPayrollsByBackupConsultantUserId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPayrollsByManagerUserIdArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPayrollsByManagerUserId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPayrollsByPrimaryConsultantUserIdArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPayrollsByPrimaryConsultantUserId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payrolls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payrolls_Order_By>>;
  where?: InputMaybe<Payrolls_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersStaffByManagerArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersStaffByManager_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsersManagerArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsersManager_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWork_SchedulesArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_Schedule_Order_By>>;
  where?: InputMaybe<Work_Schedule_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWork_Schedules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_Schedule_Order_By>>;
  where?: InputMaybe<Work_Schedule_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  audit_logs_performed?: InputMaybe<Permission_Audit_Log_Bool_Exp>;
  audit_logs_performed_aggregate?: InputMaybe<Permission_Audit_Log_Aggregate_Bool_Exp>;
  audit_logs_targeted?: InputMaybe<Permission_Audit_Log_Bool_Exp>;
  audit_logs_targeted_aggregate?: InputMaybe<Permission_Audit_Log_Aggregate_Bool_Exp>;
  clerk_user_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  is_staff?: InputMaybe<Boolean_Comparison_Exp>;
  leaves?: InputMaybe<Leave_Bool_Exp>;
  leaves_aggregate?: InputMaybe<Leave_Aggregate_Bool_Exp>;
  manager?: InputMaybe<Users_Bool_Exp>;
  manager_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  notes_written?: InputMaybe<Notes_Bool_Exp>;
  notes_written_aggregate?: InputMaybe<Notes_Aggregate_Bool_Exp>;
  overrides_assigned?: InputMaybe<Permission_Overrides_Bool_Exp>;
  overrides_assigned_aggregate?: InputMaybe<Permission_Overrides_Aggregate_Bool_Exp>;
  overrides_created?: InputMaybe<Permission_Overrides_Bool_Exp>;
  overrides_created_aggregate?: InputMaybe<Permission_Overrides_Aggregate_Bool_Exp>;
  payrollsByBackupConsultantUserId?: InputMaybe<Payrolls_Bool_Exp>;
  payrollsByBackupConsultantUserId_aggregate?: InputMaybe<Payrolls_Aggregate_Bool_Exp>;
  payrollsByManagerUserId?: InputMaybe<Payrolls_Bool_Exp>;
  payrollsByManagerUserId_aggregate?: InputMaybe<Payrolls_Aggregate_Bool_Exp>;
  payrollsByPrimaryConsultantUserId?: InputMaybe<Payrolls_Bool_Exp>;
  payrollsByPrimaryConsultantUserId_aggregate?: InputMaybe<Payrolls_Aggregate_Bool_Exp>;
  role?: InputMaybe<User_Role_Comparison_Exp>;
  staffByManager?: InputMaybe<Users_Bool_Exp>;
  staffByManager_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
  usersManager?: InputMaybe<Users_Bool_Exp>;
  usersManager_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
  work_schedules?: InputMaybe<Work_Schedule_Bool_Exp>;
  work_schedules_aggregate?: InputMaybe<Work_Schedule_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "clerk_user_id" */
  UsersClerkUserIdKey = 'users_clerk_user_id_key',
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "username" */
  UsersUsernameKey = 'users_username_key'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  audit_logs_performed?: InputMaybe<Permission_Audit_Log_Arr_Rel_Insert_Input>;
  audit_logs_targeted?: InputMaybe<Permission_Audit_Log_Arr_Rel_Insert_Input>;
  /** External identifier from Clerk authentication service */
  clerk_user_id?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the user was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** User's email address (unique) */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the user */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** URL to the user's profile image */
  image?: InputMaybe<Scalars['String']['input']>;
  /** Whether the user is a staff member (vs. external user) */
  is_staff?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Leave_Arr_Rel_Insert_Input>;
  manager?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** Reference to the user's manager */
  manager_id?: InputMaybe<Scalars['uuid']['input']>;
  /** User's full name */
  name?: InputMaybe<Scalars['String']['input']>;
  notes_written?: InputMaybe<Notes_Arr_Rel_Insert_Input>;
  overrides_assigned?: InputMaybe<Permission_Overrides_Arr_Rel_Insert_Input>;
  overrides_created?: InputMaybe<Permission_Overrides_Arr_Rel_Insert_Input>;
  payrollsByBackupConsultantUserId?: InputMaybe<Payrolls_Arr_Rel_Insert_Input>;
  payrollsByManagerUserId?: InputMaybe<Payrolls_Arr_Rel_Insert_Input>;
  payrollsByPrimaryConsultantUserId?: InputMaybe<Payrolls_Arr_Rel_Insert_Input>;
  /** User's system role (viewer, consultant, manager, org_admin) */
  role?: InputMaybe<Scalars['user_role']['input']>;
  staffByManager?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  /** Timestamp when the user was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** User's unique username for login */
  username?: InputMaybe<Scalars['String']['input']>;
  usersManager?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  work_schedules?: InputMaybe<Work_Schedule_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  /** External identifier from Clerk authentication service */
  clerk_user_id?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the user was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** User's email address (unique) */
  email?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the user */
  id?: Maybe<Scalars['uuid']['output']>;
  /** URL to the user's profile image */
  image?: Maybe<Scalars['String']['output']>;
  /** Reference to the user's manager */
  manager_id?: Maybe<Scalars['uuid']['output']>;
  /** User's full name */
  name?: Maybe<Scalars['String']['output']>;
  /** User's system role (viewer, consultant, manager, org_admin) */
  role?: Maybe<Scalars['user_role']['output']>;
  /** Timestamp when the user was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** User's unique username for login */
  username?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  /** External identifier from Clerk authentication service */
  clerk_user_id?: InputMaybe<Order_By>;
  /** Timestamp when the user was created */
  created_at?: InputMaybe<Order_By>;
  /** User's email address (unique) */
  email?: InputMaybe<Order_By>;
  /** Unique identifier for the user */
  id?: InputMaybe<Order_By>;
  /** URL to the user's profile image */
  image?: InputMaybe<Order_By>;
  /** Reference to the user's manager */
  manager_id?: InputMaybe<Order_By>;
  /** User's full name */
  name?: InputMaybe<Order_By>;
  /** User's system role (viewer, consultant, manager, org_admin) */
  role?: InputMaybe<Order_By>;
  /** Timestamp when the user was last updated */
  updated_at?: InputMaybe<Order_By>;
  /** User's unique username for login */
  username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  /** External identifier from Clerk authentication service */
  clerk_user_id?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the user was created */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** User's email address (unique) */
  email?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the user */
  id?: Maybe<Scalars['uuid']['output']>;
  /** URL to the user's profile image */
  image?: Maybe<Scalars['String']['output']>;
  /** Reference to the user's manager */
  manager_id?: Maybe<Scalars['uuid']['output']>;
  /** User's full name */
  name?: Maybe<Scalars['String']['output']>;
  /** User's system role (viewer, consultant, manager, org_admin) */
  role?: Maybe<Scalars['user_role']['output']>;
  /** Timestamp when the user was last updated */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** User's unique username for login */
  username?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  /** External identifier from Clerk authentication service */
  clerk_user_id?: InputMaybe<Order_By>;
  /** Timestamp when the user was created */
  created_at?: InputMaybe<Order_By>;
  /** User's email address (unique) */
  email?: InputMaybe<Order_By>;
  /** Unique identifier for the user */
  id?: InputMaybe<Order_By>;
  /** URL to the user's profile image */
  image?: InputMaybe<Order_By>;
  /** Reference to the user's manager */
  manager_id?: InputMaybe<Order_By>;
  /** User's full name */
  name?: InputMaybe<Order_By>;
  /** User's system role (viewer, consultant, manager, org_admin) */
  role?: InputMaybe<Order_By>;
  /** Timestamp when the user was last updated */
  updated_at?: InputMaybe<Order_By>;
  /** User's unique username for login */
  username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  audit_logs_performed_aggregate?: InputMaybe<Permission_Audit_Log_Aggregate_Order_By>;
  audit_logs_targeted_aggregate?: InputMaybe<Permission_Audit_Log_Aggregate_Order_By>;
  clerk_user_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  is_staff?: InputMaybe<Order_By>;
  leaves_aggregate?: InputMaybe<Leave_Aggregate_Order_By>;
  manager?: InputMaybe<Users_Order_By>;
  manager_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notes_written_aggregate?: InputMaybe<Notes_Aggregate_Order_By>;
  overrides_assigned_aggregate?: InputMaybe<Permission_Overrides_Aggregate_Order_By>;
  overrides_created_aggregate?: InputMaybe<Permission_Overrides_Aggregate_Order_By>;
  payrollsByBackupConsultantUserId_aggregate?: InputMaybe<Payrolls_Aggregate_Order_By>;
  payrollsByManagerUserId_aggregate?: InputMaybe<Payrolls_Aggregate_Order_By>;
  payrollsByPrimaryConsultantUserId_aggregate?: InputMaybe<Payrolls_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  staffByManager_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  usersManager_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  work_schedules_aggregate?: InputMaybe<Work_Schedule_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  /** Unique identifier for the user */
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  ClerkUserId = 'clerk_user_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsStaff = 'is_staff',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsStaff = 'is_staff'
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsStaff = 'is_staff'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  /** External identifier from Clerk authentication service */
  clerk_user_id?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the user was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** User's email address (unique) */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the user */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** URL to the user's profile image */
  image?: InputMaybe<Scalars['String']['input']>;
  /** Whether the user is a staff member (vs. external user) */
  is_staff?: InputMaybe<Scalars['Boolean']['input']>;
  /** Reference to the user's manager */
  manager_id?: InputMaybe<Scalars['uuid']['input']>;
  /** User's full name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** User's system role (viewer, consultant, manager, org_admin) */
  role?: InputMaybe<Scalars['user_role']['input']>;
  /** Timestamp when the user was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** User's unique username for login */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  /** External identifier from Clerk authentication service */
  clerk_user_id?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the user was created */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** User's email address (unique) */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the user */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** URL to the user's profile image */
  image?: InputMaybe<Scalars['String']['input']>;
  /** Whether the user is a staff member (vs. external user) */
  is_staff?: InputMaybe<Scalars['Boolean']['input']>;
  /** Reference to the user's manager */
  manager_id?: InputMaybe<Scalars['uuid']['input']>;
  /** User's full name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** User's system role (viewer, consultant, manager, org_admin) */
  role?: InputMaybe<Scalars['user_role']['input']>;
  /** Timestamp when the user was last updated */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** User's unique username for login */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  ClerkUserId = 'clerk_user_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsStaff = 'is_staff',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "work_schedule" */
export type Work_Schedule = {
  __typename?: 'work_schedule';
  /** Timestamp when the schedule entry was created */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Unique identifier for the work schedule entry */
  id: Scalars['uuid']['output'];
  /** Timestamp when the schedule entry was last updated */
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  user: Users;
  /** Reference to the user this schedule belongs to */
  user_id: Scalars['uuid']['output'];
  /** Day of the week (Monday, Tuesday, etc.) */
  work_day: Scalars['String']['output'];
  /** Number of hours worked on this day */
  work_hours: Scalars['numeric']['output'];
  /** An object relationship */
  work_schedule_user: Users;
};

/** aggregated selection of "work_schedule" */
export type Work_Schedule_Aggregate = {
  __typename?: 'work_schedule_aggregate';
  aggregate?: Maybe<Work_Schedule_Aggregate_Fields>;
  nodes: Array<Work_Schedule>;
};

export type Work_Schedule_Aggregate_Bool_Exp = {
  count?: InputMaybe<Work_Schedule_Aggregate_Bool_Exp_Count>;
};

export type Work_Schedule_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Work_Schedule_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Work_Schedule_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "work_schedule" */
export type Work_Schedule_Aggregate_Fields = {
  __typename?: 'work_schedule_aggregate_fields';
  avg?: Maybe<Work_Schedule_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Work_Schedule_Max_Fields>;
  min?: Maybe<Work_Schedule_Min_Fields>;
  stddev?: Maybe<Work_Schedule_Stddev_Fields>;
  stddev_pop?: Maybe<Work_Schedule_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Work_Schedule_Stddev_Samp_Fields>;
  sum?: Maybe<Work_Schedule_Sum_Fields>;
  var_pop?: Maybe<Work_Schedule_Var_Pop_Fields>;
  var_samp?: Maybe<Work_Schedule_Var_Samp_Fields>;
  variance?: Maybe<Work_Schedule_Variance_Fields>;
};


/** aggregate fields of "work_schedule" */
export type Work_Schedule_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Work_Schedule_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "work_schedule" */
export type Work_Schedule_Aggregate_Order_By = {
  avg?: InputMaybe<Work_Schedule_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Work_Schedule_Max_Order_By>;
  min?: InputMaybe<Work_Schedule_Min_Order_By>;
  stddev?: InputMaybe<Work_Schedule_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Work_Schedule_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Work_Schedule_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Work_Schedule_Sum_Order_By>;
  var_pop?: InputMaybe<Work_Schedule_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Work_Schedule_Var_Samp_Order_By>;
  variance?: InputMaybe<Work_Schedule_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "work_schedule" */
export type Work_Schedule_Arr_Rel_Insert_Input = {
  data: Array<Work_Schedule_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Work_Schedule_On_Conflict>;
};

/** aggregate avg on columns */
export type Work_Schedule_Avg_Fields = {
  __typename?: 'work_schedule_avg_fields';
  /** Number of hours worked on this day */
  work_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "work_schedule" */
export type Work_Schedule_Avg_Order_By = {
  /** Number of hours worked on this day */
  work_hours?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "work_schedule". All fields are combined with a logical 'AND'. */
export type Work_Schedule_Bool_Exp = {
  _and?: InputMaybe<Array<Work_Schedule_Bool_Exp>>;
  _not?: InputMaybe<Work_Schedule_Bool_Exp>;
  _or?: InputMaybe<Array<Work_Schedule_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  work_day?: InputMaybe<String_Comparison_Exp>;
  work_hours?: InputMaybe<Numeric_Comparison_Exp>;
  work_schedule_user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "work_schedule" */
export enum Work_Schedule_Constraint {
  /** unique or primary key constraint on columns "user_id", "work_day" */
  UniqueUserWorkDay = 'unique_user_work_day',
  /** unique or primary key constraint on columns "id" */
  WorkSchedulePkey = 'work_schedule_pkey'
}

/** input type for incrementing numeric columns in table "work_schedule" */
export type Work_Schedule_Inc_Input = {
  /** Number of hours worked on this day */
  work_hours?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "work_schedule" */
export type Work_Schedule_Insert_Input = {
  /** Timestamp when the schedule entry was created */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Unique identifier for the work schedule entry */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Timestamp when the schedule entry was last updated */
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** Reference to the user this schedule belongs to */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Day of the week (Monday, Tuesday, etc.) */
  work_day?: InputMaybe<Scalars['String']['input']>;
  /** Number of hours worked on this day */
  work_hours?: InputMaybe<Scalars['numeric']['input']>;
  work_schedule_user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Work_Schedule_Max_Fields = {
  __typename?: 'work_schedule_max_fields';
  /** Timestamp when the schedule entry was created */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Unique identifier for the work schedule entry */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Timestamp when the schedule entry was last updated */
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** Reference to the user this schedule belongs to */
  user_id?: Maybe<Scalars['uuid']['output']>;
  /** Day of the week (Monday, Tuesday, etc.) */
  work_day?: Maybe<Scalars['String']['output']>;
  /** Number of hours worked on this day */
  work_hours?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "work_schedule" */
export type Work_Schedule_Max_Order_By = {
  /** Timestamp when the schedule entry was created */
  created_at?: InputMaybe<Order_By>;
  /** Unique identifier for the work schedule entry */
  id?: InputMaybe<Order_By>;
  /** Timestamp when the schedule entry was last updated */
  updated_at?: InputMaybe<Order_By>;
  /** Reference to the user this schedule belongs to */
  user_id?: InputMaybe<Order_By>;
  /** Day of the week (Monday, Tuesday, etc.) */
  work_day?: InputMaybe<Order_By>;
  /** Number of hours worked on this day */
  work_hours?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Work_Schedule_Min_Fields = {
  __typename?: 'work_schedule_min_fields';
  /** Timestamp when the schedule entry was created */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Unique identifier for the work schedule entry */
  id?: Maybe<Scalars['uuid']['output']>;
  /** Timestamp when the schedule entry was last updated */
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** Reference to the user this schedule belongs to */
  user_id?: Maybe<Scalars['uuid']['output']>;
  /** Day of the week (Monday, Tuesday, etc.) */
  work_day?: Maybe<Scalars['String']['output']>;
  /** Number of hours worked on this day */
  work_hours?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "work_schedule" */
export type Work_Schedule_Min_Order_By = {
  /** Timestamp when the schedule entry was created */
  created_at?: InputMaybe<Order_By>;
  /** Unique identifier for the work schedule entry */
  id?: InputMaybe<Order_By>;
  /** Timestamp when the schedule entry was last updated */
  updated_at?: InputMaybe<Order_By>;
  /** Reference to the user this schedule belongs to */
  user_id?: InputMaybe<Order_By>;
  /** Day of the week (Monday, Tuesday, etc.) */
  work_day?: InputMaybe<Order_By>;
  /** Number of hours worked on this day */
  work_hours?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "work_schedule" */
export type Work_Schedule_Mutation_Response = {
  __typename?: 'work_schedule_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Work_Schedule>;
};

/** on_conflict condition type for table "work_schedule" */
export type Work_Schedule_On_Conflict = {
  constraint: Work_Schedule_Constraint;
  update_columns?: Array<Work_Schedule_Update_Column>;
  where?: InputMaybe<Work_Schedule_Bool_Exp>;
};

/** Ordering options when selecting data from "work_schedule". */
export type Work_Schedule_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  work_day?: InputMaybe<Order_By>;
  work_hours?: InputMaybe<Order_By>;
  work_schedule_user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: work_schedule */
export type Work_Schedule_Pk_Columns_Input = {
  /** Unique identifier for the work schedule entry */
  id: Scalars['uuid']['input'];
};

/** select columns of table "work_schedule" */
export enum Work_Schedule_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkDay = 'work_day',
  /** column name */
  WorkHours = 'work_hours'
}

/** input type for updating data in table "work_schedule" */
export type Work_Schedule_Set_Input = {
  /** Timestamp when the schedule entry was created */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Unique identifier for the work schedule entry */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Timestamp when the schedule entry was last updated */
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Reference to the user this schedule belongs to */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Day of the week (Monday, Tuesday, etc.) */
  work_day?: InputMaybe<Scalars['String']['input']>;
  /** Number of hours worked on this day */
  work_hours?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Work_Schedule_Stddev_Fields = {
  __typename?: 'work_schedule_stddev_fields';
  /** Number of hours worked on this day */
  work_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "work_schedule" */
export type Work_Schedule_Stddev_Order_By = {
  /** Number of hours worked on this day */
  work_hours?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Work_Schedule_Stddev_Pop_Fields = {
  __typename?: 'work_schedule_stddev_pop_fields';
  /** Number of hours worked on this day */
  work_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "work_schedule" */
export type Work_Schedule_Stddev_Pop_Order_By = {
  /** Number of hours worked on this day */
  work_hours?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Work_Schedule_Stddev_Samp_Fields = {
  __typename?: 'work_schedule_stddev_samp_fields';
  /** Number of hours worked on this day */
  work_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "work_schedule" */
export type Work_Schedule_Stddev_Samp_Order_By = {
  /** Number of hours worked on this day */
  work_hours?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "work_schedule" */
export type Work_Schedule_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Work_Schedule_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Work_Schedule_Stream_Cursor_Value_Input = {
  /** Timestamp when the schedule entry was created */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Unique identifier for the work schedule entry */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Timestamp when the schedule entry was last updated */
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Reference to the user this schedule belongs to */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  /** Day of the week (Monday, Tuesday, etc.) */
  work_day?: InputMaybe<Scalars['String']['input']>;
  /** Number of hours worked on this day */
  work_hours?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Work_Schedule_Sum_Fields = {
  __typename?: 'work_schedule_sum_fields';
  /** Number of hours worked on this day */
  work_hours?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "work_schedule" */
export type Work_Schedule_Sum_Order_By = {
  /** Number of hours worked on this day */
  work_hours?: InputMaybe<Order_By>;
};

/** update columns of table "work_schedule" */
export enum Work_Schedule_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkDay = 'work_day',
  /** column name */
  WorkHours = 'work_hours'
}

export type Work_Schedule_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Work_Schedule_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Work_Schedule_Set_Input>;
  /** filter the rows which have to be updated */
  where: Work_Schedule_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Work_Schedule_Var_Pop_Fields = {
  __typename?: 'work_schedule_var_pop_fields';
  /** Number of hours worked on this day */
  work_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "work_schedule" */
export type Work_Schedule_Var_Pop_Order_By = {
  /** Number of hours worked on this day */
  work_hours?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Work_Schedule_Var_Samp_Fields = {
  __typename?: 'work_schedule_var_samp_fields';
  /** Number of hours worked on this day */
  work_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "work_schedule" */
export type Work_Schedule_Var_Samp_Order_By = {
  /** Number of hours worked on this day */
  work_hours?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Work_Schedule_Variance_Fields = {
  __typename?: 'work_schedule_variance_fields';
  /** Number of hours worked on this day */
  work_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "work_schedule" */
export type Work_Schedule_Variance_Order_By = {
  /** Number of hours worked on this day */
  work_hours?: InputMaybe<Order_By>;
};

export type AdjustmentRuleFragmentFragment = { __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } };

export type AppSettingsFragmentFragment = { __typename?: 'app_settings', id: string, permissions?: any | null };

export type ClientExternalSystemFragmentFragment = { __typename?: 'client_external_systems', id: any, client_id: any, system_id: any, system_client_id?: string | null, created_at?: any | null, updated_at?: any | null, client: { __typename?: 'clients', id: any, name: string }, external_system: { __typename?: 'external_systems', id: any, name: string, url: string, description?: string | null, icon?: string | null } };

export type ClientFragmentFragment = { __typename?: 'clients', id: any, name: string, contact_person?: string | null, contact_email?: string | null, contact_phone?: string | null, active?: boolean | null, created_at?: any | null, updated_at?: any | null };

export type ExternalSystemFragmentFragment = { __typename?: 'external_systems', id: any, name: string, url: string, description?: string | null, icon?: string | null, created_at?: any | null, updated_at?: any | null };

export type FeatureFlagFragmentFragment = { __typename?: 'feature_flags', id: any, feature_name: string, is_enabled?: boolean | null, allowed_roles: any, updated_at?: any | null };

export type HolidayFragmentFragment = { __typename?: 'holidays', id: any, date: any, local_name: string, name: string, country_code: any, region?: Array<string> | null, is_fixed?: boolean | null, is_global?: boolean | null, launch_year?: number | null, types: Array<string>, created_at?: any | null, updated_at?: any | null };

export type LeaveFragmentFragment = { __typename?: 'leave', id: any, user_id: any, start_date: any, end_date: any, leave_type: string, reason?: string | null, status?: any | null };

export type NoteFragmentFragment = { __typename?: 'notes', id: any, entity_type: string, entity_id: any, user_id?: any | null, content: string, is_important?: boolean | null, created_at?: any | null, updated_at?: any | null };

export type PayrollCycleFragmentFragment = { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null, created_at?: any | null, updated_at?: any | null };

export type PayrollDateFragmentFragment = { __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null };

export type PayrollDateTypeFragmentFragment = { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null, created_at?: any | null, updated_at?: any | null };

export type PayrollDetailFragmentFragment = { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, client: { __typename?: 'clients', id: any, name: string }, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any } };

export type PayrollFragmentFragment = { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null };

export type StaffFragmentFragment = { __typename?: 'users', id: any, name: string, email: string, image?: string | null, is_staff?: boolean | null, role: any, manager_id?: any | null, created_at?: any | null, updated_at?: any | null };

export type StaffLeaveFragmentFragment = { __typename?: 'users', leaves: Array<{ __typename?: 'leave', id: any, start_date: any, end_date: any, leave_type: string, status?: any | null }> };

export type StaffManagerFragmentFragment = { __typename?: 'users', manager?: { __typename?: 'users', id: any, name: string, email: string, role: any } | null };

export type WorkScheduleFragmentFragment = { __typename?: 'work_schedule', id: any, user_id: any, work_day: string, work_hours: any, created_at?: any | null, updated_at?: any | null };

export type AddNoteMutationVariables = Exact<{
  input: Notes_Insert_Input;
}>;


export type AddNoteMutation = { __typename?: 'mutation_root', insert_notes_one?: { __typename?: 'notes', id: any, entity_type: string, entity_id: any, user_id?: any | null, content: string, is_important?: boolean | null, created_at?: any | null, updated_at?: any | null } | null };

export type CreateAdjustmentRuleMutationVariables = Exact<{
  input: Adjustment_Rules_Insert_Input;
}>;


export type CreateAdjustmentRuleMutation = { __typename?: 'mutation_root', insert_adjustment_rules_one?: { __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } } | null };

export type CreateClientMutationVariables = Exact<{
  input: Clients_Insert_Input;
}>;


export type CreateClientMutation = { __typename?: 'mutation_root', insert_clients_one?: { __typename?: 'clients', id: any, name: string, contact_person?: string | null, contact_email?: string | null, contact_phone?: string | null, active?: boolean | null, created_at?: any | null, updated_at?: any | null } | null };

export type CreateLeaveMutationVariables = Exact<{
  input: Leave_Insert_Input;
}>;


export type CreateLeaveMutation = { __typename?: 'mutation_root', insert_leave_one?: { __typename?: 'leave', id: any, user_id: any, start_date: any, end_date: any, leave_type: string, reason?: string | null, status?: any | null } | null };

export type CreatePayrollMutationVariables = Exact<{
  input: Payrolls_Insert_Input;
}>;


export type CreatePayrollMutation = { __typename?: 'mutation_root', insert_payrolls_one?: { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null } | null };

export type CreateStaffMutationVariables = Exact<{
  input: Users_Insert_Input;
}>;


export type CreateStaffMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: any, name: string, email: string, image?: string | null, is_staff?: boolean | null, role: any, manager_id?: any | null, created_at?: any | null, updated_at?: any | null } | null };

export type CreateWorkScheduleMutationVariables = Exact<{
  input: Work_Schedule_Insert_Input;
}>;


export type CreateWorkScheduleMutation = { __typename?: 'mutation_root', insert_work_schedule_one?: { __typename?: 'work_schedule', id: any, user_id: any, work_day: string, work_hours: any, created_at?: any | null, updated_at?: any | null } | null };

export type DeleteAdjustmentRuleMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteAdjustmentRuleMutation = { __typename?: 'mutation_root', delete_adjustment_rules_by_pk?: { __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } } | null };

export type DeleteClientMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteClientMutation = { __typename?: 'mutation_root', delete_clients_by_pk?: { __typename?: 'clients', id: any, name: string, contact_person?: string | null, contact_email?: string | null, contact_phone?: string | null, active?: boolean | null, created_at?: any | null, updated_at?: any | null } | null };

export type DeletePayrollMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeletePayrollMutation = { __typename?: 'mutation_root', delete_payrolls_by_pk?: { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null } | null };

export type DeleteStaffMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteStaffMutation = { __typename?: 'mutation_root', delete_users_by_pk?: { __typename?: 'users', id: any, name: string, email: string, image?: string | null, is_staff?: boolean | null, role: any, manager_id?: any | null, created_at?: any | null, updated_at?: any | null } | null };

export type GeneratePayrollDatesMutationVariables = Exact<{
  payroll_id: Scalars['uuid']['input'];
  original_eft_date: Scalars['date']['input'];
  adjusted_eft_date: Scalars['date']['input'];
  processing_date?: InputMaybe<Scalars['date']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
}>;


export type GeneratePayrollDatesMutation = { __typename?: 'mutation_root', insert_payroll_dates?: { __typename?: 'payroll_dates_mutation_response', returning: Array<{ __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null }> } | null };

export type InsertBulkPayrollDatesMutationVariables = Exact<{
  objects: Array<Payroll_Dates_Insert_Input> | Payroll_Dates_Insert_Input;
}>;


export type InsertBulkPayrollDatesMutation = { __typename?: 'mutation_root', insert_payroll_dates?: { __typename?: 'payroll_dates_mutation_response', returning: Array<{ __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null }> } | null };

export type InsertPayrollMutationVariables = Exact<{
  input: Payrolls_Insert_Input;
}>;


export type InsertPayrollMutation = { __typename?: 'mutation_root', insert_payrolls_one?: { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null } | null };

export type SyncHolidaysMutationVariables = Exact<{
  objects: Array<Holidays_Insert_Input> | Holidays_Insert_Input;
  onConflict?: InputMaybe<Holidays_On_Conflict>;
}>;


export type SyncHolidaysMutation = { __typename?: 'mutation_root', insert_holidays?: { __typename?: 'holidays_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'holidays', id: any, date: any, local_name: string, name: string, country_code: any, region?: Array<string> | null, is_fixed?: boolean | null, is_global?: boolean | null, launch_year?: number | null, types: Array<string>, created_at?: any | null, updated_at?: any | null }> } | null };

export type UpdateAdjustmentRuleMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Adjustment_Rules_Set_Input;
}>;


export type UpdateAdjustmentRuleMutation = { __typename?: 'mutation_root', update_adjustment_rules_by_pk?: { __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } } | null };

export type UpdateClientMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Clients_Set_Input;
}>;


export type UpdateClientMutation = { __typename?: 'mutation_root', update_clients_by_pk?: { __typename?: 'clients', id: any, name: string, contact_person?: string | null, contact_email?: string | null, contact_phone?: string | null, active?: boolean | null, created_at?: any | null, updated_at?: any | null } | null };

export type UpdateLeaveMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Leave_Set_Input;
}>;


export type UpdateLeaveMutation = { __typename?: 'mutation_root', update_leave_by_pk?: { __typename?: 'leave', id: any, user_id: any, start_date: any, end_date: any, leave_type: string, reason?: string | null, status?: any | null } | null };

export type UpdateNoteMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Notes_Set_Input;
}>;


export type UpdateNoteMutation = { __typename?: 'mutation_root', update_notes_by_pk?: { __typename?: 'notes', id: any, entity_type: string, entity_id: any, user_id?: any | null, content: string, is_important?: boolean | null, created_at?: any | null, updated_at?: any | null } | null };

export type UpdatePayrollMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Payrolls_Set_Input;
}>;


export type UpdatePayrollMutation = { __typename?: 'mutation_root', update_payrolls_by_pk?: { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null } | null };

export type UpdatePayrollDateMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Payroll_Dates_Set_Input;
}>;


export type UpdatePayrollDateMutation = { __typename?: 'mutation_root', update_payroll_dates_by_pk?: { __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null } | null };

export type UpdatePayrollStatusMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  status: Scalars['payroll_status']['input'];
}>;


export type UpdatePayrollStatusMutation = { __typename?: 'mutation_root', update_payrolls_by_pk?: { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null } | null };

export type UpdateStaffMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Users_Set_Input;
}>;


export type UpdateStaffMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', id: any, name: string, email: string, image?: string | null, is_staff?: boolean | null, role: any, manager_id?: any | null, created_at?: any | null, updated_at?: any | null } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Users_Set_Input;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', id: any, name: string, email: string, image?: string | null, is_staff?: boolean | null, role: any, manager_id?: any | null, created_at?: any | null, updated_at?: any | null } | null };

export type GetAdjustmentRuleByCycleAndTypeQueryVariables = Exact<{
  cycleId: Scalars['uuid']['input'];
  dateTypeId: Scalars['uuid']['input'];
}>;


export type GetAdjustmentRuleByCycleAndTypeQuery = { __typename?: 'query_root', adjustment_rules: Array<{ __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } }> };

export type GetAdjustmentRulesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdjustmentRulesQuery = { __typename?: 'query_root', adjustment_rules: Array<{ __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } }> };

export type GetAppSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAppSettingsQuery = { __typename?: 'query_root', app_settings: Array<{ __typename?: 'app_settings', id: string, permissions?: any | null }> };

export type GetClientByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetClientByIdQuery = { __typename?: 'query_root', clients_by_pk?: { __typename?: 'clients', id: any, name: string, contact_person?: string | null, contact_email?: string | null, contact_phone?: string | null, active?: boolean | null, created_at?: any | null, updated_at?: any | null, payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null }> } | null };

export type GetClientExternalSystemsQueryVariables = Exact<{
  clientId: Scalars['uuid']['input'];
}>;


export type GetClientExternalSystemsQuery = { __typename?: 'query_root', client_external_systems: Array<{ __typename?: 'client_external_systems', id: any, client_id: any, system_id: any, system_client_id?: string | null, created_at?: any | null, updated_at?: any | null, client: { __typename?: 'clients', id: any, name: string }, external_system: { __typename?: 'external_systems', id: any, name: string, url: string, description?: string | null, icon?: string | null } }> };

export type GetClientStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClientStatisticsQuery = { __typename?: 'query_root', clients_aggregate: { __typename?: 'clients_aggregate', aggregate?: { __typename?: 'clients_aggregate_fields', count: number } | null }, active_clients: { __typename?: 'clients_aggregate', aggregate?: { __typename?: 'clients_aggregate_fields', count: number } | null }, clients_with_payrolls: { __typename?: 'clients_aggregate', aggregate?: { __typename?: 'clients_aggregate_fields', count: number } | null } };

export type GetClientsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClientsListQuery = { __typename?: 'query_root', clients: Array<{ __typename?: 'clients', id: any, name: string, contact_person?: string | null, contact_email?: string | null, contact_phone?: string | null, active?: boolean | null, created_at?: any | null, updated_at?: any | null }> };

export type GetDashboardDataQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
  startDate: Scalars['date']['input'];
  endDate: Scalars['date']['input'];
}>;


export type GetDashboardDataQuery = { __typename?: 'query_root', payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, payroll_dates: Array<{ __typename?: 'payroll_dates', id: any, processing_date: any, adjusted_eft_date: any }> }>, holidays: Array<{ __typename?: 'holidays', id: any, date: any, local_name: string, name: string, country_code: any, region?: Array<string> | null, is_fixed?: boolean | null, is_global?: boolean | null, launch_year?: number | null, types: Array<string>, created_at?: any | null, updated_at?: any | null }>, leave: Array<{ __typename?: 'leave', id: any, user_id: any, start_date: any, end_date: any, leave_type: string, reason?: string | null, status?: any | null }> };

export type GetExternalSystemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExternalSystemsQuery = { __typename?: 'query_root', external_systems: Array<{ __typename?: 'external_systems', id: any, name: string, url: string, description?: string | null, icon?: string | null, created_at?: any | null, updated_at?: any | null }> };

export type GetFeatureFlagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeatureFlagsQuery = { __typename?: 'query_root', feature_flags: Array<{ __typename?: 'feature_flags', id: any, feature_name: string, is_enabled?: boolean | null, allowed_roles: any, updated_at?: any | null }> };

export type GetHolidaysQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHolidaysQuery = { __typename?: 'query_root', holidays: Array<{ __typename?: 'holidays', id: any, date: any, local_name: string, name: string, country_code: any, region?: Array<string> | null, is_fixed?: boolean | null, is_global?: boolean | null, launch_year?: number | null, types: Array<string>, created_at?: any | null, updated_at?: any | null }> };

export type GetHolidaysByCountryQueryVariables = Exact<{
  country_code: Scalars['bpchar']['input'];
}>;


export type GetHolidaysByCountryQuery = { __typename?: 'query_root', holidays: Array<{ __typename?: 'holidays', id: any, date: any, local_name: string, name: string, country_code: any, region?: Array<string> | null, is_fixed?: boolean | null, is_global?: boolean | null, launch_year?: number | null, types: Array<string>, created_at?: any | null, updated_at?: any | null }> };

export type GetLeaveQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['uuid']['input']>;
  startDate?: InputMaybe<Scalars['date']['input']>;
  endDate?: InputMaybe<Scalars['date']['input']>;
}>;


export type GetLeaveQuery = { __typename?: 'query_root', leave: Array<{ __typename?: 'leave', id: any, user_id: any, start_date: any, end_date: any, leave_type: string, reason?: string | null, status?: any | null }> };

export type GetLeaveStatisticsQueryVariables = Exact<{
  startDate: Scalars['date']['input'];
  endDate: Scalars['date']['input'];
}>;


export type GetLeaveStatisticsQuery = { __typename?: 'query_root', leave_aggregate: { __typename?: 'leave_aggregate', aggregate?: { __typename?: 'leave_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'leave', leave_type: string, status?: any | null }> } };

export type GetNotesQueryVariables = Exact<{
  entityId: Scalars['uuid']['input'];
  entityType: Scalars['String']['input'];
}>;


export type GetNotesQuery = { __typename?: 'query_root', notes: Array<{ __typename?: 'notes', id: any, entity_type: string, entity_id: any, user_id?: any | null, content: string, is_important?: boolean | null, created_at?: any | null, updated_at?: any | null }> };

export type GetPayrollByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetPayrollByIdQuery = { __typename?: 'query_root', payrolls_by_pk?: { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, payroll_dates: Array<{ __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null }>, client: { __typename?: 'clients', id: any, name: string }, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any } } | null };

export type GetPayrollCyclesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPayrollCyclesQuery = { __typename?: 'query_root', payroll_cycles: Array<{ __typename?: 'payroll_cycles', id: any, name: any, description?: string | null, created_at?: any | null, updated_at?: any | null, adjustment_rules: Array<{ __typename?: 'adjustment_rules', id: any, date_type_id: any, rule_code: string, rule_description: string }>, payrolls_aggregate: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null } }> };

export type GetPayrollDateTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPayrollDateTypesQuery = { __typename?: 'query_root', payroll_date_types: Array<{ __typename?: 'payroll_date_types', id: any, name: any, description?: string | null, created_at?: any | null, updated_at?: any | null, adjustment_rules: Array<{ __typename?: 'adjustment_rules', id: any, cycle_id: any, rule_code: string, rule_description: string }>, payrolls_aggregate: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null } }> };

export type GetPayrollDatesQueryVariables = Exact<{
  payrollId: Scalars['uuid']['input'];
  startDate?: InputMaybe<Scalars['date']['input']>;
  endDate?: InputMaybe<Scalars['date']['input']>;
}>;


export type GetPayrollDatesQuery = { __typename?: 'query_root', payroll_dates: Array<{ __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null }> };

export type GetPayrollListQueryVariables = Exact<{
  where?: InputMaybe<Payrolls_Bool_Exp>;
}>;


export type GetPayrollListQuery = { __typename?: 'query_root', payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, client: { __typename?: 'clients', id: any, name: string }, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any } }> };

export type GetPayrollStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPayrollStatisticsQuery = { __typename?: 'query_root', payrolls_aggregate: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'payrolls', status: any }> }, active_payrolls: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null }, implementation_payrolls: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null }, inactive_payrolls: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null } };

export type GetPayrollsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPayrollsQuery = { __typename?: 'query_root', payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any } }> };

export type GetPayrollsByMonthQueryVariables = Exact<{
  startDate: Scalars['date']['input'];
  endDate: Scalars['date']['input'];
}>;


export type GetPayrollsByMonthQuery = { __typename?: 'query_root', payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, payroll_dates: Array<{ __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null }> }> };

export type GetPayrollsMissingDatesQueryVariables = Exact<{
  startDate: Scalars['date']['input'];
  endDate: Scalars['date']['input'];
}>;


export type GetPayrollsMissingDatesQuery = { __typename?: 'query_root', payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null }> };

export type GetStaffByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetStaffByIdQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: any, name: string, email: string, image?: string | null, is_staff?: boolean | null, role: any, manager_id?: any | null, created_at?: any | null, updated_at?: any | null, manager?: { __typename?: 'users', id: any, name: string, email: string, role: any } | null, leaves: Array<{ __typename?: 'leave', id: any, start_date: any, end_date: any, leave_type: string, status?: any | null }> } | null };

export type GetStaffListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStaffListQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name: string, email: string, image?: string | null, is_staff?: boolean | null, role: any, manager_id?: any | null, created_at?: any | null, updated_at?: any | null, manager?: { __typename?: 'users', id: any, name: string, email: string, role: any } | null, leaves: Array<{ __typename?: 'leave', id: any, start_date: any, end_date: any, leave_type: string, status?: any | null }> }> };

export type GetUserPayrollsQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetUserPayrollsQuery = { __typename?: 'query_root', payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, client: { __typename?: 'clients', id: any, name: string } }> };

export type GetUserWorkScheduleQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetUserWorkScheduleQuery = { __typename?: 'query_root', work_schedule: Array<{ __typename?: 'work_schedule', id: any, user_id: any, work_day: string, work_hours: any, created_at?: any | null, updated_at?: any | null }> };

export type SimpleTestQueryVariables = Exact<{ [key: string]: never; }>;


export type SimpleTestQuery = { __typename?: 'query_root', clients: Array<{ __typename?: 'clients', id: any, name: string }> };

export type WithVariablesQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type WithVariablesQuery = { __typename?: 'query_root', clients_by_pk?: { __typename?: 'clients', id: any, name: string } | null };

export const AdjustmentRuleFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdjustmentRuleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"adjustment_rules"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cycle_id"}},{"kind":"Field","name":{"kind":"Name","value":"date_type_id"}},{"kind":"Field","name":{"kind":"Name","value":"rule_description"}},{"kind":"Field","name":{"kind":"Name","value":"rule_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_cycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payroll_date_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode;
export const AppSettingsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AppSettingsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"app_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]} as unknown as DocumentNode;
export const ClientExternalSystemFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClientExternalSystemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"client_external_systems"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client_id"}},{"kind":"Field","name":{"kind":"Name","value":"system_id"}},{"kind":"Field","name":{"kind":"Name","value":"system_client_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"external_system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}}]} as unknown as DocumentNode;
export const ClientFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClientFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"clients"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contact_person"}},{"kind":"Field","name":{"kind":"Name","value":"contact_email"}},{"kind":"Field","name":{"kind":"Name","value":"contact_phone"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
export const ExternalSystemFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalSystemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"external_systems"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
export const FeatureFlagFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FeatureFlagFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"feature_flags"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"feature_name"}},{"kind":"Field","name":{"kind":"Name","value":"is_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"allowed_roles"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
export const HolidayFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HolidayFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"holidays"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"local_name"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country_code"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"is_fixed"}},{"kind":"Field","name":{"kind":"Name","value":"is_global"}},{"kind":"Field","name":{"kind":"Name","value":"launch_year"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
export const LeaveFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"leave"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"leave_type"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode;
export const NoteFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"notes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"entity_type"}},{"kind":"Field","name":{"kind":"Name","value":"entity_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"is_important"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
export const PayrollCycleFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PayrollCycleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_cycles"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
export const PayrollDateFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PayrollDateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_dates"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_id"}},{"kind":"Field","name":{"kind":"Name","value":"original_eft_date"}},{"kind":"Field","name":{"kind":"Name","value":"adjusted_eft_date"}},{"kind":"Field","name":{"kind":"Name","value":"processing_date"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
export const PayrollDateTypeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PayrollDateTypeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_date_types"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
export const PayrollFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PayrollFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"payrolls"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"client_id"}},{"kind":"Field","name":{"kind":"Name","value":"cycle_id"}},{"kind":"Field","name":{"kind":"Name","value":"date_type_id"}},{"kind":"Field","name":{"kind":"Name","value":"date_value"}},{"kind":"Field","name":{"kind":"Name","value":"primary_consultant_user_id"}},{"kind":"Field","name":{"kind":"Name","value":"backup_consultant_user_id"}},{"kind":"Field","name":{"kind":"Name","value":"manager_user_id"}},{"kind":"Field","name":{"kind":"Name","value":"processing_days_before_eft"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_system"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"go_live_date"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
export const PayrollDetailFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PayrollDetailFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"payrolls"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payroll_cycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payroll_date_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},...PayrollFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export const StaffFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StaffFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"is_staff"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"manager_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
export const StaffLeaveFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StaffLeaveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaves"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"leave_type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode;
export const StaffManagerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StaffManagerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode;
export const WorkScheduleFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkScheduleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"work_schedule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"work_day"}},{"kind":"Field","name":{"kind":"Name","value":"work_hours"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
export const AddNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"notes_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_notes_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NoteFragment"}}]}}]}},...NoteFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type AddNoteMutationFn = Apollo.MutationFunction<AddNoteMutation, AddNoteMutationVariables>;

/**
 * __useAddNoteMutation__
 *
 * To run a mutation, you first call `useAddNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNoteMutation, { data, loading, error }] = useAddNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddNoteMutation(baseOptions?: Apollo.MutationHookOptions<AddNoteMutation, AddNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNoteMutation, AddNoteMutationVariables>(AddNoteDocument, options);
      }
export type AddNoteMutationHookResult = ReturnType<typeof useAddNoteMutation>;
export type AddNoteMutationResult = Apollo.MutationResult<AddNoteMutation>;
export type AddNoteMutationOptions = Apollo.BaseMutationOptions<AddNoteMutation, AddNoteMutationVariables>;
export const CreateAdjustmentRuleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAdjustmentRule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"adjustment_rules_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_adjustment_rules_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdjustmentRuleFragment"}}]}}]}},...AdjustmentRuleFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type CreateAdjustmentRuleMutationFn = Apollo.MutationFunction<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>;

/**
 * __useCreateAdjustmentRuleMutation__
 *
 * To run a mutation, you first call `useCreateAdjustmentRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdjustmentRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdjustmentRuleMutation, { data, loading, error }] = useCreateAdjustmentRuleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAdjustmentRuleMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>(CreateAdjustmentRuleDocument, options);
      }
export type CreateAdjustmentRuleMutationHookResult = ReturnType<typeof useCreateAdjustmentRuleMutation>;
export type CreateAdjustmentRuleMutationResult = Apollo.MutationResult<CreateAdjustmentRuleMutation>;
export type CreateAdjustmentRuleMutationOptions = Apollo.BaseMutationOptions<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>;
export const CreateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"clients_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_clients_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClientFragment"}}]}}]}},...ClientFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type CreateClientMutationFn = Apollo.MutationFunction<CreateClientMutation, CreateClientMutationVariables>;

/**
 * __useCreateClientMutation__
 *
 * To run a mutation, you first call `useCreateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClientMutation, { data, loading, error }] = useCreateClientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateClientMutation(baseOptions?: Apollo.MutationHookOptions<CreateClientMutation, CreateClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateClientMutation, CreateClientMutationVariables>(CreateClientDocument, options);
      }
export type CreateClientMutationHookResult = ReturnType<typeof useCreateClientMutation>;
export type CreateClientMutationResult = Apollo.MutationResult<CreateClientMutation>;
export type CreateClientMutationOptions = Apollo.BaseMutationOptions<CreateClientMutation, CreateClientMutationVariables>;
export const CreateLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLeave"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"leave_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_leave_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LeaveFragment"}}]}}]}},...LeaveFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type CreateLeaveMutationFn = Apollo.MutationFunction<CreateLeaveMutation, CreateLeaveMutationVariables>;

/**
 * __useCreateLeaveMutation__
 *
 * To run a mutation, you first call `useCreateLeaveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLeaveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLeaveMutation, { data, loading, error }] = useCreateLeaveMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLeaveMutation(baseOptions?: Apollo.MutationHookOptions<CreateLeaveMutation, CreateLeaveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLeaveMutation, CreateLeaveMutationVariables>(CreateLeaveDocument, options);
      }
export type CreateLeaveMutationHookResult = ReturnType<typeof useCreateLeaveMutation>;
export type CreateLeaveMutationResult = Apollo.MutationResult<CreateLeaveMutation>;
export type CreateLeaveMutationOptions = Apollo.BaseMutationOptions<CreateLeaveMutation, CreateLeaveMutationVariables>;
export const CreatePayrollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePayroll"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"payrolls_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_payrolls_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}}]}}]}},...PayrollFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type CreatePayrollMutationFn = Apollo.MutationFunction<CreatePayrollMutation, CreatePayrollMutationVariables>;

/**
 * __useCreatePayrollMutation__
 *
 * To run a mutation, you first call `useCreatePayrollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePayrollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPayrollMutation, { data, loading, error }] = useCreatePayrollMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePayrollMutation(baseOptions?: Apollo.MutationHookOptions<CreatePayrollMutation, CreatePayrollMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePayrollMutation, CreatePayrollMutationVariables>(CreatePayrollDocument, options);
      }
export type CreatePayrollMutationHookResult = ReturnType<typeof useCreatePayrollMutation>;
export type CreatePayrollMutationResult = Apollo.MutationResult<CreatePayrollMutation>;
export type CreatePayrollMutationOptions = Apollo.BaseMutationOptions<CreatePayrollMutation, CreatePayrollMutationVariables>;
export const CreateStaffDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStaff"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_users_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StaffFragment"}}]}}]}},...StaffFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type CreateStaffMutationFn = Apollo.MutationFunction<CreateStaffMutation, CreateStaffMutationVariables>;

/**
 * __useCreateStaffMutation__
 *
 * To run a mutation, you first call `useCreateStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStaffMutation, { data, loading, error }] = useCreateStaffMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStaffMutation(baseOptions?: Apollo.MutationHookOptions<CreateStaffMutation, CreateStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStaffMutation, CreateStaffMutationVariables>(CreateStaffDocument, options);
      }
export type CreateStaffMutationHookResult = ReturnType<typeof useCreateStaffMutation>;
export type CreateStaffMutationResult = Apollo.MutationResult<CreateStaffMutation>;
export type CreateStaffMutationOptions = Apollo.BaseMutationOptions<CreateStaffMutation, CreateStaffMutationVariables>;
export const CreateWorkScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWorkSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"work_schedule_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_work_schedule_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkScheduleFragment"}}]}}]}},...WorkScheduleFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type CreateWorkScheduleMutationFn = Apollo.MutationFunction<CreateWorkScheduleMutation, CreateWorkScheduleMutationVariables>;

/**
 * __useCreateWorkScheduleMutation__
 *
 * To run a mutation, you first call `useCreateWorkScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkScheduleMutation, { data, loading, error }] = useCreateWorkScheduleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWorkScheduleMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkScheduleMutation, CreateWorkScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkScheduleMutation, CreateWorkScheduleMutationVariables>(CreateWorkScheduleDocument, options);
      }
export type CreateWorkScheduleMutationHookResult = ReturnType<typeof useCreateWorkScheduleMutation>;
export type CreateWorkScheduleMutationResult = Apollo.MutationResult<CreateWorkScheduleMutation>;
export type CreateWorkScheduleMutationOptions = Apollo.BaseMutationOptions<CreateWorkScheduleMutation, CreateWorkScheduleMutationVariables>;
export const DeleteAdjustmentRuleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAdjustmentRule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_adjustment_rules_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdjustmentRuleFragment"}}]}}]}},...AdjustmentRuleFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type DeleteAdjustmentRuleMutationFn = Apollo.MutationFunction<DeleteAdjustmentRuleMutation, DeleteAdjustmentRuleMutationVariables>;

/**
 * __useDeleteAdjustmentRuleMutation__
 *
 * To run a mutation, you first call `useDeleteAdjustmentRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdjustmentRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdjustmentRuleMutation, { data, loading, error }] = useDeleteAdjustmentRuleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAdjustmentRuleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdjustmentRuleMutation, DeleteAdjustmentRuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAdjustmentRuleMutation, DeleteAdjustmentRuleMutationVariables>(DeleteAdjustmentRuleDocument, options);
      }
export type DeleteAdjustmentRuleMutationHookResult = ReturnType<typeof useDeleteAdjustmentRuleMutation>;
export type DeleteAdjustmentRuleMutationResult = Apollo.MutationResult<DeleteAdjustmentRuleMutation>;
export type DeleteAdjustmentRuleMutationOptions = Apollo.BaseMutationOptions<DeleteAdjustmentRuleMutation, DeleteAdjustmentRuleMutationVariables>;
export const DeleteClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_clients_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClientFragment"}}]}}]}},...ClientFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type DeleteClientMutationFn = Apollo.MutationFunction<DeleteClientMutation, DeleteClientMutationVariables>;

/**
 * __useDeleteClientMutation__
 *
 * To run a mutation, you first call `useDeleteClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClientMutation, { data, loading, error }] = useDeleteClientMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteClientMutation(baseOptions?: Apollo.MutationHookOptions<DeleteClientMutation, DeleteClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteClientMutation, DeleteClientMutationVariables>(DeleteClientDocument, options);
      }
export type DeleteClientMutationHookResult = ReturnType<typeof useDeleteClientMutation>;
export type DeleteClientMutationResult = Apollo.MutationResult<DeleteClientMutation>;
export type DeleteClientMutationOptions = Apollo.BaseMutationOptions<DeleteClientMutation, DeleteClientMutationVariables>;
export const DeletePayrollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePayroll"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_payrolls_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}}]}}]}},...PayrollFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type DeletePayrollMutationFn = Apollo.MutationFunction<DeletePayrollMutation, DeletePayrollMutationVariables>;

/**
 * __useDeletePayrollMutation__
 *
 * To run a mutation, you first call `useDeletePayrollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePayrollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePayrollMutation, { data, loading, error }] = useDeletePayrollMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePayrollMutation(baseOptions?: Apollo.MutationHookOptions<DeletePayrollMutation, DeletePayrollMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePayrollMutation, DeletePayrollMutationVariables>(DeletePayrollDocument, options);
      }
export type DeletePayrollMutationHookResult = ReturnType<typeof useDeletePayrollMutation>;
export type DeletePayrollMutationResult = Apollo.MutationResult<DeletePayrollMutation>;
export type DeletePayrollMutationOptions = Apollo.BaseMutationOptions<DeletePayrollMutation, DeletePayrollMutationVariables>;
export const DeleteStaffDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteStaff"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StaffFragment"}}]}}]}},...StaffFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type DeleteStaffMutationFn = Apollo.MutationFunction<DeleteStaffMutation, DeleteStaffMutationVariables>;

/**
 * __useDeleteStaffMutation__
 *
 * To run a mutation, you first call `useDeleteStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStaffMutation, { data, loading, error }] = useDeleteStaffMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStaffMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStaffMutation, DeleteStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStaffMutation, DeleteStaffMutationVariables>(DeleteStaffDocument, options);
      }
export type DeleteStaffMutationHookResult = ReturnType<typeof useDeleteStaffMutation>;
export type DeleteStaffMutationResult = Apollo.MutationResult<DeleteStaffMutation>;
export type DeleteStaffMutationOptions = Apollo.BaseMutationOptions<DeleteStaffMutation, DeleteStaffMutationVariables>;
export const GeneratePayrollDatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GeneratePayrollDates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payroll_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"original_eft_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adjusted_eft_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processing_date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notes"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_payroll_dates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"payroll_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payroll_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"original_eft_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"original_eft_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"adjusted_eft_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adjusted_eft_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"processing_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processing_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"notes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notes"}}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollDateFragment"}}]}}]}}]}},...PayrollDateFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type GeneratePayrollDatesMutationFn = Apollo.MutationFunction<GeneratePayrollDatesMutation, GeneratePayrollDatesMutationVariables>;

/**
 * __useGeneratePayrollDatesMutation__
 *
 * To run a mutation, you first call `useGeneratePayrollDatesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGeneratePayrollDatesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generatePayrollDatesMutation, { data, loading, error }] = useGeneratePayrollDatesMutation({
 *   variables: {
 *      payroll_id: // value for 'payroll_id'
 *      original_eft_date: // value for 'original_eft_date'
 *      adjusted_eft_date: // value for 'adjusted_eft_date'
 *      processing_date: // value for 'processing_date'
 *      notes: // value for 'notes'
 *   },
 * });
 */
export function useGeneratePayrollDatesMutation(baseOptions?: Apollo.MutationHookOptions<GeneratePayrollDatesMutation, GeneratePayrollDatesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GeneratePayrollDatesMutation, GeneratePayrollDatesMutationVariables>(GeneratePayrollDatesDocument, options);
      }
export type GeneratePayrollDatesMutationHookResult = ReturnType<typeof useGeneratePayrollDatesMutation>;
export type GeneratePayrollDatesMutationResult = Apollo.MutationResult<GeneratePayrollDatesMutation>;
export type GeneratePayrollDatesMutationOptions = Apollo.BaseMutationOptions<GeneratePayrollDatesMutation, GeneratePayrollDatesMutationVariables>;
export const InsertBulkPayrollDatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertBulkPayrollDates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_dates_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_payroll_dates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollDateFragment"}}]}}]}}]}},...PayrollDateFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type InsertBulkPayrollDatesMutationFn = Apollo.MutationFunction<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>;

/**
 * __useInsertBulkPayrollDatesMutation__
 *
 * To run a mutation, you first call `useInsertBulkPayrollDatesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertBulkPayrollDatesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertBulkPayrollDatesMutation, { data, loading, error }] = useInsertBulkPayrollDatesMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInsertBulkPayrollDatesMutation(baseOptions?: Apollo.MutationHookOptions<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>(InsertBulkPayrollDatesDocument, options);
      }
export type InsertBulkPayrollDatesMutationHookResult = ReturnType<typeof useInsertBulkPayrollDatesMutation>;
export type InsertBulkPayrollDatesMutationResult = Apollo.MutationResult<InsertBulkPayrollDatesMutation>;
export type InsertBulkPayrollDatesMutationOptions = Apollo.BaseMutationOptions<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>;
export const InsertPayrollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertPayroll"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"payrolls_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_payrolls_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}}]}}]}},...PayrollFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type InsertPayrollMutationFn = Apollo.MutationFunction<InsertPayrollMutation, InsertPayrollMutationVariables>;

/**
 * __useInsertPayrollMutation__
 *
 * To run a mutation, you first call `useInsertPayrollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPayrollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPayrollMutation, { data, loading, error }] = useInsertPayrollMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInsertPayrollMutation(baseOptions?: Apollo.MutationHookOptions<InsertPayrollMutation, InsertPayrollMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertPayrollMutation, InsertPayrollMutationVariables>(InsertPayrollDocument, options);
      }
export type InsertPayrollMutationHookResult = ReturnType<typeof useInsertPayrollMutation>;
export type InsertPayrollMutationResult = Apollo.MutationResult<InsertPayrollMutation>;
export type InsertPayrollMutationOptions = Apollo.BaseMutationOptions<InsertPayrollMutation, InsertPayrollMutationVariables>;
export const SyncHolidaysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SyncHolidays"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"holidays_insert_input"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"holidays_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_holidays"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HolidayFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}},...HolidayFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type SyncHolidaysMutationFn = Apollo.MutationFunction<SyncHolidaysMutation, SyncHolidaysMutationVariables>;

/**
 * __useSyncHolidaysMutation__
 *
 * To run a mutation, you first call `useSyncHolidaysMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncHolidaysMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncHolidaysMutation, { data, loading, error }] = useSyncHolidaysMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *      onConflict: // value for 'onConflict'
 *   },
 * });
 */
export function useSyncHolidaysMutation(baseOptions?: Apollo.MutationHookOptions<SyncHolidaysMutation, SyncHolidaysMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SyncHolidaysMutation, SyncHolidaysMutationVariables>(SyncHolidaysDocument, options);
      }
export type SyncHolidaysMutationHookResult = ReturnType<typeof useSyncHolidaysMutation>;
export type SyncHolidaysMutationResult = Apollo.MutationResult<SyncHolidaysMutation>;
export type SyncHolidaysMutationOptions = Apollo.BaseMutationOptions<SyncHolidaysMutation, SyncHolidaysMutationVariables>;
export const UpdateAdjustmentRuleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAdjustmentRule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"adjustment_rules_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_adjustment_rules_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdjustmentRuleFragment"}}]}}]}},...AdjustmentRuleFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type UpdateAdjustmentRuleMutationFn = Apollo.MutationFunction<UpdateAdjustmentRuleMutation, UpdateAdjustmentRuleMutationVariables>;

/**
 * __useUpdateAdjustmentRuleMutation__
 *
 * To run a mutation, you first call `useUpdateAdjustmentRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdjustmentRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdjustmentRuleMutation, { data, loading, error }] = useUpdateAdjustmentRuleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAdjustmentRuleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdjustmentRuleMutation, UpdateAdjustmentRuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAdjustmentRuleMutation, UpdateAdjustmentRuleMutationVariables>(UpdateAdjustmentRuleDocument, options);
      }
export type UpdateAdjustmentRuleMutationHookResult = ReturnType<typeof useUpdateAdjustmentRuleMutation>;
export type UpdateAdjustmentRuleMutationResult = Apollo.MutationResult<UpdateAdjustmentRuleMutation>;
export type UpdateAdjustmentRuleMutationOptions = Apollo.BaseMutationOptions<UpdateAdjustmentRuleMutation, UpdateAdjustmentRuleMutationVariables>;
export const UpdateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"clients_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_clients_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClientFragment"}}]}}]}},...ClientFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type UpdateClientMutationFn = Apollo.MutationFunction<UpdateClientMutation, UpdateClientMutationVariables>;

/**
 * __useUpdateClientMutation__
 *
 * To run a mutation, you first call `useUpdateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClientMutation, { data, loading, error }] = useUpdateClientMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateClientMutation(baseOptions?: Apollo.MutationHookOptions<UpdateClientMutation, UpdateClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateClientMutation, UpdateClientMutationVariables>(UpdateClientDocument, options);
      }
export type UpdateClientMutationHookResult = ReturnType<typeof useUpdateClientMutation>;
export type UpdateClientMutationResult = Apollo.MutationResult<UpdateClientMutation>;
export type UpdateClientMutationOptions = Apollo.BaseMutationOptions<UpdateClientMutation, UpdateClientMutationVariables>;
export const UpdateLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLeave"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"leave_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_leave_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LeaveFragment"}}]}}]}},...LeaveFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type UpdateLeaveMutationFn = Apollo.MutationFunction<UpdateLeaveMutation, UpdateLeaveMutationVariables>;

/**
 * __useUpdateLeaveMutation__
 *
 * To run a mutation, you first call `useUpdateLeaveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLeaveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLeaveMutation, { data, loading, error }] = useUpdateLeaveMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLeaveMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLeaveMutation, UpdateLeaveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLeaveMutation, UpdateLeaveMutationVariables>(UpdateLeaveDocument, options);
      }
export type UpdateLeaveMutationHookResult = ReturnType<typeof useUpdateLeaveMutation>;
export type UpdateLeaveMutationResult = Apollo.MutationResult<UpdateLeaveMutation>;
export type UpdateLeaveMutationOptions = Apollo.BaseMutationOptions<UpdateLeaveMutation, UpdateLeaveMutationVariables>;
export const UpdateNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"notes_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_notes_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NoteFragment"}}]}}]}},...NoteFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type UpdateNoteMutationFn = Apollo.MutationFunction<UpdateNoteMutation, UpdateNoteMutationVariables>;

/**
 * __useUpdateNoteMutation__
 *
 * To run a mutation, you first call `useUpdateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoteMutation, { data, loading, error }] = useUpdateNoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateNoteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNoteMutation, UpdateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNoteMutation, UpdateNoteMutationVariables>(UpdateNoteDocument, options);
      }
export type UpdateNoteMutationHookResult = ReturnType<typeof useUpdateNoteMutation>;
export type UpdateNoteMutationResult = Apollo.MutationResult<UpdateNoteMutation>;
export type UpdateNoteMutationOptions = Apollo.BaseMutationOptions<UpdateNoteMutation, UpdateNoteMutationVariables>;
export const UpdatePayrollDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePayroll"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"payrolls_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_payrolls_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}}]}}]}},...PayrollFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type UpdatePayrollMutationFn = Apollo.MutationFunction<UpdatePayrollMutation, UpdatePayrollMutationVariables>;

/**
 * __useUpdatePayrollMutation__
 *
 * To run a mutation, you first call `useUpdatePayrollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePayrollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePayrollMutation, { data, loading, error }] = useUpdatePayrollMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePayrollMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePayrollMutation, UpdatePayrollMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePayrollMutation, UpdatePayrollMutationVariables>(UpdatePayrollDocument, options);
      }
export type UpdatePayrollMutationHookResult = ReturnType<typeof useUpdatePayrollMutation>;
export type UpdatePayrollMutationResult = Apollo.MutationResult<UpdatePayrollMutation>;
export type UpdatePayrollMutationOptions = Apollo.BaseMutationOptions<UpdatePayrollMutation, UpdatePayrollMutationVariables>;
export const UpdatePayrollDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePayrollDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_dates_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_payroll_dates_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollDateFragment"}}]}}]}},...PayrollDateFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type UpdatePayrollDateMutationFn = Apollo.MutationFunction<UpdatePayrollDateMutation, UpdatePayrollDateMutationVariables>;

/**
 * __useUpdatePayrollDateMutation__
 *
 * To run a mutation, you first call `useUpdatePayrollDateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePayrollDateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePayrollDateMutation, { data, loading, error }] = useUpdatePayrollDateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePayrollDateMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePayrollDateMutation, UpdatePayrollDateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePayrollDateMutation, UpdatePayrollDateMutationVariables>(UpdatePayrollDateDocument, options);
      }
export type UpdatePayrollDateMutationHookResult = ReturnType<typeof useUpdatePayrollDateMutation>;
export type UpdatePayrollDateMutationResult = Apollo.MutationResult<UpdatePayrollDateMutation>;
export type UpdatePayrollDateMutationOptions = Apollo.BaseMutationOptions<UpdatePayrollDateMutation, UpdatePayrollDateMutationVariables>;
export const UpdatePayrollStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePayrollStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_status"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_payrolls_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}}]}}]}},...PayrollFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type UpdatePayrollStatusMutationFn = Apollo.MutationFunction<UpdatePayrollStatusMutation, UpdatePayrollStatusMutationVariables>;

/**
 * __useUpdatePayrollStatusMutation__
 *
 * To run a mutation, you first call `useUpdatePayrollStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePayrollStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePayrollStatusMutation, { data, loading, error }] = useUpdatePayrollStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdatePayrollStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePayrollStatusMutation, UpdatePayrollStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePayrollStatusMutation, UpdatePayrollStatusMutationVariables>(UpdatePayrollStatusDocument, options);
      }
export type UpdatePayrollStatusMutationHookResult = ReturnType<typeof useUpdatePayrollStatusMutation>;
export type UpdatePayrollStatusMutationResult = Apollo.MutationResult<UpdatePayrollStatusMutation>;
export type UpdatePayrollStatusMutationOptions = Apollo.BaseMutationOptions<UpdatePayrollStatusMutation, UpdatePayrollStatusMutationVariables>;
export const UpdateStaffDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateStaff"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StaffFragment"}}]}}]}},...StaffFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type UpdateStaffMutationFn = Apollo.MutationFunction<UpdateStaffMutation, UpdateStaffMutationVariables>;

/**
 * __useUpdateStaffMutation__
 *
 * To run a mutation, you first call `useUpdateStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStaffMutation, { data, loading, error }] = useUpdateStaffMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateStaffMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStaffMutation, UpdateStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStaffMutation, UpdateStaffMutationVariables>(UpdateStaffDocument, options);
      }
export type UpdateStaffMutationHookResult = ReturnType<typeof useUpdateStaffMutation>;
export type UpdateStaffMutationResult = Apollo.MutationResult<UpdateStaffMutation>;
export type UpdateStaffMutationOptions = Apollo.BaseMutationOptions<UpdateStaffMutation, UpdateStaffMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StaffFragment"}}]}}]}},...StaffFragmentFragmentDoc.definitions]} as unknown as DocumentNode;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetAdjustmentRuleByCycleAndTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdjustmentRuleByCycleAndType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cycleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTypeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustment_rules"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"cycle_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cycleId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"date_type_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTypeId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdjustmentRuleFragment"}}]}}]}},...AdjustmentRuleFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetAdjustmentRuleByCycleAndTypeQuery__
 *
 * To run a query within a React component, call `useGetAdjustmentRuleByCycleAndTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdjustmentRuleByCycleAndTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdjustmentRuleByCycleAndTypeQuery({
 *   variables: {
 *      cycleId: // value for 'cycleId'
 *      dateTypeId: // value for 'dateTypeId'
 *   },
 * });
 */
export function useGetAdjustmentRuleByCycleAndTypeQuery(baseOptions: Apollo.QueryHookOptions<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables> & ({ variables: GetAdjustmentRuleByCycleAndTypeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>(GetAdjustmentRuleByCycleAndTypeDocument, options);
      }
export function useGetAdjustmentRuleByCycleAndTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>(GetAdjustmentRuleByCycleAndTypeDocument, options);
        }
export function useGetAdjustmentRuleByCycleAndTypeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>(GetAdjustmentRuleByCycleAndTypeDocument, options);
        }
export type GetAdjustmentRuleByCycleAndTypeQueryHookResult = ReturnType<typeof useGetAdjustmentRuleByCycleAndTypeQuery>;
export type GetAdjustmentRuleByCycleAndTypeLazyQueryHookResult = ReturnType<typeof useGetAdjustmentRuleByCycleAndTypeLazyQuery>;
export type GetAdjustmentRuleByCycleAndTypeSuspenseQueryHookResult = ReturnType<typeof useGetAdjustmentRuleByCycleAndTypeSuspenseQuery>;
export type GetAdjustmentRuleByCycleAndTypeQueryResult = Apollo.QueryResult<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>;
export const GetAdjustmentRulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdjustmentRules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustment_rules"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdjustmentRuleFragment"}}]}}]}},...AdjustmentRuleFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetAdjustmentRulesQuery__
 *
 * To run a query within a React component, call `useGetAdjustmentRulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdjustmentRulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdjustmentRulesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdjustmentRulesQuery(baseOptions?: Apollo.QueryHookOptions<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>(GetAdjustmentRulesDocument, options);
      }
export function useGetAdjustmentRulesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>(GetAdjustmentRulesDocument, options);
        }
export function useGetAdjustmentRulesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>(GetAdjustmentRulesDocument, options);
        }
export type GetAdjustmentRulesQueryHookResult = ReturnType<typeof useGetAdjustmentRulesQuery>;
export type GetAdjustmentRulesLazyQueryHookResult = ReturnType<typeof useGetAdjustmentRulesLazyQuery>;
export type GetAdjustmentRulesSuspenseQueryHookResult = ReturnType<typeof useGetAdjustmentRulesSuspenseQuery>;
export type GetAdjustmentRulesQueryResult = Apollo.QueryResult<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>;
export const GetAppSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAppSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"app_settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppSettingsFragment"}}]}}]}},...AppSettingsFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetAppSettingsQuery__
 *
 * To run a query within a React component, call `useGetAppSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAppSettingsQuery(baseOptions?: Apollo.QueryHookOptions<GetAppSettingsQuery, GetAppSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAppSettingsQuery, GetAppSettingsQueryVariables>(GetAppSettingsDocument, options);
      }
export function useGetAppSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAppSettingsQuery, GetAppSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAppSettingsQuery, GetAppSettingsQueryVariables>(GetAppSettingsDocument, options);
        }
export function useGetAppSettingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAppSettingsQuery, GetAppSettingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAppSettingsQuery, GetAppSettingsQueryVariables>(GetAppSettingsDocument, options);
        }
export type GetAppSettingsQueryHookResult = ReturnType<typeof useGetAppSettingsQuery>;
export type GetAppSettingsLazyQueryHookResult = ReturnType<typeof useGetAppSettingsLazyQuery>;
export type GetAppSettingsSuspenseQueryHookResult = ReturnType<typeof useGetAppSettingsSuspenseQuery>;
export type GetAppSettingsQueryResult = Apollo.QueryResult<GetAppSettingsQuery, GetAppSettingsQueryVariables>;
export const GetClientByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClientFragment"}},{"kind":"Field","name":{"kind":"Name","value":"payrolls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}}]}}]}}]}},...ClientFragmentFragmentDoc.definitions,...PayrollFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetClientByIdQuery__
 *
 * To run a query within a React component, call `useGetClientByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetClientByIdQuery(baseOptions: Apollo.QueryHookOptions<GetClientByIdQuery, GetClientByIdQueryVariables> & ({ variables: GetClientByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientByIdQuery, GetClientByIdQueryVariables>(GetClientByIdDocument, options);
      }
export function useGetClientByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientByIdQuery, GetClientByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientByIdQuery, GetClientByIdQueryVariables>(GetClientByIdDocument, options);
        }
export function useGetClientByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientByIdQuery, GetClientByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientByIdQuery, GetClientByIdQueryVariables>(GetClientByIdDocument, options);
        }
export type GetClientByIdQueryHookResult = ReturnType<typeof useGetClientByIdQuery>;
export type GetClientByIdLazyQueryHookResult = ReturnType<typeof useGetClientByIdLazyQuery>;
export type GetClientByIdSuspenseQueryHookResult = ReturnType<typeof useGetClientByIdSuspenseQuery>;
export type GetClientByIdQueryResult = Apollo.QueryResult<GetClientByIdQuery, GetClientByIdQueryVariables>;
export const GetClientExternalSystemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientExternalSystems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_external_systems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"client_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClientExternalSystemFragment"}}]}}]}},...ClientExternalSystemFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetClientExternalSystemsQuery__
 *
 * To run a query within a React component, call `useGetClientExternalSystemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientExternalSystemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientExternalSystemsQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useGetClientExternalSystemsQuery(baseOptions: Apollo.QueryHookOptions<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables> & ({ variables: GetClientExternalSystemsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>(GetClientExternalSystemsDocument, options);
      }
export function useGetClientExternalSystemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>(GetClientExternalSystemsDocument, options);
        }
export function useGetClientExternalSystemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>(GetClientExternalSystemsDocument, options);
        }
export type GetClientExternalSystemsQueryHookResult = ReturnType<typeof useGetClientExternalSystemsQuery>;
export type GetClientExternalSystemsLazyQueryHookResult = ReturnType<typeof useGetClientExternalSystemsLazyQuery>;
export type GetClientExternalSystemsSuspenseQueryHookResult = ReturnType<typeof useGetClientExternalSystemsSuspenseQuery>;
export type GetClientExternalSystemsQueryResult = Apollo.QueryResult<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>;
export const GetClientStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"active_clients"},"name":{"kind":"Name","value":"clients_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"clients_with_payrolls"},"name":{"kind":"Name","value":"clients_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"payrolls"},"value":{"kind":"ObjectValue","fields":[]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetClientStatisticsQuery__
 *
 * To run a query within a React component, call `useGetClientStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClientStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>(GetClientStatisticsDocument, options);
      }
export function useGetClientStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>(GetClientStatisticsDocument, options);
        }
export function useGetClientStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>(GetClientStatisticsDocument, options);
        }
export type GetClientStatisticsQueryHookResult = ReturnType<typeof useGetClientStatisticsQuery>;
export type GetClientStatisticsLazyQueryHookResult = ReturnType<typeof useGetClientStatisticsLazyQuery>;
export type GetClientStatisticsSuspenseQueryHookResult = ReturnType<typeof useGetClientStatisticsSuspenseQuery>;
export type GetClientStatisticsQueryResult = Apollo.QueryResult<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>;
export const GetClientsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClientFragment"}}]}}]}},...ClientFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetClientsListQuery__
 *
 * To run a query within a React component, call `useGetClientsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClientsListQuery(baseOptions?: Apollo.QueryHookOptions<GetClientsListQuery, GetClientsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientsListQuery, GetClientsListQueryVariables>(GetClientsListDocument, options);
      }
export function useGetClientsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientsListQuery, GetClientsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientsListQuery, GetClientsListQueryVariables>(GetClientsListDocument, options);
        }
export function useGetClientsListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientsListQuery, GetClientsListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientsListQuery, GetClientsListQueryVariables>(GetClientsListDocument, options);
        }
export type GetClientsListQueryHookResult = ReturnType<typeof useGetClientsListQuery>;
export type GetClientsListLazyQueryHookResult = ReturnType<typeof useGetClientsListLazyQuery>;
export type GetClientsListSuspenseQueryHookResult = ReturnType<typeof useGetClientsListSuspenseQuery>;
export type GetClientsListQueryResult = Apollo.QueryResult<GetClientsListQuery, GetClientsListQueryVariables>;
export const GetDashboardDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDashboardData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payrolls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"primary_consultant_user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"backup_consultant_user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"manager_user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_dates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"processing_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"processing_date"},"value":{"kind":"EnumValue","value":"asc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"processing_date"}},{"kind":"Field","name":{"kind":"Name","value":"adjusted_eft_date"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"holidays"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"country_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"AU","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"EnumValue","value":"asc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HolidayFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"leave"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start_date"},"value":{"kind":"EnumValue","value":"asc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LeaveFragment"}}]}}]}},...PayrollFragmentFragmentDoc.definitions,...HolidayFragmentFragmentDoc.definitions,...LeaveFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetDashboardDataQuery__
 *
 * To run a query within a React component, call `useGetDashboardDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDashboardDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDashboardDataQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetDashboardDataQuery(baseOptions: Apollo.QueryHookOptions<GetDashboardDataQuery, GetDashboardDataQueryVariables> & ({ variables: GetDashboardDataQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDashboardDataQuery, GetDashboardDataQueryVariables>(GetDashboardDataDocument, options);
      }
export function useGetDashboardDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDashboardDataQuery, GetDashboardDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDashboardDataQuery, GetDashboardDataQueryVariables>(GetDashboardDataDocument, options);
        }
export function useGetDashboardDataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetDashboardDataQuery, GetDashboardDataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDashboardDataQuery, GetDashboardDataQueryVariables>(GetDashboardDataDocument, options);
        }
export type GetDashboardDataQueryHookResult = ReturnType<typeof useGetDashboardDataQuery>;
export type GetDashboardDataLazyQueryHookResult = ReturnType<typeof useGetDashboardDataLazyQuery>;
export type GetDashboardDataSuspenseQueryHookResult = ReturnType<typeof useGetDashboardDataSuspenseQuery>;
export type GetDashboardDataQueryResult = Apollo.QueryResult<GetDashboardDataQuery, GetDashboardDataQueryVariables>;
export const GetExternalSystemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExternalSystems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"external_systems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalSystemFragment"}}]}}]}},...ExternalSystemFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetExternalSystemsQuery__
 *
 * To run a query within a React component, call `useGetExternalSystemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExternalSystemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExternalSystemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExternalSystemsQuery(baseOptions?: Apollo.QueryHookOptions<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>(GetExternalSystemsDocument, options);
      }
export function useGetExternalSystemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>(GetExternalSystemsDocument, options);
        }
export function useGetExternalSystemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>(GetExternalSystemsDocument, options);
        }
export type GetExternalSystemsQueryHookResult = ReturnType<typeof useGetExternalSystemsQuery>;
export type GetExternalSystemsLazyQueryHookResult = ReturnType<typeof useGetExternalSystemsLazyQuery>;
export type GetExternalSystemsSuspenseQueryHookResult = ReturnType<typeof useGetExternalSystemsSuspenseQuery>;
export type GetExternalSystemsQueryResult = Apollo.QueryResult<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>;
export const GetFeatureFlagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFeatureFlags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feature_flags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FeatureFlagFragment"}}]}}]}},...FeatureFlagFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetFeatureFlagsQuery__
 *
 * To run a query within a React component, call `useGetFeatureFlagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeatureFlagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeatureFlagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeatureFlagsQuery(baseOptions?: Apollo.QueryHookOptions<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>(GetFeatureFlagsDocument, options);
      }
export function useGetFeatureFlagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>(GetFeatureFlagsDocument, options);
        }
export function useGetFeatureFlagsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>(GetFeatureFlagsDocument, options);
        }
export type GetFeatureFlagsQueryHookResult = ReturnType<typeof useGetFeatureFlagsQuery>;
export type GetFeatureFlagsLazyQueryHookResult = ReturnType<typeof useGetFeatureFlagsLazyQuery>;
export type GetFeatureFlagsSuspenseQueryHookResult = ReturnType<typeof useGetFeatureFlagsSuspenseQuery>;
export type GetFeatureFlagsQueryResult = Apollo.QueryResult<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>;
export const GetHolidaysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holidays"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HolidayFragment"}}]}}]}},...HolidayFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetHolidaysQuery__
 *
 * To run a query within a React component, call `useGetHolidaysQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHolidaysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHolidaysQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHolidaysQuery(baseOptions?: Apollo.QueryHookOptions<GetHolidaysQuery, GetHolidaysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHolidaysQuery, GetHolidaysQueryVariables>(GetHolidaysDocument, options);
      }
export function useGetHolidaysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHolidaysQuery, GetHolidaysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHolidaysQuery, GetHolidaysQueryVariables>(GetHolidaysDocument, options);
        }
export function useGetHolidaysSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHolidaysQuery, GetHolidaysQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHolidaysQuery, GetHolidaysQueryVariables>(GetHolidaysDocument, options);
        }
export type GetHolidaysQueryHookResult = ReturnType<typeof useGetHolidaysQuery>;
export type GetHolidaysLazyQueryHookResult = ReturnType<typeof useGetHolidaysLazyQuery>;
export type GetHolidaysSuspenseQueryHookResult = ReturnType<typeof useGetHolidaysSuspenseQuery>;
export type GetHolidaysQueryResult = Apollo.QueryResult<GetHolidaysQuery, GetHolidaysQueryVariables>;
export const GetHolidaysByCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHolidaysByCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"country_code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bpchar"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holidays"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"country_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"country_code"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HolidayFragment"}}]}}]}},...HolidayFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetHolidaysByCountryQuery__
 *
 * To run a query within a React component, call `useGetHolidaysByCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHolidaysByCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHolidaysByCountryQuery({
 *   variables: {
 *      country_code: // value for 'country_code'
 *   },
 * });
 */
export function useGetHolidaysByCountryQuery(baseOptions: Apollo.QueryHookOptions<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables> & ({ variables: GetHolidaysByCountryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>(GetHolidaysByCountryDocument, options);
      }
export function useGetHolidaysByCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>(GetHolidaysByCountryDocument, options);
        }
export function useGetHolidaysByCountrySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>(GetHolidaysByCountryDocument, options);
        }
export type GetHolidaysByCountryQueryHookResult = ReturnType<typeof useGetHolidaysByCountryQuery>;
export type GetHolidaysByCountryLazyQueryHookResult = ReturnType<typeof useGetHolidaysByCountryLazyQuery>;
export type GetHolidaysByCountrySuspenseQueryHookResult = ReturnType<typeof useGetHolidaysByCountrySuspenseQuery>;
export type GetHolidaysByCountryQueryResult = Apollo.QueryResult<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>;
export const GetLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeave"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leave"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LeaveFragment"}}]}}]}},...LeaveFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetLeaveQuery__
 *
 * To run a query within a React component, call `useGetLeaveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLeaveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeaveQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetLeaveQuery(baseOptions?: Apollo.QueryHookOptions<GetLeaveQuery, GetLeaveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLeaveQuery, GetLeaveQueryVariables>(GetLeaveDocument, options);
      }
export function useGetLeaveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLeaveQuery, GetLeaveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLeaveQuery, GetLeaveQueryVariables>(GetLeaveDocument, options);
        }
export function useGetLeaveSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLeaveQuery, GetLeaveQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLeaveQuery, GetLeaveQueryVariables>(GetLeaveDocument, options);
        }
export type GetLeaveQueryHookResult = ReturnType<typeof useGetLeaveQuery>;
export type GetLeaveLazyQueryHookResult = ReturnType<typeof useGetLeaveLazyQuery>;
export type GetLeaveSuspenseQueryHookResult = ReturnType<typeof useGetLeaveSuspenseQuery>;
export type GetLeaveQueryResult = Apollo.QueryResult<GetLeaveQuery, GetLeaveQueryVariables>;
export const GetLeaveStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaveStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leave_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leave_type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetLeaveStatisticsQuery__
 *
 * To run a query within a React component, call `useGetLeaveStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLeaveStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeaveStatisticsQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetLeaveStatisticsQuery(baseOptions: Apollo.QueryHookOptions<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables> & ({ variables: GetLeaveStatisticsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>(GetLeaveStatisticsDocument, options);
      }
export function useGetLeaveStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>(GetLeaveStatisticsDocument, options);
        }
export function useGetLeaveStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>(GetLeaveStatisticsDocument, options);
        }
export type GetLeaveStatisticsQueryHookResult = ReturnType<typeof useGetLeaveStatisticsQuery>;
export type GetLeaveStatisticsLazyQueryHookResult = ReturnType<typeof useGetLeaveStatisticsLazyQuery>;
export type GetLeaveStatisticsSuspenseQueryHookResult = ReturnType<typeof useGetLeaveStatisticsSuspenseQuery>;
export type GetLeaveStatisticsQueryResult = Apollo.QueryResult<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>;
export const GetNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entityType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"entity_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entityId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"entity_type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entityType"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NoteFragment"}}]}}]}},...NoteFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetNotesQuery__
 *
 * To run a query within a React component, call `useGetNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotesQuery({
 *   variables: {
 *      entityId: // value for 'entityId'
 *      entityType: // value for 'entityType'
 *   },
 * });
 */
export function useGetNotesQuery(baseOptions: Apollo.QueryHookOptions<GetNotesQuery, GetNotesQueryVariables> & ({ variables: GetNotesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNotesQuery, GetNotesQueryVariables>(GetNotesDocument, options);
      }
export function useGetNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNotesQuery, GetNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNotesQuery, GetNotesQueryVariables>(GetNotesDocument, options);
        }
export function useGetNotesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetNotesQuery, GetNotesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNotesQuery, GetNotesQueryVariables>(GetNotesDocument, options);
        }
export type GetNotesQueryHookResult = ReturnType<typeof useGetNotesQuery>;
export type GetNotesLazyQueryHookResult = ReturnType<typeof useGetNotesLazyQuery>;
export type GetNotesSuspenseQueryHookResult = ReturnType<typeof useGetNotesSuspenseQuery>;
export type GetNotesQueryResult = Apollo.QueryResult<GetNotesQuery, GetNotesQueryVariables>;
export const GetPayrollByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPayrollById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payrolls_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollDetailFragment"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_dates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollDateFragment"}}]}}]}}]}},...PayrollDetailFragmentFragmentDoc.definitions,...PayrollDateFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetPayrollByIdQuery__
 *
 * To run a query within a React component, call `useGetPayrollByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPayrollByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPayrollByIdQuery, GetPayrollByIdQueryVariables> & ({ variables: GetPayrollByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>(GetPayrollByIdDocument, options);
      }
export function useGetPayrollByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>(GetPayrollByIdDocument, options);
        }
export function useGetPayrollByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>(GetPayrollByIdDocument, options);
        }
export type GetPayrollByIdQueryHookResult = ReturnType<typeof useGetPayrollByIdQuery>;
export type GetPayrollByIdLazyQueryHookResult = ReturnType<typeof useGetPayrollByIdLazyQuery>;
export type GetPayrollByIdSuspenseQueryHookResult = ReturnType<typeof useGetPayrollByIdSuspenseQuery>;
export type GetPayrollByIdQueryResult = Apollo.QueryResult<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>;
export const GetPayrollCyclesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPayrollCycles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payroll_cycles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollCycleFragment"}},{"kind":"Field","name":{"kind":"Name","value":"adjustment_rules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date_type_id"}},{"kind":"Field","name":{"kind":"Name","value":"rule_code"}},{"kind":"Field","name":{"kind":"Name","value":"rule_description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payrolls_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}},...PayrollCycleFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetPayrollCyclesQuery__
 *
 * To run a query within a React component, call `useGetPayrollCyclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollCyclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollCyclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPayrollCyclesQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>(GetPayrollCyclesDocument, options);
      }
export function useGetPayrollCyclesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>(GetPayrollCyclesDocument, options);
        }
export function useGetPayrollCyclesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>(GetPayrollCyclesDocument, options);
        }
export type GetPayrollCyclesQueryHookResult = ReturnType<typeof useGetPayrollCyclesQuery>;
export type GetPayrollCyclesLazyQueryHookResult = ReturnType<typeof useGetPayrollCyclesLazyQuery>;
export type GetPayrollCyclesSuspenseQueryHookResult = ReturnType<typeof useGetPayrollCyclesSuspenseQuery>;
export type GetPayrollCyclesQueryResult = Apollo.QueryResult<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>;
export const GetPayrollDateTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPayrollDateTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payroll_date_types"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollDateTypeFragment"}},{"kind":"Field","name":{"kind":"Name","value":"adjustment_rules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cycle_id"}},{"kind":"Field","name":{"kind":"Name","value":"rule_code"}},{"kind":"Field","name":{"kind":"Name","value":"rule_description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payrolls_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}},...PayrollDateTypeFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetPayrollDateTypesQuery__
 *
 * To run a query within a React component, call `useGetPayrollDateTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollDateTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollDateTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPayrollDateTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>(GetPayrollDateTypesDocument, options);
      }
export function useGetPayrollDateTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>(GetPayrollDateTypesDocument, options);
        }
export function useGetPayrollDateTypesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>(GetPayrollDateTypesDocument, options);
        }
export type GetPayrollDateTypesQueryHookResult = ReturnType<typeof useGetPayrollDateTypesQuery>;
export type GetPayrollDateTypesLazyQueryHookResult = ReturnType<typeof useGetPayrollDateTypesLazyQuery>;
export type GetPayrollDateTypesSuspenseQueryHookResult = ReturnType<typeof useGetPayrollDateTypesSuspenseQuery>;
export type GetPayrollDateTypesQueryResult = Apollo.QueryResult<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>;
export const GetPayrollDatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPayrollDates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payrollId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payroll_dates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"payroll_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payrollId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"original_eft_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"original_eft_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"original_eft_date"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollDateFragment"}}]}}]}},...PayrollDateFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetPayrollDatesQuery__
 *
 * To run a query within a React component, call `useGetPayrollDatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollDatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollDatesQuery({
 *   variables: {
 *      payrollId: // value for 'payrollId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetPayrollDatesQuery(baseOptions: Apollo.QueryHookOptions<GetPayrollDatesQuery, GetPayrollDatesQueryVariables> & ({ variables: GetPayrollDatesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>(GetPayrollDatesDocument, options);
      }
export function useGetPayrollDatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>(GetPayrollDatesDocument, options);
        }
export function useGetPayrollDatesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>(GetPayrollDatesDocument, options);
        }
export type GetPayrollDatesQueryHookResult = ReturnType<typeof useGetPayrollDatesQuery>;
export type GetPayrollDatesLazyQueryHookResult = ReturnType<typeof useGetPayrollDatesLazyQuery>;
export type GetPayrollDatesSuspenseQueryHookResult = ReturnType<typeof useGetPayrollDatesSuspenseQuery>;
export type GetPayrollDatesQueryResult = Apollo.QueryResult<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>;
export const GetPayrollListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPayrollList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"payrolls_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payrolls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payroll_cycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payroll_date_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},...PayrollFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetPayrollListQuery__
 *
 * To run a query within a React component, call `useGetPayrollListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollListQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetPayrollListQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollListQuery, GetPayrollListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollListQuery, GetPayrollListQueryVariables>(GetPayrollListDocument, options);
      }
export function useGetPayrollListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollListQuery, GetPayrollListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollListQuery, GetPayrollListQueryVariables>(GetPayrollListDocument, options);
        }
export function useGetPayrollListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollListQuery, GetPayrollListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollListQuery, GetPayrollListQueryVariables>(GetPayrollListDocument, options);
        }
export type GetPayrollListQueryHookResult = ReturnType<typeof useGetPayrollListQuery>;
export type GetPayrollListLazyQueryHookResult = ReturnType<typeof useGetPayrollListLazyQuery>;
export type GetPayrollListSuspenseQueryHookResult = ReturnType<typeof useGetPayrollListSuspenseQuery>;
export type GetPayrollListQueryResult = Apollo.QueryResult<GetPayrollListQuery, GetPayrollListQueryVariables>;
export const GetPayrollStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPayrollStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payrolls_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"active_payrolls"},"name":{"kind":"Name","value":"payrolls_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"Active","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"implementation_payrolls"},"name":{"kind":"Name","value":"payrolls_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"Implementation","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"inactive_payrolls"},"name":{"kind":"Name","value":"payrolls_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"Inactive","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetPayrollStatisticsQuery__
 *
 * To run a query within a React component, call `useGetPayrollStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPayrollStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>(GetPayrollStatisticsDocument, options);
      }
export function useGetPayrollStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>(GetPayrollStatisticsDocument, options);
        }
export function useGetPayrollStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>(GetPayrollStatisticsDocument, options);
        }
export type GetPayrollStatisticsQueryHookResult = ReturnType<typeof useGetPayrollStatisticsQuery>;
export type GetPayrollStatisticsLazyQueryHookResult = ReturnType<typeof useGetPayrollStatisticsLazyQuery>;
export type GetPayrollStatisticsSuspenseQueryHookResult = ReturnType<typeof useGetPayrollStatisticsSuspenseQuery>;
export type GetPayrollStatisticsQueryResult = Apollo.QueryResult<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>;
export const GetPayrollsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPayrolls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payrolls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_cycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payroll_date_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},...PayrollFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetPayrollsQuery__
 *
 * To run a query within a React component, call `useGetPayrollsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPayrollsQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollsQuery, GetPayrollsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollsQuery, GetPayrollsQueryVariables>(GetPayrollsDocument, options);
      }
export function useGetPayrollsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollsQuery, GetPayrollsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollsQuery, GetPayrollsQueryVariables>(GetPayrollsDocument, options);
        }
export function useGetPayrollsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollsQuery, GetPayrollsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollsQuery, GetPayrollsQueryVariables>(GetPayrollsDocument, options);
        }
export type GetPayrollsQueryHookResult = ReturnType<typeof useGetPayrollsQuery>;
export type GetPayrollsLazyQueryHookResult = ReturnType<typeof useGetPayrollsLazyQuery>;
export type GetPayrollsSuspenseQueryHookResult = ReturnType<typeof useGetPayrollsSuspenseQuery>;
export type GetPayrollsQueryResult = Apollo.QueryResult<GetPayrollsQuery, GetPayrollsQueryVariables>;
export const GetPayrollsByMonthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPayrollsByMonth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payrolls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"payroll_dates"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"original_eft_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_dates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"original_eft_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollDateFragment"}}]}}]}}]}},...PayrollFragmentFragmentDoc.definitions,...PayrollDateFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetPayrollsByMonthQuery__
 *
 * To run a query within a React component, call `useGetPayrollsByMonthQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollsByMonthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollsByMonthQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetPayrollsByMonthQuery(baseOptions: Apollo.QueryHookOptions<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables> & ({ variables: GetPayrollsByMonthQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>(GetPayrollsByMonthDocument, options);
      }
export function useGetPayrollsByMonthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>(GetPayrollsByMonthDocument, options);
        }
export function useGetPayrollsByMonthSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>(GetPayrollsByMonthDocument, options);
        }
export type GetPayrollsByMonthQueryHookResult = ReturnType<typeof useGetPayrollsByMonthQuery>;
export type GetPayrollsByMonthLazyQueryHookResult = ReturnType<typeof useGetPayrollsByMonthLazyQuery>;
export type GetPayrollsByMonthSuspenseQueryHookResult = ReturnType<typeof useGetPayrollsByMonthSuspenseQuery>;
export type GetPayrollsByMonthQueryResult = Apollo.QueryResult<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>;
export const GetPayrollsMissingDatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPayrollsMissingDates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payrolls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_not"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"payroll_dates"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"original_eft_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"Active","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}}]}}]}},...PayrollFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetPayrollsMissingDatesQuery__
 *
 * To run a query within a React component, call `useGetPayrollsMissingDatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollsMissingDatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollsMissingDatesQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetPayrollsMissingDatesQuery(baseOptions: Apollo.QueryHookOptions<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables> & ({ variables: GetPayrollsMissingDatesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>(GetPayrollsMissingDatesDocument, options);
      }
export function useGetPayrollsMissingDatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>(GetPayrollsMissingDatesDocument, options);
        }
export function useGetPayrollsMissingDatesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>(GetPayrollsMissingDatesDocument, options);
        }
export type GetPayrollsMissingDatesQueryHookResult = ReturnType<typeof useGetPayrollsMissingDatesQuery>;
export type GetPayrollsMissingDatesLazyQueryHookResult = ReturnType<typeof useGetPayrollsMissingDatesLazyQuery>;
export type GetPayrollsMissingDatesSuspenseQueryHookResult = ReturnType<typeof useGetPayrollsMissingDatesSuspenseQuery>;
export type GetPayrollsMissingDatesQueryResult = Apollo.QueryResult<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>;
export const GetStaffByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStaffById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StaffFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StaffManagerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StaffLeaveFragment"}}]}}]}},...StaffFragmentFragmentDoc.definitions,...StaffManagerFragmentFragmentDoc.definitions,...StaffLeaveFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetStaffByIdQuery__
 *
 * To run a query within a React component, call `useGetStaffByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStaffByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStaffByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetStaffByIdQuery(baseOptions: Apollo.QueryHookOptions<GetStaffByIdQuery, GetStaffByIdQueryVariables> & ({ variables: GetStaffByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStaffByIdQuery, GetStaffByIdQueryVariables>(GetStaffByIdDocument, options);
      }
export function useGetStaffByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStaffByIdQuery, GetStaffByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStaffByIdQuery, GetStaffByIdQueryVariables>(GetStaffByIdDocument, options);
        }
export function useGetStaffByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStaffByIdQuery, GetStaffByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStaffByIdQuery, GetStaffByIdQueryVariables>(GetStaffByIdDocument, options);
        }
export type GetStaffByIdQueryHookResult = ReturnType<typeof useGetStaffByIdQuery>;
export type GetStaffByIdLazyQueryHookResult = ReturnType<typeof useGetStaffByIdLazyQuery>;
export type GetStaffByIdSuspenseQueryHookResult = ReturnType<typeof useGetStaffByIdSuspenseQuery>;
export type GetStaffByIdQueryResult = Apollo.QueryResult<GetStaffByIdQuery, GetStaffByIdQueryVariables>;
export const GetStaffListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStaffList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_staff"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StaffFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StaffManagerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StaffLeaveFragment"}}]}}]}},...StaffFragmentFragmentDoc.definitions,...StaffManagerFragmentFragmentDoc.definitions,...StaffLeaveFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetStaffListQuery__
 *
 * To run a query within a React component, call `useGetStaffListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStaffListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStaffListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStaffListQuery(baseOptions?: Apollo.QueryHookOptions<GetStaffListQuery, GetStaffListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStaffListQuery, GetStaffListQueryVariables>(GetStaffListDocument, options);
      }
export function useGetStaffListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStaffListQuery, GetStaffListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStaffListQuery, GetStaffListQueryVariables>(GetStaffListDocument, options);
        }
export function useGetStaffListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStaffListQuery, GetStaffListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStaffListQuery, GetStaffListQueryVariables>(GetStaffListDocument, options);
        }
export type GetStaffListQueryHookResult = ReturnType<typeof useGetStaffListQuery>;
export type GetStaffListLazyQueryHookResult = ReturnType<typeof useGetStaffListLazyQuery>;
export type GetStaffListSuspenseQueryHookResult = ReturnType<typeof useGetStaffListSuspenseQuery>;
export type GetStaffListQueryResult = Apollo.QueryResult<GetStaffListQuery, GetStaffListQueryVariables>;
export const GetUserPayrollsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserPayrolls"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payrolls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"primary_consultant_user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"backup_consultant_user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"manager_user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},...PayrollFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetUserPayrollsQuery__
 *
 * To run a query within a React component, call `useGetUserPayrollsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPayrollsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPayrollsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserPayrollsQuery(baseOptions: Apollo.QueryHookOptions<GetUserPayrollsQuery, GetUserPayrollsQueryVariables> & ({ variables: GetUserPayrollsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>(GetUserPayrollsDocument, options);
      }
export function useGetUserPayrollsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>(GetUserPayrollsDocument, options);
        }
export function useGetUserPayrollsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>(GetUserPayrollsDocument, options);
        }
export type GetUserPayrollsQueryHookResult = ReturnType<typeof useGetUserPayrollsQuery>;
export type GetUserPayrollsLazyQueryHookResult = ReturnType<typeof useGetUserPayrollsLazyQuery>;
export type GetUserPayrollsSuspenseQueryHookResult = ReturnType<typeof useGetUserPayrollsSuspenseQuery>;
export type GetUserPayrollsQueryResult = Apollo.QueryResult<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>;
export const GetUserWorkScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserWorkSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"work_schedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkScheduleFragment"}}]}}]}},...WorkScheduleFragmentFragmentDoc.definitions]} as unknown as DocumentNode;

/**
 * __useGetUserWorkScheduleQuery__
 *
 * To run a query within a React component, call `useGetUserWorkScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWorkScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWorkScheduleQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserWorkScheduleQuery(baseOptions: Apollo.QueryHookOptions<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables> & ({ variables: GetUserWorkScheduleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>(GetUserWorkScheduleDocument, options);
      }
export function useGetUserWorkScheduleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>(GetUserWorkScheduleDocument, options);
        }
export function useGetUserWorkScheduleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>(GetUserWorkScheduleDocument, options);
        }
export type GetUserWorkScheduleQueryHookResult = ReturnType<typeof useGetUserWorkScheduleQuery>;
export type GetUserWorkScheduleLazyQueryHookResult = ReturnType<typeof useGetUserWorkScheduleLazyQuery>;
export type GetUserWorkScheduleSuspenseQueryHookResult = ReturnType<typeof useGetUserWorkScheduleSuspenseQuery>;
export type GetUserWorkScheduleQueryResult = Apollo.QueryResult<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>;
export const SimpleTestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SimpleTest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useSimpleTestQuery__
 *
 * To run a query within a React component, call `useSimpleTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useSimpleTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSimpleTestQuery({
 *   variables: {
 *   },
 * });
 */
export function useSimpleTestQuery(baseOptions?: Apollo.QueryHookOptions<SimpleTestQuery, SimpleTestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SimpleTestQuery, SimpleTestQueryVariables>(SimpleTestDocument, options);
      }
export function useSimpleTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SimpleTestQuery, SimpleTestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SimpleTestQuery, SimpleTestQueryVariables>(SimpleTestDocument, options);
        }
export function useSimpleTestSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SimpleTestQuery, SimpleTestQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SimpleTestQuery, SimpleTestQueryVariables>(SimpleTestDocument, options);
        }
export type SimpleTestQueryHookResult = ReturnType<typeof useSimpleTestQuery>;
export type SimpleTestLazyQueryHookResult = ReturnType<typeof useSimpleTestLazyQuery>;
export type SimpleTestSuspenseQueryHookResult = ReturnType<typeof useSimpleTestSuspenseQuery>;
export type SimpleTestQueryResult = Apollo.QueryResult<SimpleTestQuery, SimpleTestQueryVariables>;
export const WithVariablesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WithVariables"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useWithVariablesQuery__
 *
 * To run a query within a React component, call `useWithVariablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWithVariablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWithVariablesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWithVariablesQuery(baseOptions: Apollo.QueryHookOptions<WithVariablesQuery, WithVariablesQueryVariables> & ({ variables: WithVariablesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WithVariablesQuery, WithVariablesQueryVariables>(WithVariablesDocument, options);
      }
export function useWithVariablesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WithVariablesQuery, WithVariablesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WithVariablesQuery, WithVariablesQueryVariables>(WithVariablesDocument, options);
        }
export function useWithVariablesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WithVariablesQuery, WithVariablesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WithVariablesQuery, WithVariablesQueryVariables>(WithVariablesDocument, options);
        }
export type WithVariablesQueryHookResult = ReturnType<typeof useWithVariablesQuery>;
export type WithVariablesLazyQueryHookResult = ReturnType<typeof useWithVariablesLazyQuery>;
export type WithVariablesSuspenseQueryHookResult = ReturnType<typeof useWithVariablesSuspenseQuery>;
export type WithVariablesQueryResult = Apollo.QueryResult<WithVariablesQuery, WithVariablesQueryVariables>;