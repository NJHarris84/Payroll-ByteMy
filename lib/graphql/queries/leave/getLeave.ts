import { gql } from "@apollo/client";
import { LEAVE_FRAGMENT } from "../../fragments/leaveFragment";

export const GET_LEAVE = gql`
  query GetLeave($userId: uuid, $startDate: date, $endDate: date) {
    leave(
      where: {
        user_id: { _eq: $userId }
        start_date: { _gte: $startDate }
        end_date: { _lte: $endDate }
      }
    ) {
      ...LeaveFragment
    }
  }
  ${LEAVE_FRAGMENT}
`;
