import { useState } from "react";
import Post from "./Post";
import "./App.css";

function App() {
  return (
    <>
      <h1>react core concepts recape</h1>
      <ol>
        <li>Components</li>
        <li>Jsx</li>
        <li>Props</li>
        <li>event handler</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <hr />
      <Post></Post>
    </>
  );
}

export default App;
