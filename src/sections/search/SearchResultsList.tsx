import "./SearchResultsList.scss";

type Tune = {
  title: string;
  objectID: string;
};

type SearchResultRowProps = {
  tune: Tune;
};

const SearchResultRow = ({ tune }: SearchResultRowProps) => (
  <a href={`/?play=${tune.objectID}`}>{tune.title}</a>
);

export type SearchResult = {
  hits: Tune[];
};

type SearchResultsListProps = {
  result?: SearchResult;
};

export function SearchResultsList({ result }: SearchResultsListProps) {
  if (!result) return <div />;
  return (
    <div className="SearchResultsList">
      {result.hits.map((tune, idx) => (
        <SearchResultRow tune={tune} key={idx} />
      ))}
    </div>
  );
}
