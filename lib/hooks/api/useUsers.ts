import { useQuery, useMutation } from '@apollo/client';
import {
  GET_USERS,
  GET_USER_BY_ID,
  GET_USERS_BY_ROLE,
} from '@/lib/graphql/queries/users';
import {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  UPDATE_USER_ROLE
} from '@/lib/graphql/mutations/users';

// Get all users
export function useUsers(options = {}) {
  return useQuery(GET_USERS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Get a specific user by ID
export function useUserById(id: string, options = {}) {
  return useQuery(GET_USER_BY_ID, {
    variables: { id },
    skip: !id,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Get users by role
export function useUsersByRole(role: string, options = {}) {
  return useQuery(GET_USERS_BY_ROLE, {
    variables: { role },
    skip: !role,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Create a new user
export function useCreateUser() {
  return useMutation(CREATE_USER, {
    refetchQueries: [{ query: GET_USERS }],
    update: (cache, { data: { insert_users_one } }) => {
      const newUser = insert_users_one;
      cache.modify({
        fields: {
          users(existingUsers = []) {
            const newUserRef = cache.writeFragment({
              data: newUser,
              fragment: USER_FRAGMENT
            });
            return [...existingUsers, newUserRef];
          }
        }
      });
    }
  });
}

// Update a user
export function useUpdateUser() {
  return useMutation(UPDATE_USER, {
    refetchQueries: [{ query: GET_USERS }]
  });
}

// Delete a user
export function useDeleteUser() {
  return useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }],
    update: (cache, { data: { delete_users_by_pk } }) => {
      cache.modify({
        fields: {
          users(existingUsers = [], { readField }) {
            return existingUsers.filter(
              userRef => readField('id', userRef) !== delete_users_by_pk.id
            );
          }
        }
      });
    }
  });
}

// Update user role
export function useUpdateUserRole() {
  return useMutation(UPDATE_USER_ROLE, {
    refetchQueries: [{ query: GET_USERS }]
  });
}
