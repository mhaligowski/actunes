import clsx from "clsx";
import React, { ChangeEvent, useState } from "react";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/Input";
import { useSearch } from "../../search";
import { SearchResultsList, SearchResult } from "./SearchResultsList";

export function SearchSection() {
  const [query, setQuery] = useState("");
  const searchClient = useSearch();

  const [searchResult, setSearchResult] = useState<SearchResult>();

  return (
    <section
      className={clsx({
        search: true,
        "Mobile-hidden": process.env.NODE_ENV === "production",
        "Desktop-hidden": process.env.NODE_ENV === "production",
      })}
    >
      <TextInput
        size={60}
        name="q"
        placeholder="what tune are you looking for?"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <Button
        onClick={() =>
          // @ts-ignore I'm coercing the result type in here.
          searchClient(query).then(setSearchResult).catch(console.error)
        }
      >
        <i className="fas fa-search"></i>&nbsp;Search
      </Button>

      <SearchResultsList result={searchResult as SearchResult} />
    </section>
  );
}
