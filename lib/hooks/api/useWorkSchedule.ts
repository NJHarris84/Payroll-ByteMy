import { useQuery, useMutation } from '@apollo/client';
import {
  GET_WORK_SCHEDULES,
  GET_USER_WORK_SCHEDULE,
  GET_TEAM_WORK_SCHEDULES
} from '@/lib/graphql/queries/workSchedule';
import {
  CREATE_WORK_SCHEDULE,
  UPDATE_WORK_SCHEDULE,
  DELETE_WORK_SCHEDULE
} from '@/lib/graphql/mutations/workSchedule';

// Get all work schedules
export function useWorkSchedules(options = {}) {
  return useQuery(GET_WORK_SCHEDULES, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Get work schedule for a specific user
export function useUserWorkSchedule(userId: string, startDate?: string, endDate?: string, options = {}) {
  return useQuery(GET_USER_WORK_SCHEDULE, {
    variables: { userId, startDate, endDate },
    skip: !userId,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Get work schedules for a team
export function useTeamWorkSchedules(teamId: string, startDate?: string, endDate?: string, options = {}) {
  return useQuery(GET_TEAM_WORK_SCHEDULES, {
    variables: { teamId, startDate, endDate },
    skip: !teamId,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Create a new work schedule
export function useCreateWorkSchedule() {
  return useMutation(CREATE_WORK_SCHEDULE, {
    update: (cache, { data: { insert_work_schedules_one } }) => {
      const newSchedule = insert_work_schedules_one;
      cache.modify({
        fields: {
          work_schedules(existingSchedules = []) {
            const newScheduleRef = cache.writeFragment({
              data: newSchedule,
              fragment: WORK_SCHEDULE_FRAGMENT
            });
            return [...existingSchedules, newScheduleRef];
          }
        }
      });
    }
  });
}

// Update a work schedule
export function useUpdateWorkSchedule() {
  return useMutation(UPDATE_WORK_SCHEDULE);
}

// Delete a work schedule
export function useDeleteWorkSchedule() {
  return useMutation(DELETE_WORK_SCHEDULE, {
    update: (cache, { data: { delete_work_schedules_by_pk } }) => {
      cache.modify({
        fields: {
          work_schedules(existingSchedules = [], { readField }) {
            return existingSchedules.filter(
              scheduleRef => readField('id', scheduleRef) !== delete_work_schedules_by_pk.id
            );
          }
        }
      });
    }
  });
}
