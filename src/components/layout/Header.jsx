import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>Welcome to our Hawaii Trip Planner!</h1>
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
    </header>
  );
}

const h1Style = {
  fontFamily: "Satisfy, cursive",
};
const headerStyle = {
  background: "#458eed",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default Header;
