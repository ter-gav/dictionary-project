import React from "react";
import Synonym from "./Synonym";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <ul>
                <li>
                  <div className="definition">{definition.definition}</div>
                  <div className="example">"{definition.example}"</div>
                  <Synonym synonym={definition.synonyms} />
                </li>
              </ul>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <ul>
                <li>
                  <div className="definition">{definition.definition}</div>
                  <Synonym synonym={definition.synonyms} />
                </li>
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
}
