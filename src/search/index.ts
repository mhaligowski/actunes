import { useContext } from "react";
import { SearchContext } from "./context";

export function useSearch() {
  const index = useContext(SearchContext);
  return (query: string) => index.search(query);
}

export * from "./context";
