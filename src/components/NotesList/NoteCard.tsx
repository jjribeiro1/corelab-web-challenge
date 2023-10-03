import { HTMLAttributes, useState } from "react";
import { EditIcon, FavoriteIcon, ColorPickerIcon, CloseIcon } from "../SvgIcons";
import { Alert } from "../Alert";
import { Popover } from "../Popover";
import ColorPicker from "./ColorPicker";
import useDeleteNoteMutation from "../../mutations/delete-note";
import useUpdateNoteMutation from "../../mutations/update-note";
import { Note } from "../../Interfaces/Note";

type Props = {
  note: Note;
} & HTMLAttributes<HTMLDivElement>;

export default function NoteCard({ note, ...props }: Props) {
  const updateNoteMutation = useUpdateNoteMutation();
  const deleteNoteMutation = useDeleteNoteMutation();

  const [openColorPickerPopover, setOpenColorPickerPopover] = useState(false);
  const [openUpdateNoteAlert, setOpenUpdateNoteAlert] = useState(false);
  const [openDeleteNoteAlert, setOpenDeleteNoteAlert] = useState(false);

  const [editMode, setEditMode] = useState(false);

  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const [color, setColor] = useState(note.color);
  const [isFavorite, setIsFavorite] = useState(note.isFavorite);

  const noteHasBeenChanged =
    note.title !== title ||
    note.text !== text ||
    note.color !== color ||
    note.isFavorite !== isFavorite;

  const handleEditIconClick = () => {
    setEditMode(!editMode);
    if (noteHasBeenChanged) {
      setOpenUpdateNoteAlert(true);
    }
  };

  const cancelUpdate = () => {
    setTitle(note.title);
    setText(note.text);
    setColor(note.color);
    setIsFavorite(note.isFavorite);
    setEditMode(true)
  };

  const handleUpdateNote = () => {
    updateNoteMutation.mutate({
      noteId: note.id,
      title,
      text,
      isFavorite,
      color,
    });
  };

  const handleDeleteNote = () => {
    deleteNoteMutation.mutate({ noteId: note.id });
  };

  return (
    <>
      <div
        {...props}
        className={
          "flex flex-col w-80 sm:w-[390px] h-[437px] shadow-primary rounded-3xl sm:rounded-[3px]"
        }
      >
        <div className="relative">
          <input
            type="text"
            className={`bg-[${color}] disabled:bg-[${color}] rounded-t-3xl sm:rounded-t-[3px] py-3 px-5 outline-1 outline-[#d1d1d1] 
            border-b border-b-[#D9D9D9] w-full 
          `}
            disabled={editMode ? false : true}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <FavoriteIcon
            onClick={() => (editMode ? setIsFavorite(!isFavorite) : null)}
            isFavorite={isFavorite}
          />
        </div>

        <textarea
          className={`bg-[${color}] disabled:bg-[${color}] block px-5 py-3 outline-1 outline-[#d1d1d1] text-[#4F4F4D] w-full h-full resize-none`}
          disabled={editMode ? false : true}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <div
          className={`bg-[${color}] flex items-center justify-between px-5 py-3 rounded-b-3xl sm:rounded-b-[3px] w-full`}
        >
          <div className="flex items-center gap-4">
            <EditIcon
              className={`${
                editMode ? "bg-[#FFE3B3]" : "bg-inherit"
              } rounded-full p-0.5 cursor-pointer `}
              onClick={handleEditIconClick}
            />
            <Popover
              open={openColorPickerPopover && editMode}
              onOpenChange={setOpenColorPickerPopover}
              iconTrigger={<ColorPickerIcon className="cursor-pointer" />}
              editMode={editMode}
            >
              <ColorPicker setColor={setColor} />
            </Popover>
          </div>

          <Alert
            open={openUpdateNoteAlert}
            onOpenChange={setOpenUpdateNoteAlert}
            title="Deseja salvar suas alterações?"
            message="Caso não aceite, todas as suas alterações serão perdidas"
            onCancelMessage="Cancelar"
            onCancel={cancelUpdate}
            onActionMessage="Confirmar"
            onAction={handleUpdateNote}
          />

          <Alert
            open={openDeleteNoteAlert}
            onOpenChange={setOpenDeleteNoteAlert}
            iconTrigger={<CloseIcon className="cursor-pointer" />}
            title="Tem certeza que deseja excluir sua nota?"
            message="Sua nota será excluída permanentemente e não poderá ser recuperada"
            onCancelMessage="Voltar"
            onActionMessage="Sim, excluir nota"
            onAction={handleDeleteNote}
          />
        </div>
      </div>
    </>
  );
}
