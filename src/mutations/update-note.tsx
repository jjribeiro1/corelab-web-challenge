import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../providers";
import { updateNote } from "../api/notes";
import { UpdateNoteInput } from "../Interfaces/update-note-input";
import { Toast } from "../components/Toast";

type MutationProps = UpdateNoteInput;

export default function useUpdateNoteMutation() {
  return useMutation({
    mutationFn: ({ noteId, title, text, color, isFavorite }: MutationProps) =>
      updateNote({ noteId, title, text, color, isFavorite }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch-notes"] });
      Toast({type: 'success', message: 'Sua nota foi atualizada com sucesso'})
    },
    
    onError: () => {
      Toast({type: 'error', message: 'Erro inesperado ao tentar atualizar sua nota'})
    },
  });
}
