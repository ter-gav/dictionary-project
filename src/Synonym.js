import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
  if (props.synonym.length) {
    return (
      <div className="Synonym">
        <div>
          <strong>Similar: </strong>
        </div>
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
