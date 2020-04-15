import React, { Component } from "react";
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
        <h1 style={header1}>We want you to help us plan our dream vacation.</h1>
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
        <h2 style={header2}>The beautiful islands of Hawaii</h2>
        <p>
          <img src={Kauai} alt="Kauai" height="200" width="300" />
          <a href="https://www.gohawaii.com/islands/kauai">Kauai</a>
        </p>
        <br />
        <p>
          <img src={oahu} alt="Oahu" height="200" width="300" />
          <a href="https://www.gohawaii.com/islands/oahu">Oahu</a>
        </p>
        <br />
        <p>
          <img src={bigisland} alt="Hawaii" height="200" width="300" />
          <a href="https://www.gohawaii.com/islands/hawaii-big-island">
            Island of Hawaii
          </a>
        </p>
        <br />
        <p>
          <img src={maui} alt="maui" height="200" width="300" />
          <a href="https://www.gohawaii.com/islands/maui">Maui</a>
        </p>
        <br />
        <p>
          <img src={molokai} alt="Molokai" height="200" width="300" />
          <a href="https://www.gohawaii.com/islands/molokai">Molokai</a>
        </p>
        <br />
        <img src={lanai} alt="Lanai" height="200" width="300" />
        <a href="https://www.gohawaii.com/islands/lanai">Lanai</a>
        <br />
      </div>
    );
  }
}

const header1 = {
  fontFamily: "Quicksand, sans-serif",
  textAlign: "center",
};
const header2 = {
  fontSize: "24px",
  textAlign: "center",
};

export default MainPage;
