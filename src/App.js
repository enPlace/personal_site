import Nav from "./Components/Nav";
import Home from "./Components/Home";
import MyWork from "./Components/MyWork";
import AboutMe from "./Components/AboutMe";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/my-work">
            <MyWork></MyWork>
          </Route>
          <Route path="/about">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
