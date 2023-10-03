import { Dispatch, SetStateAction, createContext, useState } from "react";

type ContextProps = {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>
}

export const SearchFilterContext = createContext({} as ContextProps);

export function SearchFilterContextProvider({children }: { children: React.ReactNode}) {
    const [searchValue, setSearchValue ] = useState("");

    return (
        <SearchFilterContext.Provider value={{ searchValue, setSearchValue}}>
            {children}
        </SearchFilterContext.Provider>
    )
}