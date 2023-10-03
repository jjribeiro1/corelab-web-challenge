import { useEffect, useState } from "react";

export default function useDebounce<TData>(value: TData, delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
      const id = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(id);
      };
    },
    [value, delay] 
  );

  return debouncedValue;
}
