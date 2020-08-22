import React from "react";
import "./RoutesPage.css";
import { Route, useHistory, Switch, Link } from "react-router-dom";
import { Button } from "antd";
import {
  NotFound,
  HomePage,
  SecondExample,
  FirstExample,
  ThirdExample,
  FourthExample,
} from "./Pages";

const fourthExampleData = [
  {
    id: "firstData",
    title: "First Data Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: "secondData",
    title: "Second Data Title",
    description:
      "Second data example of description. This isn't a 'Lorem ipsum' because... just isn't. ",
  },
];

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
        Example 1
      </Button>
      <Button
        className="route-button"
        onClick={() => handleClick("/secondExample")}
      >
        Example 2
      </Button>
      <Button
        className="route-button"
        onClick={() => handleClick("/thirdExample")}
      >
        Example 3
      </Button>
      <Link
        className="customLink"
        key="fourthExample"
        to={{
          pathname: "/fourthExample",
          state: { fourthExampleData },
        }}
      >
        <Button className="route-button">Example 4</Button>
      </Link>
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

          <Route path="/fourthExample">
            <FourthExample />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}
