import { CreateNoteInput } from "./create-note-input";

export interface UpdateNoteInput extends Partial<CreateNoteInput> {
  noteId: string;
  color?: string;
}
