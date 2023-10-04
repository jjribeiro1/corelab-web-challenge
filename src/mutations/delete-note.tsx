import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../providers";
import { deleteNote } from "../api/notes";
import { Toast } from "../components/Toast";

type MutationProps = {
  noteId: string;
};
export default function useDeleteNoteMutation() {
  return useMutation({
    mutationFn: ({ noteId }: MutationProps) => deleteNote(noteId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch-notes"] });
      Toast({type: 'success', message: 'Sua nota foi excluída com sucesso'})
    },
    
    onError: () => {
      Toast({type: 'error', message: 'Erro inesperado ao tentar excluir sua nota'})
    },
  });
}
