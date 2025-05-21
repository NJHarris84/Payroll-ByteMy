// components/edit-payroll-dialog.tsx
'use client';

import { useState } from "react"
import { useMutation } from "@apollo/client"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { UPDATE_PAYROLL } from "@/graphql/mutations/payrolls/updatePayroll"
import { GET_PAYROLLS } from "@/graphql/queries/payrolls/getPayrolls"
import { GET_PAYROLL_BY_ID } from "@/graphql/queries/payrolls/getPayrollById"
import { handleMutationError } from "@/lib/error-handling"
import { toast } from "sonner"

// Define the interface for the component props
interface EditPayrollDialogProps {
  payroll: {
    id: string;
    name?: string;
    notes?: string;
  };
  // Add the trigger prop to the interface
  trigger: React.ReactNode;
  onSuccess?: () => void;
}

export function EditPayrollDialog({ 
  payroll, 
  trigger,
  onSuccess 
}: EditPayrollDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState(payroll.name || "")
  const [notes, setNotes] = useState(payroll.notes || "")

  const [updatePayroll, { loading: updating }] = useMutation(UPDATE_PAYROLL, {
    refetchQueries: [
      { 
        query: GET_PAYROLLS 
      },
      { 
        query: GET_PAYROLL_BY_ID,
        variables: { id: payroll.id } 
      }
    ],
    awaitRefetchQueries: true,
    onCompleted: () => {
      toast.success('Payroll updated successfully');
      setIsOpen(false);
      if (onSuccess) onSuccess();
    },
    onError: (error) => handleMutationError(error, "Failed to update payroll"),
    optimisticResponse: {
      update_payrolls_by_pk: {
        __typename: "payrolls",
        id: payroll.id,
        name: name,
        notes: notes.trim() || null,
        updated_at: new Date().toISOString()
      }
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      await updatePayroll({
        variables: {
          id: payroll.id,
          name: name.trim(),
          notes: notes.trim() || null
        }
      })
    } catch (error) {
      // Error is handled by onError callback
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Payroll</DialogTitle>
          <DialogDescription>
            Update payroll details.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="notes" className="text-right">
                Notes
              </Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="col-span-3"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={updating}>
              {updating ? "Updating..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
