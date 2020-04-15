import React from "react";
import family from "../../images/family.jpg";
import Form from "../Form";
import Footer from "../layout/Footer";

function About() {
  return (
    <div>
      <h1 style={about}>About</h1>

      <h4 style={about}>
        Thanks for helping us with our Hawaii trip planning!
      </h4>
      <div style={picture}>
        <img src={family} alt="Family" height="auto" width="70%" />
      </div>
      <h3 style={about}>With Love,</h3>
      <h3 style={about}>Alexis, Ally, and Watson</h3>
      <p style={para}>
        This project was made by{" "}
        <a href="https://github.com/allybrannon">Ally Brannon</a>.
      </p>
      <Form />
      <Footer />
    </div>
  );
}
const about = {
  textAlign: "center",
  fontFamily: "Raleway, sans-serif",
};

const para = {
  textAlign: "center",
  fontSize: "20px",
  fontFamily: "Raleway, sans-serif",
};

const picture = {
  textAlign: "center",
};
export default About;
