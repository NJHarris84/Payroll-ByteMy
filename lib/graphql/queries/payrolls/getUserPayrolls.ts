import { gql } from "@apollo/client";
import { PAYROLL_FRAGMENT } from "../../fragments/payrollFragment";

export const GET_USER_PAYROLLS = gql`
  query GetUserPayrolls($userId: uuid!) {
    payrolls(
      where: {
        _or: [
          { primary_consultant_user_id: { _eq: $userId } },
          { backup_consultant_user_id: { _eq: $userId } },
          { manager_user_id: { _eq: $userId } }
        ]
      }
    ) {
      ...PayrollFragment
      client {
        id
        name
      }
    }
  }
  ${PAYROLL_FRAGMENT}
`;
