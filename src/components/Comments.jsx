import React, { Component } from "react";

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
        <ul>
          {comments.length > 0 ? (
            comments.map((comments) => (
              <li key={comments.id}>
                <br />
                {comments.user_name} said: {comments.comment} user email:{" "}
                {comments.user_email}
              </li>
            ))
          ) : (
            <li>No Data</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Comments;
