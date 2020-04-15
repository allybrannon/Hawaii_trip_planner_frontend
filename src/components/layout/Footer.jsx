import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={footerStyle}>
      <h1 style={h1Style}>Please leave us a comment</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |
      <Link style={linkStyle} to="/about">
        About
      </Link>{" "}
      |
      <Link style={linkStyle} to="/comments">
        Trip Comments
      </Link>
    </footer>
  );
}

const h1Style = {
  fontFamily: "Satisfy, cursive",
  fontSize: "30px",
};
const footerStyle = {
  background: "#458eed",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default Footer;
