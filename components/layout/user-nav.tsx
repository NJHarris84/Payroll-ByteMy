"use client"

import { useRouter } from "next/navigation";
import { useUser, useClerk } from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage, Button, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui";

export function UserNav() {
  const router = useRouter()
  const { user, isLoaded } = useUser()
  const { signOut } = useClerk()

  const getUserInitials = () => {
    if (!isLoaded || !user?.fullName) return "U"
    const parts = user.fullName.split(" ")
    return parts.length === 1
      ? parts[0].charAt(0).toUpperCase()
      : (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase()
  }

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  if (!isLoaded) return null // Don’t render anything until user data is loaded

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 flex items-center gap-2 rounded-full">
          <span className="hidden md:inline-block text-sm font-medium">
            {user.fullName}
          </span>
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.imageUrl || ""} alt={user.fullName || "User"} />
            <AvatarFallback>{getUserInitials()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.fullName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.primaryEmailAddress?.emailAddress || "email@example.com"}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/profile")}>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/settings/account")}>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
