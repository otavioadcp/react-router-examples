import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Styles.css";

function FourthExample() {
  const history = useHistory();
  const [props] = useState(history.location.state);

  return (
    <div className="Page">
      <p> Fourth Example: Pass props through Link component </p>
      {props &&
        props.fourthExampleData.map((item) => {
          return (
            <div key={item.title} style={{ marginTop: "20px" }}>
              <h3>{item.title}</h3>
              <span>{item.description}</span>
            </div>
          );
        })}
    </div>
  );
}

export default FourthExample;
