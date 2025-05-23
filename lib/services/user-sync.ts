// lib/user-sync.ts
import { clerkClient } from "@clerk/nextjs/server";
import { adminApolloClient } from "../api/apollo-client";
import { gql } from "@apollo/client";

// Query to find a user by Clerk ID
const GET_USER_BY_CLERK_ID = gql`
  query GetUserByClerkId($clerkId: String!) {
    users(where: { clerk_id: { _eq: $clerkId } }) {
      id
      clerk_id
      role
    }
  }
`;

// Create or update user mutation
const UPSERT_USER = gql`
  mutation UpsertUser($clerkId: String!, $name: String, $email: String) {
    insert_users_one(
      object: {
        clerk_id: $clerkId, 
        name: $name, 
        email: $email
      },
      on_conflict: {
        constraint: users_clerk_id_key, 
        update_columns: [name, email, updated_at]
      }
    ) {
      id
      clerk_id
      role
    }
  }
`;

export async function syncUserWithDatabase(clerkId: string, name: string, email: string) {
  try {
    // Check if user exists in database
    const { data: userData } = await adminApolloClient.query({
      query: GET_USER_BY_CLERK_ID,
      variables: { clerkId },
      fetchPolicy: 'network-only' // Don't use cache
    });

    let databaseUser = userData?.users?.[0] || null;
    
    // If user doesn't exist, create them
    if (!databaseUser && name && email) {
      const { data: newUserData } = await adminApolloClient.mutate({
        mutation: UPSERT_USER,
        variables: {
          clerkId,
          name,
          email
        }
      });
      
      databaseUser = newUserData?.insert_users_one;
      console.log("Created new user in database:", databaseUser);
    }
    
    // Update Clerk metadata with the role from database
    if (databaseUser?.role) {
      await clerkClient.users.updateUser(clerkId, {
        publicMetadata: {
          role: databaseUser.role
        }
      });
      console.log(`Updated Clerk metadata with role: ${databaseUser.role}`);
    }
    
    return databaseUser;
  } catch (error) {
    console.error("Error syncing user with database:", error);
    throw error;
  }
}

export async function deleteUserFromDatabase(clerkId: string) {
  const DELETE_USER = gql`
    mutation DeleteUser($clerkId: String!) {
      delete_users(where: {clerk_id: {_eq: $clerkId}}) {
        affected_rows
      }
    }
  `;
  
  try {
    const { data } = await adminApolloClient.mutate({
      mutation: DELETE_USER,
      variables: { clerkId }
    });
    
    return data?.delete_users?.affected_rows > 0;
  } catch (error) {
    console.error("Error deleting user from database:", error);
    throw error;
  }
}

// Sync all users from Clerk to database
export async function syncAllUsers() {
  try {
    // Get all users from Clerk
    const users = await clerkClient.users.getUserList({
      limit: 100 // Adjust as needed
    });
    
    // Sync each user
    for (const user of users) {
      await syncUser(user);
    }
    
    console.log(`Successfully synced ${users.length} users`);
    return { success: true, count: users.length };
  } catch (error) {
    console.error("Error syncing all users:", error);
    throw error;
  }
}

// Sync a specific user
export async function syncUserById(userId: string) {
  try {
    const user = await clerkClient.users.getUser(userId);
    await syncUser(user);
    return { success: true };
  } catch (error) {
    console.error(`Error syncing user ${userId}:`, error);
    throw error;
  }
}

// Helper function to sync a user
async function syncUser(userData: any) {
  // Extract relevant user data
  const user = {
    id: userData.id,
    name: `${userData.firstName || ''} ${userData.lastName || ''}`.trim(),
    email: getPrimaryEmail(userData),
    created_at: new Date(userData.createdAt).toISOString(),
    updated_at: new Date().toISOString()
  };
  
  const UPSERT_USER = gql`
    mutation UpsertUserSync($user: neon_auth_users_sync_insert_input!) {
      insert_neon_auth_users_sync_one(
        object: $user,
        on_conflict: {
          constraint: users_sync_id_key,
          update_columns: [name, email, updated_at]
        }
      ) {
        id
      }
    }
  `;
  
  await adminApolloClient.mutate({
    mutation: UPSERT_USER,
    variables: {
      user
    }
  });
  
  console.log(`User ${user.id} synced successfully`);
}

// Helper to get primary email
function getPrimaryEmail(userData: any): string | null {
  if (!userData.emailAddresses || userData.emailAddresses.length === 0) {
    return null;
  }
  
  const primaryEmail = userData.emailAddresses.find(
    (email: any) => email.id === userData.primaryEmailAddressId
  );
  
  return primaryEmail 
    ? primaryEmail.emailAddress 
    : userData.emailAddresses[0].emailAddress;
}
