// components/edit-payroll-dialog.tsx
'use client';

import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UPDATE_PAYROLL } from '@/lib/graphql/mutations/payrolls/updatePayroll';
import { CYCLE_TYPES } from '@/lib/services/payroll-service';

// Define the interface for the component props
interface EditPayrollDialogProps {
  isOpen: boolean;
  onClose: () => void;
  payroll: {
    id: string;
    name: string;
    cycle_type: number;
    status: string;
  };
  onSuccess?: () => void;
}

export function EditPayrollDialog({ isOpen, onClose, payroll, onSuccess }: EditPayrollDialogProps) {
  // Form state
  const [formData, setFormData] = useState({
    name: payroll.name,
    cycleType: payroll.cycle_type.toString(),
    status: payroll.status.toLowerCase(),
  });

  // Update payroll mutation
  const [updatePayroll, { loading }] = useMutation(UPDATE_PAYROLL, {
    onCompleted: () => {
      toast.success('Payroll updated successfully');
      onClose();
      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error) => {
      toast.error(`Failed to update payroll: ${error.message}`);
    },
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle select change
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Use standardized pattern for mutation variables
    updatePayroll({
      variables: {
        id: payroll.id,
        input: {
          name: formData.name,
          cycle_type: parseInt(formData.cycleType),
          status: formData.status.toUpperCase(),
        },
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Payroll</DialogTitle>
          <DialogDescription>Update the payroll details below.</DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Payroll Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter payroll name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cycleType">Cycle Type</Label>
            <Select
              value={formData.cycleType}
              onValueChange={(value) => handleSelectChange('cycleType', value)}
            >
              <SelectTrigger id="cycleType">
                <SelectValue placeholder="Select cycle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={CYCLE_TYPES.WEEKLY.toString()}>Weekly</SelectItem>
                <SelectItem value={CYCLE_TYPES.FORTNIGHTLY.toString()}>Fortnightly</SelectItem>
                <SelectItem value={CYCLE_TYPES.MONTHLY_SPECIFIC_DAY.toString()}>Monthly (Specific Day)</SelectItem>
                <SelectItem value={CYCLE_TYPES.MONTHLY_LAST_DAY.toString()}>Monthly (Last Day)</SelectItem>
                <SelectItem value={CYCLE_TYPES.QUARTERLY.toString()}>Quarterly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select
              value={formData.status}
              onValueChange={(value) => handleSelectChange('status', value)}
            >
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                'Update Payroll'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
