import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import MainPage from "./components/MainPage";
import AddTodo from "./components/AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/pages/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
