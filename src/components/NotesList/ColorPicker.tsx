export default function ColorPicker() {
  const colors = [
    "bg-[#BAE2FF]",
    "bg-[#B9FFDD]",
    "bg-[#FFE8AC]",
    "bg-[#FFCAB9]",
    "bg-[#F99494]",
    "bg-[#9DD6FF]",
    "bg-[#ECA1FF]",
    "bg-[#DAFF8B]",
    "bg-[#FFA285]",
    "bg-[#CDCDCD]",
    "bg-[#979797]",
    "bg-[#A99A7C]",
  ];

  return (
    <div className="grid grid-cols-6 gap-2.5">
      {colors.map((color) => (
        <span
          key={color}
          className={`${color} w-9 h-9 rounded-full cursor-pointer`}
        ></span>
      ))}
    </div>
  );
}
