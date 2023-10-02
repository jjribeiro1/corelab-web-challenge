import { useState, useEffect } from "react";
import { Note } from "../../Interfaces/Note";
import { getAllNotes } from "../../api/notes";
import NoteCard from "./NoteCard";

export default function NotesList() {
  const [notes, setNotes] = useState<Note[]>([]);
  const getData = async () => {
    const data = await getAllNotes();
    setNotes(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="lg:w-full lg:px-24">

      <div className="space-y-2">
        <h2 className="pl-6">Favoritas</h2>
        <ul className="flex flex-wrap items-center gap-8">
          {notes
            .filter((note) => Boolean(note.isFavorite))
            .map((note) => (
              <li key={note.id}>
                <NoteCard note={note} />
              </li>
            ))}
        </ul>
      </div>
      
    </section>
  );
}
