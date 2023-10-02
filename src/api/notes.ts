import { api } from "./instance";
import { Note } from "../Interfaces/Note";

export const getAllNotes = async () => {
  const response = await api.get<Note[]>("/tasks");
  return response.data;
};
