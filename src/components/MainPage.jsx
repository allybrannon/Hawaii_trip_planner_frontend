import React from "react";
import Kauai from "../images/Kauai.jpeg";
import oahu from "../images/oahu.jpg";
import bigisland from "../images/bigisland.jpeg";
import maui from "../images/maui.jpeg";
import molokai from "../images/molokai.jpg";
import lanai from "../images/lanai.jpg";

function MainPage() {
  return (
    <div>
      <h1 style={header1}>We want you to help us plan our dream vacation.</h1>
      <div style={firstP}>
        <p>
          In 2019, we decided we wanted to take a trip to Hawaii. So, we began
          planning that trip. We had originally set to travel in May of 2020,
          but for now, we will have to wait...
        </p>
      </div>
      <div style={secondP}>
        <p>
          So that's where you come in- <b>help us plan our trip</b> by adding
          comments below and letting us know what you think we should do while
          we are there!
        </p>
      </div>
      <h2 style={header2}>The Beautiful Hawaiian Islands</h2>
      <div style={islands}>
        <div style={islandPic}>
          <img src={Kauai} alt="Kauai" height="200" width="300" />
          <div style={listOne}>
            <a href="https://www.gohawaii.com/islands/kauai" target="_blank">
              Things to do in Kauai:
            </a>
          </div>
          <ul style={list}>
            <li>Beaches, of course!</li>
            <li>Zipline Tours</li>
            <li>Mountain Tubing</li>
            <li>Kayaking</li>
          </ul>
        </div>

        <br />
        <div style={islandPic}>
          <img src={oahu} alt="Oahu" height="200" width="300" />
          <div style={listOne}>
            <a href="https://www.gohawaii.com/islands/oahu" target="_blank">
              Things to do in Oahu:
            </a>
          </div>
          <ul style={list}>
            <li>City visit: Honolulu</li>
            <li>Hiking volcanoes</li>
            <li>Luau</li>
            <li>Surfing</li>
            <li>Pearl Harbor Tour</li>
          </ul>
        </div>
        <br />
        <div style={islandPic}>
          <img src={bigisland} alt="Hawaii" height="200" width="300" />
          <div style={listOne}>
            <a
              href="https://www.gohawaii.com/islands/hawaii-big-island"
              target="_blank"
            >
              Things to do on the Island of Hawaii
            </a>
          </div>
          <ul style={list}>
            <li>Waterfall Tour</li>
            <li>Snorkeling and Kayaking</li>
            <li>Visit a coffee farm</li>
            <li>Twilight Volcano & Stargazing tour</li>
            <li>Horseback riding</li>
          </ul>
        </div>
        <br />
        <div style={islandPic}>
          <img src={maui} alt="maui" height="200" width="300" />
          <div style={listOne}>
            <a href="https://www.gohawaii.com/islands/maui" target="_blank">
              Things to do in Maui
            </a>
          </div>
          <ul style={list}>
            <li>Haleakala National Park</li>
            <li>Stand Up Paddle Boarding</li>
            <li>Rafting</li>
            <li>Bike Maui Guided Tour</li>
          </ul>
        </div>
        <br />
        <div style={islandPic}>
          <img src={molokai} alt="Molokai" height="200" width="300" />

          <div style={listOne}>
            <a href="https://www.gohawaii.com/islands/molokai" target="_blank">
              Things to do in Molokai
            </a>
          </div>
          <ul style={list}>
            <li>Beaches, of course!</li>
            <li>Kalaupapa National Historical Park</li>
            <li>Kapuaiwa Coconut Grove</li>
          </ul>
        </div>
        <br />
        <div style={islandPic}>
          <img src={lanai} alt="Lanai" height="200" width="300" />
          <div style={listOne}>
            <a href="https://www.gohawaii.com/islands/lanai" target="_blank">
              Things to do in Lanai
            </a>
          </div>
          <ul style={list}>
            <li>Hiking</li>
            <li>Off-Road Adventures</li>
            <li>Mountain Tubing</li>
            <li>Keahiakawelo Park </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const firstP = {
  margin: "60px",
  textAlign: "center",
  fontFamily: "Raleway, sans-serif",
};

const header1 = {
  margin: "20px",
  fontFamily: "Raleway, sans-serif",
  textAlign: "center",
  fontSize: "30px",
};

const header2 = {
  fontFamily: "Raleway, sans-serif",
  fontSize: "26px",
  textAlign: "center",
  textDecoration: "underline",
};

const islands = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const islandPic = {
  margin: "30px",
};

const secondP = {
  margin: "60px",
  textAlign: "center",
  fontFamily: "Raleway, sans-serif",
};

const list = {
  fontFamily: "Raleway, sans-serif",
  textAlign: "left",
};

const listOne = {
  textDecoration: "underline",
  textAlign: "center",
};

export default MainPage;
