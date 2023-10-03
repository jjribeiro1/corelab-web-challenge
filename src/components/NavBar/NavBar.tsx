import { Logo, CloseIcon } from "../SvgIcons";
import { SearchBar } from "../SearchBar";

export default function NavBar() {
  return (
    <nav className="bg-[#FFFFFF] flex items-center sm:justify-between p-4 lg:px-8">

      <div className="flex items-center gap-5 lg:gap-7 w-full">
        <div className="flex items-center gap-3 lg:gap-4">
          <Logo />
          <h1 className="text-[#455A64] text-xs sm:text-sm">CoreNotes</h1>
        </div>
        <SearchBar />
      </div>

      <CloseIcon />
    </nav>
  );
}
