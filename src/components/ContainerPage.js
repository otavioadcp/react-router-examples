import React from "react";
import "./ContainerPage.css";
import { Route } from "react-router-dom";
import FirstExample from "./FirstExample";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

export default function ContainerPage() {
  let history = useHistory();

  const handleClick = (url) => {
    history.push(url);
  };
  return (
    <>
      <Button
        className="route-button"
        onClick={() => handleClick("/firstExample")}
      >
        Route
      </Button>
      <Button className="route-button" onClick={() => handleClick("/")}>
        Route
      </Button>
      <Button className="route-button">Route</Button>
      <Button className="route-button ">Route</Button>
      <div className="containerPage">
        <Route exact path="/firstExample">
          <FirstExample />
        </Route>
      </div>
    </>
  );
}
