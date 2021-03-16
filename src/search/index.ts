import { useContext } from "react";
import { SearchContext } from "./context";


export function useSearch() {
  const index = useContext(SearchContext);
  return index.search;
}

export * from "./context";
