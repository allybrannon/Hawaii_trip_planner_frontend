import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import MainPage from "./components/MainPage";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/pages/About";
import Feedback from "../src/components/pages/Feedback";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/comments">
          <Feedback />
        </Route>
        <Route exact path="/">
          <MainPage />
          <Form />
        </Route>
      </div>
    </Router>
  );
}

export default App;
