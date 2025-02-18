import { QueryClient, useQueryClient } from "@tanstack/react-query";
import 'dotenv/config';
import { toast } from "sonner";
 
  export const sdk = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchInterval: 60 * 1000,
        throwOnError(error, query) {
            if (error instanceof Error) {
                toast.error(error.message)
                throw Error(error.message, { cause: error, }, )
            }
            return true
        },
      },
    },
  });

  const queryClient = useQueryClient(sdk)

  export default queryClient;
