import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import MainPage from "./components/MainPage";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/pages/About";
import Comments from "../src/components/Comments";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/comments">
          <Comments />
        </Route>
        <Route exact path="/">
          <MainPage />
          <Form />
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
