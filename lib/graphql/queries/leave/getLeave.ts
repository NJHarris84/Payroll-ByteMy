import { gql } from "@apollo/client";
import { LEAVE_FRAGMENT } from "../../fragments/leaveFragment";

export const GET_LEAVE = gql`
  query GetLeave($staffId: uuid!, $startDate: date, $endDate: date) {
    leaves(
      where: {
        user_id: { _eq: $staffId }
        _and: [
          { start_date: { _gte: $startDate } }
          { end_date: { _lte: $endDate } }
        ]
      }
      order_by: { start_date: desc }
    ) {
      ...LeaveFragment
    }
  }
  ${LEAVE_FRAGMENT}
`;
