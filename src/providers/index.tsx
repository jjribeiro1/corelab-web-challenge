import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { SearchFilterContextProvider } from "../context/search-filter";

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchFilterContextProvider>
        {children}
        <Toaster />
      </SearchFilterContextProvider>
    </QueryClientProvider>
  );
}
