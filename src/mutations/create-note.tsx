import { useMutation } from "@tanstack/react-query";
import { CreateNoteInput } from "../Interfaces/create-note-input";
import { createNote } from "../api/notes";
import { queryClient } from "../providers";

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
