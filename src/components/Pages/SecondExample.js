import React from "react";
import "./Styles.css";
import { Route, useHistory, Switch } from "react-router-dom";
import { Button } from "antd";
const posts = [
  {
    id: 1,
    title: "React Docs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam orci, imperdiet non posuere sed, scelerisque suscipit velit. Vivamus porttitor nisl sem, ac dignissim lacus pulvinar in.",
    link: "https://pt-br.reactjs.org/",
  },
];

export default function HomePage() {
  return (
    <div className="Page">
      <p> Second Example </p>
      <p> Routes Chaining </p>

      <ul>
        {/* {posts.map((post) => {
          return <span>{post.title}</span>;
        })} */}
      </ul>
    </div>
  );
}
