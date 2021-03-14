import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SearchContext } from "./search";
import algolia from "algoliasearch";

const client = algolia(
  process.env.REACT_APP_ALGOLIA_APP_ID!,
  process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY!
);
const index = client.initIndex(process.env.REACT_APP_ALGOLIA_INDEX_NAME!);

ReactDOM.render(
  <React.StrictMode>
    <SearchContext.Provider value={index}>
      <App />
    </SearchContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
