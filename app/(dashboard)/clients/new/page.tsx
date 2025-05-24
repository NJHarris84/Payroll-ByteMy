// app/(dashboard)/clients/new/page.tsx
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useMutation } from "@apollo/client"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useUserRole } from '@/lib/hooks'
import { CREATE_CLIENT } from '@/lib/graphql'

export default function NewClientPage() {
  const router = useRouter()
  const { isAdmin, isManager } = useUserRole()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    active: true
  })

  const [createClient] = useMutation(CREATE_CLIENT, {
    onCompleted: (data) => {
      toast.success("Client created successfully!")
      router.push(`/clients/${data.createClient.id}`)
    },
    onError: (error) => {
      toast.error(`Error creating client: ${error.message}`)
      setIsLoading(false)
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleToggleActive = (checked: boolean) => {
    setFormData(prev => ({ ...prev, active: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    createClient({
      variables: {
        input: {
          name: formData.name,
          contact_person: formData.contactPerson,
          contact_email: formData.contactEmail,
          contact_phone: formData.contactPhone,
          active: formData.active
        }
      }
    })
  }

  // Check for permissions
  if (!isAdmin && !isManager) {
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">New Client</h2>
        <Card>
          <CardContent className="py-8">
            <p className="text-center text-muted-foreground">
              You don't have permission to create new clients.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">New Client</h2>
        <p className="text-muted-foreground">Add a new client to the system</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Client Information</CardTitle>
            <CardDescription>Enter the details for the new client</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Client Name</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="ABC Company"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contactPerson">Contact Person</Label>
              <Input 
                id="contactPerson" 
                name="contactPerson" 
                value={formData.contactPerson} 
                onChange={handleChange} 
                placeholder="John Smith"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input 
                id="contactEmail" 
                name="contactEmail" 
                type="email" 
                value={formData.contactEmail} 
                onChange={handleChange} 
                placeholder="john@abccompany.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contactPhone">Contact Phone</Label>
              <Input 
                id="contactPhone" 
                name="contactPhone" 
                value={formData.contactPhone} 
                onChange={handleChange} 
                placeholder="+61 123 456 789"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch 
                id="active" 
                checked={formData.active} 
                onCheckedChange={handleToggleActive} 
              />
              <Label htmlFor="active">Active Client</Label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => router.push('/clients')}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Client"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}