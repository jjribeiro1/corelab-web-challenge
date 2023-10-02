import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}