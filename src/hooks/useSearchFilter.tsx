import { useContext } from "react";
import { SearchFilterContext } from "../context/search-filter";

export default function useSearchFilter() {
  return useContext(SearchFilterContext);
}
