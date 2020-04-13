import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Kauai from "../images/Kauai.jpeg";
import oahu from "../images/oahu.jpg";
import bigisland from "../images/bigisland.jpeg";
import maui from "../images/maui.jpeg";
import molokai from "../images/molokai.jpg";
import lanai from "../images/lanai.jpg";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ally",
      wife: "Alexis",
      son: "Watson",
    };
  }

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
        <Carousel>
          <Carousel.Item>
            <img src={Kauai} alt="Kauai" height="300" width="400" />
            <Carousel.Caption>
              <a href="https://www.gohawaii.com/islands/kauai">Kauai</a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={oahu} alt="Oahu" height="300" width="400" />
            <Carousel.Caption>
              <a href="https://www.gohawaii.com/islands/oahu">Oahu</a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={bigisland} alt="Hawaii" height="300" width="400" />
            <Carousel.Caption>
              <a href="https://www.gohawaii.com/islands/hawaii-big-island">
                Island of Hawaii
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={maui} alt="maui" height="300" width="400" />
            <Carousel.Caption>
              <a href="https://www.gohawaii.com/islands/maui">Maui</a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={molokai} alt="Molokai" height="300" width="400" />
            <Carousel.Caption>
              <a href="https://www.gohawaii.com/islands/molokai">Molokai</a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={lanai} alt="Lanai" height="300" width="400" />
            <Carousel.Caption>
              <a href="https://www.gohawaii.com/islands/lanai">Lanai</a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default MainPage;
