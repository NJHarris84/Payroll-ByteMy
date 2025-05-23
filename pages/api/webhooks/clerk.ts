import { WebhookEvent } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";
import { Webhook } from "svix";
import { adminApolloClient } from "@/lib/api/apollo-client";
import { gql } from "@apollo/client";

// Only allow POST requests
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Get the webhook signature from the request headers
  const svix_id = req.headers["svix-id"] as string;
  const svix_timestamp = req.headers["svix-timestamp"] as string;
  const svix_signature = req.headers["svix-signature"] as string;

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({ error: "Missing svix headers" });
  }

  // Get the Clerk webhook secret from env vars
  const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  if (!CLERK_WEBHOOK_SECRET) {
    return res.status(500).json({ error: "Missing CLERK_WEBHOOK_SECRET" });
  }

  // Create a new Svix instance with the webhook secret
  const wh = new Webhook(CLERK_WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    // Verify the webhook signature
    evt = wh.verify(
      JSON.stringify(req.body),
      {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }
    ) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return res.status(400).json({ error: "Invalid webhook signature" });
  }

  // Handle the webhook based on the event type
  try {
    const eventType = evt.type;
    console.log(`Processing webhook: ${eventType}`);

    if (eventType === "user.created") {
      await syncUserToDatabase(evt.data, "created");
    } else if (eventType === "user.updated") {
      await syncUserToDatabase(evt.data, "updated");
    } else if (eventType === "user.deleted") {
      await markUserDeleted(evt.data.id);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Extract user data from Clerk user object
function extractUserData(userData: any) {
  // Get primary email
  let email = null;
  if (userData.email_addresses && userData.email_addresses.length > 0) {
    const primaryEmail = userData.email_addresses.find(
      (email: any) => email.id === userData.primary_email_address_id
    );
    email = primaryEmail ? primaryEmail.email_address : userData.email_addresses[0].email_address;
  }

  return {
    id: userData.id,
    name: `${userData.first_name || ''} ${userData.last_name || ''}`.trim(),
    email: email,
    image: userData.image_url,
    createdAt: userData.created_at,
    updatedAt: new Date().toISOString()
  };
}

// Sync user to database
async function syncUserToDatabase(userData: any, action: "created" | "updated") {
  const user = extractUserData(userData);
  
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

  try {
    await adminApolloClient.mutate({
      mutation: UPSERT_USER,
      variables: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          created_at: action === "created" ? user.createdAt : undefined,
          updated_at: user.updatedAt
        }
      }
    });
    console.log(`User ${user.id} ${action} successfully`);
  } catch (error) {
    console.error(`Error ${action} user:`, error);
    throw error;
  }
}

// Mark user as deleted in database
async function markUserDeleted(userId: string) {
  const MARK_USER_DELETED = gql`
    mutation MarkUserDeleted($id: String!) {
      update_neon_auth_users_sync(
        where: { id: { _eq: $id } },
        _set: { deleted_at: "now()" }
      ) {
        affected_rows
      }
    }
  `;

  try {
    await adminApolloClient.mutate({
      mutation: MARK_USER_DELETED,
      variables: {
        id: userId
      }
    });
    console.log(`User ${userId} marked as deleted successfully`);
  } catch (error) {
    console.error("Error marking user as deleted:", error);
    throw error;
  }
}