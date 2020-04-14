import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Kauai from "../images/Kauai.jpeg";
import oahu from "../images/oahu.jpg";
import bigisland from "../images/bigisland.jpeg";
import maui from "../images/maui.jpeg";
import molokai from "../images/molokai.jpg";
import lanai from "../images/lanai.jpg";

class MainPage extends Component {
  state = {
    comments: [],
  };

  render() {
    return (
      <div>
        <h1>We want you to help us plan our dream vacation.</h1>
        <p>
          In 2019, we decided we wanted to take a trip to Hawaii. So, we began
          planning that trip. We had originally set to travel in May of 2020,
          but for now, we will have to wait...
        </p>
        <br />
        <p>
          So that's where you come in- help us plan our trip by adding comments
          and letting us know what you think we should do while we are there!
        </p>
        <h2>The six islands of Hawaii</h2>
        <p> insert data about islands</p>
        <p> insert planned items</p>
      </div>
    );
  }
}

export default MainPage;
