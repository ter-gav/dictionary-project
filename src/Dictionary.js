import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`hello ${keyword}`);
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
