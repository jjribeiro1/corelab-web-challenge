import NoteCard from "./NoteCard";
import useFetchNotes from "../../hooks/useFetchNotes";
import useSearchFilter from "../../hooks/useSearchFilter";
import useDebounce from "../../hooks/useDebounce";

export default function NotesList() {
  const { searchValue } = useSearchFilter()
  const debouncedValue = useDebounce(searchValue)
  const { notes } = useFetchNotes(debouncedValue);
  
  return (
    <section className="flex flex-col gap-10 lg:w-full lg:px-20">
      <article className="flex flex-col gap-2">
        <h2 className="lg:pl-6 text-center lg:text-start text-[#464646]">
          Favoritas
        </h2>
        <ul className="flex flex-wrap items-center justify-center lg:justify-normal gap-8 w-full">
          {notes?.filter((note) => Boolean(note.isFavorite)).map((note) => (
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
          {notes?.filter((note) => Boolean(!note.isFavorite)).map((note) => (
              <li key={note.id}>
                <NoteCard note={note} />
              </li>
            ))}
        </ul>
      </article>
    </section>
  );
}
