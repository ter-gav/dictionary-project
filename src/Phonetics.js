import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics.audio) {
    return (
      <div className="Phonetics">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          <i class="fas fa-volume-up"></i>
        </a>
        <div className="text">|{props.phonetics.text}|</div>
      </div>
    );
  } else {
    return (
      <div className="Phonetics">
        <div className="text">|{props.phonetics.text}|</div>
      </div>
    );
  }
}
