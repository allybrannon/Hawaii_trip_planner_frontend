import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import MainPage from "./components/MainPage";
import Form from "./components/Form";
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
            <Form />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
