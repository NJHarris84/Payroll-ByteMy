# Import Standardization Dry Run Results
Generated: 5/24/2025, 6:45:13 PM

## Summary
- Processed: 153 files
- Need reorganization: 122 files

## Files that need import reorganization

### components/ui/toolbar.tsx

#### Current Imports
```typescript
import * as React from "react"
import * as ToolbarPrimitive from "@radix-ui/react-toolbar"
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import * as ToolbarPrimitive from "@radix-ui/react-toolbar"
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
```

---

### components/ui/toggle.tsx

#### Current Imports
```typescript
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
```

---

### components/ui/toast.tsx

#### Current Imports
```typescript
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { X } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { X } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
```

---

### components/ui/textarea.tsx

#### Current Imports
```typescript
import * as React from "react"
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"

import { cn } from "@/lib/utils";
```

---

### components/ui/tabs.tsx

#### Current Imports
```typescript
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils";
```

---

### components/ui/table.tsx

#### Current Imports
```typescript
import * as React from "react"
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"

import { cn } from "@/lib/utils";
```

---

### components/ui/switch.tsx

#### Current Imports
```typescript
import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils";
```

---

### components/ui/slider.tsx

#### Current Imports
```typescript
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils";
```

---

### components/ui/sheet.tsx

#### Current Imports
```typescript
import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
```

---

### components/ui/separator.tsx

#### Current Imports
```typescript
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils";
```

---

### components/ui/select.tsx

#### Current Imports
```typescript
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";
```

---

### components/ui/resizable.tsx

#### Current Imports
```typescript
import * as ResizablePrimitive from "react-resizable-panels"
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as ResizablePrimitive from "react-resizable-panels"
import { DragHandleDots2Icon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
```

---

### components/ui/progress.tsx

#### Current Imports
```typescript
import * as ProgressPrimitive from "@radix-ui/react-progress"
import * as React from "react"
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as ProgressPrimitive from "@radix-ui/react-progress"
import * as React from "react"

import { cn } from "@/lib/utils";
```

---

### components/ui/popover.tsx

#### Current Imports
```typescript
import * as PopoverPrimitive from "@radix-ui/react-popover"
import * as React from "react"
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as PopoverPrimitive from "@radix-ui/react-popover"
import * as React from "react"

import { cn } from "@/lib/utils";
```

---

### components/ui/payroll-list-card.test.tsx

#### Current Imports
```typescript
import { render, screen, fireEvent } from "@testing-library/react";
import { useQuery } from "@apollo/client";
import { PayrollListCard } from "@/components/payroll";
import { mockPayrolls } from "../../../../__mocks__/mockData";
```

#### Reorganized Imports
```typescript
import { render, screen, fireEvent } from "@testing-library/react";
import { useQuery } from "@apollo/client";

import { PayrollListCard } from "@/components/payroll";

import { mockPayrolls } from "../../../../__mocks__/mockData";
```

---

### components/ui/payroll-details-card.test.tsx

#### Current Imports
```typescript
import React from "react";
import { render, screen } from "@testing-library/react";
import { PayrollDetailsCard } from "@/components/payroll";
```

#### Reorganized Imports
```typescript
import React from "react";
import { render, screen } from "@testing-library/react";

import { PayrollDetailsCard } from "@/components/payroll";
```

---

### components/ui/menubar.tsx

#### Current Imports
```typescript
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import * as React from "react"
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import * as React from "react"
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";
```

---

### components/ui/label.tsx

#### Current Imports
```typescript
import * as LabelPrimitive from "@radix-ui/react-label"
import * as React from "react"
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as LabelPrimitive from "@radix-ui/react-label"
import * as React from "react"
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
```

---

### components/ui/input.tsx

#### Current Imports
```typescript
import * as React from "react"
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"

import { cn } from "@/lib/utils";
```

---

### components/ui/dropdown-menu.tsx

#### Current Imports
```typescript
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import * as React from "react"
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import * as React from "react"
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
```

---

### components/ui/dialog.tsx

#### Current Imports
```typescript
import * as DialogPrimitive from "@radix-ui/react-dialog"
import * as React from "react"
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as DialogPrimitive from "@radix-ui/react-dialog"
import * as React from "react"
import { Cross2Icon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
```

---

### components/ui/command.tsx

#### Current Imports
```typescript
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk";
import { DialogProps } from "@radix-ui/react-dialog";
import { Search } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk";
import { DialogProps } from "@radix-ui/react-dialog";
import { Search } from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui";
import { cn } from "@/lib/utils";
```

---

### components/ui/combobox.tsx

#### Current Imports
```typescript
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react";
import { Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react";

import { Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { cn } from "@/lib/utils";
```

---

### components/ui/client-card.test.tsx

#### Current Imports
```typescript
import { render, screen } from "@testing-library/react";
import { ClientCard } from "@/components/client";
import { mockClients } from "../../../../__mocks__/mockData";
```

#### Reorganized Imports
```typescript
import { render, screen } from "@testing-library/react";

import { ClientCard } from "@/components/client";

import { mockClients } from "../../../../__mocks__/mockData";
```

---

### components/ui/checkbox.tsx

#### Current Imports
```typescript
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
```

---

### components/ui/chart.tsx

#### Current Imports
```typescript
import * as React from "react"
import * as RechartsPrimitive from "recharts"
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils";
```

---

### components/ui/card.tsx

#### Current Imports
```typescript
import * as React from "react"
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"

import { cn } from "@/lib/utils";
```

---

### components/ui/calendar.tsx

#### Current Imports
```typescript
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
```

---

### components/ui/button.tsx

#### Current Imports
```typescript
import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
```

---

### components/ui/badge.tsx

#### Current Imports
```typescript
import * as React from "react"
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
```

---

### components/ui/avatar.tsx

#### Current Imports
```typescript
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import * as React from "react"
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import * as React from "react"
import { useUser } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
```

---

### components/ui/accordion.tsx

#### Current Imports
```typescript
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import * as React from "react"
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import * as React from "react"
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
```

---

### components/ui/UrgentAlerts.tsx

#### Current Imports
```typescript
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui";
```

---

### components/ui/ToggleGroup.tsx

#### Current Imports
```typescript
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { VariantProps } from "class-variance-authority";
import { toggleVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { VariantProps } from "class-variance-authority";

import { toggleVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
```

---

### components/ui/ThemeToggle.tsx

#### Current Imports
```typescript
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui";
```

---

### components/ui/SectionCard.tsx

#### Current Imports
```typescript
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import { ReactNode } from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui";
import { cn } from "@/lib/utils";
```

---

### components/ui/ScrollArea.tsx

#### Current Imports
```typescript
import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils";
```

---

### components/ui/RefreshButton.tsx

#### Current Imports
```typescript
import { RefreshCw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui";
import { useCacheInvalidation } from "@/lib/hooks";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import { RefreshCw } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui";
import { useCacheInvalidation } from "@/lib/hooks";
import { cn } from "@/lib/utils";
```

---

### components/ui/RadioGroup.tsx

#### Current Imports
```typescript
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import * as React from "react"
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import * as React from "react"
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";
```

---

### components/ui/PayrollListCard.tsx

#### Current Imports
```typescript
import Link from "next/link";
import { Calendar, Filter, Search } from "lucide-react";
import { useState } from "react";
import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { formatDate } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import Link from "next/link";
import { Calendar, Filter, Search } from "lucide-react";
import { useState } from "react";

import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { formatDate } from "@/lib/utils";
```

---

### components/ui/PayrollDetailsCard.tsx

#### Current Imports
```typescript
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
```

---

### components/ui/NotesModal.tsx

#### Current Imports
```typescript
import { toast } from "sonner";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Textarea } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import { toast } from "sonner";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Textarea } from "@/components/ui";
```

---

### components/ui/NavigationMenu.tsx

#### Current Imports
```typescript
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import * as React from "react"
import { ChevronDown } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import * as React from "react"
import { ChevronDown } from "lucide-react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
```

---

### components/ui/HoverCard.tsx

#### Current Imports
```typescript
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import * as React from "react"
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import * as React from "react"

import { cn } from "@/lib/utils";
```

---

### components/ui/GenerateMissingDatesButton.tsx

#### Current Imports
```typescript
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { format, addMonths } from "date-fns";
import { toast } from "sonner";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { Button } from "@/components/ui";
import { GENERATE_PAYROLL_DATES, GET_PAYROLLS_MISSING_DATES } from "@/lib/graphql";
```

#### Reorganized Imports
```typescript
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { format, addMonths } from "date-fns";
import { toast } from "sonner";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

import { Button } from "@/components/ui";
import { GENERATE_PAYROLL_DATES, GET_PAYROLLS_MISSING_DATES } from "@/lib/graphql";
```

---

### components/ui/FormLayout.tsx

#### Current Imports
```typescript
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import { ReactNode } from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui";
import { cn } from "@/lib/utils";
```

---

### components/ui/FormField.tsx

#### Current Imports
```typescript
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Input, Label } from "@/components/ui";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import React from "react";
import { UseFormReturn } from "react-hook-form";

import { Input, Label } from "@/components/ui";
import { cn } from "@/lib/utils";
```

---

### components/ui/EditPayrollDialog.tsx

#### Current Imports
```typescript
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";
import { UPDATE_PAYROLL } from "@/lib/graphql";
import { CYCLE_TYPES } from "@/lib/services";
```

#### Reorganized Imports
```typescript
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useMutation } from "@apollo/client";
import { useState } from "react";

import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";
import { UPDATE_PAYROLL } from "@/lib/graphql";
import { CYCLE_TYPES } from "@/lib/services";
```

---

### components/ui/DropdownMenu.tsx

#### Current Imports
```typescript
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import * as React from "react"
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import * as React from "react"
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";
```

---

### components/ui/DatePicker.tsx

#### Current Imports
```typescript
import * as React from "react"
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { cn } from "@/lib/utils";
```

---

### components/ui/CustomDialog.tsx

#### Current Imports
```typescript
import * as React from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import * as React from "react"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui";
```

---

### components/ui/ContextMenu.tsx

#### Current Imports
```typescript
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import * as React from "react"
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import * as React from "react"
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";
```

---

### components/ui/ConfirmDialog.tsx

#### Current Imports
```typescript
import * as React from "react";
import { Button, DialogClose } from "@/components/ui";
import { CustomDialog } from "./..";
```

#### Reorganized Imports
```typescript
import * as React from "react";

import { Button, DialogClose } from "@/components/ui";

import { CustomDialog } from "./..";
```

---

### components/ui/ClientCard.tsx

#### Current Imports
```typescript
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import Link from "next/link";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
```

---

### components/ui/AvatarGroup.tsx

#### Current Imports
```typescript
import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { cn } from "@/lib/utils";
```

---

### components/ui/AlertDialog.tsx

#### Current Imports
```typescript
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import * as React from "react"
import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import * as React from "react"

import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
```

---

### components/providers/providers.tsx

#### Current Imports
```typescript
import { ApolloProvider } from "@apollo/client";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import { getClientApolloClient } from "@/lib/api";
```

#### Reorganized Imports
```typescript
import { ApolloProvider } from "@apollo/client";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";

import { getClientApolloClient } from "@/lib/api";
```

---

### components/providers/RootProviders.tsx

#### Current Imports
```typescript
import { ApolloProvider } from "@apollo/client";
import { Toaster } from "@/components/ui";
import { apolloClient } from "@/lib/api";
import { ThemeProvider } from "./..";
```

#### Reorganized Imports
```typescript
import { ApolloProvider } from "@apollo/client";

import { Toaster } from "@/components/ui";
import { apolloClient } from "@/lib/api";

import { ThemeProvider } from "./..";
```

---

### components/payroll/payroll-workflow.test.tsx

#### Current Imports
```typescript
import { MockedProvider } from "@apollo/client/testing";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CreatePayroll, GetClientsList, GetPayrolls } from "@/lib/graphql";
import PayrollPage from "@/app/(dashboard)/payrolls/page";
```

#### Reorganized Imports
```typescript
import { MockedProvider } from "@apollo/client/testing";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { CreatePayroll, GetClientsList, GetPayrolls } from "@/lib/graphql";
import PayrollPage from "@/app/(dashboard)/payrolls/page";
```

---

### components/payroll/payroll-flow.test.tsx

#### Current Imports
```typescript
import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useParams } from "next/navigation";
import { GET_PAYROLL_BY_ID, UPDATE_PAYROLL_DATE } from "@/lib/graphql";
import PayrollPage from "@/app/(dashboard)/payrolls/[id]/page";
```

#### Reorganized Imports
```typescript
import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useParams } from "next/navigation";

import { GET_PAYROLL_BY_ID, UPDATE_PAYROLL_DATE } from "@/lib/graphql";
import PayrollPage from "@/app/(dashboard)/payrolls/[id]/page";
```

---

### components/payroll/RegenerateDates.tsx

#### Current Imports
```typescript
import { format, addMonths } from "date-fns";
import { toast } from "sonner";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { Button, Input, Label } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import { format, addMonths } from "date-fns";
import { toast } from "sonner";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

import { Button, Input, Label } from "@/components/ui";
```

---

### components/payroll/PayrollsMissingDates.tsx

#### Current Imports
```typescript
import { toast } from "sonner";
import { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { GENERATE_PAYROLL_DATES, GET_PAYROLLS_MISSING_DATES } from "@/lib/graphql";
import { useSmartPolling, useUserRole } from "@/lib/hooks";
```

#### Reorganized Imports
```typescript
import { toast } from "sonner";
import { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { GENERATE_PAYROLL_DATES, GET_PAYROLLS_MISSING_DATES } from "@/lib/graphql";
import { useSmartPolling, useUserRole } from "@/lib/hooks";
```

---

### components/payroll/PayrollScheduleView.tsx

#### Current Imports
```typescript
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { Badge, Card, CardContent, CardHeader, CardTitle, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import { format } from "date-fns";
import { useState, useEffect } from "react";

import { Badge, Card, CardContent, CardHeader, CardTitle, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
```

---

### components/payroll/PayrollDatesView.tsx

#### Current Imports
```typescript
import * as React from "react";
import { ArrowUpDown, ChevronDown, Calendar, Pencil } from "lucide-react";
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, PaginationState } from "@tanstack/react-table";
import { format, parseISO, isEqual } from "date-fns";
import { useQuery, gql } from "@apollo/client";
import { Button, Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger, NotesModal, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { GetPayrollDates } from "@/lib/graphql";
import { EditPayrollDateDialog } from "./EditPayrollDateDialog";
```

#### Reorganized Imports
```typescript
import * as React from "react";
import { ArrowUpDown, ChevronDown, Calendar, Pencil } from "lucide-react";
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, PaginationState } from "@tanstack/react-table";
import { format, parseISO, isEqual } from "date-fns";
import { useQuery, gql } from "@apollo/client";

import { Button, Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger, NotesModal, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { GetPayrollDates } from "@/lib/graphql";

import { EditPayrollDateDialog } from "./EditPayrollDateDialog";
```

---

### components/payroll/EditPayrollDateDialog.tsx

#### Current Imports
```typescript
import React from "react";
import { format } from "date-fns";
import { Button, Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import React from "react";
import { format } from "date-fns";

import { Button, Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "@/components/ui";
```

---

### components/payroll/ClientPayrollTable.tsx

#### Current Imports
```typescript
import Link from "next/link";
import { ChevronRight, Circle, Clock, ExternalLink } from "lucide-react";
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Table, TableBody, TableCell, TableHead, TableHeader, TableLoading, TableRow } from "@/components/ui";
import { formatDate } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import Link from "next/link";
import { ChevronRight, Circle, Clock, ExternalLink } from "lucide-react";

import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Table, TableBody, TableCell, TableHead, TableHeader, TableLoading, TableRow } from "@/components/ui";
import { formatDate } from "@/lib/utils";
```

---

### components/payroll/AustralianTaxCalculator.tsx

#### Current Imports
```typescript
import React, { useState } from "react";
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import React, { useState } from "react";

import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";
```

---

### components/layout/sidebar.tsx

#### Current Imports
```typescript
import Link from "next/link";
import { LayoutDashboard, Users, Calculator, CalendarDays, UserCog, Settings, DollarSign, ChevronLeft, ChevronRight, Loader2, Code, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button, ScrollArea } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./..";
```

#### Reorganized Imports
```typescript
import Link from "next/link";
import { LayoutDashboard, Users, Calculator, CalendarDays, UserCog, Settings, DollarSign, ChevronLeft, ChevronRight, Loader2, Code, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button, ScrollArea } from "@/components/ui";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "./..";
```

---

### components/layout/layout.tsx

#### Current Imports
```typescript
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import './globals.css'
import { AppProviders } from "./providers";
```

#### Reorganized Imports
```typescript
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import './globals.css'
import { AppProviders } from "./providers";
```

---

### components/layout/UserNav.tsx

#### Current Imports
```typescript
import { useRouter } from "next/navigation";
import { useUser, useClerk } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage, Button, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import { useRouter } from "next/navigation";
import { useUser, useClerk } from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage, Button, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui";
```

---

### components/layout/PageHeader.tsx

#### Current Imports
```typescript
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import { ReactNode } from "react";

import { cn } from "@/lib/utils";
```

---

### components/layout/MainNav.tsx

#### Current Imports
```typescript
import Link from "next/link";
import { LayoutDashboard, Users, Calculator, CalendarDays, UserCog, Settings, DollarSign } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import Link from "next/link";
import { LayoutDashboard, Users, Calculator, CalendarDays, UserCog, Settings, DollarSign } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
```

---

### components/layout/DashboardShell.tsx

#### Current Imports
```typescript
import React from "react";
import { MainNav, ThemeToggle, UserNav } from "@/components/layout";
import { Sidebar } from "./..";
```

#### Reorganized Imports
```typescript
import React from "react";

import { MainNav, ThemeToggle, UserNav } from "@/components/layout";

import { Sidebar } from "./..";
```

---

### components/common/table.tsx

#### Current Imports
```typescript
import * as React from "react"
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import * as React from "react"

import { cn } from "@/lib/utils";
```

---

### components/common/error.tsx

#### Current Imports
```typescript
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { useEffect } from "react";
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { useEffect } from "react";

import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui";
```

---

### components/common/error-boundary.test.tsx

#### Current Imports
```typescript
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ErrorBoundary, withErrorBoundary } from "@/components/common";
```

#### Reorganized Imports
```typescript
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { ErrorBoundary, withErrorBoundary } from "@/components/common";
```

---

### components/common/data-table.test.tsx

#### Current Imports
```typescript
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable } from "@/components/common";
```

#### Reorganized Imports
```typescript
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { DataTable } from "@/components/common";
```

---

### components/common/NotesListWithAdd.tsx

#### Current Imports
```typescript
import { format, parseISO } from "date-fns";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { AddNote, ErrorDisplay } from "@/components/common";
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui";
import { GET_NOTES } from "@/lib/graphql";
import { Note } from "@/types/interface";
```

#### Reorganized Imports
```typescript
import { format, parseISO } from "date-fns";
import { useQuery } from "@apollo/client";
import { useState } from "react";

import { AddNote, ErrorDisplay } from "@/components/common";
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui";
import { GET_NOTES } from "@/lib/graphql";
import { Note } from "@/types/interface";
```

---

### components/common/MarkdownViewer.tsx

#### Current Imports
```typescript
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";
```

---

### components/common/LoadingStates.tsx

#### Current Imports
```typescript
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, Skeleton } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import { Loader2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, Skeleton } from "@/components/ui";
```

---

### components/common/LiveDataTable.tsx

#### Current Imports
```typescript
import * as React from "react"
import { ColumnDef } from "@tanstack/react-table";
import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./..";
import { DataTable } from "./..";
```

#### Reorganized Imports
```typescript
import * as React from "react"
import { ColumnDef } from "@tanstack/react-table";
import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./..";
import { DataTable } from "./..";
```

---

### components/common/ExportPdf.tsx

#### Current Imports
```typescript
import jsPDF from "jspdf";
import { autoTable } from "jspdf-autotable";
import { format, parseISO } from "date-fns";
import { useQuery } from "@apollo/client";
import { Button } from "@/components/ui";
import { GET_PAYROLL_DATES } from "@/lib/graphql";
```

#### Reorganized Imports
```typescript
import jsPDF from "jspdf";
import { autoTable } from "jspdf-autotable";
import { format, parseISO } from "date-fns";
import { useQuery } from "@apollo/client";

import { Button } from "@/components/ui";
import { GET_PAYROLL_DATES } from "@/lib/graphql";
```

---

### components/common/ExportCsv.tsx

#### Current Imports
```typescript
import { format, parseISO } from "date-fns";
import { useQuery } from "@apollo/client";
import { Button } from "@/components/ui";
import { GET_PAYROLL_DATES } from "@/lib/graphql";
```

#### Reorganized Imports
```typescript
import { format, parseISO } from "date-fns";
import { useQuery } from "@apollo/client";

import { Button } from "@/components/ui";
import { GET_PAYROLL_DATES } from "@/lib/graphql";
```

---

### components/common/ErrorDisplay.tsx

#### Current Imports
```typescript
import { AlertCircle } from "lucide-react";
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import { AlertCircle } from "lucide-react";

import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui";
```

---

### components/common/ErrorBoundary.tsx

#### Current Imports
```typescript
import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui";
```

---

### components/common/DataTable.tsx

#### Current Imports
```typescript
import * as React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from "lucide-react";
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { Button, Input, Spinner, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { Badge } from "./..";
```

#### Reorganized Imports
```typescript
import * as React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from "lucide-react";
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";

import { Button, Input, Spinner, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";

import { Badge } from "./..";
```

---

### components/common/AiChat.tsx

#### Current Imports
```typescript
import React from "react";
import { useState } from "react";
import { Button, Card, CardContent, Input } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import React from "react";
import { useState } from "react";

import { Button, Card, CardContent, Input } from "@/components/ui";
```

---

### components/common/AddNote.tsx

#### Current Imports
```typescript
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Textarea } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Textarea } from "@/components/ui";
```

---

### components/client/ErrorBoundary.client.tsx

#### Current Imports
```typescript
import { Component, ReactNode } from "react";
import { tokenManagerClient } from "./..";
```

#### Reorganized Imports
```typescript
import { Component, ReactNode } from "react";

import { tokenManagerClient } from "./..";
```

---

### components/client/ClientsTable.tsx

#### Current Imports
```typescript
import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";
import { Badge, Input, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";

import { Badge, Input, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
```

---

### components/auth/UserRoleManagement.tsx

#### Current Imports
```typescript
import { Edit, MoreHorizontal, PlusCircle, Trash2, UserPlus } from "lucide-react";
import { useState } from "react";
import { HasuraRoleGate } from "@/components/common";
import { Button, Checkbox, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { appRoles, validRoles } from "@/lib/auth";
```

#### Reorganized Imports
```typescript
import { Edit, MoreHorizontal, PlusCircle, Trash2, UserPlus } from "lucide-react";
import { useState } from "react";

import { HasuraRoleGate } from "@/components/common";
import { Button, Checkbox, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { appRoles, validRoles } from "@/lib/auth";
```

---

### components/auth/RoleGates.tsx

#### Current Imports
```typescript
import { ReactNode } from "react";
import { Skeleton } from "@/components/ui";
import { HasuraRole, Permission } from "@/lib/auth";
import { useUserRole } from "@/lib/hooks";
```

#### Reorganized Imports
```typescript
import { ReactNode } from "react";

import { Skeleton } from "@/components/ui";
import { HasuraRole, Permission } from "@/lib/auth";
import { useUserRole } from "@/lib/hooks";
```

---

### app/layout.tsx

#### Current Imports
```typescript
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { AppProviders } from "@/components/providers";
```

#### Reorganized Imports
```typescript
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import { AppProviders } from "@/components/providers";
```

---

### app/api/user/route.ts

#### Current Imports
```typescript
import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { apiError, apiForbidden, apiSuccess, apiUnauthorized, apiValidationError } from "@/lib/api";
```

#### Reorganized Imports
```typescript
import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { apiError, apiForbidden, apiSuccess, apiUnauthorized, apiValidationError } from "@/lib/api";
```

---

### app/api/update-user-role/route.ts

#### Current Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { getServerApolloClient } from "@/lib/api";
import { UPDATE_STAFF } from "@/lib/graphql";
```

#### Reorganized Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { getServerApolloClient } from "@/lib/api";
import { UPDATE_STAFF } from "@/lib/graphql";
```

---

### app/api/payrolls/route.ts

#### Current Imports
```typescript
import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { apiError, apiSuccess, apiUnauthorized, getServerApolloClient } from "@/lib/api";
import { GET_PAYROLLS } from "@/lib/graphql";
```

#### Reorganized Imports
```typescript
import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { apiError, apiSuccess, apiUnauthorized, getServerApolloClient } from "@/lib/api";
import { GET_PAYROLLS } from "@/lib/graphql";
```

---

### app/api/developer/route.ts

#### Current Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { gql } from "@apollo/client";
import { adminClient } from "@/lib/apollo-admin";
```

#### Reorganized Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { gql } from "@apollo/client";

import { adminClient } from "@/lib/apollo-admin";
```

---

### app/api/clerk-webhooks/route.ts

#### Current Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { WebhookEvent } from "@clerk/nextjs/server";
import { deleteUserFromDatabase, syncUserWithDatabase } from "@/lib/services";
```

#### Reorganized Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { WebhookEvent } from "@clerk/nextjs/server";

import { deleteUserFromDatabase, syncUserWithDatabase } from "@/lib/services";
```

---

### app/(dashboard)/staff/page.tsx

#### Current Imports
```typescript
import * as React from "react";
import Link from "next/link";
import { ChevronDown, PlusCircle, Trash2, UserPlus } from "lucide-react";
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, CellContext } from "@tanstack/react-table";
import { toast } from "sonner";
import { useQuery, useMutation } from "@apollo/client";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, Button, Card, CardContent, CardHeader, CardTitle, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { roleMapping, validRoles } from "@/lib/auth";
import { DELETE_STAFF, GET_STAFF_LIST, UPDATE_STAFF } from "@/lib/graphql";
import { useUserRole } from "@/lib/hooks";
```

#### Reorganized Imports
```typescript
import * as React from "react";
import Link from "next/link";
import { ChevronDown, PlusCircle, Trash2, UserPlus } from "lucide-react";
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, CellContext } from "@tanstack/react-table";
import { toast } from "sonner";
import { useQuery, useMutation } from "@apollo/client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, Button, Card, CardContent, CardHeader, CardTitle, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { roleMapping, validRoles } from "@/lib/auth";
import { DELETE_STAFF, GET_STAFF_LIST, UPDATE_STAFF } from "@/lib/graphql";
import { useUserRole } from "@/lib/hooks";
```

---

### app/(dashboard)/settings/page.tsx

#### Current Imports
```typescript
import React from "react";
import { Loader2, Save } from "lucide-react";
import { useSession } from "@clerk/nextjs";
import { useState } from "react";
import { UserRoleManagement } from "@/components/forms";
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator, Switch, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import React from "react";
import { Loader2, Save } from "lucide-react";
import { useSession } from "@clerk/nextjs";
import { useState } from "react";

import { UserRoleManagement } from "@/components/forms";
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator, Switch, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
```

---

### app/(dashboard)/payrolls/page.tsx

#### Current Imports
```typescript
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { PayrollListCard, PayrollsMissingDates } from "@/components/payroll";
import { Button } from "@/components/ui";
import { useUserRole } from "@/lib/hooks";
```

#### Reorganized Imports
```typescript
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";

import { PayrollListCard, PayrollsMissingDates } from "@/components/payroll";
import { Button } from "@/components/ui";
import { useUserRole } from "@/lib/hooks";
```

---

### app/(dashboard)/payroll-schedule/page.tsx

#### Current Imports
```typescript
import { ChevronLeft, ChevronRight, CalendarIcon, Download } from "lucide-react";
import { format, addMonths, subMonths, eachDayOfInterval, startOfMonth, endOfMonth, isSameDay, isWeekend, addWeeks, subWeeks, startOfWeek, endOfWeek, addDays, parseISO, isWithinInterval } from "date-fns";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { Badge, Button, Calendar, Card, CardContent, CardDescription, CardHeader, CardTitle, Label, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Switch, Tabs, TabsList, TabsTrigger } from "@/components/ui";
import { GET_HOLIDAYS, GET_PAYROLLS_BY_MONTH } from "@/lib/graphql";
import { useSmartPolling } from "@/lib/hooks";
import { cn } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import { ChevronLeft, ChevronRight, CalendarIcon, Download } from "lucide-react";
import { format, addMonths, subMonths, eachDayOfInterval, startOfMonth, endOfMonth, isSameDay, isWeekend, addWeeks, subWeeks, startOfWeek, endOfWeek, addDays, parseISO, isWithinInterval } from "date-fns";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

import { Badge, Button, Calendar, Card, CardContent, CardDescription, CardHeader, CardTitle, Label, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Switch, Tabs, TabsList, TabsTrigger } from "@/components/ui";
import { GET_HOLIDAYS, GET_PAYROLLS_BY_MONTH } from "@/lib/graphql";
import { useSmartPolling } from "@/lib/hooks";
import { cn } from "@/lib/utils";
```

---

### app/(dashboard)/onboarding/page.tsx

#### Current Imports
```typescript
import { useState } from "react";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Label, Tabs, TabsContent, TabsList, TabsTrigger, Textarea } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import { useState } from "react";

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Label, Tabs, TabsContent, TabsList, TabsTrigger, Textarea } from "@/components/ui";
```

---

### app/(dashboard)/developer/page.tsx

#### Current Imports
```typescript
import { toast } from "sonner";
import { useState } from "react";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Label, Switch } from "@/components/ui";
import { useUserRole } from "@/lib/hooks";
```

#### Reorganized Imports
```typescript
import { toast } from "sonner";
import { useState } from "react";

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Label, Switch } from "@/components/ui";
import { useUserRole } from "@/lib/hooks";
```

---

### app/(dashboard)/debug-auth/page.tsx

#### Current Imports
```typescript
import { auth, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { tokenManager } from "@/lib/auth";
import { parseJWT } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import { auth, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { tokenManager } from "@/lib/auth";
import { parseJWT } from "@/lib/utils";
```

---

### app/(dashboard)/dashboard/page.tsx

#### Current Imports
```typescript
import Link from "next/link";
import { CalendarDays, Users, Calculator, AlertTriangle } from "lucide-react";
import { UrgentAlerts } from "@/components/common";
import { UpcomingPayrolls } from "@/components/payroll";
import { Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import Link from "next/link";
import { CalendarDays, Users, Calculator, AlertTriangle } from "lucide-react";

import { UrgentAlerts } from "@/components/common";
import { UpcomingPayrolls } from "@/components/payroll";
import { Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
```

---

### app/(dashboard)/clients/page.tsx

#### Current Imports
```typescript
import Link from "next/link";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { PlusCircle, Search } from "lucide-react";
import { useQuery } from "@apollo/client";
import { ClientsTable } from "@/components/client";
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { GET_CLIENTS_LIST as GET_CLIENTS } from "@/lib/graphql";
import { useSmartPolling, useUserRole } from "@/lib/hooks";
import { Client } from "@/types/interface";
```

#### Reorganized Imports
```typescript
import Link from "next/link";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { PlusCircle, Search } from "lucide-react";
import { useQuery } from "@apollo/client";

import { ClientsTable } from "@/components/client";
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { GET_CLIENTS_LIST as GET_CLIENTS } from "@/lib/graphql";
import { useSmartPolling, useUserRole } from "@/lib/hooks";
import { Client } from "@/types/interface";
```

---

### app/(dashboard)/calendar/page.tsx

#### Current Imports
```typescript
import { ChevronLeft, ChevronRight, CalendarIcon, Download } from "lucide-react";
import { format, addMonths, subMonths, getDaysInMonth, startOfMonth, getDay, addDays } from "date-fns";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Badge, Button, Calendar, Card, CardContent, CardDescription, CardHeader, CardTitle, PageLoading, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";
import { GET_HOLIDAYS_BY_YEAR, GET_PAYROLLS } from "@/lib/graphql";
```

#### Reorganized Imports
```typescript
import { ChevronLeft, ChevronRight, CalendarIcon, Download } from "lucide-react";
import { format, addMonths, subMonths, getDaysInMonth, startOfMonth, getDay, addDays } from "date-fns";
import { useQuery } from "@apollo/client";
import { useState } from "react";

import { Badge, Button, Calendar, Card, CardContent, CardDescription, CardHeader, CardTitle, PageLoading, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";
import { GET_HOLIDAYS_BY_YEAR, GET_PAYROLLS } from "@/lib/graphql";
```

---

### app/api/user/[id]/route.ts

#### Current Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { adminApolloClient } from "@/lib/api";
import { UPDATE_USER_PROFILE } from "@/lib/graphql";
```

#### Reorganized Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { adminApolloClient } from "@/lib/api";
import { UPDATE_USER_PROFILE } from "@/lib/graphql";
```

---

### app/api/payrolls/schedule/route.ts

#### Current Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { generatePayrollSchedule } from "@/lib/utils";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
```

#### Reorganized Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import { generatePayrollSchedule } from "@/lib/utils";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
```

---

### app/api/payrolls/[id]/route.ts

#### Current Imports
```typescript
import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { apiError, apiNotFound, apiSuccess, apiUnauthorized, getServerApolloClient } from "@/lib/api";
import { GET_PAYROLL_BY_ID } from "@/lib/graphql";
```

#### Reorganized Imports
```typescript
import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { apiError, apiNotFound, apiSuccess, apiUnauthorized, getServerApolloClient } from "@/lib/api";
import { GET_PAYROLL_BY_ID } from "@/lib/graphql";
```

---

### app/api/payroll-dates/[payrollId]/route.ts

#### Current Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { adminApolloClient } from "@/lib/api";
import { GENERATE_PAYROLL_DATES, GET_PAYROLL_DATES } from "@/lib/graphql";
```

#### Reorganized Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { adminApolloClient } from "@/lib/api";
import { GENERATE_PAYROLL_DATES, GET_PAYROLL_DATES } from "@/lib/graphql";
```

---

### app/api/payroll-dates/generated/route.ts

#### Current Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { addMonths, format } from "date-fns";
import { auth } from "@clerk/nextjs/server";
import { gql } from "@apollo/client";
import { getServerApolloClient } from "@/lib/api";
```

#### Reorganized Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { addMonths, format } from "date-fns";
import { auth } from "@clerk/nextjs/server";
import { gql } from "@apollo/client";

import { getServerApolloClient } from "@/lib/api";
```

---

### app/api/holidays/sync/route.ts

#### Current Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { syncAustralianHolidays } from "@/lib/services";
```

#### Reorganized Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { syncAustralianHolidays } from "@/lib/services";
```

---

### app/api/cron/update-payroll-dates/route.ts

#### Current Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { format, addMonths } from "date-fns";
import { getServerApolloClient } from "@/lib/api";
import { GENERATE_PAYROLL_DATES, UPDATE_PAYROLL_STATUS } from "@/lib/graphql";
```

#### Reorganized Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { format, addMonths } from "date-fns";

import { getServerApolloClient } from "@/lib/api";
import { GENERATE_PAYROLL_DATES, UPDATE_PAYROLL_STATUS } from "@/lib/graphql";
```

---

### app/api/cron/sync-holidays/route.ts

#### Current Imports
```typescript
import { NextRequest, NextResponse } from "next/server";
import { syncAustralianHolidays, syncMultipleYears } from "@/lib/services";
```

#### Reorganized Imports
```typescript
import { NextRequest, NextResponse } from "next/server";

import { syncAustralianHolidays, syncMultipleYears } from "@/lib/services";
```

---

### app/(dashboard)/staff/new/page.tsx

#### Current Imports
```typescript
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import { Button, Input, Label, Select, SelectItem } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";

import { Button, Input, Label, Select, SelectItem } from "@/components/ui";
```

---

### app/(dashboard)/staff/[id]/page.tsx

#### Current Imports
```typescript
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui";
import { GET_STAFF_BY_ID } from "@/lib/graphql";
import { useUserRole } from "@/lib/hooks";
import { UserDetails } from "@/types/interface";
```

#### Reorganized Imports
```typescript
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";

import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui";
import { GET_STAFF_BY_ID } from "@/lib/graphql";
import { useUserRole } from "@/lib/hooks";
import { UserDetails } from "@/types/interface";
```

---

### app/(dashboard)/settings/account/page.tsx

#### Current Imports
```typescript
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label } from "@/components/ui";
```

#### Reorganized Imports
```typescript
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { useUser, useClerk } from "@clerk/nextjs";

import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label } from "@/components/ui";
```

---

### app/(dashboard)/payrolls/[id]/page.tsx

#### Current Imports
```typescript
import Link from "next/link";
import { Pencil, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { useQuery } from "@apollo/client";
import { ClientCard } from "@/components/client";
import { ErrorBoundary, ExportCsv, ExportPdf, NotesListWithAdd, RefreshButton } from "@/components/common";
import { PayrollDatesView, PayrollDetailsCard } from "@/components/payroll";
import { Button, Card, CardContent } from "@/components/ui";
import { GET_PAYROLL_BY_ID } from "@/lib/graphql";
import { handleApiError } from "@/lib/utils";
```

#### Reorganized Imports
```typescript
import Link from "next/link";
import { Pencil, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { useQuery } from "@apollo/client";

import { ClientCard } from "@/components/client";
import { ErrorBoundary, ExportCsv, ExportPdf, NotesListWithAdd, RefreshButton } from "@/components/common";
import { PayrollDatesView, PayrollDetailsCard } from "@/components/payroll";
import { Button, Card, CardContent } from "@/components/ui";
import { GET_PAYROLL_BY_ID } from "@/lib/graphql";
import { handleApiError } from "@/lib/utils";
```

---

### app/(dashboard)/clients/new/page.tsx

#### Current Imports
```typescript
import { toast } from "sonner";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label, Switch } from "@/components/ui";
import { CREATE_CLIENT } from "@/lib/graphql";
import { useUserRole } from "@/lib/hooks";
```

#### Reorganized Imports
```typescript
import { toast } from "sonner";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label, Switch } from "@/components/ui";
import { CREATE_CLIENT } from "@/lib/graphql";
import { useUserRole } from "@/lib/hooks";
```

---

### app/(dashboard)/clients/[id]/page.tsx

#### Current Imports
```typescript
import Link from "next/link";
import { Pencil, RefreshCw } from "lucide-react";
import { gql } from "@apollo/client";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import { ClientPayrollTable } from "@/components/client";
import { NotesListWithAdd } from "@/components/common";
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { GET_CLIENT_BY_ID } from "@/lib/graphql";
import { useSmartPolling } from "@/lib/hooks";
```

#### Reorganized Imports
```typescript
import Link from "next/link";
import { Pencil, RefreshCw } from "lucide-react";
import { gql } from "@apollo/client";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";

import { ClientPayrollTable } from "@/components/client";
import { NotesListWithAdd } from "@/components/common";
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { GET_CLIENT_BY_ID } from "@/lib/graphql";
import { useSmartPolling } from "@/lib/hooks";
```

---

