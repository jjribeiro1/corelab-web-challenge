import { HTMLAttributes } from "react";
import FavoriteIcon from "../SvgIcons/FavoriteIcon";
import EditIcon from "../SvgIcons/EditIcon";
import ColorPicker from "../SvgIcons/ColorPicker";
import CloseIcon from "../SvgIcons/CloseIcon";
import { Note } from "../../Interfaces/Note";

type Props = {
  note: Note;
} & HTMLAttributes<HTMLDivElement>;

export default function NoteCard({ note, ...props }: Props) {

  return (
    <>
      <div
        {...props}
        className="flex flex-col w-80 sm:w-[390px] h-[437px] shadow-primary rounded-3xl sm:rounded-[3px]"
      >
        <div className="relative">
          <input
            type="text"
            className="rounded-t-3xl sm:rounded-t-[3px] py-3 px-5 outline-1 outline-[#d1d1d1] border-b border-b-[#D9D9D9] w-full 
            disabled:bg-[#fff]"
            disabled
            value={note?.title}
          />
          <FavoriteIcon isFavorite={note?.isFavorite} />
        </div>

        <textarea
          className="block px-5 py-3 outline-1 outline-[#d1d1d1] w-full h-full resize-none disabled:bg-[#fff]"
          disabled
          defaultValue={note?.text}
        />

        <div className="bg-[#fff] flex items-center justify-between px-5 py-3 rounded-b-3xl sm:rounded-b-[3px] w-full">
          <div className="flex items-center gap-3">
            <EditIcon />
            <ColorPicker />
          </div>

          <CloseIcon />
        </div>
      </div>
    </>
  );
}
