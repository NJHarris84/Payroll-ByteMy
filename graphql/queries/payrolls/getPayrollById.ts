// graphql/queries/payrolls/getPayrollById.ts
import { gql } from "@apollo/client";
import { PAYROLL_FRAGMENT } from "../../fragments/payrollFragment";

export const GET_PAYROLL_BY_ID = gql`
  ${PAYROLL_FRAGMENT.PayrollFields}
  ${PAYROLL_FRAGMENT.PayrollDatesFields}
  
  query GetPayrollById($id: uuid!) {
    payrolls(where: {id: {_eq: $id}}) {
      ...PayrollFields
      client { 
        id
        name
        contact_email
        contact_person
        contact_phone
      }
      payroll_cycle {
        id
        name
      }
      payroll_date_type {
        id
        name
      }
      ...PayrollDatesFields
      userByBackupConsultantUserId {
        is_staff
        id
        name
        role
        email
      }
      userByManagerUserId {
        email
        id
        is_staff
        name
        role
      }
      userByPrimaryConsultantUserId {
        email
        id
        is_staff
        name
        role
      }
    }
  }
`;