import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../providers";
import { deleteNote } from "../api/notes";

type MutationProps = {
  noteId: string;
};
export default function useDeleteNoteMutation() {
  return useMutation({
    mutationFn: ({ noteId }: MutationProps) => deleteNote(noteId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch-notes"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });
}
