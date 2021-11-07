import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div className="Synonym">
        {props.synonym.map(function (synonym, index) {
          return (
            <span className="synonym" key={index}>
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
