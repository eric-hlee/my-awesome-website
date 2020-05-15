import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./App.scss";
import "./assets/fontello/css/fontello.css";

export default function App() {
  return (
    <div className="content">
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
