import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Documentation https://dictionaryapi.dev/ //

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          onChange={handleKeywordChange}
        ></input>
      </form>
    </div>
  );
}
