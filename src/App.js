import React, { Component } from "react";
import "./App.css";
import router from "./router";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>{router}</Router>
      </div>
    );
  }
}

export default App;
