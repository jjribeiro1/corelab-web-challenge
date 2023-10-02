import { useQuery } from "@tanstack/react-query";
import { getAllNotes } from "../api/notes";

export default function useFetchNotes() {
  const { data } = useQuery({
    queryKey: ["fetch-notes"],
    queryFn: getAllNotes,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5 
  });

  return {
    notes: data,
  };
}
