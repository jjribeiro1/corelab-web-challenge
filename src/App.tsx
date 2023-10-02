import "./index.css";
import { NavBar } from "./components/NavBar";
import { CreateNote } from "./components/CreateNote";
import { NotesList } from "./components/NotesList";

export default function App() {
  return (
    <>
      <div className="bg-[#F0F2F5] max-w-[1440px] min-h-screen my-0 mx-auto">
        <header>
          <NavBar />
        </header>
        <main className="flex flex-col items-center gap-16 pt-6 pb-28 w-full">
          <CreateNote />
          <NotesList />
        </main>
      </div>
    </>
  );
}
