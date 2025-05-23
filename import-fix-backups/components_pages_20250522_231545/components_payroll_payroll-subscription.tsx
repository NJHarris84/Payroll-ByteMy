// components/payroll-subscription.tsx
import { useSubscription, ApolloQueryResult } from "@apollo/client";
import { PAYROLLS_SUBSCRIPTION } from "@/lib/graphql/subscriptions/payrolls/payrollUpdates";
import { toast } from "sonner";
import { useErrorHandler } from "@/lib/utils/error-handling";

type RefetchFunction = () => Promise<ApolloQueryResult<unknown>>;

export const PayrollUpdatesComponent = ({ refetchPayrolls }: { refetchPayrolls: RefetchFunction }) => {
  const { handleError } = useErrorHandler();

  useSubscription(PAYROLLS_SUBSCRIPTION, {
    onSubscriptionData: async () => {
      try {
        toast.info("Payroll data updated. Refreshing...");
        await refetchPayrolls();
      } catch (error) {
        handleError(error, "Failed to refresh payroll data");
      }
    },
    onError: (error) => {
      handleError(error, "Subscription error: Failed to listen for payroll updates");
    }
  });

  return null;
};