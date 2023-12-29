import { apiClient } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useQueryHook = <T,>(url: string, query: string, options?: any) => {
  return useQuery({
    queryKey: [query],
    queryFn: () => apiClient<T>(url, options),
  });
};
