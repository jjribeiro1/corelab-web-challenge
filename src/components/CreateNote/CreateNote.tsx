import { useState } from "react";
import FavoriteIcon from "../SvgIcons/FavoriteIcon";
import SendIcon from "../SvgIcons/SendIcon";
import { createNote } from "../../api/notes";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCreateNote = async () => {
    try {
      await createNote({
        title,
        text,
        isFavorite,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setTitle("");
      setText("");
      setIsFavorite(false);
    }
  };

  return (
    <section>
      <div className="flex flex-col w-80 sm:w-[530px] divide-y-[1px] divide-[#D9D9D9] shadow-primary rounded-3xl sm:rounded-[3px]">
        <div className="relative">
          <input
            type="text"
            className="rounded-t-3xl sm:rounded-t-[3px] py-3 px-5 outline-1 outline-[#d1d1d1] w-full placeholder:text-[#333] placeholder:text-sm placeholder:font-bold"
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <FavoriteIcon
            isFavorite={isFavorite}
            onClick={() => setIsFavorite(!isFavorite)}
          />
        </div>

        <div className="relative">
          <textarea
            className="block rounded-b-3xl sm:rounded-b-[3px] py-3 pl-5 outline-1 outline-[#d1d1d1] w-full placeholder:text-[#50656E] placeholder:text-sm"
            placeholder="Criar nota..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <SendIcon onClick={handleCreateNote} />
        </div>
      </div>
    </section>
  );
}
