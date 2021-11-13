import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsApi(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Documentation https://dictionaryapi.dev/ //

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = `563492ad6f91700001000001f1f58c5cd0584ebebb2a6bcd2668a1a1`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsApi);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="What word do you want to look up?"
            onChange={handleKeywordChange}
          ></input>
        </form>
        <div className="suggestions">i.e. sunset, plants, wine, storm...</div>
      </section>
      <Results results={result} />
      <Photos photos={photos} />
    </div>
  );
}
