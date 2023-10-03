import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../providers";
import { updateNote } from "../api/notes";
import { UpdateNoteInput } from "../Interfaces/update-note-input";

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
