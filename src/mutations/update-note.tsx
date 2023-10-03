import { useMutation } from "@tanstack/react-query";
import { UpdateNoteInput } from "../Interfaces/update-note-input";
import { updateNote } from "../api/notes";
import { queryClient } from "../providers";

type MutationProps = UpdateNoteInput;

export default function useUpdateNoteMutation() {
  return useMutation({
    mutationFn: ({ noteId, title, text, color, isFavorite }: MutationProps) =>
      updateNote({ noteId, title, text, color, isFavorite }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch-notes"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });
}
