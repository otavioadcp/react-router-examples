import React from "react";
import "./Styles.css";
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";
const posts = [
  {
    id: "react",
    title: "React",
    description:
      "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render.",
    fullDescription:
      "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes" +
      "Declarative views make your code more predictable and easier to debug.",
    link: "https://pt-br.reactjs.org/",
    github: "https://github.com/facebook/react",
  },
  {
    id: "reactNative",
    title: "React Native",
    description:
      "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
    fullDescription:
      "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces." +
      "Use a little—or a lot. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch.",
    link: "https://reactnative.dev/",
    github: "https://github.com/facebook/react-native",
  },
];

function FullPost() {
  const { postId } = useParams();
  const post = posts.find((item) => item.id === postId);

  return (
    <div className={"postArea"}>
      <span className={"fullPostDescription"}>{post.fullDescription}</span>
      <ul className="links">
        <li>
          <a href={post.link}>Official page</a>
        </li>
        <li>
          <a href={post.github}>GitHub</a>
        </li>
      </ul>
    </div>
  );
}

function Post() {
  const { url, path } = useRouteMatch();
  const { postId } = useParams();
  const post = posts.find((item) => item.id === postId);

  return (
    <div className={"postArea"}>
      <span className={"postDescription"}>{post.description}</span>
      <Link className={"moreDetails"} to={`${url}/details`}>
        Leia mais...
      </Link>

      <Route path={`${path}/details`}>
        <FullPost />
      </Route>
    </div>
  );
}

export default function SecondExample() {
  const { url, path } = useRouteMatch();

  return (
    <div className="Page">
      <p> Second Example: Nested Routes </p>
      <ul>
        {posts.map((post) => {
          return (
            <Link to={`${url}/${post.id}`} key={post.id} className="nestedLink">
              {" "}
              - {post.title}
            </Link>
          );
        })}
      </ul>

      <hr />

      <div className="nestedContainer">
        <Route path={`${path}/:postId`}>
          <Post />
        </Route>
      </div>
    </div>
  );
}
