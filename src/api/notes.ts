import { api } from "./instance";
import { Note } from "../Interfaces/Note";
import { CreateNoteInput } from "../Interfaces/create-note-input";
import { UpdateNoteInput } from "../Interfaces/update-note-input";

export const getAllNotes = async (search?:string) => {
  const path = search ? `/tasks?title=${search}` : '/tasks'
  const response = await api.get<Note[]>(path);
  return response.data;
};

export const createNote = async ({ title, text, isFavorite }: CreateNoteInput) => {
  const response = await api.post("/tasks", { title, text, isFavorite, color: "#FFFFFF" });
  return response.data;
};

export const updateNote = async ({ noteId, title, text, isFavorite, color }: UpdateNoteInput) => {
  const response = await api.patch(`tasks/${noteId}`, { title, text, isFavorite, color });
  return response.data;
};

export const deleteNote = async (noteId: string) => {
  const response = await api.delete(`tasks/${noteId}`);
  return response.data;
};
