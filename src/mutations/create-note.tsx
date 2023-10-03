import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../providers";
import { createNote } from "../api/notes";
import { CreateNoteInput } from "../Interfaces/create-note-input";

type MutationProps = CreateNoteInput;

export default function useCreateNoteMutation() {
  return useMutation({
    mutationFn: ({ title, text, isFavorite }: MutationProps) =>
      createNote({ title, text, isFavorite }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch-notes"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });
}
