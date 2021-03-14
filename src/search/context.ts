import { SearchIndex } from "algoliasearch";
import React from "react";

export const SearchContext = React.createContext<SearchIndex>(
  {} as SearchIndex
);
