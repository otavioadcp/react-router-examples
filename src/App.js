import React from "react";
import "./App.css";
import "normalize.css";
import { BrowserRouter as Router } from "react-router-dom";
import ContainerPage from "./components/ContainerPage";

function App() {
  return (
    <div className="App">
      <h1 className="pageTitle"> Exemplos:</h1>
      <h2 className="pageSubtitle">react-router-dom</h2>

      <Router>
        <ContainerPage />
      </Router>
    </div>
  );
}

export default App;
