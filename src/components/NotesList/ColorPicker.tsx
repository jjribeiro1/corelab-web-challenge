import { HTMLAttributes } from "react";
type Props = {
  setColor: (color: string) => void;
} & HTMLAttributes<HTMLDivElement>;

export default function ColorPicker({ setColor, ...props }: Props) {
  const colors = [
    "#BAE2FF",
    "#B9FFDD",
    "#FFE8AC",
    "#FFCAB9",
    "#F99494",
    "#9DD6FF",
    "#ECA1FF",
    "#DAFF8B",
    "#FFA285",
    "#CDCDCD",
    "#979797",
    "#A99A7C",
  ];

  return (
    <div {...props} className="grid grid-cols-6 gap-2.5">
      {colors.map((color) => (
        <span
          key={color}
          className={`bg-[${color}] w-9 h-9 rounded-full cursor-pointer`}
          onClick={() => setColor(color)}
        ></span>
      ))}
    </div>
  );
}
