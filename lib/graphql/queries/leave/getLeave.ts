import { gql } from "@apollo/client";
import { LEAVE_FRAGMENT } from "../../fragments/leaveFragment";

export const GET_LEAVE = gql`
  query GetLeave($userId: uuid, $startDate: date, $endDate: date) {
    leaves(
      where: {
        user_id: { _eq: $userId }
        _or: [
          { start_date: { _gte: $startDate, _lte: $endDate } }
          { end_date: { _gte: $startDate, _lte: $endDate } }
          {
            _and: [
              { start_date: { _lte: $startDate } }
              { end_date: { _gte: $endDate } }
            ]
          }
        ]
      }
    ) {
      ...LeaveFragment
      user {
        id
        name
      }
    }
  }
  ${LEAVE_FRAGMENT}
`;
