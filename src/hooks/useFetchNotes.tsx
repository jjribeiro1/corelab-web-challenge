import { useQuery } from "@tanstack/react-query";
import { getAllNotes } from "../api/notes";

export default function useFetchNotes(search?: string) {
  const { data } = useQuery({
    queryKey: ["fetch-notes", search],
    queryFn: () => getAllNotes(search),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5 
  });

  return {
    notes: data,
  };
}
