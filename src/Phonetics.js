import React from "react";

export default function Phonetics(props) {
  if (props.phonetics.audio) {
    return (
      <div className="Phonetics">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>{" "}
        <em>|{props.phonetics.text}|</em>
      </div>
    );
  } else {
    return (
      <div className="Phonetics">
        <em>{props.phonetics.text}</em>
      </div>
    );
  }
}
