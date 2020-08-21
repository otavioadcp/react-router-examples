import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Button, Slider } from "antd";
import {
  Route,
  Link,
  useParams,
  useRouteMatch,
  Switch,
  withRouter,
} from "react-router-dom";
import styled from "styled-components";
import "./Styles.css";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  align-self: center;

  .thirdExampleContainer-enter {
    opacity: 0;
  }

  .thirdExampleContainer-enter.thirdExampleContainer-enter-active {
    transition: ${(props) => `opacity ${props.fadeIn}ms ease-out`};
    opacity: 1;
  }

  .thirdExampleContainer-exit {
    opacity: 1;
  }

  .thirdExampleContainer-exit.thirdExampleContainer-exit-active {
    opacity: 0.01;
    transition: ${(props) => `opacity ${props.fadeOut}ms ease-out`};
  }
`;

function Page() {
  const { pageId } = useParams();

  const color =
    pageId === "page1" ? "blue" : pageId === "page2" ? "red" : "green";
  return (
    <div className="thirdExamplePage" style={{ backgroundColor: color }}>
      <p>
        {pageId === "page1"
          ? "Page 1"
          : pageId === "page2"
          ? "Page 2"
          : "Page 3 "}
      </p>
    </div>
  );
}

function ThirdExample({ location }) {
  const { url } = useRouteMatch();
  const [fadeIn, setFadeIn] = React.useState(1000);
  const [fadeOut, setFadeOut] = React.useState(1000);

  return (
    <div className="Page">
      <p>Third</p>
      <div className="thirdExampleLink">
        <Link className="thirdExampleLink" to={`${url}/pages/page1`}>
          <Button>Page 1</Button>
        </Link>
        <Link className="thirdExampleLink" to={`${url}/pages/page2`}>
          <Button>Page 2</Button>
        </Link>
        <Link className="thirdExampleLink" to={`${url}/pages/page3`}>
          <Button>Page 3</Button>
        </Link>
      </div>
      <div style={{ width: "50%", alignSelf: "center" }}>
        <span>Fade In</span>
        <Slider
          min={0}
          className="sliderExample"
          max={2000}
          onChange={(value) => setFadeIn(value)}
          value={fadeIn}
        />
        <span>Fade Out</span>
        <Slider
          min={0}
          className="sliderExample"
          max={2000}
          onChange={(value) => setFadeOut(value)}
          value={fadeOut}
        />
      </div>
      <hr />

      <Container fadeOut={fadeOut} fadeIn={fadeIn}>
        <TransitionGroup className="transition-group">
          <CSSTransition
            classNames="thirdExampleContainer"
            key={location.key}
            timeout={{ enter: fadeIn, exit: fadeOut }}
          >
            <section className="route-section">
              <Switch location={location}>
                <Route path={`${url}/pages/:pageId`}>
                  <Page />
                </Route>
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Container>
    </div>
  );
}

export default withRouter(ThirdExample);
