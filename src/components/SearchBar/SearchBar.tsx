import useSearchFilter from "../../hooks/useSearchFilter";
import { SearchIcon } from "../SvgIcons";

export default function SearchBar() {
  const { searchValue, setSearchValue } = useSearchFilter();

  return (
    <div className="relative w-1/2 lg:w-[530px]">
      <input
        type="text"
        className="bg-[#fff] shadow-primary border border-[#D9D9D9] rounded-[3px] outline-1 outline-[#9A9A9A] text-xs p-2 w-full placeholder:text-[#9A9A9A]"
        placeholder="Pesquisar notas"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <SearchIcon />
    </div>
  );
}
