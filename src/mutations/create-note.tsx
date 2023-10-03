import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../providers";
import { createNote } from "../api/notes";
import { CreateNoteInput } from "../Interfaces/create-note-input";
import { Toast } from "../components/Toast";

type MutationProps = CreateNoteInput;

export default function useCreateNoteMutation() {
  return useMutation({
    mutationFn: ({ title, text, isFavorite }: MutationProps) => createNote({ title, text, isFavorite }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch-notes"] });
      Toast({type: 'success', message: 'Sua nota foi criada com sucesso'})
    },

    onError: () => {
      Toast({type: 'error', message: 'Ocorreu um erro inesperado ao criar sua nota'})
    },
  });
}
