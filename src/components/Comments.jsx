import React, { Component } from "react";
import Form from "../components/Form";
import Footer from "../components/layout/Footer";

class Comments extends Component {
  state = {
    comments: [],
  };

  async getInfo() {
    const response = await fetch("http://localhost:3000/all");
    const data = await response.json();
    console.log("returned: ", data);
    return data;
  }

  async componentDidMount() {
    const comments = await this.getInfo();
    this.setState({
      comments: comments,
    });
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        <ul style={list}>
          {comments.length > 0 ? (
            comments.map((comments) => (
              <li key={comments.id}>
                <p style={user}>{comments.user_name} said: </p>
                <p>"{comments.comment}"</p>
              </li>
            ))
          ) : (
            <li>No Data</li>
          )}
        </ul>
        <div style={form}>
          <Form />
          <Footer />
        </div>
      </div>
    );
  }
}
const list = {
  listStyle: "none",
  margin: "40px",
};

const user = {
  fontWeight: "bold",
};

const form = {
  positon: "absolute",
};

export default Comments;
