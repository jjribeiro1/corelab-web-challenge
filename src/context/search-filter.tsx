import { Dispatch, SetStateAction, createContext, useState } from "react";

type ContextProps = {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
    resetSearchValue: () => void;
}

export const SearchFilterContext = createContext({} as ContextProps);

export function SearchFilterContextProvider({children }: { children: React.ReactNode}) {
    const [searchValue, setSearchValue ] = useState("");

    const resetSearchValue = () => setSearchValue("")
    

    return (
        <SearchFilterContext.Provider value={{ searchValue, setSearchValue, resetSearchValue}}>
            {children}
        </SearchFilterContext.Provider>
    )
}