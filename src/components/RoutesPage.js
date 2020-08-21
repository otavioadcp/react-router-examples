import React from "react";
import "./RoutesPage.css";
import { Route, useHistory, Switch } from "react-router-dom";
import { Button } from "antd";
import {
  NotFound,
  HomePage,
  SecondExample,
  FirstExample,
  ThirdExample,
} from "./Pages";

export default function RoutesPage() {
  let history = useHistory();

  const handleClick = (url) => {
    history.push(url);
  };
  return (
    <>
      <div>
        <Button className="route-button" onClick={() => handleClick("/")}>
          Home
        </Button>
      </div>
      <Button
        className="route-button"
        onClick={() => handleClick("/firstExample")}
      >
        Route 1
      </Button>
      <Button
        className="route-button"
        onClick={() => handleClick("/secondExample")}
      >
        Route 2
      </Button>
      <Button
        className="route-button"
        onClick={() => handleClick("/thirdExample")}
      >
        Route 3
      </Button>

      <Button
        className="route-button"
        onClick={() => handleClick("/sdadadasdas")}
      >
        Route
      </Button>

      <div className="routesPage">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/firstExample">
            <FirstExample />
          </Route>
          <Route path="/secondExample">
            <SecondExample />
          </Route>

          <Route path="/thirdExample">
            <ThirdExample />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}
