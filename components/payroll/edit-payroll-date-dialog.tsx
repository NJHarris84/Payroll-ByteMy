import React from "react";
import { format } from "date-fns";

import { Button, Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "@/components/ui";

interface EditPayrollDateDialogProps {
  isOpen: boolean;
  onClose: () => void;
  payrollDate: {
    id: string;
    eft_date: string;
    adjusted_eft_date: string;
  };
  onSave: (date: string) => void;
}

export function EditPayrollDateDialog({ isOpen, onClose, payrollDate, onSave }: EditPayrollDateDialogProps) {
  const [selectedDate, setSelectedDate] = React.useState(payrollDate?.adjusted_eft_date || payrollDate?.eft_date);

  const handleSave = () => {
    onSave(selectedDate);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Payroll Date</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label htmlFor="original-date" className="text-sm font-medium">Original EFT Date</label>
            <div id="original-date" className="mt-1 p-2 border rounded">
              {format(new Date(payrollDate?.eft_date), 'PPP')}
            </div>
          </div>
          <div>
            <label htmlFor="adjusted-date" className="text-sm font-medium">Adjusted EFT Date</label>
            <input
              type="date"
              id="adjusted-date"
              className="mt-1 p-2 w-full border rounded"
              value={format(new Date(selectedDate), 'yyyy-MM-dd')}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
