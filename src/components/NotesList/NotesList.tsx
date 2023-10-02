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
    <section className="flex flex-col gap-10 lg:w-full lg:px-20">
      <article className="flex flex-col gap-2">
        <h2 className="lg:pl-6 text-center lg:text-start text-[#464646]">
          Favoritas
        </h2>
        <ul className="flex flex-wrap items-center justify-center lg:justify-normal gap-8 w-full">
          {notes
            .filter((note) => Boolean(note.isFavorite))
            .map((note) => (
              <li key={note.id}>
                <NoteCard note={note} />
              </li>
            ))}
        </ul>
      </article>

      <article className="flex flex-col gap-2">
        <h2 className="lg:pl-6 text-center lg:text-start text-[#464646]">
          Outras
        </h2>
        <ul className="flex flex-wrap items-center justify-center lg:justify-normal gap-8 w-full">
          {notes
            .filter((note) => Boolean(!note.isFavorite))
            .map((note) => (
              <li key={note.id}>
                <NoteCard note={note} />
              </li>
            ))}
        </ul>
      </article>
    </section>
  );
}
