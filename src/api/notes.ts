import { api } from "./instance";
import { Note } from "../Interfaces/Note";
import { CreateNoteInput } from "../Interfaces/create-note-input";

export const getAllNotes = async () => {
  const response = await api.get<Note[]>("/tasks");
  return response.data;
};

export const createNote = async ({ title, text, isFavorite }: CreateNoteInput) => {
  const response = await api.post("/tasks", { title, text, isFavorite, color: "#F0F2F5" });
  return response.data;
};
