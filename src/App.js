import React from "react";
import "./App.css";
import "normalize.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesPage from "./components/RoutesPage";

function App() {
  return (
    <div className="App">
      <h1 className="pageTitle"> Examples:</h1>
      <h2 className="pageSubtitle">react-router-dom</h2>
      <Router>
        <RoutesPage />
      </Router>
    </div>
  );
}

export default App;
