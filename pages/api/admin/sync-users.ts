import { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";
import { syncAllUsers, syncUserById } from "@/lib/services/user-sync";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  
  // Verify the user is authenticated and has admin permissions
  const { userId } = await getAuth(req);
  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  
  // Verify admin permissions (you should implement this check)
  const isAdmin = await checkAdminPermissions(userId);
  if (!isAdmin) {
    return res.status(403).json({ error: "Forbidden - Admin access required" });
  }
  
  try {
    const { action, userId: targetUserId } = req.body;
    
    if (action === "syncAll") {
      const result = await syncAllUsers();
      return res.status(200).json(result);
    } else if (action === "syncUser" && targetUserId) {
      const result = await syncUserById(targetUserId);
      return res.status(200).json(result);
    } else {
      return res.status(400).json({ error: "Invalid action" });
    }
  } catch (error) {
    console.error("Error in sync-users API:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Helper function to check admin permissions
async function checkAdminPermissions(userId: string): Promise<boolean> {
  // Implement your permission check here
  // This could query your database to check user roles
  // For simplicity, you might start by allowing all authenticated users during development
  return true; // Replace with actual permission check
}